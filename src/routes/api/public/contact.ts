import * as React from 'react'
import { render } from '@react-email/render'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  org: z.string().trim().max(200).nullable().optional(),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(40).nullable().optional(),
  message: z.string().trim().min(1).max(5000),
})

const SENDER_DOMAIN = 'notify.www.adabmoves.nl'
const FROM_DOMAIN = 'notify.www.adabmoves.nl'
const SITE_NAME = 'ADAB MOVES'

function json(data: unknown, status = 200) {
  return Response.json(data, { status })
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!supabaseUrl || !supabaseServiceKey) {
          console.error('Missing contact form server configuration')
          return json({ error: 'Server configuration error' }, 500)
        }

        let payload: z.infer<typeof ContactSchema>
        try {
          payload = ContactSchema.parse(await request.json())
        } catch {
          return json({ error: 'Controleer de ingevulde gegevens.' }, 400)
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        const { data: inserted, error: insertError } = await supabase
          .from('contact_messages')
          .insert({
            name: payload.name,
            org: payload.org || null,
            email: payload.email,
            phone: payload.phone || null,
            message: payload.message,
          })
          .select('id')
          .single()

        if (insertError || !inserted) {
          console.error('Failed to store contact message', { error: insertError })
          return json({ error: 'Bericht kon niet worden opgeslagen.' }, 500)
        }

        const templateName = 'contact-notification'
        const template = TEMPLATES[templateName]
        const recipientEmail = template.to || 'adabmoves@gmail.com'
        const messageId = crypto.randomUUID()

        try {
          const { data: suppressed, error: suppressionError } = await supabase
            .from('suppressed_emails')
            .select('id')
            .eq('email', recipientEmail.toLowerCase())
            .maybeSingle()

          if (suppressionError) throw suppressionError

          if (!suppressed) {
            const element = React.createElement(template.component, payload)
            const html = await render(element)
            const text = await render(element, { plainText: true })
            const subject =
              typeof template.subject === 'function'
                ? template.subject(payload)
                : template.subject

            await supabase.from('email_send_log').insert({
              message_id: messageId,
              template_name: templateName,
              recipient_email: recipientEmail,
              status: 'pending',
            })

            const { error: enqueueError } = await supabase.rpc('enqueue_email', {
              queue_name: 'transactional_emails',
              payload: {
                message_id: messageId,
                to: recipientEmail,
                from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
                sender_domain: SENDER_DOMAIN,
                subject,
                html,
                text,
                purpose: 'transactional',
                label: templateName,
                idempotency_key: `contact-notification-${inserted.id}`,
                queued_at: new Date().toISOString(),
              },
            })

            if (enqueueError) throw enqueueError
          }
        } catch (emailError) {
          console.error('Failed to enqueue contact notification email', { error: emailError })
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: templateName,
            recipient_email: recipientEmail,
            status: 'failed',
            error_message: 'Failed to enqueue contact notification email',
          })
        }

        return json({ success: true })
      },
    },
  },
})
import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactNotificationProps {
  name?: string
  org?: string | null
  email?: string
  phone?: string | null
  message?: string
}

const SITE_NAME = 'ADAB MOVES'

function ContactNotificationEmail({
  name = 'Onbekende afzender',
  org,
  email = 'Geen e-mailadres ingevuld',
  phone,
  message = 'Geen bericht ingevuld',
}: ContactNotificationProps) {
  return (
    <Html lang="nl" dir="ltr">
      <Head />
      <Preview>Nieuw contactbericht via {SITE_NAME}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>Nieuw contactformulier</Text>
          <Heading style={heading}>Er is een nieuw bericht binnengekomen.</Heading>
          <Text style={intro}>
            Iemand heeft contact opgenomen via de website van {SITE_NAME}.
          </Text>

          <Section style={detailsBox}>
            <Detail label="Naam" value={name} />
            {org ? <Detail label="Organisatie" value={org} /> : null}
            <Detail label="E-mail" value={email} />
            {phone ? <Detail label="Telefoon" value={phone} /> : null}
          </Section>

          <Section style={messageBox}>
            <Text style={label}>Bericht</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Text style={footer}>Beantwoord dit bericht rechtstreeks via {email}.</Text>
        </Container>
      </Body>
    </Html>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <Text style={detailText}>
      <strong>{label}:</strong> {value}
    </Text>
  )
}

export const template = {
  component: ContactNotificationEmail,
  subject: (data) => `Nieuw contactbericht van ${data.name || 'websitebezoeker'}`,
  displayName: 'Contactformulier melding',
  previewData: {
    name: 'Ahmed El Amrani',
    org: 'Basisschool De Horizon',
    email: 'ahmed@example.nl',
    phone: '+31 6 12 34 56 78',
    message:
      'Wij willen graag meer weten over een sportdag en weerbaarheidsworkshop voor onze leerlingen.',
  },
  to: 'adabmoves@gmail.com',
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
}

const container = {
  width: '100%',
  maxWidth: '640px',
  margin: '0 auto',
  padding: '32px 24px',
}

const eyebrow = {
  color: '#C95F3E',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  margin: '0 0 12px',
}

const heading = {
  color: '#1F2240',
  fontSize: '28px',
  lineHeight: '1.2',
  margin: '0 0 16px',
}

const intro = {
  color: '#4B5563',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0 0 24px',
}

const detailsBox = {
  backgroundColor: '#FAF8F2',
  border: '1px solid #EEE2D4',
  borderRadius: '16px',
  padding: '18px 20px',
  margin: '0 0 20px',
}

const detailText = {
  color: '#1F2240',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 8px',
}

const messageBox = {
  border: '1px solid #EEE2D4',
  borderRadius: '16px',
  padding: '18px 20px',
  margin: '0 0 24px',
}

const label = {
  color: '#C95F3E',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
}

const messageText = {
  color: '#1F2240',
  fontSize: '15px',
  lineHeight: '1.7',
  whiteSpace: 'pre-wrap' as const,
  margin: 0,
}

const footer = {
  color: '#6B7280',
  fontSize: '13px',
  lineHeight: '1.6',
  margin: 0,
}
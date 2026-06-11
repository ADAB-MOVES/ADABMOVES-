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

interface SchoolOutreachProps {
  schoolName?: string
  contactName?: string
  senderName?: string
  senderRole?: string
  senderPhone?: string
}

function SchoolOutreachEmail({
  schoolName = '[Schoolnaam]',
  contactName,
  senderName = 'Anass Bakkali',
  senderRole = 'Oprichter ADAB MOVES',
  senderPhone = '06-XXXXXXXX',
}: SchoolOutreachProps) {
  const greeting = contactName
    ? `Beste ${contactName},`
    : `Beste schoolteam van ${schoolName},`

  return (
    <Html lang="nl" dir="ltr">
      <Head />
      <Preview>Sport mét karakter voor {schoolName} — vrijblijvend kennismaken?</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={greetingStyle}>{greeting}</Text>

          <Text style={paragraph}>
            Mijn naam is {senderName}, oprichter van ADAB MOVES. Wij verzorgen
            sport- en spelactiviteiten op basis- en middelbare scholen in
            Amsterdam, Haarlem, Zaandam, Almere, Amstelveen en Hoofddorp — met
            één duidelijke focus: <strong>karaktervorming via sport</strong>.
          </Text>

          <Text style={paragraph}>
            Wat scholen waarmee we werken terugzien:
          </Text>

          <Section style={listBox}>
            <Text style={listItem}>• Merkbaar rustigere klassen na elke sessie</Text>
            <Text style={listItem}>• Meer respect en betere omgangsvormen op het plein</Text>
            <Text style={listItem}>• Sterker zelfvertrouwen en doorzettingsvermogen bij leerlingen</Text>
            <Text style={listItem}>• Vaste trainer, vaste lijn — geen wisselende gezichten</Text>
          </Section>

          <Text style={paragraph}>
            Wij draaien volledig zelfstandig: tussen de middag, na schooltijd,
            workshops karakter &amp; gedrag, of een volledig verzorgde sportdag.
            Materiaal, trainers en draaiboek regelen wij.
          </Text>

          <Text style={paragraph}>
            Heeft u 15 minuten voor een vrijblijvend gesprek? Dan laat ik zien
            hoe een traject er bij {schoolName} uit zou kunnen zien — en bieden
            we een <strong>gratis proefactiviteit</strong> op locatie aan,
            zonder verplichtingen.
          </Text>

          <Text style={paragraph}>
            Bereikbaar via {senderPhone} of een reactie op deze mail.
          </Text>

          <Text style={signOff}>Hartelijke groet,</Text>
          <Text style={signature}>
            {senderName}
            <br />
            {senderRole}
            <br />
            <a href="https://www.adabmoves.nl" style={link}>www.adabmoves.nl</a>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: SchoolOutreachEmail,
  subject: (data) =>
    `Sport mét karakter voor ${data?.schoolName || '[Schoolnaam]'} — vrijblijvend kennismaken?`,
  displayName: 'Scholen outreach',
  previewData: {
    schoolName: 'Basisschool De Horizon',
    contactName: 'mevrouw De Vries',
    senderName: 'Anass Bakkali',
    senderRole: 'Oprichter ADAB MOVES',
    senderPhone: '06-12345678',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
  color: '#1F2240',
}

const container = {
  width: '100%',
  maxWidth: '640px',
  margin: '0 auto',
  padding: '32px 24px',
}

const greetingStyle = {
  color: '#1F2240',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const paragraph = {
  color: '#1F2240',
  fontSize: '15px',
  lineHeight: '1.75',
  margin: '0 0 16px',
}

const listBox = {
  backgroundColor: '#FAF8F2',
  border: '1px solid #EEE2D4',
  borderRadius: '12px',
  padding: '14px 18px',
  margin: '0 0 20px',
}

const listItem = {
  color: '#1F2240',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0',
}

const signOff = {
  color: '#1F2240',
  fontSize: '15px',
  margin: '24px 0 4px',
}

const signature = {
  color: '#1F2240',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: 0,
}

const link = {
  color: '#C95F3E',
  textDecoration: 'none',
}

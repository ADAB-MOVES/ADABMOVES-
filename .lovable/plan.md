## Doel

Een sterke, kopieerklare cold outreach e-mail die Anass kan versturen naar basis- en middelbare scholen om een eerste gesprek over samenwerking te openen — afgestemd op de pijn (onrust, gedrag, karakter) en de winsten zoals op /aanbod/scholen.

## Wat ik bouw

Twee dingen, beide bruikbaar zonder technische kennis:

### 1. Een nieuwe pagina `/lovable/outreach-scholen` (intern, niet in nav)
Een eenvoudige pagina waar Anass:
- de volledige e-mail ziet (onderwerp + body) in nette opmaak
- per blok op "Kopiëren" kan klikken (onderwerp, body, of alles samen)
- 3 variaties van het onderwerp ziet om mee te testen
- een korte follow-up e-mail vindt (na 5–7 dagen geen reactie)

Niet gelinkt in het hoofdmenu — alleen rechtstreeks bereikbaar via de URL.

### 2. Een React Email template `school-outreach.tsx` (optioneel verzenden via systeem)
Geregistreerd in `src/lib/email-templates/registry.ts`, zodat de e-mail later eventueel ook via het systeem verstuurd kan worden (één-op-één, geen bulk — Lovable e-mail is alleen voor transactionele sends). Voor nu primair als referentie/preview.

## De e-mail zelf

**Onderwerp (primair):**
> Sport mét karakter voor [Schoolnaam] — vrijblijvend kennismaken?

**Onderwerp varianten:**
- Rust in de klas via sport en spel — kort gesprek?
- Voorstel: gratis proefactiviteit voor [Schoolnaam]

**Body (kern, ~180 woorden):**

```text
Beste [naam / schoolteam van Schoolnaam],

Mijn naam is Anass Bakkali, oprichter van ADAB MOVES. Wij verzorgen sport- 
en spelactiviteiten op basis- en middelbare scholen in Amsterdam, Haarlem, 
Zaandam, Almere, Amstelveen en Hoofddorp — met één duidelijke focus: 
karaktervorming via sport.

Wat scholen waarmee we werken terugzien:
• Merkbaar rustigere klassen na elke sessie
• Meer respect en betere omgangsvormen op het plein
• Sterker zelfvertrouwen en doorzettingsvermogen bij leerlingen
• Vaste trainer, vaste lijn — geen wisselende gezichten

Wij draaien volledig zelfstandig: tussen de middag, na schooltijd, 
workshops karakter & gedrag, of een volledig verzorgde sportdag. 
Materiaal, trainers en draaiboek regelen wij.

Heeft u 15 minuten voor een vrijblijvend gesprek? Dan laat ik zien hoe 
een traject er bij [Schoolnaam] uit zou kunnen zien — en bieden we 
een gratis proefactiviteit op locatie aan, zonder verplichtingen.

Bereikbaar via 06-XXXXXXXX of een reactie op deze mail.

Hartelijke groet,

Anass Bakkali
Oprichter ADAB MOVES
www.adabmoves.nl
```

**Follow-up (na 5–7 dagen):**

Korte herinnering van ~80 woorden die teruggrijpt op de eerste mail en opnieuw de gratis proefactiviteit aanbiedt.

## Designkeuzes

- Toon: warm, professioneel, kort. Geen verkooppraat.
- Personalisatie-placeholders `[Schoolnaam]` en `[naam]` duidelijk gemarkeerd.
- E-mail template volgt brand: `#1F2240` ink, `#E8784E` coral, cream achtergrond `#FAF8F2` voor highlight box, Plus Jakarta Sans.
- Geen afbeeldingen in de mail body (betere deliverability bij cold outreach, minder kans op spam-filter).
- Plain-text variant beschikbaar (sommige scholen lezen liever puur tekst).

## Bestanden

**Nieuw:**
- `src/routes/lovable.outreach-scholen.tsx` — interne kopieer-pagina met copy-knoppen
- `src/lib/email-templates/school-outreach.tsx` — React Email template (onderwerp + body + follow-up als losse template optioneel)

**Aangepast:**
- `src/lib/email-templates/registry.ts` — template registreren

## Wat ik NIET doe

- Geen bulk-versturen (Lovable e-mail is geen marketing tool, en cold-mailen naar lijsten is niet toegestaan).
- Geen wijzigingen aan de homepage of navigatie.
- Geen automatische verzendknop — Anass kopieert en stuurt vanuit zijn eigen mailbox (Gmail/Outlook) voor maximale deliverability en persoonlijke afzender.

## Aanpassingen

**1. "moslim én niet-moslim welkom" verwijderen**
- `src/components/Testimonials.tsx` (regel 21): laatste zin van de derde pijler aanpassen naar:
  > "Wij sluiten aan bij de cultuur, taal en waarden van de kinderen. Toegankelijk voor iedereen."

**2. Sectie "Onze doelen" verwijderen op /over-ons/verhaal**
- `src/routes/over-ons.verhaal.tsx`: hele "ONZE DOELEN" sectie (rond regel 140 e.v.) en de bijbehorende `doelen` array (regels 26–50) verwijderen.
- Meta-titel en -description aanpassen zodat "& onze doelen" eruit gaat:
  - title → "Ons verhaal — ADAB MOVES"
  - description → focus op verhaal en ervaring, zonder "doelen".

**3. Minimumleeftijd 8 → 7 jaar (overal "7 t/m 12" / "7–12")**
Bestanden:
- `src/components/SiteHeader.tsx` → "7–12 jaar"
- `src/routes/aanbod.community.kinderen.tsx` → title, meta description, og:description, JSON-LD `name`/`description`, FAQ vraag + antwoord (2x), eyebrow
- `src/routes/aanbod.index.tsx` → tekst over multisport
- `src/routes/index.tsx` → FAQ-antwoord
- `public/llms.txt` → twee vermeldingen van "(8–12)"

Geen andere wijzigingen.
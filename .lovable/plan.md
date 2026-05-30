# Plan: Scholen poster (A4 PDF) + social media pakket

## Deliverables (in `/mnt/documents/`)

1. **`adabmoves-scholen-poster-A4.pdf`** — printklare A4 poster (300dpi, CMYK-safe kleuren, 5mm marge), bedoeld om naar basis- en middelbare scholen te mailen of op te hangen.
2. **Instagram pakket scholen** — 4 vierkante posts (1080×1080 PNG):
   - Post 1: Hero / introductie "Sport & karaktervorming voor scholen"
   - Post 2: Wat bieden we (workshops, sportdagen, gymlessen, weerbaarheid)
   - Post 3: De ADAB Methode — 7 pijlers in het kort
   - Post 4: Call-to-action "Plan een gesprek" + contact + regio
3. **`captions-scholen.md`** — Nederlandse captions per post mét hashtags (lokale SEO: #amsterdam #haarlem #zaandam #almere #amstelveen #hoofddorp + onderwijs hashtags).

## Stijl & branding

- Brand kleuren: navy `#1F2240`, coral `#E8784E`, cream `#FBF7EE`.
- Typografie volgens huidige site (headings vet, body schoon sans-serif).
- Brand illustraties: bestaande `Scene` / `Character` / `SportIcon` componenten uit `src/components/illustrations/` — cartoon kids, mond zonder ogen, ~1 op 3-4 met petje, coach van achteren met logo.
- Geen AI-fotorealisme. Geen stockfoto's.

## Aanpak

**Stap 1 — Illustraties renderen**
- Kleine Node/Vite script die de bestaande `Scene` / `Character` SVG-componenten naar losse PNG's rendert (via `satori` of door de SVG strings direct te serialiseren en met `sharp` naar PNG om te zetten op 2160×2160 voor crispness).
- Hergebruik bestaande illustratie-tokens — geen nieuwe stijl uitvinden.

**Stap 2 — Poster A4**
- ReportLab (Python) bouwt de A4 layout: header met logo + tagline, hero-illustratie, 3 kolommen met aanbod-iconen (workshops / sportdagen / weerbaarheid), ADAB-methode strip, footer met `adabmoves.nl` + QR code naar `/aanbod/scholen` + contact.
- SEO/locatie strip: "Amsterdam · Haarlem · Zaandam · Almere · Amstelveen · Hoofddorp".

**Stap 3 — Instagram posts (1080×1080)**
- Per post: PIL/Pillow composeert cream/navy achtergrond, illustratie, korte koptekst (max 6 woorden), 1 ondersteunende regel, ADAB MOVES logo + URL.
- Consistent grid look (zelfde header treatment, zelfde footer band).

**Stap 4 — Captions**
- Per post 80–150 woorden NL, natuurlijke tone-of-voice (modern, betrouwbaar, sportief), CTA naar `/aanbod/scholen` of `/contact`, 10–15 relevante hashtags.

**Stap 5 — Verplichte visuele QA**
- Elke PNG én elke PDF-pagina inspecteren: geen overlap, tekst binnen marges, voldoende contrast, logo correct, illustraties scherp.
- Fix → re-render → re-check tot alles clean is.

## Niet in scope

- Geen wijzigingen aan de website / routes / SEO-code (alleen artifacts).
- Geen video / reels (kan apart vervolg zijn).
- Geen Facebook / LinkedIn varianten (kan apart vervolg, vraag het als je het wil).

## Output naar de gebruiker

5 bestanden via `<presentation-artifact>` tags: 1 PDF + 4 PNG's + 1 markdown captions-bestand.

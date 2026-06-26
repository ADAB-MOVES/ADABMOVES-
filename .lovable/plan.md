## Doel

`/mnt/documents/ADAB-MOVES-Concept-Offerte-IBS-Elif.pdf` 1-op-1 laten matchen met de huisstijl van adabmoves.nl (typografie, paddings, knopstijlen).

## Referentie ophalen

1. `src/styles.css` opnieuw lezen voor exacte tokens (fonts, radius, kleuren, shadows, knop-padding).
2. Live site scrapen via Firecrawl `branding` + screenshot van homepage & `/aanbod/scholen` voor visuele referentie (font-sizes, line-height, knop-radius, eyebrow-stijl).
3. Bestaande PDF renderen naar JPG (`pdftoppm -r 150`) om de huidige staat naast de site-screenshots te leggen.

## Audit-punten

- **Typografie**
  - Sora 700/800 voor headings, letter-spacing `-0.035em` (h1) / `-0.025em` (h2-h4), line-height 1.02–1.05.
  - Plus Jakarta Sans 400/500/600 body, line-height 1.65, lead 1.125–1.25rem.
  - Eyebrow: 0.7rem, weight 700, tracking 0.22em, uppercase, coral-deep met 1.75rem coral lijntje ervoor.
- **Paddings & radius**
  - Container max 1200px, padding-inline 1.5rem (desktop 2.5rem) → vertalen naar PDF-marges.
  - Kaart-radius `--radius` 0.875rem (≈25pt op 150dpi), shadow-soft hairline.
  - Sectie verticale ritme ~96px op site → consistente section-padding in PDF.
- **Knopstijlen** (CTA-blokken pagina 1 & 2 footer)
  - Primary: coral fill `#E8784E`, wit, pill (radius 999), padding 0.85rem 1.5rem, weight 600, subtiele coral-shadow.
  - Ghost: cream fill, ink border 1px, pill, zelfde padding.
- **Kleur-afstemming**
  - Cream `#FBF7EE`, cream-deep `#F4ECDC`, border-soft `#EAE0CC`, ink `#1F2240`, ink-soft `#3A3F66`, coral `#E8784E`, coral-deep `#C95C36`. Geen pure wit/zwart.

## Aanpassingen in build-script

`/tmp/build_offerte.py` updaten met:
- Heading sizes & tracking dichter bij site (H1 ~34pt, H2 ~22pt, eyebrow 8pt/0.22em).
- Body 10pt Plus Jakarta met leading 1.65.
- Eyebrow-helper met coral lijntje ervoor (rect 18×1pt).
- Card-radius uniform 12pt, hairline border-soft, geen harde schaduw.
- CTA-knop-helper: pill (radius = h/2), coral fill, wit Sora 600, padding 10×18pt.
- Section-padding uniform (28pt boven/onder navy/cream banden), gutters 16pt.
- Tabel: rij-hoogte 22pt, zebra cream-deep, header navy/wit Sora 600 9pt.

## QA-loop

1. Render `ADAB-MOVES-Concept-Offerte-IBS-Elif_v2.pdf` naar `/tmp/qa/page-*.jpg` (150dpi).
2. Beide pagina's visueel inspecteren naast site-screenshots: fonts, knop-radius, eyebrow, paddings.
3. Itereren tot 0 zichtbare afwijkingen, dan opslaan in `/mnt/documents/` en `<presentation-artifact>` teruggeven.

## Deliverable

- `/mnt/documents/ADAB-MOVES-Concept-Offerte-IBS-Elif_v2.pdf` (2 pagina's A4)
- Korte changelog met wat is aangepast en wat al klopte.

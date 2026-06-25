## Doel

Eén print-klare A4 PDF van 2 pagina's: **ADAB-MOVES-Concept-Offerte-IBS-Elif.pdf** voor Hüseyin Gürlek (Directeur IBS Elif Zaandam), datum **25 juni 2026**, ref **AM-2026-001**. Gegenereerd met Python + reportlab, opgeslagen in `/mnt/documents/`.

## Huisstijl (exact van adabmoves.nl)

- Navy `#1F2240` (ink) — donkere secties + alle headings
- Accent navy `#2E3A6E` — identiteit-sectie pagina 2
- Coral `#E8784E` — bullet-accents, "CONCEPT" badge, kortingsregel highlight
- Cream `#FBF7EE` — pagina-achtergrond (warme off-white uit `--cream`)
- Cream-deep `#F4ECDC` — afwisselende tabelrijen + kaarten
- Border-soft `#EAE0CC` — hairlines
- Fonts: **Sora** (headings) + **Plus Jakarta Sans** (body), via TTF download in /tmp; reportlab `pdfmetrics.registerFont`
- Kaarten: 14pt radius, zachte schaduw, cream-deep fill
- Geen pure wit, geen koud grijs

## Illustraties (nieuw, brand-stijl)

Twee 2D illustraties gegenereerd via imagegen (`fast`), opgeslagen in `/mnt/documents/offerte/`:

1. **Hero pagina 2** — kinderen sportend op schoolplein (voetbal, trefbal, estafette), 2D flat vector style à la `scholen.jpg`, modest kleding (lange joggers), geen ogen, alleen subtiele glimlach, ADAB MOVES tinten, schoolgebouw vaag op achtergrond.
2. **Identiteit-sectie pagina 2** — trainer (van achter, baard, korte buzz, logo op jasje) met groepje kinderen in cirkel op schoolplein, warme middag-licht.

Beide afbeeldingen 1024×768, ingebed via reportlab `Image` met afgeronde clip.

## Pagina 1 — CONCEPT OFFERTE

```text
┌──────────────────────────────────────────────────┐
│ NAVY HEADER  ADAB MOVES | Sport met karakter     │
│              www · tel · email   [CONCEPT badge] │
│              Ref AM-2026-001 · 25 juni 2026      │
├──────────────────────────────────────────────────┤
│ CREAM HERO                                       │
│ H1 Tussenschoolse Opvang (TSO)                   │
│ H2 Schooljaar 2026–2027 — IBS Elif, Zaandam      │
│ italic notice (concept-voorbehoud)               │
│ ┌─Aanbieder───────┐ ┌─Opgesteld voor────────┐    │
│ │ ADAB MOVES …    │ │ IBS Elif · Dhr. Gürlek│    │
│ └─────────────────┘ └───────────────────────┘    │
├──────────────────────────────────────────────────┤
│ NAVY STATS  4 kolommen icon-kaarten              │
│  3 Trainers · 3 Dagen · 1,5u · Start 17-08-2026  │
├──────────────────────────────────────────────────┤
│ CREAM TSO SCHEMA tabel (cream-deep zebra)        │
│  Tijdblok | Groep | Leerlingen | Begeleiding     │
│  totaalrij in navy bold                          │
├──────────────────────────────────────────────────┤
│ NAVY TARIEVEN tabel (wit op navy)                │
│  Kortingsregel highlighted coral                 │
│  Totaal € 30.600 · € 2.550/maand                 │
│  italic note BTW-vrijstelling                    │
├──────────────────────────────────────────────────┤
│ NAVY CTA FOOTER  contactblok + geldigheid        │
└──────────────────────────────────────────────────┘
```

## Pagina 2 — TSO INFORMATIE & AANPAK

```text
┌──────────────────────────────────────────────────┐
│ NAVY HEADER  (zelfde + subtitle Aanpak & Visie)  │
├──────────────────────────────────────────────────┤
│ CREAM INTRO 2-koloms                             │
│ Links: "Wat is TSO bij ADAB MOVES?" + tekst      │
│ Rechts: illustratie kinderen op schoolplein      │
├──────────────────────────────────────────────────┤
│ CREAM-DEEP kaart "Onze aanpak" — leestekst       │
├──────────────────────────────────────────────────┤
│ NAVY 3-koloms "Onze focus"                       │
│ Veilig plein · Actief & gevarieerd · Karakter    │
├──────────────────────────────────────────────────┤
│ CREAM 2×3 grid "Wat wij aanbieden"               │
│ Bewegingsspellen · Teamsporten · Doelspellen ·   │
│ Coöperatief · Minitoernooien · Vrij bewegen      │
├──────────────────────────────────────────────────┤
│ ACCENT #2E3A6E 2-koloms identiteit               │
│ Links: trainer+kinderen illustratie              │
│ Rechts: "Bewegen vanuit waarden" + tekst         │
├──────────────────────────────────────────────────┤
│ NAVY FOOTER tagline + contact + © 2026           │
└──────────────────────────────────────────────────┘
```

## Technische uitvoering

1. `bun add` n.v.t. — pure Python. `python -m pip install reportlab pillow requests`.
2. Download Sora + Plus Jakarta Sans TTF van Google Fonts → registreren in reportlab.
3. Twee illustraties genereren via `imagegen--generate_image` (model `fast`, 1024×768, jpg).
4. Custom A4 layout zonder Platypus flow — exacte coördinaten per sectie zodat pagina 1 en 2 strak op één A4 passen (geen page overflow).
5. Helpers: `draw_section(bg, x, y, w, h)`, `draw_card(...)`, `draw_table(...)`, `draw_badge(...)`.
6. Euro-bedragen rechts uitgelijnd; kortingsregel in coral pill.
7. QA-loop verplicht: `pdftoppm -r 150` → visueel inspecteren beide pagina's → fix overlap/cropping → herrender tot 0 issues.

## Deliverable

- `/mnt/documents/ADAB-MOVES-Concept-Offerte-IBS-Elif.pdf` (2 pagina's A4, ~400 KB)
- Korte chatreactie met downloadlink en samenvatting QA-bevindingen.

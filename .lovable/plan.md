# Cinematic voorpagina — ADAB MOVES

## Doel
De huidige voorpagina (`/`) vervangen door een filmische variant: fullscreen video-hero, scroll-verhaal met de 3 sporen, grote typografie en vloeiende animaties — volledig in de ADAB MOVES huisstijl (navy `#1F2240`, coral `#E8784E`, cream `#FBF7EE`, Sora + Plus Jakarta Sans).

## Keuzes (defaults)
- **Hero:** fullscreen reveal-video (bestaande `adabmoves-reveal.mp4`) met donkere overlay, titel en CTA's eroverheen.
- **Sfeer:** mix — donkere navy hero en overgangen, lichtere cream content-secties ertussen.
- **Vervanging:** de huidige home wordt vervangen (alle bestaande SEO-metadata, JSON-LD en canonical blijven behouden).

## Paginaopbouw
1. **Cinematic hero** — fullscreen autoplay/muted/loop video met navy gradient-overlay; H1 "Bewegen met betekenis. Karakter begint hier." met staggered inbeeld-animatie; CTA's "Plan een kennismaking" + "Bekijk ons aanbod"; subtiele scroll-indicator.
2. **Marquee** — bestaande sport-marquee blijft als overgang naar de lichte secties.
3. **Intro/missie** — cream sectie: korte missiezin groot gezet, met reveal-animatie bij scrollen + statistiek-counters (bestaande `Counter`).
4. **De 3 sporen** — Scholen / Multisport-community / ADAB Day als grote beeldkaarten (bestaande beelden coach/community/event) met hover-zoom en parallax-achtige beweging, elk met link naar de betreffende pagina.
5. **Waarom ADAB MOVES** — 4 redenen (bestaande content) in donkere navy band met coral iconen.
6. **Testimonials** — bestaande component, ongewijzigd.
7. **CTA-slot** — donkere afsluiter met grote tekst en contactknop.

## Technische aanpak
- Alleen `src/routes/index.tsx` herschrijven + eventueel kleine animatie-utilities in `src/styles.css` (geen nieuwe dependencies; animaties via CSS/intersection-based reveal hook `use-reveal` die al bestaat).
- Video via het bestaande asset-json patroon (`public/adabmoves-reveal.mp4.asset.json`), `playsInline`, `muted`, `loop`, `preload="metadata"`, poster-fallback op `hero.jpg`.
- SEO: huidige `head()` (titel, description, og-tags, FAQ + Breadcrumb JSON-LD, canonical) blijft exact behouden; og:image blijft `hero.jpg`.
- Alle bestaande content (tracks, reasons, testimonials) wordt hergebruikt — alleen visuele vorm en volgorde veranderen.
- Geen menselijke foto's toegevoegd; illustratie-regels blijven gerespecteerd (bestaande beelden blijven zoals ze zijn).

## Verificatie
- Build checken via build-errors.log.
- Preview controleren met Playwright: video laadt, animaties spelen, layout op desktop.

## Doel
De huidige 30-seconden Reel gebruikt platte SVG-poppetjes (`Character.tsx` / `Scene.tsx`). Die passen niet bij het ADAB MOVES merk. We vervangen ze door 3D Pixar-stijl illustraties in de stijl van de bijgeleverde referentiebeelden (coach met volle baard van achteren, kinderen met bescheiden kleding + skullcaps, warme gymzaal, navy + coral).

## Aanpak (marketing-first)

De reel wordt een promotie-tool: eerste 3 seconden moeten stoppen-scrollen, daarna emotie, dan bewijs, dan CTA. We renderen elke scène als een echte 3D-stijl afbeelding via `imagegen` (premium) — geen SVG-poppetjes meer. Remotion animeert camera-moves (ken burns, parallax, crops) en typografie er overheen.

## Scene-plan (900 frames / 30s / 1080×1920)

1. **Hook (0-3s)** — 3D beeld: kind alleen op bank met telefoon, warm licht.
   Tekst-overlay: "Dit is niet zomaar een sportles."
2. **Belofte (3-6s)** — 3D beeld: lege gymzaal, zonlicht door ramen, ADAB lijnen op de vloer. Kinetische typografie "Bewegen met betekenis".
3. **Coach welkomt (6-12s)** — hero beeld (bijgeleverd stijl-referentie): coach van achteren met volle baard, ADAB MOVES jasje, kind komt binnenrennen. Slow push-in.
4. **Multisport (12-18s)** — 3 snelle cuts, elk een eigen 3D beeld:
   - basketbal-kind (skullcap, ADAB shirt)
   - voetbal-kind (ADAB trainingspak)
   - boogschutter-kind (bescheiden kleding)
5. **Waarden (18-22s)** — 3D groepsbeeld van kinderen in kring met coach, met overlay-pills "Discipline · Respect · Zelfvertrouwen".
6. **Aanbod (22-26s)** — 3D beeld gymzaal met 3 kaarten er overheen: 01 Scholen · 02 Multisport · 03 Events.
7. **CTA (26-30s)** — 3D beeld van coach + kinderen frontaal (gezichten featureless), logo, "@adabmoves — adabmoves.nl", "Actief in Amsterdam en omgeving".

## Regels voor alle gegenereerde beelden
- 3D Pixar-stijl render, warme cinematische verlichting
- Kleuren: navy `#1F2240`, coral `#E8784E`, warm cream gymzaal
- **Coach**: volle donkere baard (geen snor apart, gelijk kort kapsel), navy ADAB MOVES trainingsjasje met wit A-logo + coral swoosh, tekst op rug "ADAB MOVES / BEWEGEN MET BETEKENIS", altijd van achteren of zijkant
- **Kinderen**: bescheiden sportkleding volledig bedekkend, ongeveer 1 op 3 met witte skullcap, géén meisjes met los lang haar (alleen hijab + lange kleding indien meisje), gezichten featureless of subtiel
- Gymzaal setting: houten vloer met ADAB coral/navy lijnen, hoge ramen, warme zon
- Geen tekst-in-beeld (behalve op jasje) — alle copy komt er in Remotion overheen

## Technische wijzigingen

**Verwijderen uit de reel:**
- Alle imports van `Character`, `Scene`, `SportIcon` in `remotion/src/scenes/reel30/*`
- SVG-poppetjes in `HookBank`, `CoachWelkom`, `MultiSport`, `Waarden`, `Aanbod`, `CtaEnd`

**Toevoegen:**
- `remotion/public/reel30/` map met 7 gegenereerde PNG's:
  - `hook-couch.jpg`
  - `belofte-gym.jpg`
  - `coach-welkom.jpg` (op basis van de aangeleverde hero-referentie)
  - `sport-basket.jpg`, `sport-voetbal.jpg`, `sport-boog.jpg`
  - `waarden-kring.jpg`
  - `aanbod-gym.jpg`
  - `cta-groep.jpg`
- Elke scène herschreven met `<Img src={staticFile(...)} />` als achtergrond + `interpolate()`-gedreven zoom/pan (ken burns) + bestaande typografie/kaarten er overheen
- Alle Remotion-scènes en typografie-timing blijven; alleen de visuele laag verandert

## Rendering
`node scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4` — overschrijft huidige MP4.

## Deliverables
- 7 nieuwe 3D-stijl afbeeldingen onder `remotion/public/reel30/`
- 6 herschreven scene-componenten (SVG-poppetjes vervangen)
- Nieuwe MP4 in `/mnt/documents/adabmoves-reel-30s.mp4`

## Bevestig / kies
1. Akkoord met bovenstaande 7-scène opzet?
2. Mag ik de aangeleverde hero-afbeelding (coach van achteren) gebruiken als directe achtergrond voor de "Coach welkomt"-scène, of moet ik ook die opnieuw genereren?

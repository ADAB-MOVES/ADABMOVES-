## Doel

De huidige Reel 1 ("Wat is ADAB MOVES in 15 sec?") gebruikt eigen, los gemaakte SVG-figuurtjes. Die wijken af van de website. Ik bouw de reel om zodat exact dezelfde getekende karakters en scènes worden gebruikt als op de site (de coach met baard + ADAB-pak op de rug, de springende/rennende/schoppende/boogschietende kids, de sport-iconen, en de zachte cream/coral/navy achtergronden uit `Scene`).

## Wat ik hergebruik van de website

Bron: `src/components/illustrations/`
- `Character.tsx` — varianten: `coach-back`, `coach-whistle`, `coach-point`, `coach-mascot`, `kid-jump`, `kid-run`, `kid-ball`, `kid-kick`, `kid-archery`, `kid-basket`
- `Scene.tsx` — composities zoals `gym`, `playground`, `community-kids`, `community-teens`, `adab-day`, `methode`
- `SportIcon.tsx` — `voetbal`, `kickboks`, `archery`, `basketbal`, `fitness`
- `tokens.ts` — kleuren (ink #1F2240, cream #FBF7EE, coral #E8784E, skin)

Omdat het Remotion-project een eigen tsconfig/bundle heeft, kopieer ik deze 4 bestanden 1-op-1 naar `remotion/src/illustrations/` (geen aanpassingen aan de website). Daarmee blijft de stijl gegarandeerd identiek aan de site.

## Nieuwe scène-opbouw (15s, 30fps, 1080×1920)

Achtergrond blijft `COLORS.cream` met de bestaande `Grain` overlay. Vloerstreep en hairline-frame blijven behouden voor consistentie met de carrousel.

1. **CoachQuote (0–2s, 60f)**
   - Achtergrond: zachte cream gradient + dunne navy vloerlijn (zoals `Scene gym`).
   - Centraal groot: `<Character variant="coach-mascot" />` (de mascotte-coach, frontaal, ADAB-pak met logo). Spring-in scale.
   - Bovenin kinetische tekst woord-voor-woord: "Sport zonder karakter is…" (Sora 800, navy, coral underline).
   - Subtiele bob-animatie (sin) op de coach zodat hij niet stilstaat.

2. **BounceBall (2–5s, 90f)**
   - Achtergrond: `Scene` met variant `gym` als statische background-laag (coach achterop links, kids subtiel gedimd op 30% opacity zodat ze niet afleiden).
   - Voorgrond: SVG-bal (zelfde stijl als `kid-ball`/`SportIcon voetbal`: cream cirkel met navy pentagoon) stuitert van links naar rechts uit beeld.
   - "…" pulserend in beeld als stilte-indicator (zoals nu).

3. **SportCuts (5–10s, 150f)** — 4 cuts van ~37 frames met `kicker`-label rechtsonder in coral pill.
   - **VOETBAL**: `<Character variant="kid-ball" />` + stuiterende voetbal-SVG.
   - **KICKBOKS**: `<Character variant="kid-kick" />` + coach-pad icoon (afgeleid van `SportIcon kickboks`). Standbeen blijft, schopbeen via rotate-keyframes.
   - **BOOGSCHIETEN**: `<Character variant="kid-archery" />` + roos op rechts gebaseerd op `SportIcon archery`. Pijl-trail animatie.
   - **HIGH-FIVE**: `<Character variant="coach-point" />` (links, outfit navy) + `<Character variant="kid-jump" />` (rechts) springt omhoog richting coach-hand; impact-ster in coral op moment van contact.
   - Zoom-pop entrance per frame, identiek aan huidige.

4. **Tagline (10–15s, 150f)**
   - Achtergrond: cream met navy hairline-frame (ongewijzigd).
   - Tekst clip-reveal: "Bewegen met betekenis." / "Karakter begint hier." (Sora 800, coral underline per regel).
   - Onderaan: kleine ondersteunende illustratie `<Character variant="coach-mascot" size={420} />` met zwaaiend gebaar (lichte sin-rotate op zwaaiende arm via wrapper transform), in plaats van het PNG-logo dat er nu staat — sluit visueel aan op de site. Logo PNG verschijnt klein boven de tagline (140px) i.p.v. groot onderaan.

## Technische uitvoering

- Kopieer 4 bestanden ongewijzigd naar `remotion/src/illustrations/`:
  - `tokens.ts`, `SportIcon.tsx`, `Character.tsx`, `Scene.tsx`
- Pas alleen de imports binnen die bestanden aan naar relatieve paden (geen `@/` alias in Remotion).
- Herschrijf `remotion/src/scenes/reel1/CoachQuote.tsx`, `BounceBall.tsx`, `SportCuts.tsx`, `Tagline.tsx` zodat ze `<Character>`, `<Scene>` en `<SportIcon>` als SVG-children in een Remotion `<AbsoluteFill>` plaatsen, met `useCurrentFrame`/`spring`/`interpolate` voor entrance, bob, en cuts.
- `Reel1Hook.tsx` en `Root.tsx` blijven inhoudelijk gelijk (zelfde durations en compositie-id `reel-1-hook`).
- Renderen via bestaand script: `cd remotion && node scripts/render-remotion.mjs reel-1-hook reel-1-hook.mp4`. Output ~30s build.

## Geraakt / niet geraakt

Aangemaakt:
- `remotion/src/illustrations/{tokens.ts,SportIcon.tsx,Character.tsx,Scene.tsx}`

Aangepast:
- `remotion/src/scenes/reel1/CoachQuote.tsx`
- `remotion/src/scenes/reel1/BounceBall.tsx`
- `remotion/src/scenes/reel1/SportCuts.tsx`
- `remotion/src/scenes/reel1/Tagline.tsx`

Niet aangeraakt: de website zelf (`src/components/illustrations/*` blijft ongewijzigd), `Reel1Hook.tsx`, `Root.tsx`, render-script, andere reels of composities.

## Aannames

- De ADAB-trainer in de carrousel wordt op de site weergegeven door `coach-mascot` / `coach-back` (baard, ADAB-pak, geen ogen op back-variant). Ik gebruik die varianten 1-op-1; de mascotte-variant heeft wel ogen — dat is hoe hij op de site staat. Laat het me weten als je een andere coach-variant wilt (bv. alleen `coach-back` voor anonimiteit).
- Audio blijft stil (silent reel met tekst on screen, zoals gevraagd).

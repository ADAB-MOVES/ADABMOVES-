# Reel 1 — "Wat is ADAB MOVES in 15 sec?" (Hook)

15-seconden verticale reel (1080×1920, 30fps = 450 frames), volledig in code via Remotion, in dezelfde flat 2D illustratie-stijl als carrousel v16. Stille reel met tekst on-screen. Output: `/mnt/documents/reel-1-hook.mp4`.

## Storyboard (450 frames @ 30fps)

```text
0:00 – 0:02 │ Scene 1  "Coach close-up"         60 fr
0:02 – 0:05 │ Scene 2  "Stilte + stuiterende bal" 90 fr
0:05 – 0:10 │ Scene 3  "Snelle cuts sport"      150 fr  (4 cuts × ~37 fr)
0:10 – 0:15 │ Scene 4  "Tagline + logo"         150 fr
```

### Scene 1 — Coach close-up (0–2s)
- Flat 2D coach (millimeter buzz-cut, grote baard, navy ADAB MOVES jacket), from-side framing.
- Tekstballon / on-screen kinetic type: **"Sport zonder karakter is…"** (Sora Bold, navy #1F2240, coral underline streep).
- Subtiele camera-push (scale 1 → 1.04), text per-woord spring-in.

### Scene 2 — Stilte (2–5s)
- Coach uit beeld, lege gym-vloer in beeld, één voetbal stuitert van rechts naar links uit beeld.
- Bal-stuit: sinus op Y-as, X-translatie via interpolate, schaduw mee-schalend.
- Geen tekst, alleen leeg cream canvas met paper-grain — laat de "stilte" voelen.

### Scene 3 — Snelle cuts (5–10s)
Vier cuts van ~37 frames met `TransitionSeries` + harde `wipe`/`slide` transitions:
1. **Voetbal** — kid trapt bal (hergebruik `Football` scene-logica uit `remotion/src/scenes/Sports.tsx`, aangepaste palet/kind in ADAB tracksuit).
2. **Kickboks** — kid + coral bokshandschoenen tegen pad.
3. **Boogschieten** — kid trekt boog, pijl schiet naar target (nieuwe `Archery` mini-scene, hergebruik `SportIcon` archery-geometrie als basis).
4. **High-five** — coach + kid high-five, coral impact-flits op contact.
Elke cut: 1 spring-zoom + 1 actie-beweging. Coral kicker-label rechtsonder ("VOETBAL" / "KICKBOKS" / "BOOGSCHIETEN" / "HIGH-FIVE").

### Scene 4 — Tagline + logo (10–15s)
- Cream achtergrond, navy hairline frame.
- Twee-regel kinetic type (Sora Bold, 140px):
  - **"Bewegen met betekenis."**
  - **"Karakter begint hier."**
  - Per regel: clip-path reveal van onder naar boven, coral underline tekent zichzelf in (strokeDashoffset).
- Official ADAB MOVES logo (`/tmp/logo_official.png` → `remotion/public/logo.png`) fade+scale-in onderaan, met coral pulse-ring.
- Slot: 8 frames fade-to-cream.

## Visuele systeem (consistent met carrousel v16)
- **Kleuren**: cream `#F5EFE6`, navy `#1F2240`, coral `#E8784E`, ink `#0F1116`.
- **Fonts**: Sora Bold (headlines) + Plus Jakarta Sans (kicker/body) via `@remotion/google-fonts`.
- **Persistente overlays**: paper-grain (opacity 0.07) + navy hairline frame over alle scenes.
- **Motion-systeem**: entrance = spring `{damping: 18, stiffness: 180}`, accent = `{damping: 10}`, transitions = `wipe`/`slide` 8 fr.

## Technisch

**Bestanden** (nieuw onder `remotion/src/`):
- `compositions/Reel1Hook.tsx` — main composition (1080×1920, 450 fr)
- `scenes/reel1/CoachQuote.tsx`
- `scenes/reel1/BounceBall.tsx`
- `scenes/reel1/SportCuts.tsx` (intern: Voetbal/Kickboks/Boog/HighFive sub-scenes)
- `scenes/reel1/Tagline.tsx`
- `components/PaperGrain.tsx` (mocht nog niet bestaan, hergebruik anders `Grain.tsx`)

**Root.tsx**: nieuwe `<Composition id="reel-1-hook" />` toegevoegd naast bestaande `main`.

**Render**: via bestaande `remotion/scripts/render-remotion.mjs` met `compositionId: "reel-1-hook"`, output `/mnt/documents/reel-1-hook.mp4`, `muted: true`.

**Assets**: gebruik bestaande `remotion/public/logo.png` (of kopieer van `/tmp/logo_official.png` indien nodig). Geen nieuwe imagegen calls — alles SVG/flat in code, consistent met v16 stijl maar nu in beweging.

**Geen wijzigingen** aan de website-routes of bestaande `MainVideo.tsx` — puur nieuwe composition.

## Deliverable
- `/mnt/documents/reel-1-hook.mp4` (≈ 2–4 MB, 15s, 1080×1920, h264, geen audio)
- Bronbestanden onder `remotion/src/` voor latere iteraties op Reel 2/3.

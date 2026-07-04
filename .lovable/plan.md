# ADAB MOVES — 30s Instagram Reel

Ik bouw een verticale 1080×1920 Reel van 30 seconden (900 frames @ 30fps) als nieuwe Remotion-compositie `reel-30s-betekenis`, in dezelfde huisstijl als de bestaande `reel-1-hook`. Alles wordt geanimeerd met SVG-personages (`Character`/`Scene` in `remotion/src/illustrations/`) — geen AI-foto's, geen gezichtsdetails, coach van achteren met baard, sommige jongens met skullcap.

## Structuur (900 frames, 30fps)

```
HOOK          0.0 – 3.0s   (90f)   Kind verveeld op bank met telefoon → tekst valt in
BELOFTE       3.0 – 6.0s   (90f)   "Dit is niet zomaar een sportles." → transitie naar sporthal
VERHAAL A     6.0 – 12.0s  (180f)  Kind komt binnen, coach (rug, baard) verwelkomt
VERHAAL B    12.0 – 18.0s  (180f)  Multisport cuts: basketbal → voetbal → boogschieten
WAARDEN      18.0 – 22.0s  (120f)  3 pills: Discipline · Respect · Zelfvertrouwen
AANBOD       22.0 – 26.0s  (120f)  3 kaarten: Naschools · Wekelijkse multisport · Sportevents
CTA          26.0 – 30.0s  (120f)  Logo + "Volg @adabmoves" + "adabmoves.nl" + Amsterdam pin
```

## Scènes (elk in `remotion/src/scenes/reel30/`)

1. **HookBank.tsx** — kind-silhouet op bank met gloeiende telefoon (cream bg, koud blauw tv-licht), springt in met scale.
2. **Belofte.tsx** — grote kinetic type "Dit is niet zomaar / een sportles." (Sora ExtraBold), coral onderstreping die intekent.
3. **CoachWelkom.tsx** — sporthal-achtergrond (`GymBg`), `coach-back` variant met baard midden-links, `kid-run` komt van rechts binnen. Ondertitel: "Een veilige plek waar je kind zichzelf mag zijn."
4. **SportCuts.tsx** — hergebruikt patroon van bestaande `reel1/SportCuts`: 3 snelle cuts (basketbal → voetbal → boogschieten) met `Character` varianten `kid-basket`, `kid-kick`, `kid-archery`. Ondertitels: "Sport. / Discipline. / Karakter."
5. **Waarden.tsx** — 3 gestaggerde pills die inklappen: "Discipline • Respect • Zelfvertrouwen".
6. **Aanbod.tsx** — 3 kaarten stapelend van boven: `01 NASCHOOLS`, `02 MULTISPORT`, `03 SPORTEVENTS` (kort, één regel per kaart).
7. **CTA.tsx** — ADAB MOVES logo (statisch SVG in scene), regel: "Volg @adabmoves", "adabmoves.nl", location pin "Amsterdam & omgeving", coral CTA-bar onderaan.

Tussen scènes: `TransitionSeries` met `fade` (springTiming, damping 200, 8f) — behalve tussen SportCuts subcuts die intern hard snijden op de beat.

## Bestanden

- `remotion/src/compositions/Reel30Betekenis.tsx` — nieuwe compositie (analoog aan `Reel1Hook.tsx`), zet scènes in een `TransitionSeries`.
- `remotion/src/scenes/reel30/` — 7 nieuwe scene-files (zie boven).
- `remotion/src/Root.tsx` — registreert `<Composition id="reel-30s-betekenis" />` naast bestaande.
- Hergebruikt: `theme.ts`, `Grain`, `GymBg`, `AccentLine`, `illustrations/Character`, `illustrations/SportIcon`.

## Fonts, kleur, motion

- **Fonts**: Sora 700/800 voor koppen, Plus Jakarta Sans 500/700 voor body (al geladen in project).
- **Kleuren**: navy `#1F2240`, coral `#E8784E`, cream `#FBF7EE` (uit `theme.ts` — matcht huisstijl; wijkt licht af van de exacte hex in de prompt maar is de vastgelegde brand token).
- **Motion systeem**: standaard entrance = spring `{damping: 18, stiffness: 180}` + subtle Y-offset; scenetransities = fade 8f; typografie = per-woord stagger 3f voor koppen.
- **Geluid**: composities zijn `muted` gerenderd (Nix ffmpeg beperking); user kan in Instagram muziek toevoegen.

## Rendering

Render via bestaande `remotion/scripts/render-remotion.mjs`:
```
cd remotion && node scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4
```
Levert 1 downloadbare MP4 op in `/mnt/documents/`.

## Buiten scope

- Geen voice-over / TTS.
- Geen echte foto's of AI-photorealistic mensen.
- Geen wijzigingen aan de website of andere composities.

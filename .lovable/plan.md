## Doel

Bestaande Remotion video (`remotion/`) upgraden van rustige Ken-Burns slideshow naar een echte **Kinetic Energy merk reveal** met wow-effect. 1920×1080, ~20s, geen audio. Output: `/mnt/documents/adabmoves-reveal.mp4`.

## Aanpak

Volledige herwerking van `MainVideo.tsx` + scenes in `remotion/src/scenes/`. Bestaande foto's en logo in `remotion/public/` worden hergebruikt. Geen wijzigingen aan de website.

## Motion systeem (consistente taal)

- **Entrance**: clip-path reveal (van links/onder) + spring scale 0.92→1
- **Accent**: massive Anton kinetic type met per-woord stagger (8-frame gap)
- **Tussenscènes**: shape-wipe in coral, geen fades naar zwart
- **Persistent layer**: subtiele coral diagonale streep + ink korrel-noise over alles
- **Pacing**: korte beats (45-60f) afgewisseld met één lange hero beat (90f)

## 7 scènes (~600 frames @ 30fps = 20s)

```
[0  - 60 ]  HOOK         Zwarte flits → coral shape blast → "ADAB" smasht in beeld
[60 - 130]  IDENT        Logo vergroot vanuit centrum + tagline "Bewegen met betekenis" tikt per woord in
[130-200]  SPOOR 01     Scholen.jpg met diagonal clip-reveal + grote "SCHOLEN" parallax type
[200-270]  SPOOR 02     Community-kinderen.jpg, andere clip-richting, "KINDEREN" type
[270-340]  SPOOR 03     Event.jpg, "ADAB DAY" type met coral shape achter
[340-430]  METHODE      7 pillars als snel roterende word-stack (Respect/Focus/Discipline/Doorzettingsvermogen/Vertrouwen/Samenwerking/Karakter) — één per ~12 frames
[430-540]  CTA OUTRO    Logo lock-up + "adabmoves.nl" + 5 steden ticker (Amsterdam · Haarlem · Zaandam · Almere · Amstelveen · Hoofddorp)
```

Totale composition duration: ~540 frames (18s). Speelt strakker dan de huidige 452f versie ondanks dat het meer bevat.

## Wow-tactieken

1. **Kinetic typografie**: woorden komen niet als blok binnen — letter-per-letter of woord-per-woord met spring stagger, sommige in coral, andere in cream, één woord per scène extra groot (180-240px Anton).
2. **Shape wipes** tussen scènes via `TransitionSeries` met `wipe` + custom coral colour-pane die mee-flasht.
3. **Photo parallax**: foto schuift trager dan de overlay-type → diepte (3-laags transform: bg foto / coral shape / fg type).
4. **Counter-animatie**: in METHODE scène telt "7" op naar 7 pillars terwijl woorden flippen.
5. **Persistent grain + diagonal accent line** door hele video → cinematic gevoel.
6. **Ending lock**: logo komt tot rust met subtle floating motion (sine 4px) zodat eind-frame niet dood voelt.

## Tech / bestanden

Geraakt:
- `remotion/src/Root.tsx` — duration bump naar ~540
- `remotion/src/MainVideo.tsx` — herwerken met `TransitionSeries` + persistent grain/accent layer
- `remotion/src/scenes/Hook.tsx` *(nieuw)*
- `remotion/src/scenes/Ident.tsx` *(nieuw, vervangt huidige Intro)*
- `remotion/src/scenes/SpoorScene.tsx` *(nieuw, vervangt PhotoScene voor de 3 sporen)*
- `remotion/src/scenes/Methode.tsx` *(nieuw)*
- `remotion/src/scenes/Cta.tsx` *(nieuw, vervangt Outro)*
- `remotion/src/components/Grain.tsx` *(nieuw, SVG noise overlay)*
- `remotion/src/components/AccentLine.tsx` *(nieuw)*

Render:
```
cd remotion && node scripts/render-remotion.mjs
```
Output: `/mnt/documents/adabmoves-reveal.mp4`. Daarna QA via `bunx remotion still` op key frames (60, 200, 340, 470) en visuele inspectie.

## Niet in scope

- Geen audio / muziek (zoals afgesproken)
- Geen 9:16 of 1:1 varianten (alleen 16:9)
- Geen website wijzigingen
- Geen nieuwe foto's / AI generatie — alleen bestaande assets in `remotion/public/`

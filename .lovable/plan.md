
# Finale Reel — strikte QA pass + definitieve render

Trainer-reference: `user-uploads://Schermafbeelding_2026-06-30_om_13.40.27-2.png` (bevestigd).

## 1. Backup
- `/mnt/documents/adabmoves-reel-30s.mp4` → `adabmoves-reel-30s.previous.mp4` (overschrijft).

## 2. Hook-tekst
- `remotion/src/scenes/reel30/HookBank.tsx`: vervang tekst door **"Wat leert jouw kind écht tijdens sport?"** — timing/animatie ongewijzigd.

## 3. Harde regels (per asset controleren)

**Trainer — vast, nul variatie:**
- Kort, gelijkmatig geknipt donker haar met simpele side part. NIET kaal, NIET geschoren, NIET buzz, NIET fade/undercut, geen bun/lang haar.
- Volle donkere baard, identiek in elke scene.
- Navy tracksuitjack (#1F2240). Rug: witte A-swoosh (coral #E8784E accent) + wordmark "ADAB MOVES" + tagline "BEWEGEN MET BETEKENIS" — scherp, leesbaar, niet vervormd.
- Alleen van achter of driekwart-achter, geen gezicht.

**Kinderen — volledig gezichtsloos:**
- Geen ogen, geen wenkbrauwen, geen neus, geen mond. Ook niet vaag/subtiel.
- Kleding: ALLEEN klein A-swoosh icoon, GEEN wordmark/tekst.
- Shorts tot onder de knie, ca. 1 op 3 met skullcap, diverse huidskleur, geen dubbele karakters.

**Banners/posters achtergrond:**
- Volledig logo + "ADAB MOVES" tekst leesbaar en scherp.

## 4. Inspectie → regeneratie

Per asset eerst `image_tools--zoom_image` op (a) trainer-hoofd, (b) trainer-rug logo, (c) elk kindergezicht, (d) achtergrondbanners. Bij afwijking → `imagegen--edit_image` met als reference:
- `user-uploads://Schermafbeelding_2026-06-30_om_13.40.27-2.png` (trainer)
- `user-uploads://logo_wit.PNG` / `logo_adab.png` (logo)

Assets:
- `intro-gym.jpg`
- `hook-sideline.jpg`
- `flash-coach.jpg`
- `flash-handshake.jpg`, `flash-hug.jpg`, `flash-help.jpg`

Negative prompt trainer: "no bald head, no shaved head, no buzz cut, no fade, no undercut, no bun, no long hair, no varying hairstyle, no photorealism, no visible face, no garbled logo text".

Negative prompt kinderen: "no eyes, no eyebrows, no nose, no mouth, no facial features, no logo wordmark on kids clothing, no duplicate characters, no photorealism".

Max 2 regeneratie-pogingen per asset; blijft het falen → melden welk asset.

## 5. QA na regeneratie
Opnieuw `zoom_image` op zelfde 4 punten per asset vóór de render.

## 6. Definitieve render
- `bun scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`
- `ffprobe`: 30s / 900 frames.
- `bunx remotion still` op frames 60 / 240 / 360 / 480 / 720 → laatste visuele QA. Faalt een frame → betreffende asset opnieuw + hertenderen.

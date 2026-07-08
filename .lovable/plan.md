## Aanpak — character-consistency pass

Doel: alle scene-assets voldoen aan drie harde regels. Minimale scope, alleen assets die de regels schenden worden opnieuw gegenereerd.

### ⚠️ Harde regels (op elke asset controleren)

1. **Logo ADAB MOVES correct op alle kleding**
   - Kinderkleding: compact merkteken (witte "A" + coral swoosh, evt. klein "ADAB MOVES" wordmark eronder) — scherp, upright, correct gespeld, symmetrisch, niet gespiegeld of vervormd. Geen tagline op kinderkleding.
   - Trainer-jack (rug): volledig logo met tagline "BEWEGEN MET BETEKENIS", scherp en leesbaar.
   - Trainer-jack (borst, indien zichtbaar): compact merkteken zoals op kinderkleding.
   - Bij twijfel → asset opnieuw genereren. Referentie `user-uploads://logo_wit.PNG` wordt bij elke `edit_image`-call meegegeven.

2. **Geen wenkbrauwen op kinderen** — glad voorhoofd, geen ogen (bestaande regel), zachte glimlach mag. Geldt voor alle kinderen in alle scenes.

3. **Trainer-look = referentie `Schermafbeelding_2026-06-30_om_13.40.27-2.png`**
   - Kort donker kapsel (niet lang, niet krullend boven de oren)
   - Volle donkere baard (niet stoppelig, niet clean-shaven)
   - Navy tracksuit jack met volledig ADAB MOVES-logo op de rug
   - Semi-3D Pixar stijl, warme belichting
   - Zichtbaar in scenes: `intro-gym.jpg`, `flash-coach.jpg` — en het "trainer-test" referentiebeeld wordt overschreven met de correcte look zodat toekomstige generaties consistent zijn.

### Inspectie eerst, dán genereren

Per asset check tegen de drie regels:

| Asset | Regel 1 (logo) | Regel 2 (wenkbrauwen) | Regel 3 (trainer) | Actie |
| --- | --- | --- | --- | --- |
| `hook-sideline.jpg` (backup) | check | check kids op achtergrond | n.v.t. | regenereren als nodig |
| `intro-gym.jpg` (huidig) | trainer-rug ok, kids-logo's klein en soms wazig | te controleren | trainer heeft langer kapsel en geen baard — schendt regel 3 | **regenereren** |
| `flash-handshake.jpg` | logo's ok in backup | wenkbrauwen check | n.v.t. | regenereren als wenkbrauwen aanwezig |
| `flash-hug.jpg` | logo's ok | wenkbrauwen check | n.v.t. | regenereren als wenkbrauwen aanwezig |
| `flash-help.jpg` | logo's ok | wenkbrauwen check | n.v.t. | regenereren als wenkbrauwen aanwezig |
| `flash-coach.jpg` | logo's ok | wenkbrauwen check | trainer heeft baard maar langer haar/anders — check tegen referentie | regenereren als trainer of wenkbrauwen niet kloppen |

Volgorde:
1. Alle 6 assets bekijken met `code--view` en per stuk beslissen: houden of regenereren.
2. Voor elke te regeneren asset: `edit_image` met input = huidige asset + `logo_wit.PNG` + (voor trainer-scenes) `Schermafbeelding_2026-06-30_om_13.40.27-2.png`. Prompt herhaalt de drie harde regels expliciet.
3. Trainer-referentie updaten: `remotion/public/reel30/_test/trainer-test.jpg` overschrijven met een nieuwe generatie die matcht op kort haar + volle baard, zodat volgende passes deze look als basis nemen.
4. Kids overige regels blijven gelden: modest kleding (short over de knie of lange broek), ~1 op 3 skullcap, één personage per flash-frame, diverse huidskleur, geen ogen.

### Render + QA

- `cd remotion && bun scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`
- Backup huidige mp4 eerst naar `adabmoves-reel-30s.previous.mp4`.
- Na render: `bunx remotion still` op frames 60 / 240 / 360 / 480 / 720 — check per frame op de drie regels. Bij fout → asset regenereren, opnieuw renderen.

### Deliverable

Nieuwe `/mnt/documents/adabmoves-reel-30s.mp4` — alle logos correct op alle kleding, geen wenkbrauwen op kinderen, trainer met kort kapsel + volle baard.

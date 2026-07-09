
# Finale QA-fix reel — kapsels zonder skullcap, logo's, hug-pose

Skullcaps blijven staan zoals ze zijn. Alleen de kinderen ZONDER skullcap krijgen een neutraal kapsel (geen fade/buzz/undercut). Geen full regenerates — alleen gerichte `imagegen--edit_image` calls op bestaande bestanden.

## Edits per asset

**1. `intro-gym.jpg`**
- Kinderen mét skullcap: ongewijzigd laten.
- Kinderen zonder skullcap: identiek neutraal kapsel (kort, netjes, licht side-part, donker), geen fade/buzz/undercut/shaved sides.
- Wandlogo op de muur netjes (één keer "ADAB MOVES", geen dubbeling/artefacten).

**2. `scholen.jpg`**
- Kinderen zonder skullcap: zelfde neutrale kapsel, geen fade.
- Coach back-logo verscherpen: "ADAB MOVES" + tagline "BEWEGEN MET BETEKENIS" leesbaar.

**3. `flash-handshake.jpg`**
- Beide jongens hebben al skullcap → alleen shirt-wordmark corrigeren naar "ADAB MOVES", rest ongemoeid.

**4. `flash-help.jpg`**
- Beide jongens hebben al skullcap → alleen shirt-wordmark corrigeren naar "ADAB MOVES".

**5. `flash-hug.jpg`**
- Pose wijzigen: van frontale knuffel naar side-by-side, beiden naar camera gericht, elk één arm losjes over de schouder van de ander.
- Skullcaps behouden, rest identiek.

**6. `flash-coach.jpg`**
- Kind zonder skullcap: neutraal kapsel, geen fade. Als kind al skullcap heeft: ongewijzigd.
- Coach back-logo scherp/leesbaar.

**7. `hook-sideline.jpg`**
- Kinderen met skullcap ongewijzigd; overige kinderen neutraal kapsel, geen fade.
- Coach back-logo scherp/leesbaar.

## Gemeenschappelijke edit-instructie

Elke call bevat:
- "Do NOT remove or change any skullcap/kufi already present — keep them exactly as they are."
- "Only for children WITHOUT a skullcap: give them an identical neutral haircut (short, tidy, soft side-part, dark hair). No fade, no undercut, no buzz cut, no shaved sides."
- "Preserve composition, poses, background, lighting, clothing and featureless faces (no eyes, no eyebrows, no nose, no mouth) exactly."
- "High quality, sharp, no blur or artifacts."
- Waar van toepassing: "ADAB MOVES wordmark spelled exactly A-D-A-B  M-O-V-E-S."

## QA vóór render

Per asset visueel controleren (view + zonodig `image_tools--zoom_image`):
- Skullcaps nog aanwezig waar ze waren
- Kinderen zonder cap: uniform neutraal kapsel, geen fade
- Logo's leesbaar en correct gespeld
- Hug-flash toont side-hug
- Featureless faces intact

Max 1 herstel-poging per asset bij fout; anders melden i.p.v. doorrenderen.

## Render

- Backup: `mv /mnt/documents/adabmoves-reel-30s.mp4 /mnt/documents/adabmoves-reel-30s.previous.mp4`
- `bun remotion/scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`
- `ffprobe` check: 30s / 900 frames.

## Technisch

- Alleen `imagegen--edit_image` op bestaande jpg's, geen `generate_image`.
- Geen wijzigingen in `remotion/src/**` — scenes verwijzen al naar deze bestandsnamen.
- Tot 7 edit-calls, parallel uitgevoerd.

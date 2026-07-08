## Aanpak — reel-revisie (fase 3)

Reel wordt op drie punten aangepast, minimale asset-generatie.

### ⚠️ Logo-regel (hard, geldt voor ALLE assets)

Het ADAB MOVES-logo moet op elk beeld **scherp, correct gespeld en niet vervormd** zijn — check per asset na generatie:

- **Trainer (rug):** volledig logo — witte "A" + coral swoosh + wordmark "ADAB MOVES" + tagline "BEWEGEN MET BETEKENIS". Recht, leesbaar, geen warping.
- **Kinderkleding:** alleen het compacte merkteken — witte "A" met coral swoosh op de borst. Klein wordmark "ADAB MOVES" eronder mag, maar géén tagline. Symmetrisch, niet gespiegeld, niet verminkt.
- **Gym-banner (achtergrond):** groot A-logo + wordmark, exact zoals in de referentie (`user-uploads://logo_adab.png`).
- Bij twijfel/vervorming: asset opnieuw genereren vóór render. De referentie-logo wordt bij elke `edit_image`-call meegegeven.

### 1. Beginshot terugbrengen (hook)

- `remotion/public/reel30/hook-sideline.jpg` → **vervangen door backup** (`_backup/hook-sideline.jpg` — jongen met ADAB MOVES-hoodie leunt tegen mat, kinderen basketballen op achtergrond). Logo opnieuw controleren. Logo op de hoodie is niet correct in de backup.

### 2. Flash-scenes uit backup + sneller

- `flash-handshake.jpg`, `flash-hug.jpg`, `flash-help.jpg`, `flash-coach.jpg` → **teruggezet vanuit `_backup/**`.
- In `KernFlashes.tsx`: elke flash **60f → 36f** (1.2s per flash). Statement blijft 60f. Nieuwe scèneduur: 60 + 4×36 = **204f** (was 300f).
- In `Reel30Betekenis.tsx`: `S_KERN` 300 → 204. Om totaal op 900f (30s) te houden:
  - `S_AANBOD` 150 → 210 (drie sporen à 70f)
  - `S_OUDERS` 150 → 186
  - Totaal: 120+90+186+204+210+90 = 900f ✅
- Backup-flashes worden per stuk geïnspecteerd; als een logo verminkt is → opnieuw met logo-referentie.

### 3. Nieuwe assets — modest kleding, geen dubbele personages

Alleen scenes waar strikt nodig, met `edit_image` en beide referenties: IMG_1150 (character-stijl) + `logo_adab.png` (logo-integriteit).

Regels per asset:

- Skullcap dekt haar volledig — maar **slechts ~1 op 3 kinderen** draagt er één.
- Shorts **tot over de knie**, of lange broek. Nooit korte shorts.
- Diverse tops (T-shirt, tanktop, hoodie), altijd met **correct compact ADAB MOVES-logo** op de borst (zie logo-regel).
- Divers qua huidskleur (lichtbruin → donker, zoals IMG_1150).
- Geen ogen, glimlach ok.

Assets die opnieuw gegenereerd worden:

- `intro-gym.jpg` — coach op voorgrond van achteren (volledig logo op rug), 4 kinderen achterin met verschillende sporten (voetbal, basket, boog, atletiek), modest kleding, ~1 met skullcap, compact logo op elke top.
- Backup flashes die de kledingregel of logo-regel schenden → opnieuw. Eerst inspectie, dan pas beslissen.

### 4. Render + QA

- Render: `cd remotion && node scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`
- QA-frames via `bunx remotion still` op frames 60, 240, 360, 480, 720, 840. **Per frame checken: logo scherp en correct op alle zichtbare kleding/banners.** Bij fout → asset regenereren en opnieuw renderen.

### Deliverable

Nieuwe `/mnt/documents/adabmoves-reel-30s.mp4` — 30s, hook uit backup, snellere flashes, modest kinderkleding, één personage per flash, **ADAB MOVES-logo overal scherp en correct**.
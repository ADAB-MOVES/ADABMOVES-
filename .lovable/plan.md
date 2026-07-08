## Aanpak

Reel wordt herzien in **twee fases** vanwege beperkte credits: eerst één test-beeld van de trainer laten goedkeuren, dan pas de rest.

### Fase 1 — Backup + trainer-testbeeld (nu uitvoeren)

1. Backup huidige assets:
  - `remotion/public/reel30/*.jpg` → `remotion/public/reel30/_backup/`
  - `/mnt/documents/adabmoves-reel-30s.mp4` → `/mnt/documents/adabmoves-reel-30s.backup.mp4`
2. Genereer **één testbeeld** van de trainer met `imagegen--edit_image` (input = geüploade referentie, om character-consistency vast te leggen):
  - Prompt: coach van achteren, navy tracksuit, groot wit "A" swoosh logo + coral accent + "ADAB MOVES" wordmark + "BEWEGEN MET BETEKENIS" tagline scherp op de rug, Pixar-stijl, geen gezicht. 1024×1792, premium.
  - Output: `remotion/public/reel30/_test/trainer-test.jpg`
3. **STOP** en laat het testbeeld zien ter goedkeuring. Geen verdere credits verbrand.

### Fase 2 — Pas na akkoord

4. Regenereer alle scene-assets met de goedgekeurde trainer als reference-image (via `edit_image` voor consistentie):
  - `hook-sideline.jpg` — coach ver op afstand, kinderen vaag actief (nieuwsgierigheid)
  - `intro-gym.jpg` — wide shot, coach voorgrond van achteren, 4 duidelijk verschillende sporten op achtergrond (voetbal, basketbal, boogschieten, atletiek/kegels)
  - `hero-parents.jpg` — verwijderen; niet meer nodig in nieuwe structuur
  - `flash-handshake.jpg`, `flash-hug.jpg`, `flash-help.jpg`, `flash-coach.jpg` — emotie-flashes, geen gezichten, kleine A-swoosh op kleding (geen wordmark)
5. Copy + timing updates in bestaande scenes (structuur wordt 6 scenes, 900f):

  | #   | Tijd          | Scene                                       | Copy                                                                                                                                                                                  |
  | --- | ------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 1   | 0-4s (120f)   | HookBank                                    | "Wat maakt ons uniek?"                                                                                                                                                                |
  | 2   | 4-7s (90f)    | Belofte-A (nieuw kort)                      | "Welkom bij Adab Moves."                                                                                                                                                              |
  | 3   | 7-12s (150f)  | Belofte-B (VoorOuders hergebruikt/hernoemd) | "Een multisport- en beweegorganisatie voor kinderen en jongeren — islamitisch gefundeerd, toegankelijk voor iedereen." + sub "Groei op elk vlak: fysiek, sociaal, mentaal en moreel." |
  | 4   | 12-22s (300f) | KernFlashes                                 | Statement "Bewegen met betekenis, Karakter begint hier." (60f) + 4 flashes à 60f met vaste badges "Normen&Waarden / "Identiteit" / "Karakter" / "Groei"                               |
  | 5   | 22-27s (150f) | Aanbod                                      | 01 Scholen - Sport en begeleiding · 02 Multisport- wekelijks voor kinderen (7-15 jaar) · 03 Adab day- Sportdagen en evenementen                                                       |
  | 6   | 27-30s (90f)  | CtaEnd                                      | Logo · "Volg @adabmoves voor meer info" · knop "adabmoves.nl" (geen extra tag-regel)                                                                                                  |

6. Bestandswijzigingen:
  - `Reel30Betekenis.tsx` — nieuwe Series-volgorde/duraties, splits Belofte in twee sequences of introduceer `Welkom.tsx` + hergebruik `VoorOuders.tsx` met nieuwe copy.
  - `HookBank.tsx` — copy update.
  - `Belofte.tsx` — copy naar "Welkom bij Adab Moves." (10+ jaar-label eruit).
  - `VoorOuders.tsx` — copy/kop naar organisatie-omschrijving + sub-line met 4 pijlers.
  - `KernFlashes.tsx` — statement + nieuwe badge-labels op vaste positie.
  - `Aanbod.tsx` — labels: Scholen / Multisport voor kinderen (7-15 jaar) / Adab Day.
  - `CtaEnd.tsx` — verwijder "Join the community" tag, tekst wordt "Volg @adabmoves voor meer info".
7. Render: `cd remotion && node scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`.
8. QA-frames op 60 / 240 / 480 / 720 / 840 via `bunx remotion still` — check: geen gezichten, logo scherp op trainer-rug, alleen A-swoosh op kinderen, tekst binnen safe area.

### Deliverable

- Fase 1: één testbeeld ter review.
- Fase 2 (na akkoord): nieuwe `/mnt/documents/adabmoves-reel-30s.mp4` met alle bovenstaande aanpassingen.
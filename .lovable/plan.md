
# ADAB MOVES — Welkomstcarrousel v11

Nieuwe versie van de 4-slide Instagram-carrousel die de exacte 4 kinderen + banner-stijl uit de geüploade afbeelding (IMG_1150) gebruikt, de trainer uit de website overneemt, het echte sitelogo correct op alle shirts plaatst, en de tekst-layout van de website volgt.

## 1. Bron-assets (hergebruiken, niet opnieuw genereren)

- **Kinderen**: de 4 semi-3D cartoon karakters uit `user-uploads://IMG_1150.PNG` worden via crop+rembg geïsoleerd als losse PNG's met transparante achtergrond:
  - Kid A — kufi + basketbal, cream shirt, navy short
  - Kid B — voetbal trap, coral tanktop, navy short
  - Kid C — kufi + boogschieten, navy hoodie + short
  - Kid D — juichend, navy shirt + short
- **Trainer**: overgenomen uit de website (zelfde cartoonstijl als de website-illustraties in `src/components/illustrations/`). Wordt in dezelfde semi-3D stijl als de kinderen geplaatst (coach van voren met baard, kort uniform kapsel, ADAB MOVES jas, geen wenkbrauwen/ogen).
- **Logo**: `src/assets/logo.png` (de echte A-met-coral-swoosh + "ADAB MOVES / BEWEGEN MET BETEKENIS" zoals in IMG_1150 links).

## 2. Logo-fix op kleding

Probleem v10: logo's stonden scheef of in verkeerde kleur op de shirts. Nieuwe aanpak:

- Per geïsoleerd kind handmatig het borstmidden bepalen (silhouet-detectie op het cream/coral/navy shirt-vlak).
- Logo schalen naar ~14% van shirtbreedte, 0° rotatie, exact gecentreerd.
- Kleurforcering identiek aan IMG_1150: 
  - cream shirt → volledig logo (witte A + coral swoosh + navy wordmark)
  - coral tanktop → wit logo + wit wordmark
  - navy shirt/hoodie → wit logo + wit wordmark
- Coach: zelfde logo gecentreerd op de borst van de trainersjas.
- QA: per slide op 100% inzoomen, logo moet volledig binnen het shirt vallen, recht staan, en de juiste kleurvariant zijn.

## 3. Tekst-layout van de website overnemen

Typografie en hiërarchie matchen de website (`src/styles.css` + bestaande routes):

- **Eyebrow** (klein, coral, uppercase, letter-spacing): zoals de section-eyebrows op de site.
- **Headline** (groot, navy, display font — zelfde stack als de website-headings).
- **Body** (navy/ink, regular, comfortabele leading).
- **CTA-balk** onderaan met coral accent + `www.adabmoves.nl` zoals het kaartje linksonder in IMG_1150.
- Cream achtergrond (#FBF7EE), navy frame, coral hairline accent — consistent met v10 en de site.

## 4. 4 slides (inhoud blijft uit v10)

1. **Welkom / Visie** — Kid A (basketbal) + Kid D (juichend), eyebrow "WELKOM", headline "Bewegen met betekenis".
2. **Aanbod / Kickboks & Sport** — Coach vooraan + Kid B (voetbal) op achtergrond.
3. **Multisport & Waarden** — Kid C (boogschieten) + Kid B, eyebrow "ONS AANBOD".
4. **Community / CTA** — Coach met Kid A & Kid D, contactkaart-style footer met telefoon, mail, web (zoals IMG_1150 linksonder).

## 5. Technische pipeline

`/tmp/build_v11.py`:

1. **Isoleer kinderen** uit `IMG_1150.PNG`:
   - Crops per kind (vaste x-ranges uit de banner).
   - `rembg` voor schone transparante PNG's → `/tmp/v11/kid-{a..d}.png`.
2. **Trainer**: render uit de bestaande website-illustratiecomponent (`CoachBack` / coach-front) als PNG via headless SVG→PNG (resvg) op transparante achtergrond → `/tmp/v11/coach.png`.
3. **Logo overlay**: laad `src/assets/logo.png`, maak 3 kleurvarianten (full-color / all-white / navy-on-cream) via channel-manipulatie, plaats per kind op gedetecteerd borstmidden.
4. **Compositie per slide** (1080×1350): cream bg + navy frame + coral hairline + karakters + tekst-blok in website-typografie + footer.
5. **Stijl-pass**: lichte posterize + contrast-tweak zodat het cartoon blijft en niet fotorealistisch oogt.
6. **QA-loop**: per slide thumbnail + 100%-zoom op elk logo en op de coach, opnieuw renderen bij afwijking.

Output: `/mnt/documents/ig-welkom-v11/slide-1..4.png` + `caption.md` (overgenomen uit v10).

Geen wijzigingen aan website-code.

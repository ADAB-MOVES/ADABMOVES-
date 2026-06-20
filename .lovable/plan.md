# ADAB MOVES — Welkomstcarrousel v10 (correcties)

Kleine, gerichte fix-ronde bovenop v9. Geen layout- of tekstwijzigingen.

## 1. Logo's correct op de shirts

Probleem in v9: overlay-logo's staan op sommige slides naast/half buiten het shirt, of in verkeerde hoek.

Aanpak:

- Bron blijft `src/assets/logo.png` (het echte sitelogo) — geen AI-gegenereerd logo.
- Per kind in elke slide handmatig de borst-coördinaten opnieuw kalibreren door eerst het silhouet te detecteren (donker shirt vs cream achtergrond) en het logo midden op de borst te plaatsen, schaal ~12% van de shirtbreedte.
- Strikt recht plaatsen (0° rotatie, geen perspectief).
- Kleurforcering: wit logo op navy shirt, navy logo op cream shirt.
- Coach: logo gecentreerd en recht op de jasrug.
- QA: per slide op 100% inzoomen en controleren dat élk logo binnen het shirt valt, recht staat en de juiste kleur heeft. Bij twijfel coördinaten bijstellen en opnieuw renderen.

## 2. Coach — uniform kapsel, geen wenkbrauwen

Probleem: in v9 wisselt het kapsel van de trainer per slide (soms fade, soms iets langer), en hij heeft wenkbrauwen terwijl de kinderen geen gezichtskenmerken hebben (alleen mond) — dat oogt inconsistent.

Aanpak in de scène-prompts:

- Coach krijgt op élke slide exact **hetzelfde korte uniforme no fade-kapsel** (zelfde lengte, zelfde lijn) — expliciet benoemen: "identical short uniform no fade haircut on every slide, same length, same shape".
- **Geen wenkbrauwen** op de coach — consistent met de kinderen die ook geen ogen/wenkbrauwen hebben, alleen een glimlach. Expliciet: "no eyebrows, no eyes, only a smiling mouth, same face style as the kids".
- Lange volle baard blijft (zoals eerder gevraagd).

## 3. Wat blijft gelijk

- Tekst op alle 4 slides (Slide 1 t/m 4 uit v9) ongewijzigd.
- Cartoon/illustratie-stijl, cream achtergrond, navy frame, coral accenten, slide-indicators.
- Kledingregels uit v9 (donkerblauwe broeken, variatie short-over-knie / jogger met coral streep / lange trainingsbroek, één kufi per slide).
- Trainer-posities uit v9 (vooraan bij kickboks, beide handen zichtbaar bij huddle).

## 4. Technische aanpak

- 4 nieuwe scènes via `imagegen` (premium, 1280×1280) met aangescherpte prompts voor het coach-kapsel en "no eyebrows".
- `/tmp/build_v10.py` op basis van `build_v9.py`:
  - Logo-overlay coördinaten per slide opnieuw bepaald met silhouet-detectie (donkere pixels op cream achtergrond) i.p.v. vaste offsets.
  - Kleurforcering wit-op-navy / navy-op-cream blijft.
  - Rest van de pipeline (posterize, cream bg, frame, typografie, footer) ongewijzigd.
- QA: thumbnail + 100%-zoom op elk logo en op het coach-kapsel/gezicht vóór oplevering.
- Output: `/mnt/documents/ig-welkom-v10/slide-1..4.png` + `caption.md` (overgenomen uit v9).

Geen wijzigingen aan de website-code.

# ADAB MOVES — Welkomstcarrousel v16

Volledige restyle van de carrousel naar de **flat 2D-illustratiestijl** van de geüploade referentie. Tekst, typografie en lay-out blijven gelijk aan v15.

## 1. Nieuwe illustratiestijl (referentie)

De reference toont:
- **Vlakke 2D-illustratie** (geen semi-3D), platte kleurvlakken, subtiele schaduw, lichte korrel.
- **Cream achtergrond** met navy + coral accenten, gym-elementen (vloerlijnen, doelen, schietschijven).
- **Trainer**: tenger, driekwart van achter, korte millimeter-haarcut, grote volle baard van opzij, navy trainingsjack met groot ADAB MOVES-logo op de rug.
- **Kinderen**: subtiele glimlach + kleine ogen toegestaan (zoals reference), alle in ADAB MOVES-trainingspak of -sportshirt met logo op de borst, lange joggers (broek over de knie).

## 2. Per slide

Per slide blijft de samenstelling van v15, maar opnieuw gegenereerd in de nieuwe vlakke stijl:

- **Slide 1 — Welkom**: trainer op voorgrond (driekwart achter), 4 jongens van verschillende lengte/leeftijd in halve cirkel daarachter, allemaal ADAB MOVES-trainingspak (navy + coral details), één met navy kufi. Sportattributen: voetbal, basketbal, boog, bokshandschoenen.
- **Slide 2 — Wat we doen**: triptiek — school (trainer + 2 jongens), multisport-cirkel (trainer + 3 jongens), sportdag met vlaggetjes (trainer + 2 springende jongens). Trainer telkens vooraan.
- **Slide 3 — Waarom wij**: trainer vooraan met hand op schouder van één jongen, 3 andere jongens daarachter. Allemaal ADAB MOVES-tenue.
- **Slide 4 — CTA**: vlakke 2D-illustraties van sportobjecten (basketbal, voetbal, bokshandschoenen, boog) — passend bij de nieuwe stijl, met ADAB-logo op elk object.

## 3. Universele regels

- Stijl: **vlakke 2D**, geen 3D-rendering, subtiele cell-shading, paper-grain afwerking.
- Kinderen: divers in **lengte** (groot en klein door elkaar), haarstijl en huidstoon. Alleen jongens. Eén per slide met navy kufi.
- Kleding: **ADAB MOVES trainingspak of sportshirt** met logo op de borst, lange joggers ruim **tot over de knie** — geen korte shorts meer.
- Trainer: telkens dezelfde — korte buzz-cut, grote volle baard, navy ADAB MOVES jack.
- Gezichtsdetails: subtiele glimlach + kleine ogen (referentie-stijl), geen overdreven detail.

## 4. Logo

- Officieel ADAB MOVES-logo (`/tmp/logo_official.png`) via Pillow als overlay op:
  - rug trainersjack (groot),
  - borst elk kind (klein),
  - sportobjecten slide 4,
  - header van elke slide.

## 5. Lay-out & tekst — ongewijzigd uit v15

- Cream achtergrond + paper-grain, navy hairline frame, header met logo + slide-pil, scenekaart 936×560, coral underline, eyebrow + 2-regel titel (Sora Bold navy/coral split), 3-regel subtekst (Plus Jakarta Sans), footer.
- Tekst van slides 1–4 exact zoals v15.
- `caption.md` ongewijzigd.

## 6. Technische aanpak

- 4 nieuwe scènes via `imagegen` premium (1280×1280), prompts gericht op **flat 2D illustration, cell-shaded, paper-grain, no 3D rendering**.
- `build_v15.py` clonen naar `build_v16.py`, scene-paths en logo-overlay-posities afstemmen op de nieuwe scènes (na visuele inspectie).
- QA-pass per slide-thumbnail op (a) 2D-stijl consistent, (b) trainer voorop met juist kapsel + baard, (c) ADAB MOVES tenue + lange joggers, (d) logo's correct geplakt, (e) tekst leesbaar.
- Output: `/mnt/documents/ig-welkom-v16/slide-1.png` t/m `slide-4.png` + `caption.md`.

Geen wijzigingen aan website-code.

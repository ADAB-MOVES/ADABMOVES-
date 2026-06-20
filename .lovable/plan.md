
# ADAB MOVES — Welkomstcarrousel v15

Doel: nieuwe versie van de 4-slide Instagram-carrousel met sterk verbeterde illustraties (anatomie, kleding, trainer-positie, logo). Tekst, typografie en lay-out uit v13/v14 blijven 1-op-1 behouden. Geen wijzigingen aan website-code — puur content-artefact in `/mnt/documents/ig-welkom-v15/`.

## 1. Illustratie-correcties (nieuwe scènes via premium imagegen)

Universele regels voor elke scène:

- **Trainer altijd op voorgrond**, driekwart van achteren, kinderen op de achtergrond gericht naar trainer. Niet meer kinderen vooraan en coach erachter.
- **Trainer**: tenger postuur, kort kapsel (géén fade), volle duidelijke baard van opzij zichtbaar, navy ADAB MOVES trainingsjack, géén gezichtsdetails (geen ogen, geen neus, geen mond — alleen baard zichtbaar van opzij).
- **Kinderen**: subtiele glimlach (kleine kromme lijn), géén ogen/neus, alleen jongens. Eén jongen per slide draagt navy kufi, de rest hair-only. Kapsels consistent per kind en tussen slides (zelfde kind = zelfde haar).
- **Outfits divers** per kind: hoodie + jogger, t-shirt + sportshort boven de knie (geen strakke broek over de knie), volledige sportset, trainingsjack. Kleuren navy, koraal, cream, off-white.
- **Anatomie strikt**: juist aantal vingers, schouders op de juiste plek, benen natuurlijk, voeten op de grond bij contact met bal/mat, geen zwevende objecten.
- **Sportmateriaal herkenbaar**: basketbal (oranje met lijnen), voetbal (zwart-wit pentagons), bokshandschoenen (rood), boog (houtkleurig). Logo's worden later via overlay toegevoegd, niet door AI getekend.

Per slide:

- **Slide 1 — Welkom**: trainer driekwart van achter op voorgrond, 4 jongens in halve cirkel daarachter met verschillende outfits en sportattributen (voetbal, basketbal, boog, bokshandschoenen). Warme cream gym.
- **Slide 2 — Wat we doen**: drie kleine scènes naast elkaar in één compositie — trainer + 2 jongens op school (links), multisport-cirkel (midden), sportdag met vlaggetjes (rechts). Trainer telkens op voorgrond.
- **Slide 3 — Waarom wij**: trainer vooraan met arm rustend op schouder van één jongen, andere jongens daarachter luisterend. Symboliek van "fundament".
- **Slide 4 — CTA**: close-up van sportmateriaal (basketbal, voetbal, bokshandschoenen, boog) op cream achtergrond. Geen personen — focus op de objecten met logo-overlays.

## 2. Logo correctie (echt sitelogo, niet door AI getekend)

`src/assets/logo.png` wordt via Pillow als overlay op vaste posities geplakt na het inpassen van de scène:

- Op de **rug van het trainersjack** (groot, gecentreerd).
- Op de **borst van elk kind** met ADAB-shirt/hoodie (klein, links borst).
- Klein op elk **sportobject in voorgrond** (basketbal, voetbal, bokshandschoenen, boog) op slide 4.
- In de **header-balk** van elke slide (zoals nu).

Zo is het logo overal 1-op-1 identiek aan adabmoves.nl.

## 3. Tekst, typografie en lay-out — ongewijzigd uit v13/v14

- Tekst van de 4 slides exact zoals in v13/v14 (geen herschrijving).
- Lay-out van `build_v14.py` hergebruikt: cream achtergrond + paper grain, navy hairline frame, header met logo + slide-pil, scenekaart 936×560 met coral underline, eyebrow + 2-regel titel (Sora Bold, navy/coral split), 3-regel subtekst (Plus Jakarta Sans), footer met `adabmoves.nl · @adabmoves`.
- Fonts: Sora-Bold + Plus Jakarta Sans (al lokaal beschikbaar).
- `caption.md` ongewijzigd kopiëren naar v15.

## 4. Technische aanpak

- 4 nieuwe scènes via `imagegen` premium (1280×1280), opgeslagen als `/tmp/v15_scene_1..4.jpg`.
- Build-script `/tmp/build_v15.py` als clone van v14, inclusief nieuwe logo-overlay-stap (`src/assets/logo.png`, geresized en gemaskerd op vaste posities).
- QA-pass per slide-thumbnail op:
  - (a) trainer voorop,
  - (b) anatomie correct,
  - (c) outfits divers,
  - (d) logo overal correct geplakt,
  - (e) tekst leesbaar binnen kaders,
  - (f) kapsels gelijk, geen overloop.
  Bij issue: scène opnieuw genereren of overlay-positie aanpassen.
- Output: `/mnt/documents/ig-welkom-v15/slide-1.png` t/m `slide-4.png` + `caption.md`.

Geen wijzigingen aan website-code.

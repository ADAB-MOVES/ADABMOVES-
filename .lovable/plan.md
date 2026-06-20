# ADAB MOVES — Welkomstcarrousel v9

Doel: alle visuele fouten uit v8 oplossen, kledingvariatie aanbrengen, trainer correct positioneren en de hele set een duidelijke **cartoon/illustratie-look** geven in plaats van semi-fotorealistisch.

## 1. Logo-overlay opnieuw doen

Probleem in v8: het overlay-logo staat scheef op de borst, heeft de verkeerde kleur (grijs/donker i.p.v. wit-op-navy zoals de site), en zit op sommige slides half buiten het shirt.

Aanpak:
- Logo opnieuw plakken vanuit `src/assets/logo.png`, **recht** (geen rotatie, geen perspectief-warp).
- Kleur forceren naar **wit** op donkere shirts, en naar **navy** op cream shirts — niet de originele grijstint laten staan.
- Per scène handmatig de borst-coördinaten kalibreren (i.p.v. één vaste offset voor alle slides), zodat het logo altijd **midden op de borst** zit en mee-schaalt met de jongen.
- Coach: logo groot en gecentreerd op de jasrug, ook recht.
- QA-stap: na overlay elke slide op 100% inzoomen en controleren of het logo recht staat, wit is en binnen het shirt valt. Bij twijfel opnieuw.

## 2. Kleding — meer variatie, donkerblauwe broek

Probleem in v8: alle kinderen dragen exact hetzelfde (zelfde shirt, zelfde grijze jogger). Saai en onrealistisch.

Nieuwe kledingregels:
- **Broeken altijd donkerblauw** (navy `#1F2240`), niet grijs.
- Variatie per kind binnen één slide:
  - Eén kind: lange navy trainingsbroek.
  - Eén kind: navy sportshort **tot over de knie** (niet boven de knie).
  - Eén kind: lange navy jogger met coral streep langs de zijkant.
- Shirts blijven cream of navy met wit ADAB-logo, maar wissel per kind zodat ze niet identiek lijken.
- Per slide nog steeds één jongen met navy kufi, rest zonder, allemaal duidelijk verschillend qua haar en huidtint.

## 3. Trainer-positie en anatomie

Probleem in v8:
- **Slide 2 (kickboks):** coach staat áchter de kinderen, terwijl hij ervoor (of zijaan) hoort te staan om te coachen.
- **Slide 4 (huddle):** één hand van de coach steekt achter zijn rug op een onmogelijke manier uit.
- Algemeen: ledematen soms los of in vreemde hoek.

Aanpak:
- Slide 2 opnieuw genereren met de coach **vooraan links of rechts in beeld**, met het gezicht naar de kinderen toe (we zien zijn profiel of zijn rug-driekwart, maar duidelijk vóór de groep).
- Slide 4 opnieuw genereren met de coach **achter de huddle** met beide handen **zichtbaar op de schouders van twee kinderen** — geen losse hand achter zijn rug.
- Strikte prompt: "geen losse ledematen, geen handen achter de rug, beide armen zichtbaar en logisch verbonden met de schouders".
- Coach blijft: lange volle baard, korte uniforme fade, ADAB-jas met logo op rug.

## 4. Cartoon-look versterken (minder fotorealistisch)

Probleem: v8 voelt semi-realistisch waardoor de "geen ogen, alleen mond" keuze unheimlich oogt.

Aanpak in de scène-prompts:
- Expliciet vragen om **flat 2D cartoon illustration** / **children's book illustration style** / **vector-achtige shading** — geen photoreal, geen 3D render, geen realistische huidtextuur.
- Eenvoudige egale kleurvlakken met lichte cel-shading, dikke contourlijnen mogelijk.
- Achtergrond eveneens cartoon (geschilderde gym, niet gefotografeerd).

Aanpak in post-processing (Pillow):
- Lichte **posterize** (8 levels) + kleine **saturation boost** op de scènefoto, zodat eventuele rest-realisme verder wegtrekt.
- Contrast iets terug (~0.92) zodat het zachter en illustratiever oogt.
- Cream achtergrond, layout, typografie en logo-overlay blijven zoals v8.

## 5. Tekst blijft v8

De tekstherzieningen uit v8 (Slide 1 "Bewegen met betekenis", Slide 2 "Eén visie. Drie vormen.", Slide 3 "Sport met een fundament", Slide 4 "Volg ons. Je hoort erbij.") blijven ongewijzigd — die zat goed.

## 6. Technische aanpak

- 4 nieuwe scènes via `imagegen` (premium, 1280×1280) met cartoon-prompts → `/tmp/v9_scene_*.jpg`.
- `/tmp/build_v9.py` op basis van `build_v8.py`:
  - Per-slide logo-overlay coördinaten (dict), wit-op-donker / navy-op-cream kleurforcing.
  - Posterize + saturation/contrast filter op scènefoto vóór inpassen.
  - Rest van de layout (cream bg, hairline frame, header, eyebrow, titel, subtekst, footer) blijft gelijk.
- QA: thumbnail-check + 100%-zoom-check op logo, kleding en handen vóór oplevering.
- Output: `/mnt/documents/ig-welkom-v9/slide-1..4.png` + `caption.md` (overgenomen uit v8).

Geen wijzigingen aan de website-code — puur content-artefact.

# ADAB MOVES — Welkomstcarrousel v8

Doel: alle vier de slides corrigeren zodat kleding en anatomie kloppen, het echte sitelogo overal even helder en consistent verschijnt, en de tekst warmer en motiverender is voor kinderen & jongeren.

## 1. Anatomie & kleding-check per slide

Wat ik op v7 wil corrigeren:

- **Slide 1 (hero)** — voetbalkind: voetbal hangt los in de lucht, voet maakt geen contact. Boogschutter: pijl al afgeschoten terwijl boog nog gespannen.
- **Slide 2 (kickboksen)** — losse witte "A" op de mat (storend), pantalon van schoppend been zit te strak om de knie.
- **Slide 3 (boog + voetbal)** — middelste jongen heeft handen onnatuurlijk laag; bal ligt los zonder dat iemand er bij is.
- **Slide 4 (huddle)** — middelste jongen heeft de mond verkeerd geplaatst (op de wang i.p.v. midden gezicht); één jongen lijkt geen broek aan te hebben omdat de hand-stapel het verbergt.

Aanpak: scènes opnieuw genereren in premium kwaliteit met striktere prompts:

- Broeken altijd ruim en duidelijk **tot onder de knie** (lange joggers, niet strak).
- Per slide één jongen met **navy kufi**, de rest zonder hoofdbedekking, allemaal duidelijk verschillend qua haar/skin tone.
- Coach altijd **lange volle baard**, korte uniforme fade.
- Alleen monden, geen ogen, glimlach.
- Geen losse letters of teksten in de scène (logo's komen we zelf overheen plakken — zie stap 2).

## 2. Logo overal consistent met echt sitelogo

In v7 worden de logo's door het AI-model getekend, waardoor ze op elke slide net iets anders zijn ("A" zonder boog, met boog, met of zonder cirkel, soms met "ADAB MOVES" eronder). 

Oplossing: na het genereren plakken we het **echte `src/assets/logo.png**` als overlay op:

- Borst van elke jongen (zelfde grootte/positie per kind).
- Rug van de jas van de coach (groter, gecentreerd).

Zo is het logo op elke slide 1-op-1 hetzelfde als op de website.

## 3. Tekst herzien — warmer, motiverender, leesbaar voor alle

Huidige v7 tekst is volwassen-zakelijk ("Sport met een ziel", . v8 wordt duidelijker, warmer en motiverender, met duidelijke lijn en woorden die de doelgroep aanspreken.


| Hier zijn alle 4 slides op een rij:Slide 1 — WELKOMEyebrow: Amsterdam · Haarlem · Almere · ZaandamTitel: Bewegen met betekenisSubtekst: ADAB MOVES is een multisport- en beweegorganisatie voor kinderen — voor scholen, ouders en gemeenschap. Islamitisch gefundeerd, toegankelijk voor iedereen.Slide 2 — WAT WE DOENEyebrow: Ons aanbodTitel: Eén visie. Drie vormen.Subtekst: Sport en begeleiding voor scholen tussen en na schooltijd. Wekelijkse multisport voor kinderen van 8 t/m 12 jaar. En sportdagen op maat voor scholen, gemeenten en buurthuizen.Tags: Scholen · Multisport · ADAB DaySlide 3 — WAAROM WIJEyebrow: Waarom ADAB MOVESTitel: Sport met een fundamentSubtekst: Wij geloven dat bewegen meer is dan presteren. Bij ons groeit een kind fysiek, sociaal, mentaal én moreel — vanuit duidelijke waarden, met behoud van eigen identiteit.Slide 4 — CTAEyebrow: Welkom in de communityTitel: Volg ons. Je hoort erbij.Subtekst: Blijf op de hoogte via @adabmoves. Binnenkort meer over ons aanbod voor kinderen, scholen en events. | &nbsp; | &nbsp; | &nbsp; |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| &nbsp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &nbsp; | &nbsp; | &nbsp; |
| &nbsp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &nbsp; | &nbsp; | &nbsp; |
| &nbsp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &nbsp; | &nbsp; | &nbsp; |


Cursief = coral accentwoord, vet/navy = hoofdwoord.

## 4. Technische aanpak

- 4 nieuwe scènes via `imagegen` (premium, 1280×1280) — `/tmp/v8_scene_*.jpg`.
- Pillow-script `/tmp/build_v8.py`, gebaseerd op v7-layout (cream achtergrond, witte ruimte, hairline frame, header met logo + slide-pil, scenekaart, eyebrow + 2-regel titel met coral accent, subtekst, footer).
- Nieuwe stap: na het inpassen van de scène plakken we `src/assets/logo.png` (geresized) met masker op vaste posities over de borst van elke jongen en de jasrug van de coach, met lichte schaduw zodat het op stof "ligt".
- QA: alle 4 slides als thumbnails inspecteren vóór oplevering; bij anatomie- of logo-issues opnieuw genereren.
- Output: `/mnt/documents/ig-welkom-v8/slide-1..4.png` + `caption.md`.

Geen wijzigingen aan de website-code — puur content-artefact.
## Doel
Alle foto's op de site vervangen door een consistente, vrolijke beeldstijl die past bij ADAB Moves: blije kinderen met bedekte awrah, geen gezichten in beeld (achterhoofden of lichaam), trainers van achter met identieke baard/kapsel en logo op de kleding. Stijl en kleurpalet sluiten aan bij het logo en de typografie (warm cream, deep navy, coral accent).

## Afbeeldingen om te vervangen
Vier bestaande assets worden 1-op-1 vervangen (zelfde paden, zodat geen imports breken):

1. `src/assets/hero.jpg` — Hero homepage
   - Groep blije kinderen van achteren, sportkleding (lange mouwen + lange broek, meisjes met hoofddoek), springend/handen omhoog in een lichte sporthal. Warme natuurlijke belichting.

2. `src/assets/community.jpg` — ADAB Moves Community
   - Kinderen van achter/zijkant in beweging tijdens multisport (voetbal/basketbal), bedekte kleding, dynamische sfeer. Geen gezichten zichtbaar.

3. `src/assets/coach.jpg` — Trainers / scholen aanbod
   - Twee trainers van achteren gefotografeerd, beide met dezelfde korte baard en hetzelfde nette kapsel, identieke ADAB Moves trainingsjas met logo op de rug, kijkend naar een groep kinderen op een schoolplein/gymzaal.

4. `src/assets/event.jpg` — ADAB Day events
   - Vrolijke eventsfeer: kinderen van achteren met armen omhoog, vlaggetjes/decor in coral + navy, buiten of in een grote hal. Geen gezichten.

## Stijlrichtlijnen (consistent over alle 4)
- Palet: warm cream achtergrond, deep navy en coral accenten (matchend met site).
- Licht: zacht, natuurlijk, warm — geen harde flits.
- Compositie: cinematisch, ruimte voor tekstoverlay (vooral hero).
- Mensen: uitsluitend achterhoofden, silhouetten of lichaam vanaf de schouders/rug. Awrah bedekt (lange mouwen, lange broeken/rokken, meisjes met hoofddoek).
- Trainers: identieke uitstraling (baard + kapsel), logo zichtbaar op kleding.
- Sfeer: blij, energiek, netjes, professioneel.
- Geen tekst in de afbeelding zelf.

## Aanpak (technisch)
- Gebruik Nano Banana Pro (`google/gemini-3-pro-image-preview`) via de Lovable AI Gateway voor hoge kwaliteit.
- Eén Node-script `/tmp/gen-images.ts` dat 4 prompts achter elkaar uitvoert en de PNG's direct schrijft naar `src/assets/{hero,community,coach,event}.jpg` (overschrijft bestaande bestanden, imports blijven werken).
- Per afbeelding een aspectratio-passende prompt (hero breed, overige standaard).
- Geen codewijzigingen aan routes of componenten nodig — alleen assets vervangen.
- Na generatie visueel controleren (`code--view` op de bestanden) en bevestigen dat de stijl klopt.

## Geen wijzigingen aan
- Routes, componenten, navigatie, typografie of kleuren.
- Logo-bestanden.

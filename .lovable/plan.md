## Doel

Alle scene-afbeeldingen op de site vervangen door nieuwe illustraties in **exact dezelfde stijl** als jouw twee referentiebeelden (IMG_0925-2 en IMG_0878-2), maar met andere scenario's en strikte regels voor personages.

## Stijlregels (gelden voor élke nieuwe afbeelding)

- Vlakke cartoon-illustratie, navy `#1F2240` + koraal `#E8784E` + cream `#FBF7EE`, lichte korrel.
- Indoor gym / school / buiten setting passend bij het onderwerp.
- ADAB MOVES logo zichtbaar op kleding van trainer + kinderen.

## Personageregels

- **Geen gezichten** — alle personen van achteren, opzij of met gezicht uitgegumd.
- **Islamitisch verantwoord gekleed**: lange mouwen, lange broek of joggingbroek, geen strakke kleding. Eventueel skullcap / qalansuwa.
- **Trainers met baard zonder snor**, nette korte haarlijn, geen overloop tussen baard en haar.
- **3 verschillende trainers** door de site:
  1. Trainer A — donkere baard, navy trainingsjack (zoals referentie)
  2. Trainer B — bruine baard, koraal/cream polo + navy broek
  3. Trainer C — donkere baard, getrimde kapsel , stevigere postuur, navy hoodie

## Nieuwe afbeeldingen (10 stuks, vervangen 1-op-1)


| Bestand                        | Scenario                                                                       | Trainer |
| ------------------------------ | ------------------------------------------------------------------------------ | ------- |
| `scene-hero.jpg`               | Gym van achteren, trainer kijkt naar groep kinderen (zoals referentie)         | A       |
| `scene-community-kids.jpg`     | Kinderen met basketbal/voetbal, trainer wijst (rug naar camera)                | B       |
| `scene-community-teens.jpg`    | Tieners boksen + pull-ups, trainer coacht van zijkant                          | A       |
| `scene-community-brothers.jpg` | Volwassen broeders krachttraining, trainer demonstreert                        | C       |
| `scene-scholen.jpg`            | Schoolgymzaal, parcours met pylonen, kinderen rennen                           | B       |
| `scene-adab-day.jpg`           | Buitenevent met springkussen + boogschieten + voetbal                          | C       |
| `scene-events.jpg`             | Familie-event, ouders + kinderen, hesjes                                       | A       |
| `scene-methode.jpg`            | Trainer hurkt naast kind (van zijkant, gezichten weg), pijlen/iconen drijven   | B       |
| `scene-verhaal.jpg`            | Oorsprongverhaal: trainer schrijft op schoolbord met ADAB-logo                 | A       |
| `scene-verhuur.jpg`            | Materiaal: ballen, pylonen, springkussen — geen mensen of trainer C van achter | C       |


## Mascotte

De huidige `mascot.png` (springende jongen met bokshandschoenen) bevat een gezicht. Twee opties:

- **A.** Regenereren met hoofd licht weggedraaid / skullcap dieper / oogjes als simpele streepjes (in lijn met de "geen gezichten"-regel maar nog steeds herkenbaar als mascotte).
- **B.** Mascotte zonder gezicht — alleen rug-pose, springend.

Standaard ga ik voor **A** tenzij jij B kiest.

## Implementatie

1. Genereer 10 nieuwe `.jpg` scenes met `imagegen` (premium, 16:9), één voor één met QA per beeld.
2. Regenereer `mascot.png` (variant A) met transparante achtergrond.
3. Geen code-wijzigingen nodig — alle imports verwijzen al naar deze bestandsnamen.
4. Visuele controle: alle 10 scenes naast elkaar bekijken, checken op gezichten, baardregel en stijlconsistentie. Herregenereer wat afwijkt.

## Buiten scope

- Geen layout-, tekst- of routewijzigingen.
- Geen nieuwe afbeeldingen toevoegen buiten deze 10 + mascotte.
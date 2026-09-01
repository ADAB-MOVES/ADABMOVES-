# Plan: Pauzesport Flyer ADAB MOVES (1 pagina A4, PDF)

## Doel

Eén rustige, overzichtelijke A4-flyer (staand) in ADAB MOVES-huisstijl, gericht op álle basisschoolkinderen (groep 1–8, ca. 4–12 jaar). De directie mailt de flyer door en laat hem in de klas zien. Alleen als PDF-bijlage — niet op de website of social media plaatsen.

## Taal & toon

Vrolijk, energiek en direct; speels genoeg voor de onderbouw, niet kinderachtig voor groep 7/8. Geen baby-taal.

## Inhoud

1. **Kop** — ADAB MOVES-logo + titel "Pauzesport" met pakkende ondertitel, bv. "Beweeg mee in de pauze!" of "Sporten, spelen, samen!"
2. **Wie we zijn** — "Wij zijn ADAB MOVES! Wij sporten samen met jullie tijdens de pauze. We zorgen voor een leuke en veilige pauze, waarin iedereen mag meedoen."
3. **Wat doen we tijdens pauzesport** — max. 4–5 punten (bullets of iconen), actief geformuleerd:
  - Leuke buitenspellen
  - balspellen en Teamspellen
  - Challenges en wedstrijdjes
  - Altijd samen, altijd met respect
4. **Uitnodigende afsluitzin** — korte drie-slag, bv. "Kom spelen, kom bewegen, kom erbij!"
5. **Onderaan** — [www.adabmoves.nl](http://www.adabmoves.nl) + @adabmoves (Instagram) op de flyer zelf. Geen telefoonnummer of e-mailadres.

## Stijl (consistent met website en eerdere PDF's)

- Kleuren: navy `#1F2240`, coral `#E8784E`, cream `#F7F5F0` / `#FBF7EE`.
- Lettertypes: Sora (koppen), Plus Jakarta Sans (lopende tekst).
- Logo's: uit `/mnt/documents/adabmoves-logo/` (hoge resolutie), logo op lichte achtergrond.
- Lay-out: veel witruimte, geen drukke vlakken, alles netjes binnen de marges.

## Technische aanpak

- HTML-pagina (A4 staand) in `/tmp/pauzesport-flyer/`, renderen naar PDF via Playwright/Chromium (zelfde pipeline als spelboek en werkwijze).
- Output: `/mnt/documents/adabmoves-pauzesport-flyer.pdf`.
- Distributie: alleen als PDF-bijlage per e-mail.

## Kwaliteitscontrole

- Elke pagina naar afbeelding renderen en controleren: tekst binnen kaders, geen overlap, logo's scherp en correct, kleuren/lettertypes volgens huisstijl.
- Leesbaarheid en toon checken voor de hele leeftijdsrange (4–12 jaar).
- Bij fouten: aanpassen en opnieuw renderen tot foutloos.
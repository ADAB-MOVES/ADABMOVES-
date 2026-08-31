# Plan: Pauzesport Flyer voor kinderen (1 pagina A4, PDF)

## Doel
Eén kalme, overzichtelijke A4-flyer in de ADAB MOVES huisstijl, geschreven voor kinderen in de klas die pauzesport gaan doen.

## Inhoud (beknopt)
1. **Kop** — ADAB MOVES-logo + titel "Pauzesport" met korte, vrolijke ondertitel voor kinderen.
2. **Wie we zijn** — 2-3 korte zinnen, kindertaal: we sporten samen op school, bewegen is leuk, iedereen doet mee.
3. **Wat doen we tijdens pauzesport** — korte bulletlijst: leuke buitenspellen, voetbal en balspellen, teamspellen, altijd samen en met respect.
4. **Uitnodigende afsluiter** — korte drievoudige oproep in de stijl van de site ("Kom spelen!"), uitnodigend en rustig.
5. **Onderaan** — website www.adabmoves.nl + social media (@adabmoves, Instagram), geen telefoonnummer of e-mail.

## Stijl (consistent met de site en eerdere PDF's)
- Kleuren: navy `#1F2240`, coral `#E8784E`, cream `#F7F5F0` / `#FBF7EE`.
- Lettertypes: Sora (koppen) + Plus Jakarta Sans (tekst).
- Logo's uit `/mnt/documents/adabmoves-logo/` (hoge resolutie).
- Rustige lay-out: veel witruimte, geen drukke vlakken, alles netjes binnen de randen.

## Technische aanpak
- HTML-pagina (A4-formaat) in `/tmp/pauzesport-flyer/` en renderen naar PDF via Playwright/Chromium (zelfde pipeline als het spelboek en de werkwijze).
- Output: `/mnt/documents/adabmoves-pauzesport-flyer.pdf`.

## QA
- Elke pagina naar afbeelding renderen en controleren: tekst binnen vakjes, geen overlap, logo's correct, kleuren en lettertypes kloppen.
- Bij fouten: script bijstellen en opnieuw renderen tot schoon.

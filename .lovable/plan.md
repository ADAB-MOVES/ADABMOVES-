# Eén beeldstijl voor de hele site

Doel: alle subpagina's gebruiken dezelfde fotografische stijl als de homepage (zoals `hero.jpg`, `community.jpg`, `coach.jpg`, `event.jpg`). De cartoon scene-illustraties met de springende mascotte verdwijnen van alle pagina's en worden vervangen door nieuwe afbeeldingen in homepage-stijl.

## Wat er gebeurt

1. **Nieuwe afbeeldingen genereren** in exact dezelfde stijl als de huidige homepage-foto's — warme cream/coral sfeer, zachte lichtval, redactionele uitsnede — voor elke plek waar nu een cartoon scene staat:
   - `scholen-photo.jpg` — gymles op een school
   - `community-kinderen.jpg` — kinderen in beweging in een sportzaal
   - `community-tieners.jpg` — tieners trainend
   - `community-broeders.jpg` — volwassen broeders sportend
   - `adab-day.jpg` — event-sfeerbeeld
   - `methode-photo.jpg` — coach met groep
   - `verhaal-photo.jpg` — sfeerbeeld voor "Ons verhaal"

2. **Scene-component vervangen** door gewone `<img>` tags op alle pagina's die nu `<Scene variant="…" />` gebruiken:
   - `src/routes/aanbod.scholen.tsx`
   - `src/routes/aanbod.events.tsx`
   - `src/routes/aanbod.community.index.tsx`
   - `src/routes/aanbod.community.kinderen.tsx`
   - `src/routes/aanbod.community.tieners.tsx`
   - `src/routes/aanbod.community.broeders.tsx`
   - `src/routes/over-ons.methode.tsx` (waar `scene-methode` gebruikt zou worden)
   - `src/routes/over-ons.verhaal.tsx` (waar `scene-verhaal` gebruikt zou worden)

3. **Mascotte-element verwijderen** van pagina's waar de springende jongen los geplaatst staat (`MascotFloater`) — de homepage-stijl gebruikt geen losse cartoon-mascotte. De `MascotFloater` component blijft bestaan maar wordt nergens meer ingevoegd.

4. **Runtime-fout oplossen**: `src/routes/index.tsx` importeert `MascotPanel.tsx` die niet bestaat — die import en het gebruik worden weggehaald.

5. **Oude cartoon-assets opruimen** uit `src/assets/`: `scene-*.jpg`, `mascot.png`, `reference-*.png/jpg` — deze worden nergens meer gebruikt na de vervanging.

## Wat ongemoeid blijft

- De homepage zelf — die is al in de juiste stijl.
- Logo's, kleuren, typografie, navigatie, WhatsApp-knop.
- De `Scene.tsx` en `Character.tsx` componenten blijven in de codebase staan voor het geval ze later nodig zijn, maar worden niet meer aangeroepen.

## Technische notitie

Nieuwe afbeeldingen worden gegenereerd met `imagegen` in dezelfde prompt-stijl als de bestaande homepage-foto's (warm cream/coral palet, natuurlijke lichtval, ADAB MOVES brand-sfeer). Daarna worden alle imports in de betreffende route-bestanden bijgewerkt en wordt de `<Scene>`-aanroep vervangen door een standaard `<img>` met `rounded-2xl` zoals op de homepage.

# Faceless, modest cartoon-stijl over de hele site

## Wat ik fout deed
Ik generereerde nieuwe illustraties met gezichten en blote knieën (korte broeken). Dat past niet bij ADAB MOVES.

## Nieuwe richtlijn voor élke afbeelding
- **Geen gezichten** — karakters van achteren, met petjes/skullcaps die het hoofd bedekken, of zachte abstracte silhouetten zonder oog/mond detail.
- **Bedekte knieën** — altijd lange trainingsbroeken of jogging, nooit korte broeken.
- **Behoud cartoon-stijl** — platte editorial vector, cream achtergrond, navy `#1F2240` + coral `#E8784E`, ADAB MOVES logo op de kleding.
- **Doelgroep per beeld bepaalt scene** maar gezichten/knieën regels gelden altijd.

## Aanpak

1. **Alle huidige "human face" foto's verwijderen** uit `src/assets/`:
   - `hero.jpg`, `community.jpg`, `coach.jpg`, `event.jpg` (homepage)
   - `community-2.jpg`, `events-2.jpg`, `methode.jpg`, `verhaal.jpg`, `scholen.jpg` (subpagina's)
   - `scene-*.jpg` (3D-stijl set)
   - `scholen-photo.jpg`, `community-kinderen.jpg`, `community-tieners.jpg`, `community-broeders.jpg` (mijn nieuwe foute set)
   - `mascot.png`, `reference-*` (referentie/oud)

2. **Nieuwe faceless cartoon set genereren** in één consistente stijl:
   - `hero.jpg` — coach van achteren met groep kinderen in trainingspak, sportzaal
   - `scholen.jpg` — kinderen in lange broek tijdens gymles, van opzij/achter
   - `community-kinderen.jpg` — kinderen in lange sportbroek met sporten, geen gezichten
   - `community-tieners.jpg` — tieners trainend in lange broek, van achter/zij
   - `community-broeders.jpg` — broeders sportend in lange broek
   - `events.jpg` — sfeerbeeld ADAB Day, families van achter/zij
   - `methode.jpg` — coach + kind van achter
   - `verhaal.jpg` — sfeerbeeld zonder gezichten
   - `community.jpg` — groep van achter, high-five

3. **Alle route-bestanden hergebruiken dezelfde nieuwe assets** — geen `Scene.tsx`/`Character.tsx` SVG meer nodig op pagina's; pure `<img>` met `rounded-2xl` zoals al gebeurt.

4. **Runtime-fout opruimen** (`MascotPanel` import als die nog ergens staat) en `MascotFloater` niet meer plaatsen op pagina's.

## Bestanden die updates krijgen
Imports vervangen in:
- `src/routes/index.tsx`
- `src/routes/aanbod.index.tsx`
- `src/routes/aanbod.scholen.tsx`
- `src/routes/aanbod.events.tsx`
- `src/routes/aanbod.community.index.tsx`
- `src/routes/aanbod.community.kinderen.tsx`
- `src/routes/aanbod.community.tieners.tsx`
- `src/routes/aanbod.community.broeders.tsx`
- `src/routes/over-ons.index.tsx`
- `src/routes/over-ons.methode.tsx`
- `src/routes/over-ons.verhaal.tsx`
- `src/routes/over-ons.missie-visie.tsx`

`<Scene variant="…">` aanroepen worden vervangen door `<img src={…} alt="…" className="w-full h-auto rounded-2xl" loading="lazy" />`.

## Wat hetzelfde blijft
- Layout, typografie, kleuren, navigatie, WhatsApp-knop, content/teksten.
- Logo (`logo.png`, `logo-dark.png`).

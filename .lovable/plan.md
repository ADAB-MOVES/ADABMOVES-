## Doel

De AI-gegenereerde foto's (echte/half-echte mensen) volledig van de site halen en vervangen door **één consistente mascotte**: het jongetje uit je upload — springend, met kufi (gebedsmuts), in een grijze trui met **ADAB MOVES logo** op de borst. Hij wordt los, zonder achtergrond, op de site geplaatst (cream of navy vlakken eromheen).

## Wat er nu nog AI-foto's zijn

Deze bestanden worden nog actief gebruikt en moeten weg uit het beeld:

- `hero.jpg`, `community.jpg`, `coach.jpg`, `event.jpg` — home, aanbod-index, over-ons
- `scholen.jpg`, `verhaal.jpg`, `methode.jpg` — sub-pagina's
- `community-2.jpg`, `events-2.jpg` — niet meer gebruikt, opruimen

## Stappen

**1. Mascotte vastleggen** (1 hoofdbestand + 3 poses, allemaal transparante PNG)

Op basis van je upload (`reference-boy.png`) genereer ik via image-edit:

- `mascot-jump.png` — springend met armen omhoog (jouw upload) + ADAB MOVES wordmark op de trui
- `mascot-wave.png` — staand, zwaaiend, zelfde outfit
- `mascot-point.png` — wijzend naar tekst/CTA
- `mascot-coach.png` — zelfde stijl maar volwassen coach met fluitje (voor "scholen" en "methode")

Allemaal **transparante achtergrond**, zelfde lijnstijl, navy/cream/coral palet, ADAB MOVES logo zichtbaar op kleding.

**2. Routes herschrijven — mascotte op gekleurd vlak i.p.v. foto**

Per pagina vervang ik de `<img src=hero.jpg>` blokken door een compositie: cream of navy paneel + mascotte-PNG erop + tekst ernaast. Geen rasterfoto's meer.

- `src/routes/index.tsx` — hero: springende mascotte op cream paneel naast titel; "community" sectie: wavende mascotte; "coach/methode" sectie: coach-mascotte
- `src/routes/aanbod.index.tsx` — 4 tegels met telkens een mascotte-pose op cream/coral vlak
- `src/routes/over-ons.index.tsx`, `over-ons.verhaal.tsx`, `over-ons.methode.tsx`, `over-ons.missie-visie.tsx` — mascotte-composities i.p.v. AI-foto's
- `src/routes/aanbod.scholen.tsx`, `aanbod.events.tsx`, `aanbod.community.*` — mascotte-poses passend bij het thema

**3. MascotFloater & Scene opruimen**

- `MascotFloater.tsx` gebruikt nu nog de SVG-`Character`. Vervang door `<img src={mascotWave} />` (transparante PNG), idle-float behouden.
- `Scene.tsx` (SVG-poppetjes scenes) verwijderen — niet meer nodig nu er een echte mascotte is.

**4. Oude assets verwijderen**

Verwijder uit `src/assets/`: `hero.jpg`, `community.jpg`, `community-2.jpg`, `coach.jpg`, `event.jpg`, `events-2.jpg`, `scholen.jpg`, `verhaal.jpg`, `methode.jpg`, en de ongebruikte `scene-*.jpg`. Houd: `mascot-*.png`, `logo.png`, `logo-dark.png`, `reference-boy.png`.

## Wat er bewust **niet** verandert

- Layout, navigatie, mega-menu, WhatsApp-knop en routes blijven exact zoals nu.
- Geen tekstwijzigingen, geen nieuwe pagina's.
- Geen echte mensenfoto's terug op de site (volgt project-memory).

## Resultaat

Eén herkenbare mascotte (het jongetje uit jouw upload, met ADAB MOVES op de trui) verschijnt door de hele site in verschillende poses, los op cream/navy vlakken — geen AI-mensen meer.

# Drie aanpassingen

## 1. Contact-knop in navigatie krijgt eigen kleur

In `src/components/SiteHeader.tsx`:
- De "Contact" link in zowel desktop- als mobiele nav krijgt een coral pill-styling i.p.v. de standaard tekstlink — zo valt hij op als primaire actie naast de overige nav-items.
- Desktop: rounded-full, coral achtergrond, cream tekst, lichte hover-lift.
- Mobiel: zelfde coral pill, full-width binnen het drawer-menu.
- De underline-animatie wordt voor Contact uitgeschakeld (past niet bij een knop).

Geen wijziging in de menu-structuur of routing.

## 2. Homepage-titel & eyebrow herschreven (minder "islam")

In `src/routes/index.tsx` (alleen de hero + meta tags, rest blijft):

- **Eyebrow** (was: "De islamitische multisport-organisatie van Nederland") → wordt korter en zelfverzekerd, bv:
  `"Multisport met betekenis — voor scholen, ouders en kinderen"`
- **H1** wordt pakkender, ritmischer:
  `"Bewegen met betekenis,"` *(italic coral)* `"sterk karakter begint hier."`
- **Sub-paragraaf** wordt herschreven zodat "islam" maar één keer voorkomt:
  `"ADAB MOVES bouwt aan karakter via sport. We werken vanuit een islamitische fundering en zijn toegankelijk voor iedereen — basis- en middelbare scholen, ouders en kinderen door heel Nederland."`
- **Meta title / og:title / og:description** worden bijgewerkt zodat "islamitisch" hooguit één keer voorkomt en de nadruk verschuift naar *multisport + karakter*.

Geen andere secties op de homepage worden aangeraakt.

## 3. Nieuwe geanimeerde intro-video

De huidige `/intro.mp4` is een Ken Burns over stilstaande foto's. We vervangen hem door een echte animatie waarin gebrande ADAB MOVES-kinderen sporten.

### Wat de video toont (ca. 18–22 seconden, 1920×1080, 30fps)

Eén doorlopende cream-kleurige gym-scène (`#FBF7EE`, navy `#1F2240`, coral `#E8784E`) met snelle cuts tussen 5 sport-acties — telkens een ander kind (huidskleur en haar wisselen, ~1 op 3 met taqiyah, geen ogen, alleen lachende mond, ADAB MOVES-shirt of -hoodie):

1. **Voetbal** — kind schopt bal, been zwaait, bal vliegt weg
2. **Kickboksen** — kind stoot/trapt naar een coral focus-pad
3. **Basketbal** — kind dribbelt en gooit; bal stuitert ritmisch
4. **Bootcamp** — kind springt (jumping-jacks / box-jump op vaulting box)
5. **Fitness** — kind doet push-ups of squat met halter

Plus twee terugkerende beelden:
- **Coach van achter** in navy jacket met duidelijk zichtbaar ADAB MOVES-logo (stylized A + coral swoosh + "ADAB MOVES / BEWEGEN MET BETEKENIS") in intro en outro.
- **Outro-kaart** met logo + payoff *"Bewegen met betekenis"* + `adabmoves.nl`.

### Hoe het gebouwd wordt (technisch)

In `remotion/`:
- Vervang `src/scenes/KenBurns.tsx`-gebruik door 5 nieuwe scene-componenten in `remotion/src/scenes/`: `Football.tsx`, `Kickboxing.tsx`, `Basketball.tsx`, `Bootcamp.tsx`, `Fitness.tsx`. Elke scene is een SVG-animatie (geen foto) opgebouwd uit primitives (ellipsen, paden, paths) in de brand-stijl.
- Animatie via `useCurrentFrame()` + `interpolate()` / `spring()` — bv. been-rotatie voor voetbalschop, vuist-translate voor stoot, bal-y met sinus voor dribbel.
- Alle karakters volgen de illustration-rules memory: lachende mond, géén ogen, ~1 op 3 skullcap, ADAB MOVES-shirt (coral A op de borst), diverse haarstijlen/skin tones.
- Coach-component (`Coach.tsx`) toont rugzijde met scherp ADAB MOVES-logo op jasje.
- `MainVideo.tsx` wordt herschreven met `TransitionSeries` (fade + slide) tussen scenes; intro met coach-shot + headline "Bewegen met betekenis", outro met logo-lockup.
- Fonts: `Anton` voor display, `Inter` voor body (al geladen in project).
- Renderen via `node scripts/render-remotion.mjs` → output naar `public/intro.mp4` (overschrijft huidige), en als backup `remotion/public/intro-render.mp4`.

### Quality check
- Per scene één still renderen (`bunx remotion still`) om te verifiëren dat: kleding het logo toont, géén ogen zichtbaar zijn, monden glimlachen, kleuren kloppen.
- Volledige MP4 onder 30s, onder 10MB doelgrootte.

## Buiten scope
- Geen wijzigingen aan andere pagina's, routes, backend of styling buiten bovenstaande punten.

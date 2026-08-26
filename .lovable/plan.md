SEO meta-tags aanpassen op homepage

## Doel
De homepage van ADAB MOVES krijgt de exacte title, description en Open Graph / Twitter Card tags die de gebruiker heeft doorgegeven.

## Huidige situatie (bevestigd)
- Er is geen statisch `index.html`; dit is een TanStack Start-project.
- De homepage-meta staat in `src/routes/index.tsx` onder de `head()`-optie.
- De fallback meta voor alle pagina's staat in `src/routes/__root.tsx`.
- `index.tsx` overschrijft nu al title, description, og:title, og:description, og:url, og:image, twitter:image en canonical.
- `twitter:title` en `twitter:description` ontbreken in de leaf route en worden overgenomen uit `__root.tsx`.
- `og:image` / `twitter:image` wijzen nu naar de geïmporteerde `hero.jpg`.

## Gewenste wijzigingen
1. In `src/routes/index.tsx` de `head()` aanpassen:
   - `title` → `"ADAB MOVES — Multisport voor kinderen & jongeren"`
   - `og:title` → dezelfde tekst
   - `name="description"` en `og:description` → `"ADAB MOVES is een multisportaanbieder voor kinderen en jongeren in Amsterdam en omstreken. We geven wekelijkse sportlessen, workshops en sportdagen voor scholen."`
   - `og:url` → `https://www.adabmoves.nl/`
   - `canonical` → `https://www.adabmoves.nl/`
   - `og:image` en `twitter:image` laten verwijzen naar het huidige hero-beeld (passend, herkenbaar ADAB MOVES).
   - `twitter:title` en `twitter:description` toevoegen met dezelfde tekst als title/description.

2. In `src/routes/__root.tsx` de fallback meta gelijk trekken, zodat ook andere routes consistente defaults hebben:
   - fallback `title` en `og:title` → `"ADAB MOVES — Multisport voor kinderen & jongeren"`
   - fallback `description`, `og:description`, `twitter:description` → `"ADAB MOVES is een multisportaanbieder voor kinderen en jongeren in Amsterdam en omstreken. We geven wekelijkse sportlessen, workshops en sportdagen voor scholen."`

3. Build draaien om te verifiëren dat de meta-wijzigingen geen fouten geven.

## Technische details
- De huidige `og:image` is de geïmporteerde `hero.jpg`. Bij het builden wordt dit een gehashte asset-URL; voor social previews is een absoluut pad betrouwbaarder. We laten de import staan of zetten deze om naar `https://www.adabmoves.nl/hero.jpg` indien het origineel op die route beschikbaar is.
- Twitter Card `summary_large_image` blijft behouden.
- `og:type` blijft `website` op root; de leaf route hoeft dit niet te herhalen.

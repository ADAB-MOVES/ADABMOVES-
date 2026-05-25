# Plan: site afronden voor lancering

## 1. Islamitische positionering blijft op homepage
Homepage hero en meta behouden huidige boodschap. Geen wijziging.

## 2. "Basisscholen" → "Basis- en middelbare scholen"
Consequentie:
- `src/routes/index.tsx` — track-titel "Basisscholen" → "Basis- & middelbare scholen"; meta description aanpassen.
- `src/routes/aanbod.scholen.tsx` — hero-paragraaf en meta description aanpassen.
- `src/routes/over-ons.verhaal.tsx` — milestone tekst aanpassen.
- `src/routes/aanbod.index.tsx` — staat al goed.

## 3. Verhuur-afbeelding vervangen door "Binnenkort"-tegel
Op `/aanbod` (hub) de verhuur-kaart: geen foto, maar een gestijlde 16:10-tegel met gradient, groot "Binnenkort"-label + korte subtekst. Geen nieuw asset.

## 4. Pakkende welkomst-pop-up
Component `src/components/IntroPopup.tsx`:
- Na ~2 sec scale+fade-in, 1× per browser (`localStorage`).
- Card: "Welkom bij ADAB MOVES", korte pitch, twee knoppen (aanbod / contact), sluitknop X.
- ESC / overlay-click / reduced-motion ondersteuning.
- Gemount in `__root.tsx`. Styling met bestaande tokens.

## Wat niet verandert
- Geen extra pagina's of backend.
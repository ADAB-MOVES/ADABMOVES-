# Welkomstpost v4 — "wow" editie

Doel: één hero-Instagram-post (1080×1080) die de pagina lanceert met maximale impact, exact in de visuele taal van adabmoves.nl.

## Wat ik aanpas t.o.v. v3

### 1. Nieuwe scene-illustratie (premium kwaliteit)
Zelfde flat 2D vector-stijl als de site-hero (`src/assets/hero.jpg`), maar opnieuw gegenereerd op hogere resolutie (1536×1536) met deze exacte specs:

- **3 jongens** in actie, allemaal met:
  - Navy ADAB MOVES t-shirt met het **echte site-logo** op de borst (coral A met swoosh + wordmark)
  - **Lange grijze joggingbroek tot over de enkels** — knieën volledig bedekt
  - Glimlach, géén ogen (brand-regel)
- **Precies 1 jongen** met een navy skullcap (kufi) — de andere twee met kort haar
- **3 sporten zichtbaar**: voetbal (links), kickboks (midden), boogschieten (rechts)
- **Coach** rechts op de voorgrond, van achteren in beeld:
  - **Duidelijke baard** zichtbaar in profiel-silhouet
  - Kort, net kapsel (zelfde stijl als de jongens — kort donker haar)
  - Navy trainingsjas met het volledige site-logo groot op de rug (A + swoosh + "ADAB MOVES" + "BEWEGEN MET BETEKENIS")
- **Setting**: dezelfde gym als de site — cream muren, navy lambrisering, basketbalbord achterin, archery-target rechts, warm zonlicht door de ramen
- **Palet strikt**: cream `#F5EFE6`, navy `#1F2240`, coral `#E8784E`

### 2. Post-layout opwaardering ("wow")
Behoud van de v3-structuur (scene boven, navy band onder), met verfijningen:

- **Scene neemt 65%** van het canvas (in plaats van 60%) — meer impact
- **Echte site-logo PNG** linksboven (i.p.v. herschreven tekst)
- **Headline** in navy band:
  - "Bewegen / met **betekenis**." in Sora 800
  - Coral-only voor "betekenis." als brand-accent
  - Strakke coral divider eronder
- **Subtiele coral arc-decoratie** rechtsonder in de navy band (echo van de site-CTA)
- **Footer-strip** met @adabmoves · adabmoves.nl + steden-rij rechts
- **Hairline cream frame** rondom (zoals carrousels) voor "uitgegeven" gevoel
- Export als **PNG met hoge kwaliteit** (95+), 1080×1080

### 3. Bijbehorende caption
Korte, krachtige welkomst-caption met emoji's voor de drie sporten + 10 hashtags (zoals eerder).

## Technische details
- Scene gegenereerd via `imagegen` op model `premium` (beste kwaliteit, scherpe vectoren)
- Post-compositie via Python/Pillow met Sora + Plus Jakarta Sans (site-fonts)
- Site-logo direct geladen uit `src/assets/logo.png` voor 1-op-1 match
- Output naar `/mnt/documents/ig-welkomstpost-v4.png`

## Wat ik níet verander
- Geen meisje (per vorig verzoek)
- Geen wijzigingen aan de website-code — dit is puur een content-artefact

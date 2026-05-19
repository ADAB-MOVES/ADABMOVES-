# Plan — Eén beeldstijl + duidelijkere, rustigere site

## Doel

1. Eén consistente illustratie­stijl (zoals de geüploade ADAB-gymzaal afbeelding) op de hele site.
2. Minder tekst, minder doorklikken, direct duidelijk: **wat we doen** en **voor wie**.

---

## Deel 1 — Eén beeldstijl op de hele site

**De referentiestijl** (geüploade afbeelding): vlakke cartoon-illustratie, navy #1F2240 + coral #E8784E + cream #FBF7EE, zachte schaduwen, ADAB MOVES logo zichtbaar op kleding, diverse kinderen/coach, sportzaal-setting.

### Audit van huidige afbeeldingen

Op de site staan nog mixed assets. Twee groepen:

- **Oude AI-foto-stijl** (vervangen): `hero.jpg`, `community.jpg`, `coach.jpg`, `event.jpg`, `scholen.jpg`, `methode.jpg`, `verhaal.jpg`, `community-2.jpg`, `events-2.jpg`, `event.jpg`
- **Recent in nieuwe stijl** (behouden, mogelijk bijwerken voor consistentie): `scene-hero.jpg`, `scene-community-kids.jpg`, `scene-community-teens.jpg`, `scene-community-brothers.jpg`, `scene-scholen.jpg`, `scene-adab-day.jpg`, `scene-methode.jpg`, `scene-verhaal.jpg`, `mascot.png`

### Aanpak

1. **Eén stijl-prompt** definiëren op basis van de geüploade referentie (vlakke cartoon, navy/coral/cream, ADAB logo op kleding, geen realisme).
2. **Alle oude foto-imports vervangen** door de `scene-*.jpg` variant die past bij het onderwerp:
  - `index.tsx`: hero → `scene-hero`, community blok → `scene-community-kids`, event blok → `scene-adab-day`
  - `aanbod.index.tsx`: 4 tegels → `scene-scholen`, `scene-community-kids`, `scene-adab-day`, (verhuur → nieuw `scene-verhuur`)
  - `over-ons.index.tsx`, `over-ons.verhaal.tsx`, `over-ons.methode.tsx`, `over-ons.missie-visie.tsx`: idem
3. **Ontbrekende scenes bijgenereren** in dezelfde stijl: `scene-verhuur.jpg` (lege gymzaal met ADAB-vloer), `scene-tieners.jpg` (voor tieners-pagina als die nog generic image gebruikt), eventueel `scene-coach.jpg` voor missie-visie.
4. **Oude `.jpg` assets verwijderen** zodra niets ze meer importeert, zodat de bundle schoon is.
5. **QA**: elke pagina visueel checken — alle beelden zelfde kleurenpalet, zelfde lijnvoering, zelfde "vlakke cartoon" energie.

---

## Deel 2 — Duidelijker & minder van-kastje-naar-muur

### A. Eén glasheldere homepage-opening

Direct boven de fold, in 3 regels:

> **ADAB MOVES**  
> Multisport met betekenis voor kinderen, tieners en broeders  
> [Bekijk aanbod] [WhatsApp ons]

. De mascotte/scene doet het visuele werk.

Voeg cijfers toe : 10+ Jaar ervaring.  In 6+ steden 

### B. "Voor wie" blok meteen na de hero

Vier iconen-tegels, één zin elk, klikbaar naar de juiste sub-pagina: scholen boven aan

- **Kinderen (6–12)** → `/aanbod/community/kinderen`
- **Tieners (13–17)** → `/aanbod/community/tieners`
- **Broeders (18+)** → `/aanbod/community/broeders`
- **Scholen** → `/aanbod/scholen`

Hiermee weet elke bezoeker binnen 5 seconden of de site voor hem/haar is.

### C. Navigatie versimpelen

Huidige header heeft mega-menu's met veel items. Voorstel:

```
Home   Aanbod ▾   Over ons ▾   Contact
```

- **Aanbod** dropdown: Scholen • Kinderen · Tieners · Broeders  · ADAB Event · Verhuur (6 items, één klik diep)
- **Over ons** dropdown: Ons verhaal · De ADAB-methode · Missie & visie (3 items)
-  "Plan een gesprek" knop in de header — en een één rustig telefoon-icoon + WhatsApp-floater rechtsonder (al aanwezig).

### D. Pagina-CTA's: één per pagina

Op elke sub-pagina exact **één** primaire actie onderaan ("WhatsApp ons over [onderwerp]"). Geen dubbele "Plan een gesprek / Samenwerken / Contact" blokken meer.

### E. Homepage afslanken

Huidige `index.tsx` heeft veel secties. Inkorten naar:

1. Hero + tagline + 2 CTA's
2. "Voor wie" (4 tegels)
3. "Wat we doen" — 3 kaartjes (Community, Scholen, Events) met scene-afbeelding + 1 zin
4. Korte "Waarom ADAB MOVES" — 3 pijlers met icoon + 1 zin
5. Video (intro.mp4) — al aanwezig, behouden
6. Eén slot-CTA: WhatsApp + telefoon

Secties verwijderen: dubbele testimonials, overlappende "samenwerken" blokken, lange tekstpassages.

### F. Tekst opschonen

Alle paragrafen >3 zinnen halveren. Bullets > paragrafen. Sub-pagina's krijgen format:

- 1 hero-zin "wat is dit"
- 1 scene-afbeelding
- 3 bullets "voor wie / wanneer / waar"
- 1 WhatsApp-CTA

---

## Technische impact (beknopt)

- **Bestanden bewerkt**: `src/routes/index.tsx`, `aanbod.index.tsx`, `over-ons.index.tsx`, `over-ons.verhaal.tsx`, `over-ons.methode.tsx`, `over-ons.missie-visie.tsx`, `SiteHeader.tsx`
- **Nieuwe assets**: 1–3 extra `scene-*.jpg` (verhuur, evt. tieners/coach)
- **Verwijderd**: oude foto-jpg's na vervanging
- **Geen** wijzigingen aan backend, auth of routes-structuur (sub-pagina's blijven bestaan, alleen toegang via mega-menu wordt rustiger)

---

## Vragen voor jou

1. Akkoord met homepage afslanken naar 6 secties (testimonials/overlap weg)?
2. Mag ik de oude AI-foto's definitief verwijderen na vervanging?
3. "Voor wie" tegels: leeftijdscategorieën zoals hierboven, of liever andere indeling (bv. "Ouders / Scholen / Organisaties")?

# Plan — rustiger, vetter, vindbaar

Doel: minder knoppen, één duidelijke lijn, alleen cartoons (geen AI-foto's), bewegende mascotte, sterke SEO en directe WhatsApp-contact via 0611879789.

---

## 1. Rust in de navigatie & CTA's

**Eén CTA per scherm.** Nu staat "Plan een gesprek" overal — die wordt teruggebracht tot één primaire actie per sectie. Header krijgt geen losse knop meer; in plaats daarvan een rustig "Contact" linkje en een vaste WhatsApp-knop rechtsonder als enige permanente actie.

**Mega-menu onder "Aanbod".** Klikken op /aanbod opent niet meer de index-pagina maar een dropdown (desktop) / accordeon (mobiel) met:
- Scholen (basis & middelbaar)
- Community (kinderen)
- Community (tieners)
- Community (broeders)
- Events / ADAB Day
- Verhuur (concept)

Hetzelfde patroon voor "Over ons" → ADAB Methode · Ons verhaal · Missie & visie.

**Knoppen ontdubbelen.** Op homepage, aanbod-subpagina's en over-ons worden dubbele "Plan een gesprek" CTA's weggehaald. Per pagina max één primaire CTA + één secundaire link.

---

## 2. WhatsApp wordt het hoofdcontactkanaal

- WhatsAppButton krijgt het echte nummer **+31 6 11879789** en bericht: *"Salam aleikum, ik wil graag meer weten over jullie aanbod."*
- Community-pagina: inschrijfformulier wordt vervangen door twee WhatsApp-knoppen:
  - "Ik wil mijn kind inschrijven" → prefilled bericht
  - "Ik heb een vraag" → prefilled bericht
- Footer toont prominent het telefoonnummer als klikbare `tel:` + WhatsApp-link + e-mail.

---

## 3. Mascotte & bewegende elementen (het "vette")

**Losse cartoon-mascotte** (de hoofdtrainer uit `Character.tsx` variant `coach-back`) wordt:
- Als losstaande SVG geplaatst op hero (rechtsonder, zwevend), op CTA-secties (links naast tekst) en op 404-pagina.
- Voorzien van subtiele idle-animatie (lichte op-en-neer beweging, knipoog/wave op hover).

**Extra cartoon-varianten toevoegen aan `Character.tsx`:**
- `coach-whistle` — trainer met fluitje
- `coach-point` — trainer wijst
- `kid-archery` — kind met pijl & boog
- `kid-kick` — kind kickbokst
- `kid-basket` — kind met basketbal
- `team-huddle` — groepje broeders

Alle gestileerd zoals huidige cartoons: baard zonder snor, achterzijde, ADAB-trainingspak, gelijk kapsel zonder overloop. Geen AI-foto's, alleen SVG.

**Meer marquee-balken.** De huidige sportenbalk wordt herhaald (één boven aanbod-sectie, één boven footer) en krijgt een tegenovergestelde richting voor ritme.

**Subtiele scroll-animaties.** Bestaande `useReveal` wordt breder toegepast: cards faden + tillen lichtjes op bij in-view.

---

## 4. Cartoons vervangen AI-foto's op subpagina's

`src/assets/scholen.jpg`, `community-2.jpg`, `events-2.jpg`, `methode.jpg`, `verhaal.jpg` worden niet meer als foto getoond. In plaats daarvan: nieuwe `Scene.tsx`-composities per pagina met:
- **Scholen** — kinderen in gymzaal met trainer
- **Community kinderen** — kring van kinderen met bal
- **Community tieners** — tieners stretchen
- **Community broeders** — groep volwassenen
- **Events / ADAB Day** — kinderen vieren overwinning (titel wordt **"ADAB Day"**, niet "Happy ADAB Event Day")
- **Methode / verhaal / missie** — eigen illustratieve scènes

De eerste hero-afbeelding (`hero.jpg`) blijft staan — die werkt goed.

---

## 5. Pagina-structuur uitbreiden

Nieuwe routes:
- `src/routes/aanbod.community.kinderen.tsx`
- `src/routes/aanbod.community.tieners.tsx`
- `src/routes/aanbod.community.broeders.tsx`

De huidige `aanbod.community.tsx` wordt een overzichtspagina die naar deze drie linkt.

Aanbod-index krijgt een rustige hub-layout: 4 grote tegels (Scholen · Community · Events · Verhuur) met cartoon erbij, geen overdaad aan tekst.

---

## 6. SEO — vindbaar op Google

**Doelzoekwoorden:** adab, adab moves, islamitische sport, halal sport, bewegen islam, kinderen sport, moslim sport kinderen, multisport amsterdam, islamitische sportclub.

Aanpassingen:
- `__root.tsx`: site-brede JSON-LD `SportsOrganization` met naam, telefoon, regio, sporttypes.
- Per route: unieke `<title>` en `<meta description>` met doelzoekwoorden natuurlijk verwerkt.
- Homepage H1 wordt aangevuld met "islamitische sport" semantisch (zonder spammy te worden).
- `public/sitemap.xml` + `public/robots.txt` genereren met alle routes.
- `og:image` per pagina met cartoon-scène.
- Image `alt`-teksten met zoekwoorden.
- Snelle laadtijd: `loading="lazy"` op alle non-hero images (al deels gedaan).

> Let op: ranking op "adab" of "islamitische sport" #1 hangt af van backlinks en autoriteit — wij regelen on-page SEO 100% correct; organische top-positie kost daarna weken/maanden.

---

## 7. Footer opfrissen

- Telefoon: **+31 6 11879789** (klikbaar, met WhatsApp-icoon ernaast)
- E-mail
- Adres / regio (Metropoolregio Amsterdam)
- Korte sitemap (Aanbod-subitems, Over ons-subitems)
- Social links als icoontjes (rustig, niet schreeuwerig)

---

## Technische uitvoering

```text
src/components/SiteHeader.tsx          → mega-menu dropdown + mobile accordion, CTA weg
src/components/SiteFooter.tsx          → telefoon/WhatsApp/e-mail prominent
src/components/WhatsAppButton.tsx      → echt nummer + bericht
src/components/MascotFloater.tsx       → nieuwe drijvende SVG mascotte
src/components/illustrations/
  Character.tsx                        → 6 nieuwe varianten
  Scene.tsx                            → nieuwe scènes per pagina
src/routes/
  aanbod.tsx + aanbod.index.tsx        → hub layout, geen dubbele CTA
  aanbod.community.tsx                 → overzicht → split in 3
  aanbod.community.kinderen.tsx        (nieuw)
  aanbod.community.tieners.tsx         (nieuw)
  aanbod.community.broeders.tsx        (nieuw)
  aanbod.events.tsx                    → titel "ADAB Day"
  index.tsx                            → CTA's ontdubbeld, mascotte, extra marquee
__root.tsx                             → JSON-LD SportsOrganization
public/robots.txt, sitemap.xml         (nieuw)
```

Geen wijzigingen aan bestaande hero-foto en bestaande cartoon-illustraties op de homepage — die werken al.

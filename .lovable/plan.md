## Doel
De introvideo `adab-moves-intro.mp4` uitbreiden met meer bullet-gedreven scènes die het belang van ADAB MOVES en het voordeel van onze aanpak duidelijk maken — zodat scholen, ouders, gemeenten en moskeeën direct voelen waarom samenwerken loont.

## Wat verandert er

**Twee nieuwe scènes** worden ingevoegd tussen de huidige "Visie & Missie" en "Focus visualisatie":

### Nieuwe Scene — "Het voordeel van onze aanpak"
Bullet-lijst die één voor één instaggert (links naar rechts fade), 6 punten:
1. Pedagogisch onderbouwd — sport als middel, karakter als doel.
2. VOG-gescreende coaches met islamitische identiteit.
3. Vaste structuur: wekelijks programma, geen losse flodders.
4. Veilige, halal omgeving voor jongens én meisjes.
5. Aansluitend op school, ouders en moskee — één lijn.
6. Meetbare impact: gedrag, focus en zelfvertrouwen groeien.

Titel: **"Waarom organisaties met ons kiezen."**
Duur: ~220 frames (~7s).

### Nieuwe Scene — "Waarom samenwerken"
2×2 grid met 4 kaarten, één per doelgroep:
- **Scholen** — Verhoog beweegnorm, sociaal welzijn en gedrag — kant-en-klaar programma.
- **Ouders** — Je kind groeit in karakter en geloof — niet alleen in techniek.
- **Gemeenten** — Bereik moeilijk bereikbare jeugd via vertrouwde gezichten in de wijk.
- **Moskeeën** — Activeer jongeren met een programma dat past bij jullie waarden.

Titel: **"Eén partner, vier antwoorden."**
Duur: ~200 frames (~6,5s).

## Technische wijzigingen
- `remotion/src/MainVideo.tsx` — twee nieuwe scènecomponenten (`SceneBenefits`, `SceneWhy`) + `Bullet` subcomponent toegevoegd, in `TransitionSeries` ingevoegd tussen Scene3 en Scene4 met fade/wipe transities die matchen met de bestaande stijl.
- `remotion/src/Root.tsx` — `durationInFrames` verhogen van 730 naar ~1180 om de nieuwe scènes te accommoderen.
- Hergebruik bestaande palet (navy/cream/coral), Sora + Plus Jakarta Sans fonts, en bestaande spring/fade animatie-taal — visuele consistentie blijft behouden.
- Geen nieuwe assets nodig.
- Render via bestaand script naar `/mnt/documents/adab-moves-intro.mp4` (versioning: nieuwe versie overschrijft de huidige).

## Resultaat
Een langere, sterkere video (~38s i.p.v. ~24s) waarin de kijker concreet ziet wát ADAB MOVES uniek maakt en waarom samenwerking voor elke doelgroep voordelig is — voordat de CTA komt.

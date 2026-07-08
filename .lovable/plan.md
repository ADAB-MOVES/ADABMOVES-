## Doel

Reel richt zich op **één doelgroep: ouders**. Scholen krijgen geen eigen scène meer, maar worden benoemd binnen ons aanbod ("voor scholen, ouders en de gemeenschap"). Karakters keren terug in de merkstijl: **glimlachende monden zonder ogen**, skullcaps op sommige kinderen, ADAB MOVES-logo zichtbaar op kleding (per brand memory + geüploade referentie). "10+ jaar ervaring" prominent.

## Visuele stijl-lock (uit brand memory + uploads)

Vaste prompt-basis voor alle nieuwe scene-beelden:

> Semi-3D cartoon illustration in ADAB MOVES brand style (Pixar-lite editorial), soft shading, rounded forms, NOT photorealistic. Kids have friendly **smiling mouths only** — NO eyes, NO eyebrows, NO pupils (deliberate modesty style). Diverse skin tones. Roughly 1 in 3 kids wears a small white skullcap (taqiyah); others have short dark hair. All modest sportswear: navy or cream/white ADAB MOVES t-shirts/hoodies with the stylized **white "A" + coral swoosh logo** clearly on the chest, long navy trousers or shorts hitting at/below the knee. Coach: adult man with **full dark beard, short dark hair**, shown from behind wearing a navy tracksuit with the large white "A + coral swoosh" logo and "ADAB MOVES" wordmark on his back. Warm cream gym interior, wooden floor with navy + coral court lines, tall windows, warm sunlight, navy + coral wall padding. Palette: cream `#FBF7EE`, navy `#1F2240`, coral `#E8784E`. Vertical 9:16. Cinematic, warm, dignified.

Model: `imagegen--generate_image`, `premium`, 1024×1792.

## Beelden (overschrijft bestaande `remotion/public/reel30/`)

1. `hook-sideline.jpg` — één jongen met skullcap in ADAB hoodie aan de zijlijn, kijkt naar spelende groep. Verlegen, kleine mond, geen ogen.
2. `intro-gym.jpg` — bebaarde coach van achteren (groot ADAB-logo op rug) loopt gymzaal in met kinderen.
3. `hero-parents.jpg` (nieuw) — coach van achteren met arm om jongen (skullcap, glimlacht), warme gymsfeer — voor de ouder-scène.
4. `flash-handshake.jpg` — twee jongens (één skullcap) geven hand, glimlachend, ADAB shirts.
5. `flash-hug.jpg` — twee jongens omhelzen elkaar, één skullcap, ADAB logo op shirt.
6. `flash-help.jpg` — jongen helpt teamgenoot overeind, één met skullcap, glimlachend.
7. `flash-coach.jpg` — bebaarde coach van zij, hand op schouder van glimlachende jongen met skullcap.

Aanbod-scène hergebruikt `intro-gym`, `flash-hug`, `flash-coach` (geen nieuwe assets nodig).

## Nieuwe structuur (900 frames / 30s)


| #   | Tijd   | Scene                                    | Copy                                                                                                                                                                                   |
| --- | ------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 0-4s   | **HookBank** (hook-sideline)             | "Waar hoort mijn kind écht thuis?"                                                                                                                                                     |
| 2   | 4-8s   | **Belofte** (intro-gym)                  | "Dit is Adab Moves." — onder-label: "10+ jaar ervaring · In Amsterdam en omgeving."                                                                                                    |
| 3   | 8-15s  | **VoorOuders** (nieuw, hero-parents.jpg) | Hoofdstatement: "Een plek waar je kind sport — zonder zijn waarden thuis te verliezen." Sub: "Fysiek. Sociaal. Mentaal. Moreel."                                                       |
| 4   | 15-21s | **KernFlashes** (4 flashes)              | Statement vooraf: "Sport met betekenis. Sport met karakter." Per flash pop-in label: "Adab" · "Karakter" · "identiteit" · " Groei".                                                    |
| 5   | 21-27s | **Aanbod** (3 sporen, sneller)           | Kop bovenaan: "Voor scholen, ouders en de gemeenschap." 01 **Scholen** — Sport & begeleiding. 02 **Multisport** — Wekelijks voor kinderen. 03 **ADAB Day** — Events & clinics op maat. |
| 6   | 27-30s | **CtaEnd**                               | Logo · "Volg @adabmoves" · knop "adabmoves.nl" · kleine tag: "Join the community"                                                                                                      |


## Technische wijzigingen

**Nieuwe file:**

- `remotion/src/scenes/reel30/VoorOuders.tsx` — ken-burns op `hero-parents.jpg`, twee-regel hoofdstatement met spring-in, sub-line met 4 woorden die kort na elkaar pop-in doen (`Fysiek · Sociaal · Mentaal · Moreel`).

**Aanpassingen:**

- `Reel30Betekenis.tsx` — nieuwe Series-volgorde en duraties: `S_HOOK=120, S_INTRO=120, S_OUDERS=210, S_KERN=180 (statement 60 + 4×30), S_AANBOD=180, S_CTA=90`. Verwijder `VoorScholen`-referentie (nooit gebruikt).
- `HookBank.tsx` — vervang copy door "Waar hoort mijn kind **écht** thuis?" (één regel, coral op "écht").
- `Belofte.tsx` — vervang "BEWEGEN MET BETEKENIS" onder-label door "10+ JAAR ERVARING · AMSTERDAM E.O." in coral caps.
- `KernFlashes.tsx` — statement wordt "Sport met betekenis. Sport met karakter." Verkort STATE naar 60f, FLASH naar 30f. Voeg per flash een pop-in label toe onderin (chip met coral border, Sora 800, 48px): Respect / Teamgeest / Vertrouwen / Begeleiding.
- `Aanbod.tsx` — voeg boven de "01/02/03"-blokken een kleine kop toe (verschijnt in eerste sequence, dan uit): "Voor scholen, ouders en de gemeenschap." Labels: 01 Scholen · "Sport & begeleiding op scholen." · 02 Multisport · "Wekelijks voor kinderen." · 03 ADAB Day · "Sportdagen & events op maat." Elke spoor 60f (in plaats van 60).
- `CtaEnd.tsx` — voeg klein sub-tag toe onder de coral-knop: "Join the community · Amsterdam e.o." (Plus Jakarta, 28px, cream 70%).

## Renderen

`cd remotion && node scripts/render-remotion.mjs reel-30s-betekenis /mnt/documents/adabmoves-reel-30s.mp4`

## QA

Frame-checks op belangrijke momenten (30, 150, 330, 540, 720, 870) via `bunx remotion still` om te bevestigen: geen ogen op karakters, logo zichtbaar op kleding, tekst binnen safe area, geen overlap tussen hook-copy en gradient.

## Deliverable

Nieuwe MP4 op `/mnt/documents/adabmoves-reel-30s.mp4` — focus op ouders, scholen alleen benoemd in aanbod, karakters in de juiste merkstijl (glimlach zonder ogen, skullcaps, ADAB logo op kleding), "10+ jaar ervaring" prominent.
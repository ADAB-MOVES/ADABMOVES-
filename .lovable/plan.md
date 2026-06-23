Drie nieuwe carrousel-posts (1:1, ~1248×1248) in dezelfde stijl als de bijgevoegde "Mindset die je sterker maakt" post. Zelfde 3D-cartoon poppen (geen ogen, donkerblauwe ADAB MOVES trainingspak, warme gym met navy/koraal panelen), zelfde lay-out (kop, ondertitel, BEFORE/AFTER split, tekstballonnen, ster-callout onderaan, footer met @adabmoves).

## 3 nieuwe mindset-thema's (op basis van adabmoves.nl waarden: adab, geduld, dankbaarheid, broederschap, doorzettingsvermogen)

**Post 2/4 — "Omgaan met tegenslag"**
- Kop: **Doorzetten als het zwaar wordt.**
- Sub: *Vermoeidheid* zonder opgeven. *Pijn* zonder klagen.
- BEFORE — VERMOEID: pop hangend, hand op knie, hoofd omlaag. KLAGEN: pop met geïrriteerd gebaar, armen omhoog van frustratie.
- AFTER — VERMOEID: pop rechtop, hand op hart, ballon "Bismillah, nog één keer — ik geef niet **op**." | RUSTIG: pop kalm staand, ballon "Alhamdoelilah, ik blijf **standvastig** en vertrouw op Allah."
- Ster-callout: *Echte kracht is: doorgaan als je lichaam wil stoppen.*

**Post 3/4 — "Respect voor de ander"**
- Kop: **Sportiviteit begint bij **adab**.**
- Sub: *Tegenstanders* zonder neerkijken. *Teamgenoten* zonder jaloezie.
- BEFORE — TEGENSTANDER: pop wijzend/lachend naar gevallen tegenspeler. TEAMGENOOT: pop met rug naar teamgenoot, armen gekruist.
- AFTER — TEGENSTANDER: pop steekt hand uit om ander op te helpen, ballon "Goed gespeeld, **broeder**." | TEAMGENOOT: twee poppen high-five, ballon "MashaAllah, **gun** je broeder het goede."
- Ster-callout: *Adab op het veld = adab in het leven.*

**Post 4/4 — "Focus en discipline"**
- Kop: **Discipline boven **motivatie**.**
- Sub: *Afleiding* zonder toegeven. *Luiheid* zonder excuses.
- BEFORE — AFLEIDING: pop met telefoon in hand, gym op achtergrond leeg. LUIHEID: pop onderuitgezakt op bank.
- AFTER — FOCUS: pop in trainingshouding, ballon "Bismillah, ik **begin** — ook als ik geen zin heb." | DISCIPLINE: pop strekkend voor training, ballon "Alhamdoelilah, **consistentie** is mijn kracht."
- Ster-callout: *Wie zichzelf overwint, wint het meest.*

## Aanpak (technisch)

1. Genereer elke post via `imagegen--edit_image` met de bijgeleverde post als style-reference + nieuwe prompt. Model: `premium` (typografie moet leesbaar zijn — Dutch tekst, koraal-accent woorden, ballonnen).
2. Aspect ratio 1:1. Aparte page-indicator rechtsboven (2/4, 3/4, 4/4).
3. Output naar `/mnt/documents/adabmoves-mindset-2.png`, `-3.png`, `-4.png`.
4. Visueel controleren per post; bij tekstfouten of stijl-drift opnieuw genereren met scherpere prompt.
5. Drie `<presentation-artifact>` tags retourneren zodat user direct kan downloaden.

Geen wijzigingen aan de website-code.

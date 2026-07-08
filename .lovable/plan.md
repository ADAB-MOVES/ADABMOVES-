## Doel

De huidige reel is te fotorealistisch geworden. We regenereren alle 9 scene-beelden strikt in **3D Pixar-stijl illustratie** (géén echte mensen, géén gezichten, alleen jongens, bedekkende kleding, alleen A-swoosh op kleding — geen tekst). Structuur & timing van de reel blijven staan; alleen de visuele laag + één tekstblok worden vervangen.

## Stijl-lock voor alle 9 beelden

Vaste prompt-basis die voor elk beeld hergebruikt wordt:

> Stylized 3D Pixar-style illustration, NOT photorealistic, NOT a real photo, cartoon render, soft global illumination, matte shading. Warm minimalist indoor gym, wooden floor with subtle navy + coral lines, tall windows with warm sunlight. Navy `#1F2240` + coral `#E8784E` palette, cream `#FBF7EE` walls. Only boys, diverse skin tones, all wearing **fully covering sportswear** (long sleeves, long pants, shorts with covered knees). **No facial feautures**  — figures shown without mouth, nose, eyebrows or eyes, front, side, cropped above shoulders, or heads turned away. Coach is a man with **full dark beard, short dark brown hair, no fade, one style**, navy tracksuit with coral accent, always from behind or side. Clothing shows **the adab moves brand logo without slogan**. Cinematic, editorial, calm, dignified. Vertical 9:16 framing. `no photorealism, no real human skin texture, no visible facial features, no text on clothing`

Per-scene toevoegingen:

1. `hook-sideline.jpg` — one boy standing alone at sideline, hands in pockets, hesitant posture; blurred group of boys playing in background.
2. `intro-gym.jpg` — wide empty gym, warm sunbeams, coach silhouette from behind walking in.
3. `flash-handshake.jpg` — two boys shaking hands post-match, seen from waist down + hands close-up, no faces.
4. `flash-hug.jpg` — two boys hugging after scoring, arms around shoulders, seen from behind.
5. `flash-help.jpg` — boy helping teammate up from the floor, hand reaching down, cropped above heads.
6. `flash-coach.jpg` — coach (beard, from side/back) hand on boy's shoulder, both from behind.
7. Aanbod hergebruikt 3 bestaande beelden (intro-gym, flash-hug, flash-coach) — geen nieuwe assets nodig.
8. `cta-groep.jpg` (bestaand vervangen door intro-gym reuse voor CTA).

Alle beelden gegenereerd met `imagegen--generate_image` model `premium` (betere stijl-controle), 1024×1792 (9:16), en overschrijven de bestaande files onder `remotion/public/reel30/`.

## Copy-update (Kernboodschap, 8-19s)

`KernFlashes.tsx` statement wordt aangepast naar de exacte tekst:

> "De unieke multisport- en beweegorganisatie voor kinderen en jongeren.
> Islamitisch gefundeerd.
> Toegankelijk voor iedereen."

Onder-anker "Islamitisch gefundeerd." wordt verwijderd (nu in hoofdtekst).

## Overige scene-tekst (blijft)

- Hook: "Op de meeste plekken moet je kind kiezen: erbij horen, of zichzelf blijven." ✓
- Intro (Belofte): "Dit is Adab Moves." ✓
- 3 sporen: Naschools / Multisport / Events — labels in `Aanbod.tsx` bijwerken (nu "Scholen" → "Naschools", subs licht aanpassen).
- CTA: logo + "Volg @adabmoves" + "adabmoves.nl" ✓ (al correct).

## Technische stappen

1. Regenereer 6 nieuwe scene-beelden met strikte 3D-illustratie prompt, overschrijf in `remotion/public/reel30/`.
2. Update `KernFlashes.tsx` copy.
3. Update `Aanbod.tsx` label "Scholen" → "Naschools".
4. Render opnieuw: `node scripts/render-remotion.mjs` → `/mnt/documents/adabmoves-reel-30s.mp4`.

## Deliverable

Nieuwe MP4 op `/mnt/documents/adabmoves-reel-30s.mp4`, strikt in 3D-geïllustreerde stijl, geen fotorealisme, geen gezichten, geen tekst op kleding.
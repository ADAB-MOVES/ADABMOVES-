import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  illu,
  SportIcon,
  Character,
  Scene,
  type SportName,
  type CharacterVariant,
} from "@/components/illustrations";

export const Route = createFileRoute("/stijlgids")({
  head: () => ({
    meta: [
      { title: "Stijlgids — ADAB MOVES illustraties" },
      {
        name: "description",
        content:
          "Stijlrichtlijn voor ADAB MOVES illustraties: kleuren, lijnstijl en personageverhoudingen.",
      },
    ],
  }),
  component: StyleGuide,
});

const sports: SportName[] = ["voetbal", "basketbal", "kickboks", "archery", "fitness"];
const characters: CharacterVariant[] = ["kid-jump", "kid-run", "kid-ball", "coach-back"];

const swatches = [
  { name: "Ink (navy)", hex: illu.ink, token: "--ink" },
  { name: "Ink soft", hex: illu.inkSoft, token: "--ink-soft" },
  { name: "Coral", hex: illu.coral, token: "--coral" },
  { name: "Coral deep", hex: illu.coralDeep, token: "--coral-deep" },
  { name: "Cream", hex: illu.cream, token: "--cream" },
  { name: "Cream deep", hex: illu.creamDeep, token: "—" },
  { name: "Skin", hex: illu.skin, token: "—" },
];

function StyleGuide() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-16 md:pt-24 pb-10">
        <span className="eyebrow">Design system</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
          Stijlgids voor illustraties
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Eén consistente set personages, icoontjes en kleuren — overal in het ontwerp
          herbruikbaar zodat nieuwe illustraties dezelfde look behouden.
        </p>
      </section>

      {/* PALETTE */}
      <section className="container-x py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">1 — Kleurenpalet</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {swatches.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border overflow-hidden bg-card">
              <div className="h-24 w-full" style={{ background: s.hex }} />
              <div className="p-4">
                <div className="font-semibold text-foreground">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.hex}</div>
                <div className="text-xs text-muted-foreground">token: {s.token}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LINE STYLE */}
      <section className="container-x py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">2 — Lijnstijl</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Personages", val: `${illu.strokeWidth}px`, desc: "Dikke afgeronde lijnen, geen scherpe hoeken." },
            { title: "Icoontjes", val: `${illu.iconStrokeWidth}px`, desc: "Iets dunner voor kleine schaal." },
            { title: "Hoeken", val: `${illu.cornerRadius}px radius`, desc: "Altijd round-cap en round-join." },
          ].map((r) => (
            <div key={r.title} className="rounded-2xl border border-border p-6 bg-card">
              <div className="eyebrow">{r.title}</div>
              <div className="mt-2 text-3xl font-semibold">{r.val}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROPORTIONS */}
      <section className="container-x py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">3 — Personageverhoudingen</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>• Hoofd : lichaam ≈ 1 : 2,4 (kindervriendelijk).</li>
            <li>• Schouderbreedte ≈ 70% van lichaamshoogte.</li>
            <li>• Geen gezichtsdetails — alleen achterkant of stilering.</li>
            <li>• Trainers herkenbaar aan korte uniforme haarstijl, baardlijn en grote logo op de rug.</li>
            <li>• Kleding bedekt armen en benen volledig.</li>
          </ul>
          <div className="rounded-3xl border border-border bg-[var(--cream)] p-6 flex items-end justify-around">
            {characters.map((v) => (
              <Character key={v} variant={v} size={140} />
            ))}
          </div>
        </div>
      </section>

      {/* SPORT ICONS */}
      <section className="container-x py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">4 — Sport-icoontjes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {sports.map((s) => (
            <div key={s} className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-3">
              <SportIcon sport={s} size={72} />
              <div className="text-sm font-semibold capitalize">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCENES */}
      <section className="container-x py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">5 — Scenes</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {(["playground", "gym", "event"] as const).map((v) => (
            <div key={v} className="rounded-3xl border border-border overflow-hidden">
              <Scene variant={v} className="w-full h-auto" />
              <div className="p-4 text-sm font-semibold capitalize">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USAGE */}
      <section className="container-x py-12 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">6 — Gebruik in code</h2>
        <pre className="rounded-2xl bg-[var(--ink)] text-[var(--cream)] p-6 overflow-x-auto text-sm leading-relaxed">
{`import { SportIcon, Character, Scene } from "@/components/illustrations";

<SportIcon sport="voetbal" size={56} tone="coral" />
<Character variant="kid-jump" size={180} />
<Scene variant="gym" className="w-full h-auto" />`}
        </pre>
        <div className="mt-8">
          <Link to="/" className="btn-primary">
            Terug naar home <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

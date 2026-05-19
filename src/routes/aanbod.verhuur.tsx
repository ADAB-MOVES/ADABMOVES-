import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package, Snowflake, Sun, Users } from "lucide-react";

export const Route = createFileRoute("/aanbod/verhuur")({
  head: () => ({
    meta: [
      { title: "Materiaal- & seizoensverhuur — ADAB MOVES" },
      { name: "description", content: "In ontwikkeling: materiaalverhuur en seizoensgebonden verhuur zoals springkussens." },
      { property: "og:title", content: "Verhuur — ADAB MOVES" },
    ],
  }),
  component: VerhuurPage,
});

const items = [
  { icon: Package, title: "Sport- en spelmateriaal", text: "Pylonen, ballen, hesjes, doeltjes, parcoursmaterialen — alles op één plek." },
  { icon: Sun, title: "Zomerverhuur", text: "Springkussens, waterspellen en buitenattracties voor buurtfeesten en familiedagen." },
  { icon: Snowflake, title: "Winterverhuur", text: "Indoor-attracties en spelopstellingen voor winterevenementen en vakantieprogramma's." },
  { icon: Users, title: "Coaches optioneel", text: "Voeg een of meerdere ADAB MOVES coaches toe aan je huur voor begeleide activiteiten." },
];

function VerhuurPage() {
  return (
    <>
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="container-x pt-14 md:pt-20 pb-16">
          <Link to="/aanbod" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar aanbod
          </Link>
          <span className="mt-6 inline-block rounded-full bg-[var(--coral)]/12 px-3 py-1 text-xs font-medium text-[var(--coral-deep)]">
            In ontwikkeling
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
            Materiaal- & <span className="italic text-[var(--coral-deep)]">seizoensverhuur</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We bouwen Adab Moves stap voor stap uit. Deze diensten staan op de planning —
            laat het ons weten als je interesse hebt, dan denken we mee over een pilot.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-dashed border-border bg-card/60 p-8 hover-lift">
              <div className="h-12 w-12 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <it.icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Interesse in een pilot?</h2>
          <p className="mt-4 text-white/70 max-w-xl">Laat ons weten welk materiaal of attractie je zoekt. We zetten je op de lijst en houden je op de hoogte van de lancering.</p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Meld je interesse aan <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

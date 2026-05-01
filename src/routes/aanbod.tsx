import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, School, Users, CalendarDays, Package } from "lucide-react";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/aanbod")({
  head: () => ({
    meta: [
      { title: "Aanbod — Adab Moves" },
      { name: "description", content: "Schoolprogramma's, multisportcommunity, evenementen en toekomstige diensten van Adab Moves." },
      { property: "og:title", content: "Aanbod — Adab Moves" },
      { property: "og:description", content: "Maatwerk in sport en beweging: scholen, community, events." },
    ],
  }),
  component: AanbodPage,
});

const items = [
  {
    icon: School,
    tag: "Scholen",
    title: "Tussen- en naschoolse sport",
    text: "Per locatie kijken we naar de behoefte. Soms tussenschools, soms naschools, soms een combinatie. Altijd professioneel, pedagogisch en met oog voor de groep.",
    points: ["Maatwerk per school", "Vaste hoofd- en assistent-trainers", "Heldere afspraken & evaluaties"],
  },
  {
    icon: Users,
    tag: "Community",
    title: "Multisportcommunity",
    text: "Een eigen programma waarin kinderen zich per periode inschrijven voor een nieuwe sport. Brede motorische ontwikkeling, structurele begeleiding en een hechte groep.",
    points: ["Periodieke instroom", "Wisselende sporten", "Doorlopende karaktervorming"],
  },
  {
    icon: CalendarDays,
    tag: "Events",
    title: "Sport- & kinderactiviteiten",
    text: "Sportevenementen, themadagen en kinderactiviteiten — los te boeken voor scholen, moskeeën, buurthuizen of gemeenten.",
    points: ["Op locatie naar keuze", "Volledig verzorgd", "Voor verschillende leeftijden"],
  },
  {
    icon: Package,
    tag: "Binnenkort",
    title: "Materiaal- & seizoensverhuur",
    text: "In een volgende ontwikkelfase voegen we materiaalverhuur en seizoensgebonden verhuur (zoals springkussens) toe aan ons aanbod.",
    points: ["Sport- & spelmateriaal", "Seizoensgebonden", "Pilotfase in voorbereiding"],
  },
];

function AanbodPage() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <span className="eyebrow">Ons aanbod</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
          Eén visie. Meerdere vormen van bewegen.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Adab Moves levert vanuit één duidelijke visie meerdere vormen van sportaanbod. Flexibel
          per locatie en doelgroep — altijd met dezelfde pedagogische kern.
        </p>
      </section>

      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article key={it.title} className="rounded-3xl border border-border bg-card p-8 md:p-10 hover:shadow-[var(--shadow-soft)] transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)]">
                  <it.icon size={20}/>
                </div>
                <span className="eyebrow !text-foreground/60">{it.tag}</span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-foreground leading-snug">{it.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.text}</p>
              <ul className="mt-6 space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={event} alt="Kinderen lachen tijdens een sportevenement" width={1600} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-[var(--cream)]">
            <h3 className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight">
              Vraag een vrijblijvend voorstel op maat aan.
            </h3>
            <Link to="/contact" className="btn-primary mt-6">Plan een gesprek <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}

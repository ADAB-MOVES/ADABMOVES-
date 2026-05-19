import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CalendarDays, Sparkles, Users, MapPin } from "lucide-react";
import event from "@/assets/event.jpg";
import events2 from "@/assets/events-2.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/aanbod/events")({
  head: () => ({
    meta: [
      { title: "Events — ADAB MOVES" },
      { name: "description", content: "Sportdagen, themadagen en kinderactiviteiten op locatie — volledig verzorgd door ADAB MOVES." },
      { property: "og:title", content: "ADAB Day & evenementen" },
      { property: "og:image", content: event },
    ],
  }),
  component: EventsPage,
});

const types = [
  { icon: CalendarDays, title: "Sportdagen", text: "Compleet verzorgde dagen met circuits, teamspellen en afsluitende toernooien." },
  { icon: Sparkles, title: "Themadagen", text: "Olympische dag, Ramadan-activiteit, Eid-feest of vakantieprogramma." },
  { icon: Users, title: "Clinics & workshops", text: "Losse activiteiten van een dagdeel, ook combineerbaar met andere programma's." },
  { icon: MapPin, title: "Op locatie", text: "Wij komen naar jullie school, moskee, buurthuis of sporthal — door heel de regio." },
];

const included = [
  "Draaiboek en planning op maat",
  "Materiaal & spelopstellingen",
  "Begeleidende coaches & EHBO",
  "Muziek en sfeerelementen",
  "Evaluatie & fotorapportage achteraf",
  "Optionele catering-koppeling",
];

function EventsPage() {
  return (
    <>
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="container-x pt-14 md:pt-20 pb-12">
          <Link to="/aanbod" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar aanbod
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Spoor 03 — Events</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                ADAB Day & <span className="italic text-[var(--coral-deep)]">evenementen</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Een sportdag, themadag of kinderactiviteit georganiseerd én begeleid. Wij regelen
              het programma, het materiaal en de coaches — jullie zorgen voor plek en kinderen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <div className="col-span-12 md:col-span-8 aspect-[16/9] rounded-3xl overflow-hidden">
            <img src={events2} alt="Kinderen op een sportevenement" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square rounded-3xl overflow-hidden">
            <img src={event} alt="ADAB Day sfeerbeeld" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square rounded-3xl overflow-hidden">
            <img src={community} alt="Groepsfoto event" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-8 aspect-[16/9] rounded-3xl bg-[var(--coral)]/12 flex items-center justify-center p-10">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug text-center" style={{ fontFamily: "var(--font-display)" }}>
              "Een dag waar kinderen nog weken over napraten."
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {types.map((t) => (
            <article key={t.title} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <t.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="eyebrow">Volledig verzorgd</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Jullie zorgen voor de plek. Wij voor de rest.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {included.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5">
                  <Check size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Een event op de planning?</h2>
            <p className="mt-4 text-white/70 max-w-xl">Vertel ons over de datum, locatie en doelgroep — wij maken een passend voorstel.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="btn-primary">Vraag een offerte <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CalendarDays, Sparkles, Users, MapPin } from "lucide-react";
import event from "@/assets/event.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/events")({
  head: () => ({
    meta: [
      { title: "Sportdagen, events & ADAB Day voor scholen | ADAB MOVES" },
      { name: "description", content: "Sportdagen, themadagen en jongerenactiviteiten op locatie — volledig verzorgd door ADAB MOVES voor scholen, gemeenten en buurthuizen in Amsterdam, Haarlem, Zaandam en Almere." },
      { property: "og:title", content: "ADAB Day — sportdagen & events" },
      { property: "og:description", content: "Een school sportdag of jongerenevent die kinderen nog weken navertellen. Volledig verzorgd: materiaal, coaches en draaiboek." },
      { property: "og:url", content: "https://www.adabmoves.nl/aanbod/events" },
      { property: "og:image", content: event },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/aanbod/events" },
    ],
  }),
  component: EventsPage,
});

const types = [
  { icon: CalendarDays, title: "Sportdagen", text: "Compleet verzorgde dagen met circuits, teamspellen en afsluitende toernooien." },
  { icon: Sparkles, title: "Themadagen", text: "Olympische dag, seizoensactiviteit of vakantieprogramma op maat." },
  { icon: Users, title: "Clinics & workshops", text: "Losse activiteiten van een dagdeel, ook combineerbaar met andere programma's." },
  { icon: MapPin, title: "Op locatie", text: "Wij komen naar jullie school, buurthuis of sporthal — door heel de regio." },
];

const included = [
  "Draaiboek en planning op maat",
  "Materiaal & spelopstellingen",
  "Begeleidende coaches & EHBO",
  "Sfeervolle aankleding (zonder muziek)",
  "Evaluatie & fotorapportage achteraf",
  "Optionele catering-koppeling",
];

function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12 relative">
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
              Onze events zijn <strong className="text-foreground">altijd zonder muziek</strong>{" "}
              en vanuit een <strong className="text-foreground">islamitische fundering</strong>,
              maar open en toegankelijk voor iedereen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={event} alt="ADAB Day sportevenement met families en kinderen" className="w-full h-auto object-contain" loading="lazy" />
        </div>
        <div className="mt-6 rounded-3xl bg-[var(--coral)]/12 p-10 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            "Een dag waar kinderen nog weken over napraten."
          </p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {types.map((t, i) => (
            <article key={t.title} className="rounded-2xl border border-border bg-card p-6 hover-lift animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
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
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="lg:col-span-8 relative">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Een event op de planning?</h2>
            <p className="mt-4 text-white/70 max-w-xl">Vertel ons over de datum, locatie en doelgroep — wij maken een passend voorstel.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right relative">
            <a href={WA.event} target="_blank" rel="noopener noreferrer" className="btn-primary">App ons direct <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Heart, Users, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adab Moves — Bewegen met betekenis" },
      { name: "description", content: "Multisport, karaktervorming en gemeenschap voor kinderen. Op scholen, in onze community en bij events." },
      { property: "og:title", content: "Adab Moves — Bewegen met betekenis" },
      { property: "og:description", content: "Sport als middel voor ontwikkeling: respect, eerlijkheid, geduld en plezier." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const values = [
  { icon: Shield, title: "Veilig & vertrouwd", text: "Een herkenbare omgeving waarin kinderen zichzelf kunnen zijn." },
  { icon: Heart, title: "Waarden in actie", text: "Respect, eerlijkheid en geduld worden geoefend tijdens het sporten." },
  { icon: Users, title: "Gemeenschap", text: "Een community van kinderen, ouders en trainers die de visie dragen." },
  { icon: Sparkles, title: "Brede ontwikkeling", text: "Motorisch, sociaal, mentaal en moreel — sport als middel." },
];

const programs = [
  { tag: "Scholen", title: "Tussen- & naschoolse sport", text: "Maatwerk per locatie. We sluiten aan op de behoefte van school, leerling en team." },
  { tag: "Community", title: "Multisportprogramma", text: "Per periode een nieuwe sport ontdekken in onze eigen community — voor structurele groei." },
  { tag: "Events", title: "Sport- & kinderactiviteiten", text: "Sportieve events op locatie: van toernooien tot themadagen vol beweging en plezier." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Bewegen met betekenis</span>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-foreground">
              Sport met <span className="italic text-[var(--coral-deep)]">karakter</span>,<br/>
              ontwikkeling met richting.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Adab Moves is de islamitische multisport- en beweegorganisatie van Nederland.
              We laten kinderen op een professionele, plezierige en veilige manier groeien —
              fysiek, sociaal, mentaal en moreel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/aanbod" className="btn-primary">
                Bekijk ons aanbod <ArrowRight size={18} />
              </Link>
              <Link to="/visie" className="btn-ghost">Onze visie</Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "4+", v: "sportvormen" },
                { k: "100%", v: "VOG-trainers" },
                { k: "1", v: "duidelijke visie" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-display font-semibold text-foreground" style={{fontFamily:"var(--font-display)"}}>{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={hero} alt="Kinderen die multisport beoefenen in een gymzaal" width={1600} height={1100} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-[var(--shadow-soft)] hidden md:flex items-center gap-3 max-w-xs">
              <div className="h-10 w-10 rounded-full bg-[var(--coral)]/15 flex items-center justify-center">
                <Heart size={18} className="text-[var(--coral-deep)]" />
              </div>
              <p className="text-sm text-foreground/80 leading-snug">
                "Sport als praktische leeromgeving waarin waarden zichtbaar worden."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow text-[var(--coral)]">Waarom Adab Moves</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Beweging die opvoedt, begeleidt en versterkt.
              </h2>
            </div>
            <p className="text-white/70 leading-relaxed md:text-lg">
              Veel programma's leren kinderen sporten, maar niet altijd hoe ze omgaan met verlies, eerlijk
              spelen of respect tonen. Wij overbruggen die kloof — elke training is een leermoment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Ons aanbod</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Drie sporen, één visie.
            </h2>
          </div>
          <Link to="/aanbod" className="btn-ghost self-start md:self-auto">Alles bekijken <ArrowRight size={16}/></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <article key={p.title} className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="text-6xl font-display font-semibold text-[var(--coral)]/30" style={{fontFamily:"var(--font-display)"}}>
                0{i+1}
              </div>
              <span className="eyebrow mt-2 block">{p.tag}</span>
              <h3 className="mt-3 text-2xl font-semibold text-foreground leading-snug">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
              <Link to="/aanbod" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                Lees meer <ArrowRight size={16}/>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SPLIT EDITORIAL */}
      <section className="container-x pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={coach} alt="Trainer begeleidt kinderen tijdens sport" width={1200} height={1400} loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
          <div className="rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14 flex flex-col justify-center">
            <span className="eyebrow">Onze trainers</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Niet alleen coaches.<br/>Ook rolmodellen.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Iedere trainer is sportief vaardig én vertrouwd met onze waarden. Zij weten hoe zij
              zich als voorbeeld gedragen, hoe zij omgaan met kinderen en hoe zij elke situatie
              benutten om iets door te geven.
            </p>
            <ul className="mt-8 space-y-3">
              {["VOG verplicht voor elke trainer","Pedagogisch geschoold","Inwerktraject in onze methodiek","Doorlopende evaluatie en feedback"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--coral)]/25 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow text-[var(--coral)]">Samenwerken</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Klaar om te bewegen<br/>met betekenis?
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                Werk je op een school, in een opvang, moskee of buurthuis? We denken graag mee over
                een aanbod dat past bij jullie locatie en doelgroep.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Neem contact op <ArrowRight size={18}/></Link>
                <Link to="/visie" className="btn-ghost text-white border-white/20 hover:bg-white/5">Lees onze visie</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden hidden md:block">
              <img src={community} alt="Kinderen geven elkaar een high-five" width={1200} height={1400} loading="lazy" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

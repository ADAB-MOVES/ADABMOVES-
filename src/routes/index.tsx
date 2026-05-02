import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  School,
  Users,
  CalendarDays,
  PackageOpen,
  Activity,
  Smile,
  HeartHandshake,
  Sparkles,
  Compass,
  ShieldCheck,
  Flame,
  Scale,
  Star,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adab Moves — Meer dan sport. Wij bouwen aan gedrag en beweging." },
      {
        name: "description",
        content:
          "ADAB MOVES is de islamitische multisport- en beweegorganisatie van Nederland. Sport, beweging en ontwikkeling voor kinderen — op school, in de wijk en binnen de community.",
      },
      { property: "og:title", content: "Adab Moves — Bewegen met betekenis" },
      {
        property: "og:description",
        content: "Sport als middel voor ontwikkeling: gedrag, karakter en beweging.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const offerings = [
  {
    icon: School,
    tag: "Voor Scholen",
    title: "Sport op en rond school",
    items: [
      "Tussenschoolse sportactiviteiten",
      "Naschoolse sportprogramma's",
      "Multisport lessen",
      "Sportdagen en workshops",
      "Maatwerk per school",
    ],
    note: "Gericht op ontzorgen, structuur en ontwikkeling.",
    image: coach,
  },
  {
    icon: Users,
    tag: "Multisport Programma",
    title: "Onze community",
    items: [
      "Inschrijven per periode",
      "Kennismaken met verschillende sporten",
      "Focus op brede ontwikkeling",
      "Plezier, structuur en groei",
    ],
    note: "Doorlopende ontwikkeling buiten school.",
    image: community,
  },
  {
    icon: CalendarDays,
    tag: "Events & Activiteiten",
    title: "Beleving en verbinding",
    items: [
      "Sportdagen",
      "Kinderactiviteiten",
      "Buurt- en community events",
      "Speciale thema-activiteiten",
    ],
    note: "Verbinding, plezier en beleving.",
    image: event,
  },
];

const impact = [
  { icon: Activity, title: "Meer beweging", text: "Actievere kinderen met meer plezier in sport." },
  { icon: HeartHandshake, title: "Positief gedrag", text: "Samenwerking, respect en eerlijk spel." },
  { icon: Compass, title: "Structuur & rust", text: "Een vast ritme van beweging en begeleiding." },
  { icon: Users, title: "Sterkere groep", text: "Hechte groepsdynamiek tussen kinderen." },
  { icon: Smile, title: "Zelfvertrouwen", text: "Kinderen die durven, leren en groeien." },
  { icon: Sparkles, title: "Karaktervorming", text: "Waarden geoefend in elke training." },
];

const audienceImpact = [
  {
    icon: School,
    audience: "Voor scholen",
    headline: "Ontzorging én ontwikkeling",
    stats: [
      { k: "20+", v: "scholen werken met ons" },
      { k: "95%", v: "scholen verlengen het programma" },
      { k: "3×", v: "meer beweging per week" },
    ],
    points: [
      "Volledig verzorgd programma — geen extra werkdruk voor leerkrachten",
      "Zichtbaar betere groepsdynamiek in de klas",
      "Aansluitend op kerndoelen bewegingsonderwijs",
    ],
  },
  {
    icon: HeartHandshake,
    audience: "Voor ouders",
    headline: "Een veilige plek waar je kind groeit",
    stats: [
      { k: "1.500+", v: "kinderen bereikt" },
      { k: "9.2", v: "gemiddelde ouderbeoordeling" },
      { k: "100%", v: "trainers met VOG" },
    ],
    points: [
      "Vertrouwde, herkenbare omgeving met islamitische waarden",
      "Kinderen worden zelfverzekerder, socialer en actiever",
      "Heldere communicatie en vaste contactpersonen",
    ],
  },
  {
    icon: Users,
    audience: "Voor partners & gemeenten",
    headline: "Bewezen impact in de wijk",
    stats: [
      { k: "10+", v: "jaar ervaring in jeugdsport" },
      { k: "50+", v: "events & activiteiten per jaar" },
      { k: "8", v: "gemeenten en buurtorganisaties" },
    ],
    points: [
      "Bereik van een doelgroep die andere aanbieders moeilijk vinden",
      "Professionele uitvoering, rapportage en evaluatie",
      "Bijdrage aan gezondheid, participatie en sociale cohesie",
    ],
  },
];

const pillars = [
  { icon: ShieldCheck, name: "Adab", text: "Gedrag als basis." },
  { icon: Compass, name: "Niyyah", text: "Bewust bewegen." },
  { icon: Users, name: "Ummah", text: "Samen sterk." },
  { icon: Scale, name: "Amana", text: "Verantwoordelijkheid." },
  { icon: Flame, name: "Ihsan", text: "Het beste geven." },
  { icon: HeartHandshake, name: "Sabr & Shukr", text: "Houding ontwikkelen." },
  { icon: Star, name: "Qudwah", text: "Rolmodellen." },
];

const reasons = [
  "Meer dan alleen sport",
  "Trainers als rolmodellen",
  "Flexibel en professioneel",
  "Aansluiting bij islamitische identiteit",
  "Geschikt voor scholen, ouders en organisaties",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Bewegen met betekenis</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] text-foreground">
              Meer dan sport. Wij bouwen aan{" "}
              <span className="italic text-[var(--coral-deep)]">gedrag</span>, karakter en beweging.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ADAB MOVES biedt sport, beweging en ontwikkeling voor kinderen — op school, in de wijk
              en binnen de community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Plan een kennismaking <ArrowRight size={18} />
              </Link>
              <Link to="/aanbod" className="btn-ghost">
                Bekijk ons aanbod
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "10+", v: "jaar ervaring" },
                { k: "3", v: "aanbodlijnen" },
                { k: "1", v: "duidelijke methode" },
              ].map((s) => (
                <div key={s.v}>
                  <div
                    className="text-3xl font-display font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={hero}
                alt="Kinderen die multisport beoefenen in een gymzaal"
                width={1600}
                height={1100}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVER ADAB MOVES */}
      <section className="container-x py-20 md:py-28 border-t border-border">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Over ADAB MOVES</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Eén organisatie, meerdere aanbodlijnen.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              ADAB MOVES is een islamitische multisportorganisatie waarin sport wordt ingezet als
              middel voor ontwikkeling. Kinderen groeien niet alleen fysiek, maar ook in gedrag,
              zelfvertrouwen en sociale vaardigheden.
            </p>
            <p>
              Wij zijn actief op scholen, binnen onze eigen sportprogramma's en via evenementen en
              activiteiten — altijd vanuit dezelfde duidelijke visie.
            </p>
          </div>
        </div>
      </section>

      {/* AANBOD — 3 BLOKKEN */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow">Ons aanbod</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Drie sporen, één visie.
              </h2>
            </div>
            <Link to="/aanbod" className="btn-ghost self-start md:self-auto">
              Alles bekijken <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <article
                key={o.title}
                className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                      <o.icon size={20} />
                    </div>
                    <span className="eyebrow">{o.tag}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground leading-snug">
                    {o.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    {o.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--coral-deep)]"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm italic text-muted-foreground">👉 {o.note}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Toekomstige diensten */}
          <div className="mt-10 rounded-3xl border border-dashed border-border p-8 md:p-10 bg-background">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-[var(--ink)]/5 flex items-center justify-center text-[var(--ink)] shrink-0">
                <PackageOpen size={20} />
              </div>
              <div>
                <span className="eyebrow">Binnenkort</span>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">Toekomstige diensten</h3>
                <p className="mt-2 text-muted-foreground">
                  Materiaalverhuur · Springkussens & speelelementen · Ondersteuning bij evenementen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONS FUNDAMENT — TEASER */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-[var(--coral)]/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow text-[var(--coral)]">Ons Fundament</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1]">
                De islam als basis. <span className="italic text-[var(--coral)]">Veiligheid</span>{" "}
                als belofte.
              </h2>
              <p className="mt-6 text-white/75 md:text-lg leading-relaxed max-w-2xl">
                Bij ADAB MOVES is de islam niet een toevoeging — het is het fundament onder alles
                wat wij doen. Wij maken ons hard om islamitische normen en waarden zichtbaar terug
                te laten komen in elke training, en creëren een veilige sportomgeving waarin elk
                kind zichzelf kan zijn.
              </p>
              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "7", v: "islamitische fundamenten" },
                  { k: "100%", v: "trainers met VOG" },
                  { k: "Halal", v: "omgeving & inhoud" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div
                      className="text-2xl font-semibold text-[var(--coral)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.k}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/fundament" className="btn-primary">
                  Lees ons fundament <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={community}
                  alt="Kinderen sporten in een veilige, herkenbare omgeving"
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="container-x py-20 md:py-28">
          <div>
            <span className="eyebrow">Resultaten & impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Concrete resultaten voor scholen, ouders en partners.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Met meer dan 10 jaar ervaring in jeugdsport bouwen wij aan zichtbare ontwikkeling — op
            de mat, in de klas en in de wijk.
          </p>
        </div>

        {/* Per doelgroep */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {audienceImpact.map((a) => (
            <article
              key={a.audience}
              className="rounded-3xl border border-border bg-card p-7 flex flex-col hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <a.icon size={20} />
                </div>
                <span className="eyebrow">{a.audience}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground leading-snug">
                {a.headline}
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-5">
                {a.stats.map((s) => (
                  <div key={s.v}>
                    <div
                      className="text-2xl md:text-3xl font-semibold text-[var(--coral-deep)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.k}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 leading-tight">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--coral-deep)]"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Wat kinderen leren */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
            Wat kinderen bij ons ontwikkelen.
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impact.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <i.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODE — 8 PIJLERS (op donkere achtergrond) */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow text-[var(--coral)]">De ADAB MOVES Methode</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Onze aanpak: sport met betekenis.
              </h2>
            </div>
            <p className="text-white/70 md:text-lg leading-relaxed">
              Wij combineren sport, opvoeding en islamitische waarden in één duidelijke methode die
              zichtbaar is in elke activiteit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                  <p.icon size={20} />
                </div>
                <h3
                  className="mt-5 text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM ADAB MOVES */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={coach}
              alt="Trainer begeleidt kinderen tijdens sport"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14 flex flex-col justify-center">
            <span className="eyebrow">Waarom ADAB MOVES</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Professioneel, betrouwbaar<br />en herkenbaar.
            </h2>
            <ul className="mt-8 space-y-3">
              {reasons.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/85 text-lg">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[var(--coral-deep)]"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/visie" className="btn-ghost">
                Lees onze visie <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-x pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <span className="eyebrow">Samenwerkingen</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Partners & scholen.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Wij werken samen met islamitische basisscholen, gemeenten en lokale organisaties.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Basisschool", "Gemeente", "Moskee", "Buurthuis"].map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-dashed border-border bg-background h-20 flex items-center justify-center text-sm font-medium text-muted-foreground"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--coral)]/25 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow text-[var(--coral)]">Aan de slag</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Geef kinderen meer dan<br />alleen beweging.
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                Werk samen met ADAB MOVES en bouw aan een sterke, actieve en bewuste generatie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Neem contact op <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-ghost text-white border-white/20 hover:bg-white/5">
                  Plan een kennismaking
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden hidden md:block">
              <img
                src={community}
                alt="Kinderen geven elkaar een high-five"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

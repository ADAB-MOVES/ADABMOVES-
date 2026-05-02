import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Users,
  Compass,
  Flame,
  Scale,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";

export const Route = createFileRoute("/fundament")({
  head: () => ({
    meta: [
      { title: "Ons Fundament — De islam als basis | ADAB MOVES" },
      {
        name: "description",
        content:
          "Ons fundament is de islam. Bij ADAB MOVES vertalen we islamitische normen en waarden naar elke training, activiteit en interactie — in een veilige sportomgeving voor elk kind.",
      },
      { property: "og:title", content: "Ons Fundament — De islam als basis" },
      {
        property: "og:description",
        content:
          "Islamitische waarden in beweging: hoe wij Adab, Niyyah, Ummah en Amana toepassen in onze sportactiviteiten.",
      },
      { property: "og:image", content: community },
    ],
  }),
  component: FundamentPage,
});

const pillars = [
  {
    icon: ShieldCheck,
    name: "Adab",
    short: "Goed gedrag als basis",
    long: "Respect voor de trainer, voor elkaar en voor de ruimte. Adab is de manier waarop we ons gedragen — vóór, tijdens en na elke activiteit.",
  },
  {
    icon: Compass,
    name: "Niyyah",
    short: "Bewust bewegen",
    long: "We starten met intentie. Waarom train je vandaag? Voor je gezondheid, je broeder of zuster, en om Allah ﷻ tevreden te stellen.",
  },
  {
    icon: Users,
    name: "Ummah",
    short: "Samen sterk",
    long: "We bouwen aan saamhorigheid. Iedereen hoort erbij en niemand staat alleen. Sport wordt het middel om de groep te versterken.",
  },
  {
    icon: Scale,
    name: "Amana",
    short: "Verantwoordelijkheid",
    long: "Onze trainers zijn een vertrouwenspersoon. We gaan zorgvuldig om met elk kind dat ons door ouders en scholen is toevertrouwd.",
  },
  {
    icon: Flame,
    name: "Ihsan",
    short: "Het beste geven",
    long: "Wat je ook doet, doe het goed. Inzet, focus en kwaliteit — in de sport en in het leven.",
  },
  {
    icon: HeartHandshake,
    name: "Sabr & Shukr",
    short: "Geduld en dankbaarheid",
    long: "Verlies, vermoeidheid en frustratie horen bij sport. We leren kinderen ermee om te gaan met geduld én dankbaarheid.",
  },
  {
    icon: Star,
    name: "Qudwah",
    short: "Voorbeeldgedrag",
    long: "Onze trainers zijn rolmodellen. Wat zij voorleven, nemen kinderen over. Daarom selecteren we trainers zorgvuldig.",
  },
];

const safety = [
  "Alle trainers met geldige VOG (Verklaring Omtrent het Gedrag)",
  "Mannelijke trainers voor jongens, vrouwelijke trainers voor meisjes",
  "Heldere huisregels en gedragscode tijdens elke activiteit",
  "Vaste contactpersoon voor scholen, ouders en partners",
  "Geen muziek of inhoud die in strijd is met islamitische waarden",
  "Halal tussendoortjes en gepaste kleding tijdens onze activiteiten",
];

function FundamentPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[var(--coral)]">Ons Fundament</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              De islam is onze{" "}
              <span className="italic text-[var(--coral)]">basis</span> — in elke training, in elke
              beweging.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
              ADAB MOVES is niet zomaar een sportorganisatie. Onze identiteit, onze methode en onze
              omgang met kinderen zijn geworteld in islamitische normen en waarden. Wij maken ons
              hard om die waarden zichtbaar terug te laten komen in elke activiteit — én om een
              veilige, vertrouwde sportomgeving te creëren voor elke deelnemer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/aanbod" className="btn-primary">
                Bekijk ons aanbod <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn-ghost text-white border-white/20 hover:bg-white/5"
              >
                Plan een gesprek
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={community}
                alt="Kinderen sporten samen in een veilige omgeving"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM DE ISLAM ALS FUNDAMENT */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="h-12 w-12 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
              <BookOpen size={22} />
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Waarom de islam ons fundament is.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sport is meer dan beweging — het vormt karakter. En karakter wordt het sterkst gevormd
              vanuit een duidelijke richting. Voor ons is die richting de islam: een complete manier
              van leven met heldere richtlijnen over gedrag, omgang, eerlijkheid en respect.
            </p>
            <p>
              Door islamitische waarden bewust in onze trainingen te verankeren, geven we kinderen
              meer dan een sportles. We geven ze een omgeving waarin ze zichzelf herkennen, waarin
              hun identiteit gevierd wordt, en waarin ze leren wat het betekent om een goede moslim
              te zijn — op de mat én daarbuiten.
            </p>
            <p className="text-foreground font-medium">
              Wij zien sport als een middel. Het einddoel is een sterke, bewuste, en goed
              opgevoede generatie.
            </p>
          </div>
        </div>
      </section>

      {/* DE 7 FUNDAMENTEN */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow">Onze fundamenten</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                7 islamitische waarden die wij toepassen.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Deze fundamenten vormen de ruggengraat van de ADAB MOVES Methode. Ze zijn niet
              theoretisch — wij oefenen ze concreet in elke activiteit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <article
                key={p.name}
                className="rounded-3xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <p.icon size={20} />
                </div>
                <h3
                  className="mt-5 text-2xl font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--coral-deep)] uppercase tracking-wider">
                  {p.short}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.long}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VEILIGE SPORTOMGEVING */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={coach}
              alt="Trainer begeleidt kinderen in een veilige sportomgeving"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14 flex flex-col justify-center">
            <div className="h-12 w-12 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
              <ShieldCheck size={22} />
            </div>
            <span className="eyebrow mt-5">Veilige sportomgeving</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een vertrouwde plek waar elk kind zichzelf kan zijn.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Ouders moeten met een gerust hart hun kind aan ons toevertrouwen. Daarom hebben wij
              concrete maatregelen die zorgen voor fysieke én geestelijke veiligheid binnen onze
              activiteiten.
            </p>
            <ul className="mt-7 space-y-3">
              {safety.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--coral-deep)]"
                  />
                  <span>{s}</span>
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
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-[var(--coral)]">
                <Sparkles size={22} />
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                Sport met betekenis.<br />Beweging met fundament.
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                Ontdek hoe wij islamitische waarden vertalen naar een professioneel sportprogramma
                voor jouw school, kind of organisatie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Neem contact op <ArrowRight size={18} />
                </Link>
                <Link to="/visie" className="btn-ghost text-white border-white/20 hover:bg-white/5">
                  Lees onze visie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

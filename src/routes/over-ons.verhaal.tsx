import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, AlertTriangle, MapPinOff, UsersRound, ShieldOff, CheckCircle2, Target, Sparkles, Compass } from "lucide-react";
import verhaal from "@/assets/verhaal.jpg";
import community from "@/assets/community.jpg";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/over-ons/verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal & onze doelen — ADAB MOVES" },
      { name: "description", content: "Hoe ADAB MOVES is ontstaan, welke pijnpunten wij dagelijks zien op het gebied van gedrag en zaalkrapte, en wat onze concrete doelen zijn voor de volgende jaren." },
      { property: "og:title", content: "Ons verhaal & onze doelen — ADAB MOVES" },
      { property: "og:description", content: "Pijnpunten in gedrag en krapte — en hoe wij daar verandering in brengen." },
      { property: "og:image", content: verhaal },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/over-ons/verhaal" },
    ],
  }),
  component: VerhaalPage,
});

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Gedrag op school loopt vast",
    problem: "Leerkrachten zien steeds vaker korte lontjes, weinig respect en moeite met luisteren — ook tijdens gym.",
    solution: "Wij brengen één duidelijke lijn: heldere huisregels, vaste rituelen en trainers die karakter voorleven, niet alleen aanleren.",
  },
  {
    icon: MapPinOff,
    title: "Krapte in gymzalen en buurthuizen",
    problem: "Er zijn te weinig veilige, vertrouwde plekken waar kinderen en tieners structureel kunnen sporten — zeker buiten schooltijd.",
    solution: "Wij bouwen vaste multisport-locaties op, werken samen met scholen, gemeenten en buurthuizen en huren extra zaalruimte waar nodig.",
  },
  {
    icon: ShieldOff,
    title: "Geen verbinding tussen sport en waarden",
    problem: "Kinderen bewegen wél, maar leren nergens hoe je je gedraagt op én naast het veld. Sport en karakter staan los van elkaar.",
    solution: "De ADAB Methode verbindt techniek en plezier met normen, waarden en manieren (adab) — in élke training, niet als losse module.",
  },
  {
    icon: UsersRound,
    title: "Ouders zoeken een vertrouwde plek",
    problem: "Veel ouders willen sport in een omgeving die past bij hun opvoeding en waarden — die plek is er nauwelijks.",
    solution: "Wij zijn die plek: een warme, toegankelijke sportomgeving voor iedereen, met een duidelijke fundering en vaste, vertrouwde trainers.",
  },
];

const doelen = [
  {
    icon: Target,
    year: "2026",
    title: "Vaste sportlocaties in 6 steden",
    text: "Wekelijkse multisport voor kinderen én tieners in Amsterdam, Zaandam, Amstelveen, Hoofddorp, Haarlem en Almere — met een vaste, vertrouwde groep.",
  },
  {
    icon: Sparkles,
    year: "2026",
    title: "Lancering meidentak",
    text: "Een eigen tak voor meiden met vrouwelijke coaches en een passende sportomgeving — zodat ook zij volwaardig kunnen meebewegen.",
  },
  {
    icon: Compass,
    year: "2027",
    title: "ADAB Methode op 50+ scholen",
    text: "Onze methode structureel ingebed in het sport- en pedagogisch programma van basis- en middelbare scholen door heel Nederland.",
  },
  {
    icon: CheckCircle2,
    year: "2028",
    title: "Eigen sport- & ontwikkelcentrum",
    text: "Een centrale plek waar trainingen, events, opleidingen en ouderbijeenkomsten samenkomen — een thuisbasis voor de gemeenschap.",
  },
];



function VerhaalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12 relative">
          <Link to="/over-ons" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar over ons
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Ons verhaal</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Vanuit ervaring, <span className="italic text-[var(--coral-deep)]">voor de volgende generatie</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              ADAB MOVES is opgericht door mensen met jarenlange ervaring in de sportbranche —
              gedreven door wat zij dagelijks zagen op scholen, in gymzalen en in de wijk.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={verhaal} alt="Oprichters van ADAB MOVES in de gymzaal" loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Waarom wij begonnen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Wat wij zagen, kunnen we niet meer ontkennen.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Na jaren ervaring in de sportbranche, op vele scholen door heel het land te hebben
              gestaan, zagen wij iets dat ons niet meer losliet:{" "}
              <strong className="text-foreground">kinderen die wel bewegen, maar nergens leren wat erbij hoort</strong>.
              Geen lijn, geen duidelijkheid, geen verbinding tussen sport en wie je daarbuiten bent.
            </p>
            <p>
              We zagen scholen worstelen met betekenisvolle bewegingslessen. We zagen ouders zoeken
              naar een plek waar hun kinderen en tieners kunnen sporten in een veilige, vertrouwde
              omgeving. We zagen jongeren die talent hadden, maar geen plek waar dat talent ook
              karakter mocht worden.
            </p>
            <p>
              Daarom bieden wij een{" "}
              <strong className="text-foreground">duidelijk alternatief</strong> — voor scholen,
              ouders én gemeenschap. Geen losse activiteiten, maar een doordachte methode:
              bewegen met betekenis, geleid door trainers en begeleiders die hun best doen te
              leven naar de normen en waarden die zij meegeven.
            </p>
            <p>
              Vandaag zijn we actief op tientallen locaties — met dezelfde overtuiging als op dag één.
            </p>
          </div>
        </div>
      </section>

      {/* PIJNPUNTEN — wat we zien en hoe wij dit oplossen */}
      <section className="bg-[var(--cream-deep)] border-y border-border">
        <div className="container-x py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">De pijnpunten</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Dit zien wij dagelijks — en zo brengen wij verandering.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Na jaren in de sportbranche en op tientallen scholen zien we steeds dezelfde
              knelpunten terugkomen. Wij benoemen ze eerlijk — en pakken ze structureel aan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((p, i) => (
              <article
                key={p.title}
                className="rounded-3xl border border-border bg-card p-7 md:p-8 hover-lift animate-rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] shrink-0">
                    <p.icon size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                    {p.title}
                  </h3>
                </div>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground/85">Het probleem — </span>
                    {p.problem}
                  </p>
                  <div className="pl-4 border-l-2 border-[var(--coral)]">
                    <p className="text-foreground">
                      <span className="font-semibold text-[var(--coral-deep)]">Wat ADAB MOVES doet — </span>
                      {p.solution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONZE DOELEN */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-24 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--coral)]/20 blur-3xl animate-blob" />
          <div className="max-w-2xl mb-12 relative">
            <span className="eyebrow text-[var(--coral)]">Onze doelen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Waar we de komende jaren naartoe werken.
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Geen losse ambities — concrete stappen om het verschil te maken voor scholen, ouders
              en de gemeenschap.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {doelen.map((d, i) => (
              <li
                key={d.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-rise hover:bg-white/[0.07] transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/20 flex items-center justify-center text-[var(--coral)]">
                  <d.icon size={18} />
                </div>
                <div
                  className="mt-5 text-2xl font-semibold text-[var(--coral)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.year}
                </div>
                <div className="mt-2 font-semibold text-base leading-snug">{d.title}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">{d.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>


      <section className="container-x py-20">
        <div className="rounded-3xl bg-[var(--coral)]/10 border border-[var(--coral)]/20 p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-2 flex lg:justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] text-white animate-floaty">
              <Quote size={28} />
            </span>
          </div>
          <div className="lg:col-span-10">
            <p className="text-2xl md:text-3xl font-display leading-snug text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              "Een gezond verstand in een gezond lichaam."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">De kracht van het lichaam staat in dienst van karakter en gemeenschap.</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={community} alt="Gemeenschap" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Word onderdeel van ons verhaal.</h2>
            <p className="mt-5 text-white/70">Of je nu school, ouder, partner of jongere bent — er is een plek voor jou.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Neem contact op <ArrowRight size={18} /></Link>
              <Link to="/over-ons/methode" className="btn-ghost text-white border-white/20 hover:bg-white/5">Lees over de methode</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

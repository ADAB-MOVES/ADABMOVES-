import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Target, Sparkles, Compass, CheckCircle2 } from "lucide-react";
import verhaal from "@/assets/verhaal.jpg";
import community from "@/assets/community.jpg";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/over-ons/verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal & onze doelen — ADAB MOVES" },
      { name: "description", content: "Hoe ADAB MOVES is ontstaan vanuit jarenlange ervaring in de sportbranche, en de doelen die wij ons stellen voor de komende jaren." },
      { property: "og:title", content: "Ons verhaal & onze doelen — ADAB MOVES" },
      { property: "og:description", content: "Een organisatie geboren uit ervaring — gedreven door wat wij dagelijks zien." },
      { property: "og:image", content: verhaal },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/over-ons/verhaal" },
    ],
  }),
  component: VerhaalPage,
});

const doelen = [
  {
    icon: Target,
    year: "2026",
    title: "Vaste sportlocaties in 6 steden",
    text: "Wekelijkse multisport voor kinderen in Amsterdam, Zaandam, Amstelveen, Hoofddorp, Haarlem en Almere — met een vaste, vertrouwde groep.",
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
    text: "Onze methode structureel ingebed in het sport- en pedagogisch programma van basisscholen door heel Nederland.",
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
              ADAB MOVES is geen idee dat op papier ontstond. Het is geboren in de gymzaal —
              uit wat wij dagelijks zagen, voelden en niet meer konden negeren.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift max-w-3xl mx-auto">
          <img src={verhaal} alt="Oprichters van ADAB MOVES in de gymzaal" loading="lazy" className="w-full h-auto aspect-[16/10] object-cover" />
        </div>
      </section>

      {/* WAAROM WIJ BEGONNEN — emotioneel narratief */}
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
              Na jaren in de sportbranche en op vele scholen door heel het land, zagen wij iets
              dat ons niet meer losliet:{" "}
              <strong className="text-foreground">kinderen die wel bewegen, maar nergens leren wat erbij hoort</strong>.
              Geen lijn. Geen duidelijkheid. Geen verbinding tussen sport en wie je daarbuiten bent.
            </p>
            <p>
              We zagen kinderen met talent, maar zonder richting. Ouders die hun kind ergens
              wilden brengen waar hun waarden niet ophouden bij de deur. Leerkrachten die
              probeerden rust te bewaren in klassen waar de energie nergens heen kon.
            </p>
            <p>
              We zagen ook wat sport <em>wél</em> kan doen — als je het serieus neemt. Een kind
              dat na drie weken voor het eerst durft te beginnen. Een kind dat leert verliezen
              zonder te ontploffen. Een groep die uit niets een gemeenschap wordt, simpelweg
              omdat iemand de moeite nam om ze écht te zien.
            </p>
            <p>
              <strong className="text-foreground">Dat moment — dát is waarom ADAB MOVES bestaat.</strong>{" "}
              Niet om nóg een sportclub te zijn, maar om de plek te bouwen die wij zelf hadden
              willen vinden toen wij begonnen.
            </p>
            <p>
              Vandaag werken we met scholen, gemeenten en buurthuizen in de Metropoolregio
              Amsterdam. Maar de overtuiging is dezelfde als op dag één: sport is geen doel op
              zich — het is een middel om karakter te bouwen, vertrouwen te kweken en een
              gemeenschap te vormen waar elk kind zich thuis voelt.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-x py-10">
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

      {/* ONZE DOELEN */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-24 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--coral)]/20 blur-3xl animate-blob" />
          <div className="max-w-2xl mb-12 relative">
            <span className="eyebrow text-[var(--coral)]">Onze doelen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Waar wij voor staan en naartoe werken.
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Concrete ambities om vanuit onze{" "}
              <strong className="text-white">islamitische fundering</strong> het verschil te
              maken voor scholen, ouders en gemeenschap — open en toegankelijk voor iedereen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {doelen.map((d, i) => (
              <article
                key={d.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-rise hover:bg-white/[0.07] transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/20 flex items-center justify-center text-[var(--coral)]">
                  <d.icon size={18} />
                </div>
                <div className="mt-5 font-semibold text-lg leading-snug">{d.title}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">{d.text}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={community} alt="Gemeenschap" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Word onderdeel van ons verhaal.</h2>
            <p className="mt-5 text-white/70">Of je nu school, ouder of partner bent — er is een plek voor jou.</p>
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

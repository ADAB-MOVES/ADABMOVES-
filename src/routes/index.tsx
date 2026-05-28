import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  School,
  Users,
  CalendarDays,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  MapPin,
  Trophy,
  Star,
  Play,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";
import { Testimonials } from "@/components/Testimonials";
import { Counter } from "@/components/Counter";
import { SportIcon, type SportName } from "@/components/illustrations/SportIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES — Multisport voor kinderen & jongeren in Amsterdam, Haarlem, Zaandam & Almere" },
      {
        name: "description",
        content:
          "Islamitische multisport- en jongerenorganisatie in Amsterdam, Haarlem, Zaandam, Almere, Amstelveen en Hoofddorp. Sportactiviteiten voor kinderen, kickboksen en weerbaarheidstraining voor jongeren, workshops en sportdagen voor scholen — sport met karakter, discipline en zelfvertrouwen.",
      },
      { property: "og:title", content: "ADAB MOVES — Sport met karakter voor kinderen & jongeren" },
      {
        property: "og:description",
        content:
          "Multisport, kickboksen en weerbaarheidstraining voor kinderen en jongeren. Workshops en sportdagen voor scholen in Amsterdam en omstreken.",
      },
      { property: "og:url", content: "https://www.adabmoves.nl/" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Wat is ADAB MOVES?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ADAB MOVES is een islamitische multisport- en jongerenorganisatie in Amsterdam en omstreken. Wij bieden sportactiviteiten voor kinderen, kickboksen en weerbaarheidstraining voor jongeren, en workshops en sportdagen voor scholen — met focus op karaktervorming, discipline en zelfvertrouwen.",
              },
            },
            {
              "@type": "Question",
              name: "In welke steden is ADAB MOVES actief?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Wij zijn actief in Amsterdam, Haarlem, Zaandam, Zaanstad, Almere, Hoofddorp en Amstelveen, en daarbuiten op aanvraag voor scholen, gemeenten en buurthuizen in heel Nederland.",
              },
            },
            {
              "@type": "Question",
              name: "Voor welke leeftijd is de multisport-community?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "De wekelijkse multisport voor kinderen is voor de leeftijd 8 t/m 12 jaar. Voor tieners en jongeren bieden we kickboksen, weerbaarheidstraining en mentoring trajecten.",
              },
            },
            {
              "@type": "Question",
              name: "Verzorgen jullie school sportdagen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja — wij verzorgen sport- en spelactiviteiten tussen en na schooltijd, workshops karaktervorming en volledig verzorgde sportdagen voor basis- en middelbare scholen.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.adabmoves.nl/" },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const tracks = [
  {
    icon: School,
    tag: "1 — Scholen",
    title: "Basis- & middelbare scholen",
    text:
      "Sport- en spelactiviteiten tussen en na schooltijd, workshops en sportdagen — als zelfstandige aanbieder, volledig verzorgd.",
    image: coach,
    to: "/aanbod/scholen" as const,
  },
  {
    icon: Users,
    tag: "2 — Multisport",
    title: "Multisport-community",
    text:
      "Wekelijkse multisport voor kinderen — inschrijving per maand of kwartaal. Een vaste, vertrouwde sportplek met een hechte groep.",
    image: community,
    to: "/aanbod/community/kinderen" as const,
  },
  {
    icon: CalendarDays,
    tag: "3 — Events",
    title: "ADAB Day",
    text:
      "Sportevenementen, themadagen en kinderactiviteiten op aanvraag. Voor scholen, gemeenten en buurthuizen.",
    image: event,
    to: "/aanbod/events" as const,
  },
];

const reasons = [
  { icon: Sparkles, title: "Eén duidelijke methode", text: "De ADAB Methode loopt als rode draad door al ons aanbod — zichtbaar in elke training." },
  { icon: ShieldCheck, title: "Veilige, fijne omgeving", text: "Vaste trainers en heldere huisregels — een plek waar elk kind zich thuis voelt." },
  { icon: HeartHandshake, title: "Meer dan sport", text: "Wij werken aan gedrag, karakter en zelfvertrouwen — bij elk kind." },
  { icon: Trophy, title: "10+ jaar ervaring", text: "Bewezen aanpak voor scholen, ouders en partners — door heel Nederland." },
];

const marqueeSports: { label: string; sport: SportName }[] = [
  { label: "Voetbal", sport: "voetbal" },
  { label: "Basketbal", sport: "basketbal" },
  { label: "Kickboks", sport: "kickboks" },
  { label: "Boogschieten", sport: "archery" },
  { label: "Fitness", sport: "fitness" },
  { label: "Atletiek", sport: "voetbal" },
  { label: "Multisport", sport: "basketbal" },
];

function MarqueeRow() {
  const items = [...marqueeSports, ...marqueeSports];
  return (
    <div className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)] border-y border-white/10 py-5">
      <div className="flex w-max gap-12 animate-marquee will-change-transform">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <SportIcon sport={s.sport} size={36} tone="coral" />
            <span className="text-lg md:text-xl font-semibold tracking-wide uppercase">
              {s.label}
            </span>
            <span className="text-[var(--coral)] text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-6 animate-rise">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
              Multisport met betekenis — voor scholen, ouders & kinderen
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground tracking-tight">
              Bewegen met betekenis.{" "}
              <span className="italic text-[var(--coral-deep)]">Karakter begint hier.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ADAB MOVES bouwt aan karakter via sport. We werken vanuit een islamitische
              fundering en zijn toegankelijk voor iedereen — basis- en middelbare scholen,
              ouders en kinderen door heel Nederland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary group">
                Plan een kennismaking <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/aanbod" className="btn-ghost">Bekijk ons aanbod</Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)] hover-lift">
              <img src={hero} alt="Kinderen spelen multisport in een ADAB MOVES sportzaal" width={1600} height={1100} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BEWEGENDE BALK MET SPORTEN */}
      <MarqueeRow />

      {/* CIJFERS */}
      <section className="container-x py-16 md:py-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { value: 100, suffix: "%", label: "Pedagogisch verantwoord" },
            { value: 10, suffix: "+", label: "Jaar ervaring" },
            { value: 6, suffix: "", label: "Actief in steden" },
          ].map((c, i) => (
            <div
              key={c.label}
              className="rounded-3xl border border-border bg-card p-8 hover-lift animate-rise"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="text-6xl md:text-7xl font-semibold text-[var(--coral-deep)] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter to={c.value} suffix={c.suffix} />
              </div>
              <div className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow inline-flex items-center gap-2">
            <Play size={14} /> Zie ons in actie
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Bewegen met betekenis — <span className="italic text-[var(--coral-deep)]">in beeld</span>.
          </h2>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--ink)] hover-lift">
          <video
            src="/intro.mp4"
            controls
            playsInline
            preload="metadata"
            poster={hero}
            className="relative w-full aspect-video object-cover"
          />
        </div>
      </section>

      {/* DRIE SPOREN — Ons aanbod (boven Waarom) */}
      <section className="container-x py-20 md:py-28 relative">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Ons aanbod</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Drie sporen, één methode.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Voetbal, basketbal, kickboks, boogschieten, atletiek, fitness en nog veel meer
            sport- en spelactiviteiten — afwisselend en opbouwend, zodat elk kind breed
            motorisch ontwikkelt.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <Link key={t.title} to={t.to} className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift animate-rise" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="w-full h-full transition-transform duration-700 group-hover:scale-110 object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]"><t.icon size={18} /></div>
                  <span className="eyebrow">{t.tag}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  Bekijk pagina <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WAAROM */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow text-[var(--coral)]">Waarom ADAB MOVES</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Waarom kiezen voor ADAB MOVES?
              </h2>
            </div>
            <p className="text-white/70 md:text-lg leading-relaxed">
              Geen losse activiteiten, maar een doordachte aanpak die het verschil maakt voor
              scholen, ouders en gemeenschap.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]"><r.icon size={20} /></div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/over-ons/methode" className="inline-flex items-center gap-2 text-[var(--coral)] font-semibold hover:gap-3 transition-all">
              Lees over de ADAB Methode <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ONS VERHAAL — kleinere afbeelding */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden hover-lift max-w-sm mx-auto lg:mx-0">
                <img src={community} alt="ADAB MOVES community in beweging" loading="lazy" className="w-full h-full aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="eyebrow">Ons verhaal</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground">
                Na jaren in de sportbranche zagen wij <span className="italic text-[var(--coral-deep)]">iets dat ons niet meer losliet</span>.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kinderen die wel bewegen, maar nergens leren wat erbij hoort. Geen lijn,
                  geen duidelijkheid, geen verbinding tussen sport en wie je daarbuiten bent.
                </p>
                <p>
                  Daarom startten wij ADAB MOVES: een doordachte methode geworteld in een{" "}
                  <strong className="text-foreground">duidelijke fundering van normen en waarden</strong>.
                </p>
              </div>
              <Link to="/over-ons/verhaal" className="mt-8 inline-flex items-center gap-2 text-[var(--coral-deep)] font-semibold hover:gap-3 transition-all">
                Lees het volledige verhaal <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REGIO — Amsterdam en omgeving */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow inline-flex items-center gap-2"><MapPin size={14} /> Onze regio</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Amsterdam <span className="italic text-[var(--coral-deep)]">en omgeving</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                Onze trainers zijn actief in scholen, gymzalen en buurthuizen in de
                Metropoolregio Amsterdam.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Amsterdam", "Amstelveen", "Haarlem", "Hoofddorp", "Almere", "Zaanstad"].map((c) => (
                  <li key={c} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="rounded-3xl overflow-hidden hover-lift max-w-xs w-full">
                <img src={coach} alt="ADAB MOVES trainer in actie" loading="lazy" className="w-full h-auto aspect-square object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />


      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-16">
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow inline-flex items-center gap-2"><Star size={14} /> Klaar om samen te werken?</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Plan een vrijblijvende kennismaking.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Voor scholen, ouders en partners: we denken graag mee en maken een voorstel op maat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Neem contact op <ArrowRight size={18} /></Link>
                <Link to="/over-ons" className="btn-ghost">Lees over ons</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden hidden md:block hover-lift max-w-md ml-auto">
              <img src={event} alt="ADAB Day event met kinderen" loading="lazy" className="w-full h-auto aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

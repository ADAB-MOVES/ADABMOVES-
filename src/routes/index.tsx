import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  School,
  Users,
  CalendarDays,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  Handshake,
  Flower2,
  MapPin,
  CheckCircle2,
  Trophy,
  Heart,
  Star,
  Play,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES — Sport, karakter en gemeenschap voor jongeren" },
      {
        name: "description",
        content:
          "ADAB MOVES is een multisport-organisatie voor kinderen én tieners. Voor scholen, ouders en gemeenschap — door heel Nederland.",
      },
      { property: "og:title", content: "ADAB MOVES — Bewegen met betekenis" },
      {
        property: "og:description",
        content:
          "Sport als middel voor karaktervorming. Voor basis- en middelbare scholen, ouders en jongeren.",
      },
      { property: "og:image", content: hero },
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
      "Sportlessen, naschoolse programma's, sportdagen en workshops voor basis- én middelbare scholen. Volledig verzorgd en aansluitend op de schoolcultuur.",
    image: coach,
    to: "/aanbod/scholen",
  },
  {
    icon: Users,
    tag: "2 — Multisport",
    title: "Multisport-community",
    text:
      "Wekelijkse multisport voor kinderen en tieners — inschrijving per maand of kwartaal. Een vaste, vertrouwde sportplek met een hechte groep.",
    image: community,
    to: "/aanbod/community",
  },
  {
    icon: CalendarDays,
    tag: "3 — Events",
    title: "ADAB Day",
    text:
      "Sportevenementen, themadagen en kinder- & jongerenactiviteiten op aanvraag. Voor scholen, gemeenten en buurthuizen.",
    image: event,
    to: "/aanbod/events",
  },
];

const audiences = [
  { icon: GraduationCap, title: "Scholen", text: "Basis & middelbaar. Wij verzorgen sportlessen, sportdagen en naschools programma met vaste, vertrouwde trainers.", cta: "Plan een schoolbezoek", to: "/contact" as const },
  { icon: Heart, title: "Ouders", text: "Een vertrouwde, veilige omgeving waar je kind of tiener brede motoriek én karakter ontwikkelt — naast school.", cta: "Bekijk multisport", to: "/aanbod/community" as const },
  { icon: Handshake, title: "Partners & gemeenten", text: "Buurthuizen, fondsen en gemeenten: wij voeren programma's uit met meetbare impact in de wijk.", cta: "Word partner", to: "/contact" as const },
  { icon: Users, title: "Jongeren (8–17 jr)", text: "Multisport, voetbal, basketbal, archery, kickboks en fitness — met leeftijdgenoten uit jouw stad.", cta: "Bekijk multisport", to: "/aanbod/community" as const },
  { icon: Flower2, title: "Meidentak", text: "In ontwikkeling. Een eigen tak voor meiden, met vrouwelijke coaches en een passende sportomgeving.", cta: "Blijf op de hoogte", to: "/contact" as const, soon: true },
];

const cities = ["Amsterdam", "Zaandam", "Amstelveen", "Hoofddorp", "Haarlem", "Almere"];

const reasons = [
  { icon: Sparkles, title: "Eén duidelijke methode", text: "De ADAB Methode loopt als rode draad door al ons aanbod — zichtbaar in elke training." },
  { icon: ShieldCheck, title: "Veilige, fijne omgeving", text: "Vaste trainers en heldere huisregels — een plek waar elk kind zich thuis voelt." },
  { icon: HeartHandshake, title: "Meer dan sport", text: "Wij werken aan gedrag, karakter en zelfvertrouwen — bij elk kind én elke tiener." },
  { icon: Trophy, title: "10+ jaar ervaring", text: "Bewezen aanpak voor scholen, ouders en partners — door heel Nederland." },
];

const valueExchange = [
  { who: "Scholen", give: "Lokaal, planning & vertrouwen", get: ["Professionele bewegingslessen", "Sportdagen & workshops", "Pedagogische versterking", "Verbinding met de wijk"] },
  { who: "Ouders", give: "Inschrijving & betrokkenheid", get: ["Veilige sportomgeving", "Brede motoriek", "Karaktervorming", "Bescherming van normen & waarden"] },
  { who: "Partners", give: "Locatie, netwerk of financiering", get: ["Bewezen programma", "Bereik in de gemeenschap", "Maatschappelijke impact", "Heldere rapportage"] },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] bg-[var(--coral)]/25 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-[360px] w-[360px] bg-[var(--ink)]/10 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div aria-hidden className="pointer-events-none absolute bottom-10 left-1/3 h-[280px] w-[280px] bg-[var(--coral)]/15 blur-3xl animate-floaty-slow" />

        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-6 animate-rise">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--coral)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--coral)]" />
              </span>
              Actief door heel Nederland
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] text-foreground">
              Sport, karakter en{" "}
              <span className="italic text-[var(--coral-deep)] relative inline-block">
                gemeenschap
                <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[var(--coral)]/30 rounded-full -z-10" />
              </span>{" "}
              voor kinderen én tieners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ADAB MOVES is dé islamitische multisport- en beweegorganisatie van Nederland —
              en tegelijk een warme, toegankelijke plek voor iedereen. Voor scholen, ouders en
              gemeenschap. Eén duidelijke methode, geworteld in heldere normen en waarden —
              bewegen met betekenis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary group">
                Plan een kennismaking <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/aanbod" className="btn-ghost">Bekijk ons aanbod</Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "10+", l: "Jaar ervaring" },
                { k: "NL", l: "Door heel" },
                { k: "8–17", l: "Jaar doelgroep" },
              ].map((s, i) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4 hover-lift animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/15 blur-2xl animate-floaty-slow" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)] hover-lift">
              <img src={hero} alt="Kinderen en tieners spelen multisport in een ADAB MOVES sportzaal" width={1600} height={1100} className="w-full h-auto object-cover" />
            </div>
            <div className="hidden sm:flex items-center gap-3 absolute -left-4 bottom-8 rounded-2xl bg-white border border-border px-4 py-3 shadow-[var(--shadow-soft)] animate-floaty">
              <div className="h-9 w-9 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]"><ShieldCheck size={18} /></div>
              <div className="text-sm">
                <div className="font-semibold">Veilige omgeving</div>
                <div className="text-muted-foreground">Vertrouwd, structureel.</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 absolute -right-4 top-8 rounded-2xl bg-[var(--ink)] text-white px-4 py-3 shadow-[var(--shadow-soft)] animate-floaty" style={{ animationDelay: "-3s" }}>
              <div className="h-9 w-9 rounded-xl bg-[var(--coral)] flex items-center justify-center text-white"><Sparkles size={18} /></div>
              <div className="text-sm">
                <div className="font-semibold">10+ jaar ervaring</div>
                <div className="text-white/60">Op vele scholen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-y border-border bg-[var(--cream)] overflow-hidden">
          <div className="flex w-max gap-12 py-4 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                {["Voetbal", "Basketbal", "Archery", "Kickboks", "Fitness", "Atletiek", "Turnen", "Multisport", "Karaktervorming", "Vriendschap"].map((s) => (
                  <span key={s + dup} className="text-sm font-semibold uppercase tracking-widest text-foreground/70">★ {s}</span>
                ))}
              </div>
            ))}
          </div>
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
          <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">
            Visueel meer dan woorden: kinderen en tieners, in volle beweging.
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--ink)] hover-lift">
          <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
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

      {/* WAAROM */}
      <section className="bg-[var(--ink)] text-[var(--cream)] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[var(--coral)]/15 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[var(--coral)]/10 blur-3xl animate-blob" style={{ animationDelay: "-7s" }} />
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

      {/* DRIE SPOREN */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Ons aanbod</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Drie sporen, één methode.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <Link key={t.title} to={t.to} className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift animate-rise" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]"><t.icon size={20} /></div>
                  <span className="eyebrow">{t.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground leading-snug">{t.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  Bekijk pagina <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="bg-[var(--cream)] border-y border-border relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-10 left-1/4 h-[300px] w-[300px] rounded-full bg-[var(--coral)]/15 blur-3xl animate-blob" />
        <div className="container-x py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow">Voor wie</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Eén beweging, vijf doelgroepen.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Scholen, ouders, partners, jongeren en — in de nabije toekomst — onze meidentak.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <article key={a.title} className="group relative rounded-3xl border border-border bg-card p-7 hover-lift overflow-hidden animate-rise" style={{ animationDelay: `${i * 70}ms` }}>
                {a.soon && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-[var(--coral)]/15 text-[var(--coral-deep)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    Binnenkort
                  </span>
                )}
                <div className="h-12 w-12 rounded-2xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
                  <a.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                <Link to={a.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  {a.cta} <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONS VERHAAL */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden hover-lift">
              <img src={community} alt="ADAB MOVES community in beweging" loading="lazy" className="w-full h-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">Oprichters</div>
                <div className="text-lg font-semibold">Vanuit ervaring, voor de volgende generatie.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Ons verhaal</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground">
              Na jaren in de sportbranche zagen wij <span className="italic text-[var(--coral-deep)]">iets dat ons niet meer losliet</span>.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Na jaren ervaring in de sportbranche, op vele scholen door heel het land te hebben
                gestaan, zagen wij{" "}
                <strong className="text-foreground">kinderen die wel bewegen, maar nergens leren wat erbij hoort</strong>.
                Geen lijn, geen duidelijkheid, geen verbinding tussen sport en wie je daarbuiten bent.
              </p>
              <p>
                Daarom startten wij ADAB MOVES: een doordachte methode geworteld in een{" "}
                <strong className="text-foreground">duidelijke fundering van normen en waarden</strong> —
                waar <strong className="text-foreground">manieren (adab)</strong> en{" "}
                <strong className="text-foreground">karakter</strong> samen opgroeien met techniek,
                kracht en plezier. Een vertrouwde plek waar ouders hun kind met een gerust hart
                naartoe sturen.
              </p>
            </div>
            <Link to="/over-ons/verhaal" className="mt-8 inline-flex items-center gap-2 text-[var(--coral-deep)] font-semibold hover:gap-3 transition-all">
              Lees het volledige verhaal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WAT JE TERUGKRIJGT */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Wat je terugkrijgt</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Jij geeft. Wij geven goedheid terug.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {valueExchange.map((v, i) => (
              <article key={v.who} className="relative rounded-3xl border border-border bg-card p-8 hover-lift overflow-hidden animate-rise" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--coral)]/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
                    <h3 className="text-2xl font-semibold text-foreground">{v.who}</h3>
                  </div>
                  <div className="mt-5">
                    <div className="eyebrow !text-foreground/50">Jij geeft</div>
                    <p className="mt-2 text-foreground">{v.give}</p>
                  </div>
                  <div className="mt-5 h-px bg-border" />
                  <div className="mt-5">
                    <div className="eyebrow">Je ontvangt</div>
                    <ul className="mt-3 space-y-2">
                      {v.get.map((g) => (
                        <li key={g} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <CheckCircle2 size={16} className="mt-0.5 text-[var(--coral-deep)] shrink-0" />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGIO */}
      <section className="container-x py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow inline-flex items-center gap-2"><MapPin size={14} /> Door heel Nederland</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Je vindt ons in een stad bij jou in de buurt.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            Onze trainers zijn actief op tientallen locaties in scholen, gymzalen en buurthuizen.
            Staat jouw stad er niet bij? Neem contact op — we groeien snel.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {cities.map((c, i) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/85 hover-lift animate-rise" style={{ animationDelay: `${i * 40}ms` }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)] animate-pulse" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ONZE BELOFTE (voorheen testimonials) */}
      <Testimonials />

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-16">
          <div aria-hidden className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-[var(--coral)]/20 blur-3xl animate-blob" />
          <div aria-hidden className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[var(--ink)]/10 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
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
            <div className="rounded-2xl overflow-hidden hidden md:block hover-lift">
              <img src={event} alt="ADAB Day event met jongeren" loading="lazy" className="w-full h-auto aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

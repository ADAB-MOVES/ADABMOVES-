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
  Building2,
  Handshake,
  Flower2,
  MapPin,
  CheckCircle2,
  Trophy,
  Heart,
  Star,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES — Sport, karakter en gemeenschap voor jongeren" },
      {
        name: "description",
        content:
          "ADAB MOVES is een islamitische multisport-organisatie voor kinderen én tieners. Op basis- en middelbare scholen, in de community en op events — actief door de hele Randstad.",
      },
      { property: "og:title", content: "ADAB MOVES — Bewegen met betekenis" },
      {
        property: "og:description",
        content:
          "Sport als middel voor karaktervorming. Voor basis- en middelbare scholen, ouders, partners en jongeren.",
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
  },
  {
    icon: Users,
    tag: "2 — Community",
    title: "ADAB MOVES Community",
    text:
      "Gratis aanmelden, plek op basis van leeftijd & interesse. Wekelijkse activiteiten — inschrijven per maand of per 3 maanden. Een vaste, halal sportplek.",
    image: community,
  },
  {
    icon: CalendarDays,
    tag: "3 — Events",
    title: "ADAB Day",
    text:
      "Sportevenementen, themadagen en kinder- & jongerenactiviteiten op aanvraag. Voor scholen, moskeeën, gemeenten en buurthuizen.",
    image: event,
  },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Scholen",
    text: "Basis & middelbaar. Wij verzorgen sportlessen, sportdagen en naschools programma met vaste, gescreende trainers.",
    cta: "Plan een schoolbezoek",
    to: "/contact",
  },
  {
    icon: Heart,
    title: "Ouders",
    text: "Een vertrouwde, halal omgeving waar je kind of tiener brede motoriek én karakter ontwikkelt — naast school.",
    cta: "Meld aan voor community",
    to: "/contact",
  },
  {
    icon: Handshake,
    title: "Partners & gemeenten",
    text: "Buurthuizen, moskeeën, fondsen en gemeenten: wij voeren programma's uit met meetbare impact in de wijk.",
    cta: "Word partner",
    to: "/contact",
  },
  {
    icon: Users,
    title: "Jongeren (8–17 jr)",
    text: "Multisport, voetbal, basketbal, archery, kickboks en fitness — met broeders en leeftijdgenoten uit jouw stad.",
    cta: "Bekijk community",
    to: "/aanbod",
  },
  {
    icon: Flower2,
    title: "Meidentak",
    text: "In ontwikkeling. Een eigen tak voor meiden, met vrouwelijke coaches en een passende sportomgeving. Hou onze pagina in de gaten.",
    cta: "Blijf op de hoogte",
    to: "/contact",
    soon: true,
  },
];

const cities = [
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht",
  "Almere", "Zaanstad", "Haarlem", "Amersfoort",
  "Leiden", "Delft", "Schiedam", "Gouda",
];

const reasons = [
  {
    icon: Sparkles,
    title: "Eén duidelijke methode",
    text: "De ADAB Methode loopt als rode draad door al ons aanbod.",
  },
  {
    icon: ShieldCheck,
    title: "Veilige, halal omgeving",
    text: "VOG-gescreende trainers, heldere huisregels, gebed- en wuduvriendelijke programmering.",
  },
  {
    icon: HeartHandshake,
    title: "Meer dan sport",
    text: "Wij werken aan gedrag, karakter en zelfvertrouwen — bij elk kind én elke tiener.",
  },
  {
    icon: Trophy,
    title: "10+ jaar ervaring",
    text: "Bewezen aanpak voor scholen, ouders en partners door de hele Randstad.",
  },
];

const valueExchange = [
  {
    who: "Scholen",
    give: "Lokaal, planning & vertrouwen",
    get: ["Professionele bewegingslessen", "Sportdagen & workshops", "Pedagogische versterking", "Verbinding met de wijk"],
  },
  {
    who: "Ouders",
    give: "Inschrijving & betrokkenheid",
    get: ["Halal sportomgeving", "Brede motoriek", "Karaktervorming", "Vaste broedergroep"],
  },
  {
    who: "Partners",
    give: "Locatie, netwerk of financiering",
    get: ["Bewezen programma", "Bereik in de gemeenschap", "Maatschappelijke impact", "Heldere rapportage"],
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] bg-[var(--coral)]/20 blur-3xl animate-blob"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -right-24 h-[360px] w-[360px] bg-[var(--ink)]/10 blur-3xl animate-blob"
          style={{ animationDelay: "-4s" }}
        />

        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-6 animate-rise">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--coral)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--coral)]" />
              </span>
              Actief door de hele Randstad
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] text-foreground">
              Sport, karakter en{" "}
              <span className="italic text-[var(--coral-deep)]">gemeenschap</span> voor kinderen én tieners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ADAB MOVES is dé islamitische multisport-organisatie van Nederland. Op basis- en
              middelbare scholen, in onze community en op events — vanuit één duidelijke methode.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Plan een kennismaking <ArrowRight size={18} />
              </Link>
              <Link to="/aanbod" className="btn-ghost">
                Bekijk ons aanbod
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "10+", l: "Jaar ervaring" },
                { k: "12+", l: "Steden Randstad" },
                { k: "8–17", l: "Jaar doelgroep" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/15 blur-2xl animate-floaty-slow" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)] hover-lift">
              <img
                src={hero}
                alt="Kinderen en tieners spelen multisport in een ADAB MOVES sportzaal"
                width={1600}
                height={1100}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* floating badges */}
            <div className="hidden sm:flex items-center gap-3 absolute -left-4 bottom-8 rounded-2xl bg-white border border-border px-4 py-3 shadow-[var(--shadow-soft)] animate-floaty">
              <div className="h-9 w-9 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <ShieldCheck size={18} />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Halal omgeving</div>
                <div className="text-muted-foreground">Begonnen door drie broeders met één missie.</div>
              </div>
            </div>
            <div
              className="hidden sm:flex items-center gap-3 absolute -right-4 top-8 rounded-2xl bg-[var(--ink)] text-white px-4 py-3 shadow-[var(--shadow-soft)] animate-floaty"
              style={{ animationDelay: "-3s" }}
            >
              <div className="h-9 w-9 rounded-xl bg-[var(--coral)] flex items-center justify-center text-white">
                <Sparkles size={18} />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Community gratis</div>
                <div className="text-white/60">Aanmelden → toegelaten</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-y border-border bg-[var(--cream)] overflow-hidden">
          <div className="flex w-max gap-12 py-4 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                {["Voetbal", "Basketbal", "Archery", "Kickboks", "Fitness", "Atletiek", "Turnen", "Multisport", "Karaktervorming", "Brotherhood"].map((s) => (
                  <span key={s + dup} className="text-sm font-semibold uppercase tracking-widest text-foreground/70">
                    ★ {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONS VERHAAL */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Ons verhaal</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground">
              Begonnen door een groep <span className="italic text-[var(--coral-deep)]">broeders</span> met één missie.
            </h2>
            <div className="mt-8 relative rounded-3xl overflow-hidden hover-lift">
              <img src={community} alt="Broeders bouwen aan de ADAB MOVES community" className="w-full h-auto object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">Oprichters</div>
                <div className="text-lg font-semibold">Vanuit broederschap, voor de volgende generatie.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              ADAB MOVES is ontstaan uit een groep broeders die één ding zagen: de juiste{" "}
              <strong className="text-foreground">manieren (adab)</strong> en het ontwikkelen van{" "}
              <strong className="text-foreground">karakter</strong> moeten meegegeven worden — en sport
              speelt daarin een hele grote rol.
            </p>
            <p>
              We zagen ouders zoeken naar een plek waar hun kinderen en tieners kunnen sporten in een
              veilige, halal omgeving. We zagen scholen worstelen met betekenisvolle bewegingslessen.
              Daarom bieden wij een <strong className="text-foreground">duidelijk alternatief</strong>{" "}
              voor scholen én voor gezinnen.
            </p>
            <p>
              Geen losse activiteiten, maar een doordachte methode: bewegen met betekenis, geleid door
              gescreende broeders die zelf leven naar de waarden die zij doorgeven.
            </p>

            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "Adab", d: "Manieren, respect en omgangsvormen als basis." },
                { n: "02", t: "Karakter", d: "Geduld, doorzettingsvermogen, dankbaarheid." },
                { n: "03", t: "Sport", d: "Het middel waarin het geleerd, geleefd en getoetst wordt." },
              ].map((p) => (
                <div key={p.n} className="rounded-2xl border border-border bg-card p-5 hover-lift">
                  <div className="text-2xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>{p.n}</div>
                  <div className="mt-2 font-semibold text-foreground">{p.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow">Voor wie</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Eén beweging, vijf doelgroepen.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Scholen, ouders, partners, jongeren en — in de nabije toekomst — onze meidentak. Voor
              iedereen die meebouwt aan de volgende generatie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="group relative rounded-3xl border border-border bg-card p-7 hover-lift overflow-hidden"
              >
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

      {/* DRIE SPOREN */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Ons aanbod</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Drie sporen, één methode.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                    <t.icon size={20} />
                  </div>
                  <span className="eyebrow">{t.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground leading-snug">
                  {t.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/aanbod" className="btn-ghost">
            Bekijk volledig aanbod <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* COMMUNITY UITLEG */}
      <section className="container-x pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div aria-hidden className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[var(--coral)]/15 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
          <div className="relative grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow !text-[var(--coral)]">Community</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Gratis aanmelden.<br />Wekelijks bewegen.
              </h2>
              <p className="mt-5 text-white/75 leading-relaxed">
                De ADAB MOVES community is gratis om je voor aan te melden. Je wordt toegelaten op
                basis van <strong className="text-white">leeftijd en interesse</strong>. Daarna kies
                je een passend ritme: per maand of per kwartaal.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Meld je aan <ArrowRight size={18} />
                </Link>
                <Link to="/aanbod" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
                  Hoe het werkt
                </Link>
              </div>
            </div>

            <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { n: "01", t: "Gratis aanmelden", d: "Vul je gegevens in — leeftijd, stad en interesses." },
                { n: "02", t: "Toelating op maat", d: "Wij koppelen je aan een groep met dezelfde leeftijd & sport." },
                { n: "03", t: "Wekelijkse activiteit", d: "Elke week beweegmoment op een vaste locatie in jouw stad." },
                { n: "04", t: "Maand of kwartaal", d: "Inschrijven voor 1 maand of 3 maanden — jij kiest." },
              ].map((s) => (
                <li key={s.n} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-2xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                  <div className="mt-2 font-semibold">{s.t}</div>
                  <div className="mt-1 text-sm text-white/70 leading-relaxed">{s.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WAT JE TERUGKRIJGT - VISUALISATIE */}
      <section className="container-x pb-20 md:pb-28">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Wat je terugkrijgt</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Jij geeft. Wij geven goedheid terug.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">
            Scholen, ouders en partners die zich bij ADAB MOVES voegen, krijgen er meer voor terug
            dan een training. Dit is wat de uitwisseling concreet inhoudt.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {valueExchange.map((v, i) => (
            <article
              key={v.who}
              className="relative rounded-3xl border border-border bg-card p-8 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--coral)]/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>
                    0{i + 1}
                  </div>
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
      </section>

      {/* RANDSTAD AANWEZIGHEID */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <span className="eyebrow inline-flex items-center gap-2">
                <MapPin size={14} /> Door de hele Randstad
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Je vindt ons in een stad bij jou in de buurt.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              Onze trainers zijn actief op tientallen locaties in scholen, gymzalen en buurthuizen
              door de hele Randstad. Staat jouw stad er niet bij? Neem contact op — we groeien snel.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/85 hover-lift"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow text-[var(--coral)]">Waarom ADAB MOVES</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Waarom kiezen voor ADAB MOVES?
              </h2>
            </div>
            <p className="text-white/70 md:text-lg leading-relaxed">
              Geen losse activiteiten, maar een doordachte aanpak die het verschil maakt voor
              scholen, ouders en partners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-16">
          <div aria-hidden className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-[var(--coral)]/20 blur-3xl animate-blob" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow inline-flex items-center gap-2">
                <Star size={14} /> Klaar om samen te werken?
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Plan een vrijblijvende kennismaking.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Voor scholen, ouders en partners: we denken graag mee en maken een voorstel op maat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Neem contact op <ArrowRight size={18} />
                </Link>
                <Link to="/over-ons" className="btn-ghost">
                  Lees ons verhaal
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden hidden md:block hover-lift">
              <img
                src={event}
                alt="ADAB Day event met jongeren"
                loading="lazy"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

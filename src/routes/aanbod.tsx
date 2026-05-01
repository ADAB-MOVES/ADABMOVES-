import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  School,
  Users,
  CalendarDays,
  Package,
  Check,
  Mail,
  Phone,
} from "lucide-react";
import event from "@/assets/event.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";

export const Route = createFileRoute("/aanbod")({
  head: () => ({
    meta: [
      { title: "Aanbod — Adab Moves" },
      {
        name: "description",
        content:
          "Schoolprogramma's, multisportcommunity, evenementen en toekomstige diensten van Adab Moves.",
      },
      { property: "og:title", content: "Aanbod — Adab Moves" },
      {
        property: "og:description",
        content: "Maatwerk in sport en beweging: scholen, community, events.",
      },
    ],
  }),
  component: AanbodPage,
});

const overview = [
  {
    icon: School,
    tag: "Scholen",
    title: "Tussen- en naschoolse sport",
    text: "Per locatie kijken we naar de behoefte. Soms tussenschools, soms naschools, soms een combinatie. Altijd professioneel, pedagogisch en met oog voor de groep.",
    points: [
      "Maatwerk per school",
      "Vaste hoofd- en assistent-trainers",
      "Heldere afspraken & evaluaties",
    ],
    href: "#scholen",
  },
  {
    icon: Users,
    tag: "Community",
    title: "Multisportcommunity",
    text: "Een eigen programma waarin kinderen zich per periode inschrijven voor een nieuwe sport. Brede motorische ontwikkeling, structurele begeleiding en een hechte groep.",
    points: ["Periodieke instroom", "Wisselende sporten", "Doorlopende karaktervorming"],
    href: "#community",
  },
  {
    icon: CalendarDays,
    tag: "Events",
    title: "Sport- & kinderactiviteiten",
    text: "Sportevenementen, themadagen en kinderactiviteiten — los te boeken voor scholen, moskeeën, buurthuizen of gemeenten.",
    points: ["Op locatie naar keuze", "Volledig verzorgd", "Voor verschillende leeftijden"],
    href: "#events",
  },
  {
    icon: Package,
    tag: "Binnenkort",
    title: "Materiaal- & seizoensverhuur",
    text: "In een volgende ontwikkelfase voegen we materiaalverhuur en seizoensgebonden verhuur (zoals springkussens) toe aan ons aanbod.",
    points: ["Sport- & spelmateriaal", "Seizoensgebonden", "Pilotfase in voorbereiding"],
    href: "#verhuur",
  },
];

type Track = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: { title: string; text: string }[];
  forWho: string[];
  reverse?: boolean;
};

const tracks: Track[] = [
  {
    id: "scholen",
    eyebrow: "Spoor 01 — Scholen",
    title: "Een vast gezicht in de gymzaal en op het schoolplein.",
    intro:
      "We werken structureel samen met scholen aan een rustig, veilig en uitdagend beweegklimaat. Onze trainers worden onderdeel van het team — herkenbaar voor kinderen, betrouwbaar voor leerkrachten.",
    image: coach,
    imageAlt: "Trainer begeleidt een groep kinderen op het schoolplein",
    bullets: [
      {
        title: "Tussenschoolse sport",
        text: "Begeleide pauzemomenten met spelvormen die rust, regels en plezier combineren.",
      },
      {
        title: "Naschoolse sport",
        text: "Wekelijkse blokken met opbouwende lessen, gericht op brede motorische ontwikkeling.",
      },
      {
        title: "Vaste trainers",
        text: "Een hoofdtrainer met assistentie — zo borgen we kwaliteit en continuïteit.",
      },
      {
        title: "Evaluatie & rapportage",
        text: "Periodieke terugkoppeling aan school en ouders over voortgang en groepsdynamiek.",
      },
    ],
    forWho: ["Basisscholen", "Brede scholen", "Islamitische scholen", "Kinderopvang"],
  },
  {
    id: "community",
    eyebrow: "Spoor 02 — Community",
    title: "Eén community, vele sporten — de hele schooltijd door.",
    intro:
      "Onze multisportcommunity is een eigen programma waarin kinderen elke periode kennismaken met een nieuwe sport. De groep blijft, de coach blijft, de sport verandert. Zo bouwen ze breed op én leren ze elkaar écht kennen.",
    image: community,
    imageAlt: "Kinderen sporten samen in een groep",
    reverse: true,
    bullets: [
      {
        title: "Periodieke blokken",
        text: "Per blok een nieuwe sport — van voetbal en judo tot atletiek en turnen.",
      },
      {
        title: "Vaste groep",
        text: "Kinderen blijven samen. Vriendschappen, vertrouwen en groepsgevoel groeien mee.",
      },
      {
        title: "Karaktervorming",
        text: "We koppelen elke periode aan één van onze acht waarden, zoals geduld of respect.",
      },
      {
        title: "Doorlopende leerlijn",
        text: "Van kennismaking tot verdieping — kinderen ontdekken wat bij hen past.",
      },
    ],
    forWho: ["Kinderen 6–12 jaar", "Wijken & buurten", "Gezinnen die structuur zoeken"],
  },
  {
    id: "events",
    eyebrow: "Spoor 03 — Events",
    title: "Sport- en kinderactiviteiten op locatie.",
    intro:
      "Een sportdag, themadag of kinderactiviteit georganiseerd én begeleid. Wij regelen het programma, het materiaal en de coaches — jullie zorgen voor de plek en de kinderen.",
    image: event,
    imageAlt: "Kinderen lachen tijdens een sportevenement",
    bullets: [
      {
        title: "Sportdagen",
        text: "Compleet verzorgde dagen met circuits, teamspellen en afsluitende toernooien.",
      },
      {
        title: "Themadagen",
        text: "Bijvoorbeeld een Olympische dag, Ramadan-activiteit of vakantieprogramma.",
      },
      {
        title: "Losse activiteiten",
        text: "Workshops en clinics van een dagdeel, ook combineerbaar met andere programma's.",
      },
      {
        title: "Volledig verzorgd",
        text: "Inclusief draaiboek, materiaal, coaches en evaluatie achteraf.",
      },
    ],
    forWho: ["Scholen", "Moskeeën", "Buurthuizen", "Gemeenten"],
  },
];

const upcoming = [
  {
    title: "Materiaalverhuur",
    text: "Sport- en spelmateriaal voor scholen, verenigingen en evenementen.",
  },
  {
    title: "Seizoensverhuur",
    text: "Springkussens en zomer-/winterattracties voor buurtfeesten en familiedagen.",
  },
  {
    title: "Trainerspool",
    text: "Een groeiende groep gecertificeerde coaches die we structureel inzetten.",
  },
];

function AanbodPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-x pt-16 md:pt-24 pb-12">
        <span className="eyebrow">Ons aanbod</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
          Eén visie. Meerdere vormen van bewegen.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Adab Moves levert vanuit één duidelijke visie meerdere vormen van sportaanbod. Flexibel
          per locatie en doelgroep — altijd met dezelfde pedagogische kern.
        </p>
      </section>

      {/* Overview cards */}
      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {overview.map((it) => (
            <a
              key={it.title}
              href={it.href}
              className="group rounded-3xl border border-border bg-card p-8 md:p-10 hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)]">
                  <it.icon size={20} />
                </div>
                <span className="eyebrow !text-foreground/60">{it.tag}</span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-foreground leading-snug">
                {it.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.text}</p>
              <ul className="mt-6 space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                Meer over dit spoor <ArrowRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Detailed tracks */}
      {tracks.map((track) => (
        <section
          key={track.id}
          id={track.id}
          className="container-x py-20 md:py-28 border-t border-border scroll-mt-24"
        >
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              track.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span className="eyebrow">{track.eyebrow}</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground">
                {track.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{track.intro}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {track.bullets.map((b) => (
                  <div key={b.title}>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-[var(--coral-deep)]" />
                      <h3 className="font-semibold text-foreground">{b.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="eyebrow !text-foreground/60">Voor wie</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {track.forWho.map((w) => (
                    <span
                      key={w}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/80"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={track.image}
                  alt={track.imageAlt}
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="w-full h-[460px] md:h-[560px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block h-24 w-24 rounded-2xl bg-[var(--coral)]" />
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming */}
      <section id="verhuur" className="container-x py-20 md:py-24 border-t border-border scroll-mt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Spoor 04 — Binnenkort</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] text-foreground">
            In ontwikkeling: verhuur & uitbreiding.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We bouwen Adab Moves stap voor stap uit. Deze diensten staan op de planning — laat het
            ons weten als je interesse hebt, dan denken we mee over een pilot.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {upcoming.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl border border-dashed border-border bg-card/50 p-7"
            >
              <span className="inline-block rounded-full bg-[var(--coral)]/12 px-3 py-1 text-xs font-medium text-[var(--coral-deep)]">
                In ontwikkeling
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-x pb-24 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--coral)]/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[var(--coral)]/20 blur-3xl"
          />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <span className="eyebrow !text-[var(--cream)]/70">Klaar om te starten?</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] max-w-xl">
                Laten we samen kijken wat past bij jullie locatie.
              </h2>
              <p className="mt-5 max-w-xl text-[var(--cream)]/80 leading-relaxed">
                Of het nu om een wekelijks schoolprogramma, een eenmalig event of een
                multisportblok gaat — we maken graag een vrijblijvend voorstel op maat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Plan een gesprek <ArrowRight size={18} />
                </Link>
                <Link
                  to="/visie"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-6 py-3 text-sm font-medium hover:bg-[var(--cream)]/10 transition-colors"
                >
                  Lees onze visie
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:info@adabmoves.nl"
                className="flex items-center gap-4 rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-5 hover:bg-[var(--cream)]/10 transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)] flex items-center justify-center text-[var(--ink)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--cream)]/60">E-mail</p>
                  <p className="font-medium">info@adabmoves.nl</p>
                </div>
              </a>
              <a
                href="tel:+31000000000"
                className="flex items-center gap-4 rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-5 hover:bg-[var(--cream)]/10 transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)] flex items-center justify-center text-[var(--ink)]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--cream)]/60">Bellen</p>
                  <p className="font-medium">Plan via contactformulier</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

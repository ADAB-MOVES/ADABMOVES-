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
  Baby,
  UserRound,
  Play,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/scene-hero.jpg";
import community from "@/assets/scene-community-kids.jpg";
import event from "@/assets/scene-adab-day.jpg";
import scholen from "@/assets/scene-scholen.jpg";
import { WA, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES — Multisport met betekenis voor kinderen, tieners & broeders" },
      {
        name: "description",
        content:
          "Multisport met betekenis voor moslimkinderen, tieners en broeders. Op scholen, in de community en op events — actief in de Metropoolregio Amsterdam.",
      },
      { property: "og:title", content: "ADAB MOVES — Bewegen met betekenis" },
      {
        property: "og:description",
        content: "Multisport voor kinderen, tieners en broeders. Op scholen, in de community en op events.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const audiences = [
  {
    icon: GraduationCap,
    title: "Scholen",
    text: "Gymlessen, sportdagen en workshops — basis & middelbaar.",
    to: "/aanbod/scholen" as const,
  },
  {
    icon: Baby,
    title: "Kinderen",
    text: "Wekelijkse multisport voor 6–12 jaar in een halal omgeving.",
    to: "/aanbod/community/kinderen" as const,
  },
  {
    icon: Users,
    title: "Tieners",
    text: "Voor 13–17 jaar: sport, broederschap en karakter.",
    to: "/aanbod/community/tieners" as const,
  },
  {
    icon: UserRound,
    title: "Broeders",
    text: "18+ trainingen — samen bewegen, samen groeien.",
    to: "/aanbod/community/broeders" as const,
  },
];

const tracks = [
  {
    icon: School,
    title: "Op scholen",
    text: "Sportlessen, naschoolse programma's en sportdagen, volledig verzorgd.",
    image: scholen,
    to: "/aanbod/scholen",
  },
  {
    icon: Users,
    title: "In de community",
    text: "Wekelijkse multisport voor kinderen, tieners en broeders.",
    image: community,
    to: "/aanbod/community",
  },
  {
    icon: CalendarDays,
    title: "ADAB Day & events",
    text: "Sportdagen en themadagen voor scholen, moskeeën en gemeenten.",
    image: event,
    to: "/aanbod/events",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Eén duidelijke methode",
    text: "De ADAB Methode loopt als rode draad door elke training.",
  },
  {
    icon: ShieldCheck,
    title: "Veilige, halal omgeving",
    text: "VOG-gescreende coaches, heldere regels, gebed- en wuduvriendelijk.",
  },
  {
    icon: HeartHandshake,
    title: "Meer dan sport",
    text: "Wij werken aan gedrag, karakter en zelfvertrouwen.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] bg-[var(--coral)]/20 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-[360px] w-[360px] bg-[var(--ink)]/10 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />

        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-6 animate-rise">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--coral)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--coral)]" />
              </span>
              Metropoolregio Amsterdam
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] text-foreground">
              ADAB <span className="italic text-[var(--coral-deep)]">MOVES</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/80 max-w-xl leading-snug">
              Multisport met betekenis voor kinderen, tieners en broeders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/aanbod" className="btn-primary">
                Bekijk aanbod <ArrowRight size={18} />
              </Link>
              <a href={WA.generic} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle size={18} /> WhatsApp ons
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
              {[
                { k: "10+", l: "Jaar ervaring" },
                { k: "6+", l: "Steden in MRA" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/15 blur-2xl animate-floaty-slow" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)] hover-lift">
              <img src={hero} alt="ADAB MOVES coach met kinderen in de sportzaal" width={1600} height={1100} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-y border-border bg-[var(--cream)] overflow-hidden">
          <div className="flex w-max gap-12 py-4 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                {["Voetbal", "Basketbal", "Archery", "Kickboks", "Fitness", "Atletiek", "Turnen", "Multisport", "Karaktervorming", "Brotherhood"].map((s) => (
                  <span key={s + dup} className="text-sm font-semibold uppercase tracking-widest text-foreground/70">★ {s}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE — direct na hero */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Voor wie</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Voor wie is ADAB MOVES?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 hover-lift"
            >
              <div className="h-12 w-12 rounded-2xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
                <a.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                Bekijken <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WAT WE DOEN */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Wat we doen</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              Drie sporen, één methode.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <Link key={t.title} to={t.to} className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]"><t.icon size={20} /></div>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground leading-snug">{t.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{t.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                    Lees meer <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow text-[var(--coral)]">Waarom ADAB MOVES</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Waarom kiezen voor ADAB MOVES?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]"><r.icon size={20} /></div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl mb-8">
          <span className="eyebrow inline-flex items-center gap-2">
            <Play size={14} /> Zie ons in actie
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-foreground">
            Bewegen met <span className="italic text-[var(--coral-deep)]">betekenis</span>.
          </h2>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] bg-[var(--ink)] hover-lift">
          <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl" />
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

      {/* SLOT-CTA */}
      <section className="container-x pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14">
          <div aria-hidden className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-[var(--coral)]/20 blur-3xl animate-blob" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Vragen? Stuur ons een WhatsApp.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                Voor scholen, ouders en partners — we reageren snel en denken graag mee.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
              <a href={WA.generic} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={18} /> WhatsApp ons
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

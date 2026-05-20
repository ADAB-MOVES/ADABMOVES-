import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, School, Users, CalendarDays, Package, MessageCircle } from "lucide-react";
import event from "@/assets/event.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import scholen from "@/assets/scholen.jpg";
import { FloatingDecor } from "@/components/FloatingDecor";
import { WA } from "@/lib/whatsapp";
import { RevealEmail } from "@/components/RevealEmail";

export const Route = createFileRoute("/aanbod/")({
  head: () => ({
    meta: [
      { title: "Aanbod — ADAB MOVES" },
      { name: "description", content: "Schoolprogramma's, multisport voor kinderen en tieners, sportdagen en verhuur — ontdek het volledige aanbod van ADAB MOVES." },
      { property: "og:title", content: "Aanbod — ADAB MOVES" },
      { property: "og:description", content: "Maatwerk in sport en beweging: scholen, multisport, events." },
    ],
  }),
  component: AanbodHub,
});

const offerings = [
  {
    icon: School,
    tag: "Spoor 01 — Scholen",
    title: "Basis- & middelbare scholen",
    text: "Tussen- en naschoolse sport, gymlessen, sportdagen en workshops — een vast gezicht in jullie gymzaal.",
    image: scholen,
    to: "/aanbod/scholen",
  },
  {
    icon: Users,
    tag: "Spoor 02 — Multisport",
    title: "Multisport voor kinderen & tieners",
    text: "Wekelijkse activiteiten met inschrijving per maand of kwartaal. Een hechte groep, vaste coaches, wisselende sporten.",
    image: community,
    to: "/aanbod/community",
  },
  {
    icon: CalendarDays,
    tag: "Spoor 03 — Events",
    title: "ADAB Day & evenementen",
    text: "Sportdagen, themadagen en kinderactiviteiten — los te boeken voor scholen, gemeenten en buurthuizen.",
    image: event,
    to: "/aanbod/events",
  },
  {
    icon: Package,
    tag: "Spoor 04 — Binnenkort",
    title: "Materiaal- & seizoensverhuur",
    text: "In een volgende fase voegen wij materiaal- en seizoensverhuur (zoals springkussens) toe aan ons aanbod.",
    image: coach,
    to: "/aanbod/verhuur",
  },
] as const;

function AanbodHub() {
  return (
    <>
      <section className="relative overflow-hidden container-x pt-16 md:pt-24 pb-12">
        <FloatingDecor />
        <span className="eyebrow">Ons aanbod</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
          Eén visie. <span className="italic text-[var(--coral-deep)]">Meerdere</span> vormen van bewegen.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          ADAB MOVES levert vanuit één duidelijke visie meerdere vormen van sportaanbod voor
          scholen, ouders en gemeenschap. Klik door voor uitgebreide informatie per spoor.
        </p>
      </section>

      <section className="container-x pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((it, i) => (
            <Link
              key={it.title}
              to={it.to}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                    <it.icon size={20} />
                  </div>
                  <span className="eyebrow !text-foreground/60">{it.tag}</span>
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                  {it.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  Bekijk deze pagina <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <span className="eyebrow !text-[var(--cream)]/70">Klaar om te starten?</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1] max-w-xl">
                Laten we samen kijken wat past bij jullie locatie.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Plan een gesprek <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-5">
                <p className="text-xs uppercase tracking-wider text-[var(--cream)]/60 mb-3">E-mail</p>
                <RevealEmail variant="dark" label="Toon e-mailadres" />
              </div>
              <a href={WA.generic} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-5 hover:bg-[var(--cream)]/10 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--cream)]/60">WhatsApp</p>
                  <p className="font-medium">App ons direct</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CalendarDays,
  PartyPopper,
  Clock,
  GraduationCap,
  AlertTriangle,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import scholen from "@/assets/scholen.jpg";
import { WA } from "@/lib/whatsapp";
import { RevealEmail } from "@/components/RevealEmail";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/scholen")({
  head: () => ({
    meta: [
      { title: "Workshops voor scholen & school sportdagen | ADAB MOVES" },
      { name: "description", content: "Workshops voor scholen, sport- en spelactiviteiten tussen en na schooltijd, sportdagen en events voor basis- en middelbare scholen in Amsterdam, Haarlem, Zaandam, Almere en omstreken. Karaktervorming en gedrag via sport — als zelfstandige aanbieder op jullie locatie." },
      { property: "og:title", content: "Sport & workshops voor scholen — ADAB MOVES" },
      { property: "og:description", content: "Sport en spel tussen en na schooltijd, workshops karaktervorming en school sportdagen — volledig verzorgd door ADAB MOVES." },
      { property: "og:url", content: "https://www.adabmoves.nl/aanbod/scholen" },
      { property: "og:image", content: scholen },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/aanbod/scholen" },
    ],
  }),
  component: ScholenPage,
});

// Aanbod-blokken — wat we concreet doen op school
const aanbod = [
  {
    icon: Clock,
    title: "Tussen de middag",
    text: "Begeleide sport- en spelactiviteiten in de pauze. Kinderen ontladen energie, oefenen samenwerken en komen rustiger terug in de klas.",
  },
  {
    icon: CalendarDays,
    title: "Naschools programma",
    text: "Wekelijkse activiteiten direct na schooltijd in jullie gymzaal of op het plein. Vaste trainer, vaste groep, opbouwend programma.",
  },
  {
    icon: GraduationCap,
    title: "Workshops karakter & gedrag",
    text: "Themasessies waarin we via sport werken aan respect, doorzetten, omgaan met verlies en groepsgedrag.",
  },
  {
    icon: PartyPopper,
    title: "Sportdagen & events",
    text: "Volledig verzorgde sportdagen, clinics en themadagen. Wij regelen materiaal, trainers en draaiboek.",
  },
];

// Knelpunten — focus op gedrag en karakter
const painPoints = [
  {
    icon: AlertTriangle,
    title: "Onrust en korte lontjes in de klas",
    problem: "Leerkrachten zien onrust, weinig respect en moeite met luisteren — ook in de pauze en op het plein.",
    solution: "Onze trainers brengen één heldere lijn: duidelijke regels, vaste rituelen en consequent gedrag. Sport wordt het middel waarmee kinderen leren zich te beheersen.",
  },
  {
    icon: HeartHandshake,
    title: "Bewegen los van karaktervorming",
    problem: "Kinderen bewegen, maar leren in die momenten weinig over respect, doorzetten en samenwerken.",
    solution: "Bij elke activiteit koppelen we sport aan karakter: hoe je wint, hoe je verliest, hoe je met elkaar omgaat — in élke sessie, niet als losse les.",
  },
  {
    icon: Sparkles,
    title: "Leerlingen die zich niet gezien voelen",
    problem: "Veel leerlingen — zeker uit gezinnen waar sport en geloof samenkomen — missen aansluiting op school.",
    solution: "Onze trainers begrijpen hun leefwereld en taal. Vertrouwen ontstaat sneller en de boodschap landt dieper.",
  },
];

// Wat de school terugkrijgt — concrete winsten
const winsten = [
  "Merkbaar rustigere klassen ná elke activiteit",
  "Meer respect, betere omgangsvormen op het plein",
  "Sterker zelfvertrouwen en doorzettingsvermogen bij leerlingen",
  "Hogere betrokkenheid — kinderen kijken uit naar bewegen",
  "Vaste trainer, vaste lijn — geen wisselende gezichten",
  "Eén aanspreekpunt voor planning, materiaal en facturatie",
  "Volledig verzorgd programma — wij regelen alles",
  "Pedagogische opbrengst die doorwerkt in de klas",
];

function ScholenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12 relative">
          <Link to="/aanbod" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar aanbod
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Spoor 01 — Scholen</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Sport en spel met <span className="italic text-[var(--coral-deep)]">karakter</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Sport- en spelactiviteiten <strong className="text-foreground">tussen en na schooltijd</strong>,
              workshops en events voor <strong className="text-foreground">basis- en middelbare scholen</strong>.
              Als zelfstandige aanbieder werken wij structureel aan gedrag, respect en karakter via sport.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={scholen} alt="Coach met kinderen op het schoolplein" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </section>

      {/* WAT WE AANBIEDEN */}
      <section className="container-x pb-16 md:pb-20">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Wat wij doen op school</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Vier vormen, één doel: <span className="italic text-[var(--coral-deep)]">karakter door sport</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {aanbod.map((a, i) => (
            <article
              key={a.title}
              className="rounded-3xl border border-border bg-card p-7 hover-lift animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] shrink-0">
                  <a.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">{a.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{a.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KNELPUNTEN — focus gedrag & karakter */}
      <section className="bg-[var(--cream-deep)] border-y border-border">
        <div className="container-x py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Herkenbaar?</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Gedrag en karakter — daar maken wij het verschil.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              ADAB MOVES is een zelfstandige aanbieder van sport- en spelactiviteiten op school.
              Wij werken structureel aan gedrag, respect en karakter via sport en spel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <article
                key={p.title}
                className="rounded-3xl border border-border bg-card p-7 hover-lift animate-rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
                <div className="mt-4 pl-4 border-l-2 border-[var(--coral)]">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-[var(--coral-deep)]">Onze aanpak — </span>
                    {p.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WAT JE TERUGKRIJGT — ALS SCHOOL (één gecombineerde sectie) */}
      <section className="container-x py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Wat jullie school terugkrijgt</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Concrete winst — <span className="italic text-[var(--coral-deep)]">vanaf de eerste maand zichtbaar</span>.
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {winsten.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5 hover-lift">
              <CheckCircle2 size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" />
              <span className="text-foreground/85">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA — met e-mail button */}
      <section className="container-x pb-20">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="lg:col-span-7 relative">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Klaar om samen te werken?</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Vrijblijvend voorstel op maat — afgestemd op locatie, groepsgrootte en jaarplanning.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--coral)]" /> Reactie binnen 24 uur</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--coral)]" /> Gratis proefactiviteit op locatie</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--coral)]" /> Geen verplichtingen</li>
            </ul>
          </div>
          <div className="lg:col-span-5 relative flex flex-col gap-3 lg:items-end">
            <a href={WA.school} target="_blank" rel="noopener noreferrer" className="btn-primary">
              App ons direct <ArrowRight size={18} />
            </a>
            <RevealEmail variant="dark" label="Mail ons" />
          </div>
        </div>
      </section>
    </>
  );
}

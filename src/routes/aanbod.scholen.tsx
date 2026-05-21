import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Sparkles,
  HeartHandshake,
  Languages,
  Repeat,
  AlertTriangle,
  MapPinOff,
  UsersRound,
  ShieldOff,
  TrendingUp,
  Smile,
  CheckCircle2,
} from "lucide-react";
import scholen from "@/assets/scholen.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/scholen")({
  head: () => ({
    meta: [
      { title: "Sport op school — ADAB MOVES voor basisscholen" },
      { name: "description", content: "Professionele sportlessen, sportdagen en naschools programma voor basisscholen — in lijn met de normen en waarden van jullie leerlingen. Rustigere klassen, betere motoriek, sterker karakter." },
      { property: "og:title", content: "Scholen — ADAB MOVES" },
      { property: "og:description", content: "Een vast gezicht in de gymzaal — rust in de klas, plezier op het veld." },
    ],
  }),
  component: ScholenPage,
});

// Pijnpunten die scholen zelf herkennen
const painPoints = [
  {
    icon: AlertTriangle,
    title: "Gedrag in de klas loopt vast",
    problem: "Korte lontjes, weinig respect en moeite met luisteren — leerkrachten zien het dagelijks, ook tijdens gym.",
    solution: "Wij brengen één duidelijke lijn: heldere huisregels, vaste rituelen en trainers die karakter voorleven, niet alleen aanleren.",
  },
  {
    icon: MapPinOff,
    title: "Wisselende, onpersoonlijke gymdocenten",
    problem: "Elke periode een ander gezicht. Leerlingen moeten steeds opnieuw aarden — en de leerkracht ook.",
    solution: "Dezelfde trainer, jarenlang, in dezelfde gymzaal. Wij investeren in een vaste relatie met jullie team en leerlingen.",
  },
  {
    icon: ShieldOff,
    title: "Bewegingsonderwijs los van pedagogiek",
    problem: "Kinderen bewegen wél, maar leren tijdens gym niet hoe je je gedraagt op én naast het veld.",
    solution: "De ADAB Methode verbindt techniek en plezier met normen, waarden en manieren — in élke les, niet als losse module.",
  },
  {
    icon: UsersRound,
    title: "Leerlingen missen aansluiting",
    problem: "Veel leerlingen voelen zich op school niet écht gezien — zeker leerlingen uit gezinnen waar sport en geloof samenkomen.",
    solution: "Onze trainers begrijpen de leefwereld en taal van jullie leerlingen. Dat opent deuren waar anderen tegen muren lopen.",
  },
];

// Wat de school concreet wint
const winsten = [
  {
    icon: Smile,
    title: "Rustigere klassen ná de gymles",
    text: "Leerkrachten merken het direct: leerlingen komen kalmer, geconcentreerder en met meer respect terug in de klas.",
  },
  {
    icon: TrendingUp,
    title: "Meetbare groei in motoriek",
    text: "Een opbouwend curriculum waarin elke leerling vooruitgaat — niet alleen de natuurtalenten.",
  },
  {
    icon: HeartHandshake,
    title: "Sterker schoolklimaat",
    text: "Onze pedagogische lijn werkt door tot ná de gymles — zichtbaar in respect, focus en samenwerking.",
  },
  {
    icon: Repeat,
    title: "Eén vast aanspreekpunt",
    text: "Geen wisselende contracten of facturen. Eén vaste partner die meedenkt met jullie jaarplanning.",
  },
  {
    icon: Languages,
    title: "Trainers spreken de taal",
    text: "Onze trainers begrijpen de cultuur en leefwereld van jullie leerlingen — vertrouwen ontstaat sneller.",
  },
  {
    icon: Sparkles,
    title: "Trotse, gemotiveerde leerlingen",
    text: "Kinderen die uitkijken naar de gymles, ouders die thuis horen wat er die week is geleerd.",
  },
];

const points = [
  "Volledig verzorgd: planning, materiaal, trainers",
  "Aansluitend op kerndoelen bewegingsonderwijs",
  "Tussenschools, naschools of een combinatie",
  "Speciale aandacht voor groepen die meer structuur nodig hebben",
  "Eén vast aanspreekpunt voor de hele samenwerking",
  "Heldere maandfacturatie zonder verrassingen",
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
                Rust in de klas, <span className="italic text-[var(--coral-deep)]">plezier op het veld</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              ADAB MOVES werkt structureel samen met basisscholen aan een rustig, veilig en
              uitdagend beweegklimaat — vanuit een{" "}
              <strong className="text-foreground">islamitische fundering</strong>, open en
              toegankelijk voor iedereen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={scholen} alt="Coach met kinderen in een schoolgymzaal" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </section>

      {/* PIJNPUNTEN — wat scholen zelf herkennen */}
      <section className="bg-[var(--cream-deep)] border-y border-border">
        <div className="container-x py-20 md:py-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Herkenbaar?</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Dit zien wij dagelijks op scholen — en zo lossen wij het op.
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

      {/* WINST VOOR DE SCHOOL */}
      <section className="container-x py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Wat jullie school wint</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Concrete verbeteringen — vanaf de eerste maand zichtbaar.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Geen losse activiteiten, maar een structurele aanpak die doorwerkt in álle lessen —
            niet alleen tijdens gym.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {winsten.map((v, i) => (
            <article
              key={v.title}
              className="group relative rounded-2xl border border-border bg-card p-6 hover-lift animate-rise overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div aria-hidden className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[var(--coral)]/10 blur-2xl group-hover:bg-[var(--coral)]/20 transition-all" />
              <div className="relative h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
                <v.icon size={20} />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="eyebrow">Inbegrepen</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Alles wat een schoolprogramma nodig heeft.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5">
                  <Check size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WAT JE TERUGKRIJGT — SCHOLEN */}
      <section className="container-x py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Wat je terugkrijgt</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Voor scholen: <span className="italic text-[var(--coral-deep)]">jullie geven, wij geven terug</span>.
          </h2>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 grid md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow !text-foreground/50">Jullie geven</div>
            <p className="mt-3 text-foreground text-lg">Lokaal, planning & vertrouwen</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Een vaste gymzaal, een plek op het jaarrooster en het vertrouwen om met jullie
              leerlingen te werken.
            </p>
          </div>
          <div className="md:border-l md:border-border md:pl-10">
            <div className="eyebrow">Jullie ontvangen</div>
            <ul className="mt-3 space-y-2.5 text-foreground/85">
              {[
                "Professionele bewegingslessen",
                "Sportdagen & workshops",
                "Pedagogische versterking in álle lessen",
                "Verbinding met de wijk en gemeenschap",
              ].map((g) => (
                <li key={g} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="mt-1 text-[var(--coral-deep)] shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-20">

        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="lg:col-span-8 relative">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Klaar om samen te werken?</h2>
            <p className="mt-4 text-white/70 max-w-xl">We maken graag een vrijblijvend voorstel op maat — afgestemd op locatie, groepsgrootte en jaarplanning. De meeste scholen plannen na één gesprek al een proefles.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--coral)]" /> Binnen 24 uur een reactie</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--coral)]" /> Gratis proefles in jullie gymzaal</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--coral)]" /> Voorstel op maat, geen verplichtingen</li>
            </ul>
          </div>
          <div className="lg:col-span-4 lg:text-right relative">
            <a href={WA.school} target="_blank" rel="noopener noreferrer" className="btn-primary">App ons direct <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, HeartHandshake, Languages, Repeat } from "lucide-react";
import scholen from "@/assets/scholen.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/scholen")({
  head: () => ({
    meta: [
      { title: "Sport op school — ADAB MOVES voor basis- en middelbare scholen" },
      { name: "description", content: "Professionele sportlessen, sportdagen en naschools programma voor basis- en middelbare scholen — in lijn met de normen en waarden van jullie leerlingen." },
      { property: "og:title", content: "Scholen — ADAB MOVES" },
      { property: "og:description", content: "Een vast gezicht in de gymzaal." },
    ],
  }),
  component: ScholenPage,
});

// Voordelen die ADAB MOVES uniek maakt voor scholen
const voordelen = [
  {
    icon: HeartHandshake,
    title: "In lijn met normen & waarden",
    text: "Onze aanpak sluit naadloos aan bij de cultuur en waarden van veel leerlingen — geen kunstmatige tweedeling tussen school en thuis.",
  },
  {
    icon: Repeat,
    title: "Duurzame, langjarige aanpak",
    text: "Wij werken meerjarig met dezelfde school. Trainers groeien mee met de leerlingen — geen wisselend gezicht elke periode.",
  },
  {
    icon: Languages,
    title: "Trainers spreken de taal",
    text: "Onze trainers begrijpen de leefwereld, taal en cultuur van jullie leerlingen. Dat opent deuren waar anderen tegen muren lopen.",
  },
  {
    icon: Sparkles,
    title: "Versterkt gedrag in de klas",
    text: "Onze pedagogische methode werkt door tot ná de gymles — zichtbaar in respect, focus en samenwerking tijdens de reguliere lessen.",
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
                Een vast gezicht <span className="italic text-[var(--coral-deep)]">in de gymzaal</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              ADAB MOVES werkt structureel samen met basis- en middelbare scholen aan een rustig,
              veilig en uitdagend beweegklimaat — vanuit een{" "}
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

      {/* Unieke voordelen voor school */}
      <section className="mt-5 text-lg font-semibold text-foreground text-slate-50">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Waarom ADAB MOVES op school</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Sportlessen, tussenschools en naschools — speels, opbouwend en pedagogisch verantwoord.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {voordelen.map((v, i) => (
            <article
              key={v.title}
              className="group relative rounded-2xl border border-border bg-card p-6 hover-lift animate-rise overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
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

      <section className="container-x py-20">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="lg:col-span-8 relative">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Past dit bij jullie school?</h2>
            <p className="mt-4 text-white/70 max-w-xl">We maken graag een vrijblijvend voorstel op maat — afgestemd op locatie, groepsgrootte en jaarplanning.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right relative">
            <a href={WA.school} target="_blank" rel="noopener noreferrer" className="btn-primary">App ons direct <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}

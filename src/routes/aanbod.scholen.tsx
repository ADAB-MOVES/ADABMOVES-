import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, School, GraduationCap, Users, Calendar } from "lucide-react";
import coach from "@/assets/coach.jpg";
import scholen from "@/assets/scholen.jpg";
import methode from "@/assets/methode.jpg";

export const Route = createFileRoute("/aanbod/scholen")({
  head: () => ({
    meta: [
      { title: "Scholen — ADAB MOVES" },
      { name: "description", content: "Tussen- en naschoolse sport, gymlessen, sportdagen en workshops voor basis- en middelbare scholen." },
      { property: "og:title", content: "Scholen — ADAB MOVES" },
      { property: "og:image", content: scholen },
    ],
  }),
  component: ScholenPage,
});

const bullets = [
  { icon: GraduationCap, title: "Basisscholen (4–12 jr)", text: "Gymlessen, tussenschools en naschools — speels, opbouwend en pedagogisch verantwoord." },
  { icon: Users, title: "Middelbare scholen (12–17 jr)", text: "Multisport, leiderschap en karaktervorming voor onder-, midden- en bovenbouw." },
  { icon: School, title: "Vaste trainers", text: "Een hoofdtrainer met assistent — zo borgen we kwaliteit en continuïteit door het jaar heen." },
  { icon: Calendar, title: "Evaluatie & rapportage", text: "Periodieke terugkoppeling aan school en ouders over voortgang en groepsdynamiek." },
];

const points = [
  "Volledig verzorgd: planning, materiaal, trainers",
  "VOG-gescreende coaches",
  "Aansluitend op kerndoelen bewegingsonderwijs",
  "Tussenschools, naschools of een combinatie",
  "Speciale aandacht voor groepen die meer structuur nodig hebben",
  "Heldere maand- of trimesterfacturatie",
];

function ScholenPage() {
  return (
    <>
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="container-x pt-14 md:pt-20 pb-12">
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
              veilig en uitdagend beweegklimaat. Onze trainers worden onderdeel van het team.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <div className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden">
            <img src={scholen} alt="Kinderen sporten in een schoolgymzaal" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-5">
            <div className="rounded-3xl overflow-hidden">
              <img src={coach} alt="Coach begeleidt sportles" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src={methode} alt="Pedagogische sportles" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Wat we leveren</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Onderdeel van het schoolteam, niet zomaar een externe partij.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We werken vanuit één pedagogische lijn, in nauwe afstemming met de leerkracht of
              gymdocent. Vaste trainers, vaste tijden, vaste evaluatiemomenten.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Plan een schoolbezoek <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {bullets.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <b.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
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
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Past dit bij jullie school?</h2>
            <p className="mt-4 text-white/70 max-w-xl">We maken graag een vrijblijvend voorstel op maat — afgestemd op locatie, groepsgrootte en jaarplanning.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="btn-primary">Plan een gesprek <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

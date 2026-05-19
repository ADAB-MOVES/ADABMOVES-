import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Users,
  Scale,
  Flame,
  HeartHandshake,
  Star,
} from "lucide-react";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — De ADAB Methode | ADAB MOVES" },
      {
        name: "description",
        content:
          "ADAB MOVES is een multisport- en beweegorganisatie met islamitische normen en waarden als fundament. Maak kennis met onze organisatie en de ADAB Methode.",
      },
      { property: "og:title", content: "Over ons — De ADAB Methode" },
      {
        property: "og:description",
        content:
          "Wie wij zijn, waar wij voor staan en hoe de ADAB Methode het verschil maakt in ons aanbod.",
      },
      { property: "og:image", content: community },
    ],
  }),
  component: OverOnsPage,
});

const pillars = [
  { icon: ShieldCheck, name: "Adab", text: "Goed gedrag, respect en omgangsvormen als basis." },
  { icon: Compass, name: "Niyyah", text: "Bewust bewegen met een duidelijke intentie." },
  { icon: Users, name: "Ummah", text: "Samen sterk — iedereen hoort erbij." },
  { icon: Scale, name: "Amana", text: "Verantwoordelijkheid voor elk kind dat ons toevertrouwd is." },
  { icon: Flame, name: "Ihsan", text: "Wat je doet, doe het goed." },
  { icon: HeartHandshake, name: "Sabr & Shukr", text: "Geduld en dankbaarheid in elke fase." },
  { icon: Star, name: "Qudwah", text: "Trainers als rolmodellen." },
];

function OverOnsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[var(--coral)]">Over ons</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              Wie wij zijn en waar{" "}
              <span className="italic text-[var(--coral)]">wij voor staan</span>.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
              ADAB MOVES is een multisport- en beweegorganisatie voor kinderen. Wij combineren
              sport met karaktervorming en bouwen aan een sterke, actieve en bewuste generatie.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={community}
                alt="Kinderen sporten samen"
                className="w-full h-full aspect-[4/5] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WIE WIJ ZIJN */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Onze organisatie</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Eén organisatie, drie aanbodlijnen.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Met meer dan 10 jaar ervaring zetten wij sport in als middel voor ontwikkeling.
              Kinderen groeien fysiek én in gedrag, zelfvertrouwen en sociale vaardigheden.
            </p>
            <p>
              Islamitische normen en waarden vormen een belangrijk fundament van onze
              organisatie. Ze bepalen hoe wij omgaan met kinderen, ouders en partners — en hoe wij
              een veilige, vertrouwde sportomgeving creëren voor elke deelnemer.
            </p>
          </div>
        </div>
      </section>

      {/* DE ADAB METHODE */}
      <section className="bg-[var(--cream)] border-y border-border">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow">De ADAB Methode</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Onze methode — zo maken wij het verschil.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              De ADAB Methode is onze aanpak waarmee wij sport, opvoeding en waarden samenbrengen.
              Geen losse trainingen, maar één doordachte lijn die zichtbaar is in elk aanbod.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <p.icon size={20} />
                </div>
                <h3
                  className="mt-5 text-2xl font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={coach}
              alt="Trainer begeleidt kinderen"
              loading="lazy"
              className="w-full h-full aspect-[4/5] object-contain"
            />
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Sport met betekenis.<br />Beweging met fundament.
            </h2>
            <p className="mt-5 text-white/70">
              Benieuwd hoe de ADAB Methode aansluit bij jouw school, kind of organisatie?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Neem contact op <ArrowRight size={18} />
              </Link>
              <Link to="/aanbod" className="btn-ghost text-white border-white/20 hover:bg-white/5">
                Bekijk ons aanbod
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/visie")({
  head: () => ({
    meta: [
      { title: "Visie — Adab Moves" },
      { name: "description", content: "Onze visie, missie en kernwaarden: sport als middel voor brede ontwikkeling, vanuit een islamitische fundering." },
      { property: "og:title", content: "Visie — Adab Moves" },
      { property: "og:description", content: "Respect, eerlijkheid, geduld, dankbaarheid en verantwoordelijkheid — verweven in elke training." },
    ],
  }),
  component: VisiePage,
});

const values = [
  "Respect", "Eerlijkheid", "Geduld", "Dankbaarheid",
  "Nederigheid", "Zelfbeheersing", "Verantwoordelijkheid", "Samenwerking",
];

function VisiePage() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Onze visie</span>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] text-foreground">
              Sport als middel<br/>
              <span className="italic text-[var(--coral-deep)]">voor ontwikkeling.</span>
            </h1>
          </div>
          <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
            Beweging is voor Adab Moves geen doel op zich, maar een kans om waarden te oefenen
            in de praktijk. Kinderen groeien daarmee niet alleen fysiek, maar ook sociaal,
            mentaal en moreel.
          </p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14">
            <span className="eyebrow text-[var(--coral)]">Missie</span>
            <p className="mt-5 text-2xl md:text-3xl font-display leading-snug" style={{fontFamily:"var(--font-display)"}}>
              Kinderen op een professionele, plezierige en veilige manier laten bewegen,
              terwijl zij groeien in gedrag, karakter en sociale vaardigheden.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
            <span className="eyebrow">Visie</span>
            <p className="mt-5 text-2xl md:text-3xl font-display leading-snug text-foreground" style={{fontFamily:"var(--font-display)"}}>
              Sport speelt een krachtige rol in de ontwikkeling van evenwichtige,
              respectvolle en zelfbewuste jongeren.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden">
            <img src={community} alt="Kinderen vieren samen een sportmoment" width={1200} height={1400} loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Kernwaarden</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Acht waarden, verweven in elke training.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Onze waarden worden niet apart van sport gepresenteerd, maar juist verweven in
              de sportactiviteiten zelf. Wanneer iets lukt of juist niet lukt, wordt dat
              benut als leermoment.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {values.map((v) => (
                <div key={v} className="rounded-xl border border-border bg-card px-4 py-5 text-center">
                  <div className="text-base font-semibold text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-16">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n:"01", t:"Initiatie", d:"Visie, aanbod en doelgroep scherpstellen — samen met de partner." },
              { n:"02", t:"Ontwerp", d:"Programma's, werkvormen, materialen en procedures uitwerken." },
              { n:"03", t:"Realisatie", d:"Uitvoering op scholen, eigen locaties of bij events." },
              { n:"04", t:"Nazorg", d:"Evaluatie, verbetering en borging van de pedagogische kern." },
              { n:"05", t:"Borging", d:"Vaste werkwijzen, training, evaluatie en feedback." },
              { n:"06", t:"Groei", d:"Gecontroleerde uitbreiding zonder verlies van kwaliteit." },
            ].map((p) => (
              <div key={p.n}>
                <div className="text-5xl font-display font-semibold text-[var(--coral)]" style={{fontFamily:"var(--font-display)"}}>{p.n}</div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="btn-primary">Werk met ons samen <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}

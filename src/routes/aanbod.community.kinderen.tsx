import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Calendar, Heart, ShieldCheck } from "lucide-react";
import kinderen from "@/assets/community-kinderen.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/community/kinderen")({
  head: () => ({
    meta: [
      { title: "Multisport Kinderen (8–12) — ADAB MOVES" },
      { name: "description", content: "Wekelijkse multisport voor kinderen van 8 tot 12 jaar. Vaste coach, vaste groep, vaste locatie." },
      { property: "og:title", content: "Multisport voor kinderen — ADAB MOVES" },
      { property: "og:description", content: "Vertrouwde sport voor jonge kinderen." },
    ],
  }),
  component: Page,
});

const bullets = [
  { icon: Users, title: "Vaste, hechte groep", text: "Dezelfde gezichten elke week — vriendschap vanaf het eerste uur." },
  { icon: Calendar, title: "Wekelijks moment", text: "Op een vaste avond of zaterdag in jouw stad. Geen losse drop-in." },
  { icon: Heart, title: "Maand of kwartaal", text: "Flexibel betalen, geen lange contracten. Transparant tarief." },
  { icon: ShieldCheck, title: "Veilig & vertrouwd", text: "Vaste coaches die de groep persoonlijk kennen en het goede voorbeeld geven." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12 relative">
          <Link to="/aanbod/community" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar multisport
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Multisport — 8 t/m 12 jaar</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Multisport <span className="italic text-[var(--coral-deep)]">voor kinderen</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Speels, opbouwend en met vaste coaches die de hele groep persoonlijk kennen — wekelijks bewegen met betekenis.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={kinderen} alt="Kinderen sporten in een gymzaal" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Wat je krijgt</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een tweede thuis, in beweging.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Wij werken met vaste groepen op leeftijd. De coach en groep blijven — alleen de
              sport wisselt per periode (voetbal, basketbal, atletiek, multisport).
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Na inschrijving krijgen leden ook toegang tot extra activiteiten en programma's via
              onze gesloten groep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Meld mijn kind aan <ArrowRight size={18} />
              </a>
              <a href={WA.question} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Eerst een vraag stellen
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {bullets.map((b, i) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 hover-lift animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
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

      <section className="container-x pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <span className="eyebrow">Tarief</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Transparante tarieven, geen verborgen kosten.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            Deelname is per maand of per kwartaal. Het exacte tarief verschilt per stad en
            sportdiscipline — je ontvangt het direct bij plaatsing.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {["Wekelijkse training", "Vaste coach & groep", "Materiaal & accommodatie", "Toegang tot extra activiteiten"].map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <Check size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

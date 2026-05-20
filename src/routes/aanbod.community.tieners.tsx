import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Trophy, Target, ShieldCheck } from "lucide-react";
import tieners from "@/assets/community-tieners.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/community/tieners")({
  head: () => ({
    meta: [
      { title: "Multisport Tieners (12–17) — ADAB MOVES" },
      { name: "description", content: "Sport voor tieners: voetbal, basketbal, archery, kickboks, fitness — met leeftijdgenoten in jouw stad." },
      { property: "og:title", content: "Sport voor tieners — ADAB MOVES" },
      { property: "og:description", content: "Voetbal, basketbal, kickboks en meer voor jongens van 12–17." },
    ],
  }),
  component: Page,
});

const bullets = [
  { icon: Trophy, title: "Brede sportbasis", text: "Voetbal, basketbal, archery, kickboks, atletiek en fitness in roterende periodes." },
  { icon: Users, title: "Met je vrienden", text: "Geen losse trainingen, een hechte groep tieners uit jouw stad." },
  { icon: Target, title: "Karakter & discipline", text: "Sport als middel om karakter en discipline op te bouwen — niet alleen techniek." },
  { icon: ShieldCheck, title: "Veilig & vertrouwd", text: "Coaches die zelf rolmodellen zijn en de leeftijd begrijpen." },
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
              <span className="eyebrow">Multisport — 12 t/m 17 jaar</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Multisport <span className="italic text-[var(--coral-deep)]">voor tieners</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Een sterke fysiek en een sterk karakter horen bij elkaar. Wekelijks trainen met
              leeftijdgenoten, onder begeleiding van coaches die zelf het voorbeeld geven.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden hover-lift">
          <img src={tieners} alt="Tieners trainen — boksen, pull-ups, mat" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Waarom tieners blijven</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een plek waar je gezien wordt.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We weten dat de leeftijd van 12–17 vraagt om méér dan sport alleen. Daarom
              werken we aan zelfvertrouwen, leiderschap en vriendschap — naast techniek en kracht.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Leden krijgen ook toegang tot extra activiteiten en clinics, aangekondigd via onze
              gesloten groep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Meld je aan <ArrowRight size={18} />
              </a>
              <a href={WA.question} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Eerst even appen
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
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">Wat krijg je per maand?</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {["Wekelijkse multisport-training", "Wisselende disciplines per periode", "Vaste groep & coach", "Toegang tot extra activiteiten"].map((p) => (
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

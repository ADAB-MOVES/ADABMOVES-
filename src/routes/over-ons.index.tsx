import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Target } from "lucide-react";
import community from "@/assets/community.jpg";
import verhaal from "@/assets/verhaal.jpg";
import methode from "@/assets/methode.jpg";

export const Route = createFileRoute("/over-ons/")({
  head: () => ({
    meta: [
      { title: "Over ons — ADAB MOVES" },
      { name: "description", content: "Maak kennis met ADAB MOVES: ons verhaal, de ADAB Methode en onze missie & visie." },
      { property: "og:title", content: "Over ons — ADAB MOVES" },
      { property: "og:image", content: community },
    ],
  }),
  component: OverOnsHub,
});

const sections = [
  {
    icon: BookOpen,
    tag: "Ons verhaal",
    title: "Begonnen door broeders met één missie.",
    text: "Hoe ADAB MOVES is ontstaan vanuit een groep broeders, met de overtuiging dat sport en karakter samen horen.",
    image: verhaal,
    to: "/over-ons/verhaal",
  },
  {
    icon: Sparkles,
    tag: "De ADAB Methode",
    title: "Onze pedagogische aanpak.",
    text: "Zeven pijlers — van Adab tot Qudwah — die in elke training, op elke locatie zichtbaar zijn.",
    image: methode,
    to: "/over-ons/methode",
  },
  {
    icon: Target,
    tag: "Missie & visie",
    title: "Waar wij naartoe werken.",
    text: "Vier pijlers van groei, acht kernwaarden en een heldere aanpak van eerste gesprek tot duurzame samenwerking.",
    image: community,
    to: "/over-ons/missie-visie",
  },
] as const;

function OverOnsHub() {
  return (
    <>
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28">
          <span className="eyebrow text-[var(--coral)]">Over ons</span>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Wie wij zijn en <span className="italic text-[var(--coral)]">waar wij voor staan</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            ADAB MOVES is een multisport- en beweegorganisatie voor kinderen én tieners. Lees ons
            verhaal, ontdek de ADAB Methode en bekijk onze missie & visie.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                    <s.icon size={20} />
                  </div>
                  <span className="eyebrow !text-foreground/60">{s.tag}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground leading-snug">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  Lees verder <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow">Werk met ons</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground leading-tight">Past ADAB MOVES bij jouw school of organisatie?</h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="btn-primary">Plan een kennismaking <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Compass, Users, Scale, Flame, HeartHandshake, Star } from "lucide-react";
import methode from "@/assets/methode.jpg";
import coach from "@/assets/coach.jpg";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/over-ons/methode")({
  head: () => ({
    meta: [
      { title: "De ADAB Methode — ADAB MOVES" },
      { name: "description", content: "Zeven pijlers die onze pedagogische aanpak vormen — van Adab tot Qudwah." },
      { property: "og:title", content: "De ADAB Methode" },
      { property: "og:image", content: methode },
    ],
  }),
  component: MethodePage,
});

const pillars = [
  { icon: ShieldCheck, name: "Adab", text: "Goed gedrag, respect en omgangsvormen als basis voor alles wat we doen." },
  { icon: Compass, name: "Niyyah", text: "Bewust bewegen met een duidelijke intentie — voor jezelf en voor de Schepper." },
  { icon: Users, name: "Ummah", text: "Samen sterk — iedereen hoort erbij. Geen kind blijft aan de zijlijn staan." },
  { icon: Scale, name: "Amana", text: "Verantwoordelijkheid voor elk kind dat aan ons wordt toevertrouwd." },
  { icon: Flame, name: "Ihsan", text: "Wat je doet, doe het goed. Streven naar uitmuntendheid in elke training." },
  { icon: HeartHandshake, name: "Sabr & Shukr", text: "Geduld in moeilijkheden, dankbaarheid in voorspoed — een leven lang." },
  { icon: Star, name: "Qudwah", text: "Trainers als rolmodellen — kinderen leren wat ze om zich heen zien." },
];

function MethodePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12">
          <Link to="/over-ons" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar over ons
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">De ADAB Methode</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Zo maken wij <span className="italic text-[var(--coral-deep)]">het verschil</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              De ADAB Methode brengt sport, opvoeding en waarden samen vanuit een{" "}
              <strong className="text-foreground">islamitische fundering</strong> — één
              doordachte lijn die zichtbaar is in elk aanbod, en toegankelijk voor iedereen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden">
          <img src={methode} alt="Coach legt uit aan een groep kinderen" loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Zeven pijlers</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            De fundamenten van onze aanpak.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <p.icon size={20} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={coach} alt="Trainer in actie" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Sport met betekenis. Beweging met fundament.</h2>
            <p className="mt-5 text-white/70">Benieuwd hoe de ADAB Methode aansluit bij jouw school, kind of organisatie?</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Neem contact op <ArrowRight size={18} /></Link>
              <Link to="/over-ons/missie-visie" className="btn-ghost text-white border-white/20 hover:bg-white/5">Lees onze visie</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mijn zoon kijkt elke week uit naar de training. Hij komt thuis met meer zelfvertrouwen én hij gaat met meer respect met zijn broertje om. Precies wat ik zocht.",
    name: "Fatima",
    role: "Moeder van Yusuf (9)",
    accent: "coral",
  },
  {
    quote:
      "Ik vind het tof dat we met allemaal broeders zijn. We doen elke week iets anders — basketbal, boksen, archery. En de coaches geven echt om ons, niet alleen om de sport.",
    name: "Amir (14)",
    role: "Community-lid Amsterdam",
    accent: "ink",
  },
  {
    quote:
      "ADAB MOVES verzorgt onze gymlessen en de jaarlijkse sportdag. Strakke organisatie, gescreende trainers en zichtbare impact op gedrag in de klas. Een aanrader.",
    name: "Karim el-Hamdi",
    role: "Directeur basisschool, Zaandam",
    accent: "coral",
  },
] as const;

export function Testimonials({
  eyebrow = "Wat anderen zeggen",
  title = "Stemmen uit onze gemeenschap.",
  intro = "Ouders, jongeren en scholen over hun ervaring met ADAB MOVES.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/3 h-72 w-72 rounded-full bg-[var(--coral)]/15 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--ink)]/10 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div className="max-w-2xl mb-12 relative">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
          {title}
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">{intro}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 hover-lift animate-rise"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <Quote
              className={`absolute -top-4 left-6 h-9 w-9 rounded-xl p-2 ${
                t.accent === "coral"
                  ? "bg-[var(--coral)] text-white"
                  : "bg-[var(--ink)] text-[var(--coral)]"
              } shadow-[var(--shadow-soft)] transition-transform group-hover:-translate-y-1`}
            />
            <div className="flex gap-1 text-[var(--coral)] mb-4 pt-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="text-foreground leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-border">
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

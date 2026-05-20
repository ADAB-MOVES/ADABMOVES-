import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

/**
 * "Onze belofte" — vervangt de oude testimonials.
 * Drie pijlers die ouders, scholen en partners houvast geven, zonder fake quotes.
 */
const pillars = [
  {
    icon: ShieldCheck,
    title: "Een veilige, fijne omgeving",
    text: "Onze trainers en begeleiders doen hun best te leven naar de normen en waarden die zij doorgeven. Vaste gezichten, heldere huisregels.",
  },
  {
    icon: Sparkles,
    title: "Duurzame aanpak",
    text: "Geen losse activiteiten, maar een lijn die jaren meegaat — herkenbaar in elke training, op elke locatie.",
  },
  {
    icon: HeartHandshake,
    title: "In lijn met jullie waarden",
    text: "Wij sluiten aan bij de cultuur, taal en waarden van de kinderen. Toegankelijk voor iedereen — moslim én niet-moslim welkom.",
  },
] as const;

export function Testimonials({
  eyebrow = "Onze belofte",
  title = "Waar wij voor staan, voelt iedereen.",
  intro = "Drie beloftes die wij elke training waarmaken — aan ouders, scholen en jongeren.",
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
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 hover-lift animate-rise overflow-hidden"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div
              aria-hidden
              className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--coral)]/10 blur-2xl transition-all group-hover:bg-[var(--coral)]/20"
            />
            <div className="relative h-12 w-12 rounded-2xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
              <p.icon size={22} />
            </div>
            <h3 className="relative mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
            <p className="relative mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

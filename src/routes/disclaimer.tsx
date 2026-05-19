import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — ADAB MOVES" },
      { name: "description", content: "Disclaimer en gebruiksvoorwaarden van de ADAB MOVES website." },
      { property: "og:title", content: "Disclaimer — ADAB MOVES" },
      { property: "og:description", content: "Disclaimer van ADAB MOVES." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <article className="container-x py-20 md:py-28 max-w-3xl">
      <span className="eyebrow">Juridisch</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">Disclaimer</h1>
      <p className="mt-4 text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

      <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <p>De informatie op deze website is met de grootst mogelijke zorg samengesteld. ADAB MOVES kan echter niet instaan voor de juistheid of volledigheid van alle informatie.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Aansprakelijkheid</h2>
          <p className="mt-3">ADAB MOVES is niet aansprakelijk voor enige directe of indirecte schade als gevolg van het gebruik van deze website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Auteursrecht</h2>
          <p className="mt-3">Alle teksten, afbeeldingen en grafische elementen op deze website zijn eigendom van ADAB MOVES. Overname zonder toestemming is niet toegestaan.</p>
        </section>
      </div>
    </article>
  );
}

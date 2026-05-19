import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toegankelijkheid")({
  head: () => ({
    meta: [
      { title: "Toegankelijkheid — ADAB MOVES" },
      { name: "description", content: "Onze toegankelijkheidsverklaring." },
      { property: "og:title", content: "Toegankelijkheid — ADAB MOVES" },
      { property: "og:description", content: "Toegankelijkheidsverklaring." },
    ],
  }),
  component: ToegankelijkheidPage,
});

function ToegankelijkheidPage() {
  return (
    <article className="container-x py-20 md:py-28 max-w-3xl">
      <span className="eyebrow">Juridisch</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">Toegankelijkheid</h1>
      <p className="mt-4 text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>
      <div className="mt-10 space-y-6 text-foreground/85 leading-relaxed">
        <p>ADAB MOVES streeft ernaar dat deze website voor iedereen toegankelijk is, conform de WCAG 2.1-richtlijnen (niveau AA).</p>
        <p>Loop je tegen een probleem aan? Mail ons via <a href="mailto:info@adabmoves.nl" className="text-[var(--coral-deep)] underline">info@adabmoves.nl</a>, dan lossen we het zo snel mogelijk op.</p>
      </div>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toegankelijkheid")({
  head: () => ({
    meta: [
      { title: "Toegankelijkheid — ADAB MOVES" },
      { name: "description", content: "Toegankelijkheidsverklaring van ADAB MOVES — wij streven naar een website die voor iedereen toegankelijk is, conform de WCAG 2.1-richtlijnen (niveau AA)." },
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
        <p>Loop je tegen een probleem aan? Mail ons via <a href="mailto:adabmoves@gmail.com" className="text-[var(--coral-deep)] underline">adabmoves@gmail.com</a>, dan lossen we het zo snel mogelijk op.</p>
      </div>
    </article>
  );
}

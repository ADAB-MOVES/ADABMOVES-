import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookiebeleid — ADAB MOVES" },
      { name: "description", content: "Hoe ADAB MOVES omgaat met cookies en vergelijkbare technieken." },
      { property: "og:title", content: "Cookiebeleid — ADAB MOVES" },
      { property: "og:description", content: "Ons cookiebeleid." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <article className="container-x py-20 md:py-28 max-w-3xl">
      <span className="eyebrow">Juridisch</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">Cookiebeleid</h1>
      <p className="mt-4 text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

      <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground">1. Wat zijn cookies?</h2>
          <p className="mt-3">Cookies zijn kleine tekstbestanden die bij een bezoek aan een website op je apparaat worden geplaatst om de site goed te laten functioneren.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">2. Welke cookies wij gebruiken</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li><strong>Functionele cookies</strong> — noodzakelijk voor basisfunctionaliteit.</li>
            <li><strong>Analytische cookies</strong> — geanonimiseerd, om de site te verbeteren.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">3. Uitschakelen</h2>
          <p className="mt-3">Je kunt cookies altijd zelf uitschakelen via je browserinstellingen.</p>
        </section>
      </div>
    </article>
  );
}

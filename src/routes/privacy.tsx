import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring — ADAB MOVES" },
      { name: "description", content: "Hoe ADAB MOVES omgaat met persoonsgegevens van deelnemers, ouders en partners." },
      { property: "og:title", content: "Privacyverklaring — ADAB MOVES" },
      { property: "og:description", content: "Onze privacyverklaring conform AVG." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="container-x py-20 md:py-28 max-w-3xl prose-content">
      <span className="eyebrow">Juridisch</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">Privacyverklaring</h1>
      <p className="mt-4 text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

      <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground">1. Wie wij zijn</h2>
          <p className="mt-3">ADAB MOVES is een Nederlandse multisport- en beweegorganisatie. Wij verwerken persoonsgegevens van deelnemers, ouders, scholen en partners conform de Algemene Verordening Gegevensbescherming (AVG).</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">2. Welke gegevens wij verwerken</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Naam, geboortedatum en woonplaats van deelnemers</li>
            <li>Contactgegevens van ouders/verzorgers (e-mail, telefoon)</li>
            <li>Inschrijfgegevens en aanwezigheidsregistratie</li>
            <li>Foto- en beeldmateriaal (alleen na toestemming)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">3. Doel van de verwerking</h2>
          <p className="mt-3">Wij gebruiken gegevens uitsluitend voor inschrijving, communicatie, veilige uitvoering van trainingen en wettelijke verplichtingen.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">4. Bewaartermijn</h2>
          <p className="mt-3">Gegevens worden niet langer bewaard dan strikt noodzakelijk, met een maximum van 2 jaar na beëindiging van deelname, tenzij een wettelijke termijn anders bepaalt.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">5. Jouw rechten</h2>
          <p className="mt-3">Je hebt recht op inzage, correctie, verwijdering en bezwaar. Stuur een verzoek naar <a className="text-[var(--coral-deep)] underline" href="mailto:info@adabmoves.nl">info@adabmoves.nl</a>.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
          <p className="mt-3">Vragen over deze verklaring? Mail ons via info@adabmoves.nl.</p>
        </section>
      </div>
    </article>
  );
}

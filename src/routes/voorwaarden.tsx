import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden — ADAB MOVES" },
      { name: "description", content: "De algemene voorwaarden van ADAB MOVES voor scholen, ouders en partners." },
      { property: "og:title", content: "Algemene voorwaarden — ADAB MOVES" },
      { property: "og:description", content: "De voorwaarden voor deelname en samenwerking." },
    ],
  }),
  component: VoorwaardenPage,
});

function VoorwaardenPage() {
  return (
    <article className="container-x py-20 md:py-28 max-w-3xl">
      <span className="eyebrow">Juridisch</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">Algemene voorwaarden</h1>
      <p className="mt-4 text-sm text-muted-foreground">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

      <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground">1. Toepasselijkheid</h2>
          <p className="mt-3">Deze voorwaarden zijn van toepassing op alle diensten en programma's van ADAB MOVES, waaronder scholenaanbod, community-activiteiten en events.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">2. Inschrijving & deelname</h2>
          <p className="mt-3">Inschrijving voor de community is gratis. Deelname aan periodieke programma's vereist een keuze tussen maand- of kwartaalinschrijving. Betaling vindt vooraf plaats per gekozen periode.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">3. Annulering</h2>
          <p className="mt-3">Opzeggen kan per einde van een maand of kwartaal, met inachtneming van een opzegtermijn van 14 dagen. Restitutie tijdens een lopende periode is niet mogelijk.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">4. Veiligheid & gedrag</h2>
          <p className="mt-3">Deelnemers houden zich aan de huisregels. ADAB MOVES kan deelname beëindigen bij grensoverschrijdend gedrag.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">5. Aansprakelijkheid</h2>
          <p className="mt-3">ADAB MOVES is niet aansprakelijk voor verlies, diefstal of letsel anders dan veroorzaakt door grove nalatigheid van onze organisatie.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground">6. Wijzigingen</h2>
          <p className="mt-3">ADAB MOVES kan deze voorwaarden wijzigen. Wijzigingen worden via de website gepubliceerd.</p>
        </section>
      </div>
    </article>
  );
}

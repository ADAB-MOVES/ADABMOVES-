import { createFileRoute } from "@tanstack/react-router";
import { KERNWAARDEN, PIJLERS, BRAND } from "@/data/spelboek";

export const Route = createFileRoute("/spelboek/methode")({
  head: () => ({
    meta: [
      { title: "Over de ADAB Methode — Pauzesport Spelboek" },
      {
        name: "description",
        content:
          "De zeven pijlers van de ADAB Methode en de acht kernwaarden die de basis vormen van elk pauzesport-moment van ADAB MOVES.",
      },
      { property: "og:title", content: "Over de ADAB Methode — Pauzesport Spelboek" },
      {
        property: "og:description",
        content: "Zeven pijlers en acht kernwaarden achter het pauzesport-aanbod van ADAB MOVES.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MethodePagina,
});

function MethodePagina() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--pb-navy)]">
        Over de ADAB Methode
      </h1>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--pb-navy)]/75">
        {BRAND.naam} is een multisport- en beweegorganisatie voor kinderen van 4 t/m 12 jaar,
        geworteld in een islamitische fundering en actief in Amsterdam en omgeving. Wij laten
        kinderen professioneel, plezierig en veilig bewegen, terwijl zij groeien in gedrag,
        karakter en sociale vaardigheden. Brede ontwikkeling staat boven prestatie alleen.
      </p>
      <p className="mt-3 text-sm italic text-[var(--pb-gold)]">{BRAND.tagline}</p>

      <h2 className="mt-8 text-lg font-semibold text-[var(--pb-navy)]">Zeven pijlers</h2>
      <div className="mt-3 space-y-2.5">
        {PIJLERS.map((p) => (
          <div key={p.naam} className="rounded-2xl border border-[var(--pb-gold)]/35 bg-white p-4">
            <h3 className="text-base font-semibold text-[var(--pb-gold)]">{p.naam}</h3>
            <p className="mt-1 text-sm text-[var(--pb-navy)]/80">{p.tekst}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-semibold text-[var(--pb-navy)]">Acht kernwaarden</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {KERNWAARDEN.map((k) => (
          <li
            key={k}
            className="rounded-full border border-[var(--pb-navy)]/15 bg-white px-4 py-2 text-sm font-medium text-[var(--pb-navy)]"
          >
            {k}
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl bg-[var(--pb-navy)] p-5 text-white">
        <h2 className="text-base font-semibold">Waarom dit spelboek anders is</h2>
        <p className="mt-2 text-sm text-white/75 leading-relaxed">
          Geen losse verzameling spelletjes, maar een doorlopende jaarlijn van tien maanden — van
          kennismaking tot afsluitend feest. Elke maand een thema uit de ADAB Methode en bij elk
          spel een coach tip die het spel koppelt aan een kernwaarde. Zo werk je tijdens het spelen
          onbewust aan karaktervorming.
        </p>
      </div>
    </>
  );
}

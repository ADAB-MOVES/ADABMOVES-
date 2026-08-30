import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import { getMaand, getSpel, type Spel } from "@/data/spelboek";
import { downloadMaand } from "@/lib/spelboek-pdf";

export const Route = createFileRoute("/spelboek/maand/$nummer")({
  loader: ({ params }) => {
    const maand = getMaand(Number(params.nummer));
    if (!maand) throw notFound();
    return { maand };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Maand niet gevonden — ADAB MOVES" }, { name: "robots", content: "noindex" }],
      };
    }
    const { maand } = loaderData;
    const titel = `Maand ${maand.nummer}: ${maand.thema} — Pauzesport Spelboek`;
    return {
      meta: [
        { title: titel },
        { name: "description", content: maand.uitleg },
        { property: "og:title", content: titel },
        { property: "og:description", content: maand.uitleg },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: MaandNotFound,
  component: MaandPagina,
});

function MaandNotFound() {
  return (
    <div className="text-[var(--pb-navy)]">
      <h1 className="text-xl font-semibold">Deze maand bestaat niet.</h1>
      <Link to="/spelboek" className="mt-3 inline-flex items-center gap-2 text-[var(--pb-gold)] font-semibold">
        <ArrowLeft size={16} /> Terug naar het spelboek
      </Link>
    </div>
  );
}

function SpelKaart({ spel, label }: { spel: Spel; label: string }) {
  return (
    <section className="mt-5 rounded-2xl border border-[var(--pb-gold)]/35 bg-white overflow-hidden">
      <header className="bg-[var(--pb-navy)] px-5 py-3.5">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--pb-gold)]">{label}</p>
        <h2 className="text-lg font-semibold text-white leading-snug">{spel.naam}</h2>
        <p className="mt-0.5 text-xs text-white/60">
          {spel.soort} · {spel.duur} · {spel.leeftijd}
        </p>
      </header>
      <div className="p-5 text-[var(--pb-navy)]">
        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--pb-gold)]">
          Benodigdheden
        </h3>
        <p className="mt-1.5 text-sm">{spel.benodigdheden.join(" · ")}</p>

        <h3 className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--pb-gold)]">
          Uitvoering
        </h3>
        <ol className="mt-1.5 space-y-1.5 text-sm">
          {spel.uitvoering.map((stap, i) => (
            <li key={stap} className="flex gap-2.5">
              <span className="font-semibold text-[var(--pb-gold)]">{i + 1}.</span>
              <span>{stap}</span>
            </li>
          ))}
        </ol>

        <h3 className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--pb-gold)]">
          Per leeftijdsgroep
        </h3>
        <div className="mt-2 space-y-2">
          {spel.varianten.map((v) => (
            <div key={v.groep} className="rounded-xl bg-[var(--pb-paper)] px-4 py-3">
              <p className="text-sm font-semibold">{v.groep}</p>
              <p className="mt-0.5 text-sm text-[var(--pb-navy)]/70">{v.tekst}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-[var(--pb-gold)] bg-[var(--pb-gold)]/10 px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--pb-gold)]">
            Coach tip
          </p>
          <p className="mt-1 text-sm">{spel.coachTip}</p>
        </div>
      </div>
    </section>
  );
}

function MaandPagina() {
  const { maand } = Route.useLoaderData();
  const [busy, setBusy] = useState(false);

  async function exporteer() {
    setBusy(true);
    try {
      await downloadMaand(maand);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Link
        to="/spelboek"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pb-navy)]/60"
      >
        <ArrowLeft size={16} /> Alle maanden
      </Link>

      <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--pb-gold)]">
        Maand {maand.nummer} · {maand.maand}
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--pb-navy)]">
        {maand.thema}
      </h1>
      <p className="mt-1 text-sm font-medium text-[var(--pb-gold)]">{maand.waarde}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--pb-navy)]/75">{maand.uitleg}</p>

      <button
        onClick={exporteer}
        disabled={busy}
        className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl border border-[var(--pb-navy)] px-5 py-3.5 font-semibold text-[var(--pb-navy)] disabled:opacity-70"
      >
        {busy ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
        Download deze maand (PDF)
      </button>

      <SpelKaart spel={getSpel(maand.balspelId)} label="Standaard balspel" />
      <SpelKaart spel={getSpel(maand.spelId)} label="Spel van de maand" />
    </>
  );
}

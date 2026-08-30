import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Download, Loader2 } from "lucide-react";
import { MAANDEN, getSpel } from "@/data/spelboek";
import { downloadVolledigSpelboek } from "@/lib/spelboek-pdf";

export const Route = createFileRoute("/spelboek/")({
  head: () => ({
    meta: [
      { title: "Pauzesport Spelboek — ADAB MOVES" },
      {
        name: "description",
        content:
          "Digitaal spelboek voor pleintrainers: tien maanden pauzesport met een thema uit de ADAB Methode, spellen per leeftijdsgroep en printbare PDF.",
      },
      { property: "og:title", content: "Pauzesport Spelboek — ADAB MOVES" },
      {
        property: "og:description",
        content:
          "Tien maanden pauzesport voor het schoolplein — spellen per leeftijdsgroep, coach tips en printbare PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpelboekHome,
});

function SpelboekHome() {
  const [busy, setBusy] = useState(false);

  async function exporteer() {
    setBusy(true);
    try {
      await downloadVolledigSpelboek();
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-[var(--pb-navy)] tracking-tight">
        Kies een maand
      </h1>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--pb-navy)]/70">
        Tien maanden buitenspelplezier. Elke maand een thema uit de ADAB Methode — zo werk je
        tijdens het spelen aan gedrag, karakter en samenspel.
      </p>

      <button
        onClick={exporteer}
        disabled={busy}
        className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl bg-[var(--pb-navy)] px-5 py-4 text-white font-semibold disabled:opacity-70"
      >
        {busy ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
        Download volledig spelboek (PDF)
      </button>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {MAANDEN.map((m) => (
          <Link
            key={m.nummer}
            to="/spelboek/maand/$nummer"
            params={{ nummer: String(m.nummer) }}
            className="group rounded-2xl border border-[var(--pb-gold)]/35 bg-white p-5 shadow-sm active:scale-[0.99] transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--pb-gold)]">
                Maand {m.nummer} · {m.maand}
              </span>
              <ArrowRight size={16} className="text-[var(--pb-navy)]/40" />
            </div>
            <h2 className="mt-2 text-lg font-semibold text-[var(--pb-navy)] leading-snug">
              {m.thema}
            </h2>
            <p className="mt-1 text-sm text-[var(--pb-navy)]/60">
              {getSpel(m.balspelId).naam} · {getSpel(m.spelId).naam}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

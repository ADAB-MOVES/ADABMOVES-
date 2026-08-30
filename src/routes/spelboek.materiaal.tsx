import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { MATERIAAL } from "@/data/spelboek";

export const Route = createFileRoute("/spelboek/materiaal")({
  head: () => ({
    meta: [
      { title: "Materiaal — Pauzesport Spelboek ADAB MOVES" },
      {
        name: "description",
        content:
          "Het complete materiaallijstje voor pauzesport: lintjes, voetballen, basketbal, foam ballen, kingbal, springtouw en softarchery set.",
      },
      { property: "og:title", content: "Materiaal — Pauzesport Spelboek ADAB MOVES" },
      {
        property: "og:description",
        content: "Alles wat een pleintrainer nodig heeft voor de pauzesport-spellen, in één lijst.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MateriaalPagina,
});

function MateriaalPagina() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--pb-navy)]">Materiaal</h1>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--pb-navy)]/75">
        Alle spellen in dit spelboek zijn te spelen met uitsluitend dit materiaal — niets extra's
        nodig.
      </p>
      <ul className="mt-5 space-y-2.5">
        {MATERIAAL.map((m) => (
          <li
            key={m}
            className="flex items-center gap-3 rounded-2xl border border-[var(--pb-gold)]/35 bg-white px-5 py-4 text-[var(--pb-navy)] font-medium"
          >
            <CheckCircle2 size={18} className="text-[var(--pb-gold)] shrink-0" />
            {m}
          </li>
        ))}
      </ul>
    </>
  );
}

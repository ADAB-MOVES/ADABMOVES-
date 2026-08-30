import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { BookOpen, Boxes, Compass } from "lucide-react";

export const Route = createFileRoute("/spelboek")({
  component: SpelboekLayout,
});

const links = [
  { to: "/spelboek", label: "Spelboek", icon: BookOpen, exact: true },
  { to: "/spelboek/methode", label: "Methode", icon: Compass, exact: false },
  { to: "/spelboek/materiaal", label: "Materiaal", icon: Boxes, exact: false },
] as const;

function SpelboekLayout() {
  return (
    <div
      className="min-h-screen"
      style={
        {
          "--pb-navy": "#1F2240",
          "--pb-gold": "#B8923A",
          "--pb-paper": "#F7F5F0",
          background: "#F7F5F0",
        } as React.CSSProperties
      }
    >
      <div className="bg-[var(--pb-navy)] text-white">
        <div className="mx-auto max-w-3xl px-5 py-5">
          <Link to="/spelboek" className="block">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--pb-gold)]">
              ADAB MOVES
            </p>
            <h2 className="text-xl font-semibold tracking-tight">Pauzesport Spelboek</h2>
          </Link>
        </div>
        <nav className="mx-auto max-w-3xl px-5 pb-4 flex gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2.5 text-sm font-medium text-white/75"
              activeProps={{
                className:
                  "flex-1 flex items-center justify-center gap-2 rounded-xl border border-[var(--pb-gold)] bg-[var(--pb-gold)]/15 px-3 py-2.5 text-sm font-semibold text-white",
              }}
            >
              <l.icon size={16} />
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-7 pb-20">
        <Outlet />
      </main>
    </div>
  );
}

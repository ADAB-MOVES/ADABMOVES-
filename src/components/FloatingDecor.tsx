/**
 * Decoratieve drijvende kleurvlekken voor pagina-achtergronden.
 * Subtiele beweging — geen interactie, geen content.
 */
export function FloatingDecor({
  variant = "default",
}: {
  variant?: "default" | "coral" | "ink";
}) {
  const a =
    variant === "ink"
      ? "bg-[var(--ink)]/15"
      : variant === "coral"
        ? "bg-[var(--coral)]/25"
        : "bg-[var(--coral)]/20";
  const b =
    variant === "ink" ? "bg-[var(--coral)]/15" : "bg-[var(--ink)]/10";
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 -left-16 h-[360px] w-[360px] rounded-full blur-3xl animate-blob ${a}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute top-40 -right-20 h-[300px] w-[300px] rounded-full blur-3xl animate-blob ${b}`}
        style={{ animationDelay: "-5s" }}
      />
    </>
  );
}

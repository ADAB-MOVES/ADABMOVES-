import { useState } from "react";
import { Mail } from "lucide-react";
import { EMAIL } from "@/lib/whatsapp";

type Variant = "light" | "dark";

export function RevealEmail({
  variant = "light",
  label = "Toon e-mail",
}: {
  variant?: Variant;
  label?: string;
}) {
  const [shown, setShown] = useState(false);

  const dark = variant === "dark";

  if (shown) {
    return (
      <a
        href={`mailto:${EMAIL}`}
        className={
          dark
            ? "inline-flex items-center gap-2 rounded-xl bg-[var(--coral)]/15 text-[var(--coral)] px-4 py-2.5 font-semibold hover:bg-[var(--coral)]/25 transition-colors"
            : "inline-flex items-center gap-2 rounded-xl bg-[var(--coral)]/15 text-[var(--coral-deep)] px-4 py-2.5 font-semibold hover:bg-[var(--coral)]/25 transition-colors"
        }
      >
        <Mail size={16} />
        {EMAIL}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShown(true)}
      className={
        dark
          ? "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 text-white px-4 py-2.5 font-semibold hover:bg-white/10 transition-colors"
          : "inline-flex items-center gap-2 rounded-xl border border-border bg-card text-foreground px-4 py-2.5 font-semibold hover:bg-[var(--cream)] transition-colors"
      }
    >
      <Mail size={16} />
      {label}
    </button>
  );
}

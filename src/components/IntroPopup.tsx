import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles, ArrowRight } from "lucide-react";

const STORAGE_KEY = "adabmoves_intro_seen_v1";

export function IntroPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage geblokkeerd — toon alsnog
    }
    const t = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 motion-safe:animate-[fadeIn_240ms_ease-out]"
    >
      <button
        aria-label="Sluiten"
        onClick={close}
        className="absolute inset-0 bg-[var(--ink)]/70 backdrop-blur-sm"
      />
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] motion-safe:animate-[popIn_360ms_cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="h-2 bg-gradient-to-r from-[var(--coral)] to-[var(--coral-deep)]" />
        <button
          onClick={close}
          aria-label="Sluiten"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>
        <div className="p-8 md:p-10">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={14} /> Welkom
          </span>
          <h2
            id="intro-popup-title"
            className="mt-3 text-3xl md:text-4xl font-semibold leading-tight text-foreground"
          >
            Bewegen met <span className="italic text-[var(--coral-deep)]">betekenis</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ADAB MOVES is de islamitische multisport- en beweegorganisatie van
            Nederland. Sport, karakter en gemeenschap — voor scholen, ouders en
            kinderen.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/aanbod" onClick={close} className="btn-primary group">
              Bekijk ons aanbod{" "}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" onClick={close} className="btn-ghost">
              Plan een kennismaking
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(12px) scale(0.96) }
          100% { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  );
}

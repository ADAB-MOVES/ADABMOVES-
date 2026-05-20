import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem = {
  to: string;
  label: string;
  children?: { to: string; label: string; desc?: string }[];
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/aanbod",
    label: "Aanbod",
    children: [
      { to: "/aanbod/scholen", label: "Scholen", desc: "Basis & middelbaar" },
      { to: "/aanbod/community/kinderen", label: "Multisport — Kinderen", desc: "8–12 jaar" },
      { to: "/aanbod/community/tieners", label: "Multisport — Tieners", desc: "12–17 jaar" },
      { to: "/aanbod/events", label: "Sportdagen & events", desc: "Op locatie, op maat" },
      { to: "/aanbod/verhuur", label: "Verhuur", desc: "Materiaal & seizoenen" },
    ],
  },
  {
    to: "/over-ons",
    label: "Over ons",
    children: [
      { to: "/over-ons/methode", label: "De ADAB Methode", desc: "Onze aanpak" },
      { to: "/over-ons/verhaal", label: "Ons verhaal", desc: "Hoe we begonnen" },
      { to: "/over-ons/missie-visie", label: "Missie & visie", desc: "Waar we naartoe gaan" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function enter(label: string) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function leave() {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  }

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-background/90 border-b border-border-soft shadow-[0_1px_0_0_var(--border-soft)]"
          : "bg-background/70 border-b border-transparent"
      }`}
    >
      <div className="container-x flex flex-col items-center">
        {/* Logo groot bovenaan */}
        <Link
          to="/"
          className="flex items-center justify-center pt-4 pb-2 transition-all"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="ADAB MOVES"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`}
          />
          <span className="sr-only">ADAB MOVES</span>
        </Link>

        {/* Mobiele toggle rechtsboven */}
        <button
          aria-label="Menu"
          className="md:hidden absolute right-4 top-4 p-2 rounded-md text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigatie onder logo */}
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10 pb-3">
          {nav.map((n) =>
            n.children ? (
              <div key={n.to} className="relative" onMouseEnter={() => enter(n.label)} onMouseLeave={leave}>
                <Link
                  to={n.to}
                  className="group relative inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground/75 hover:text-foreground transition-colors py-2"
                  activeProps={{ className: "is-active !text-foreground" }}
                >
                  <span>{n.label}</span>
                  <ChevronDown size={14} className={`transition-transform ${openMenu === n.label ? "rotate-180" : ""}`} />
                  <span
                    aria-hidden
                    className="absolute left-0 right-5 -bottom-0.5 h-px bg-[var(--coral)] scale-x-0 group-hover:scale-x-100 group-[.is-active]:scale-x-100 origin-left transition-transform duration-300"
                  />
                </Link>
                {openMenu === n.label && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px] z-50"
                    onMouseEnter={() => enter(n.label)}
                    onMouseLeave={leave}
                  >
                    <div className="rounded-2xl border border-border bg-white/95 backdrop-blur-xl shadow-[var(--shadow-lift)] p-2 animate-rise">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-xl px-4 py-3 hover:bg-[var(--cream)] transition-colors group"
                        >
                          <div className="text-sm font-semibold text-foreground group-hover:text-[var(--coral-deep)] transition-colors">
                            {c.label}
                          </div>
                          {c.desc && (
                            <div className="mt-0.5 text-xs text-muted-foreground">{c.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="group relative text-sm font-semibold uppercase tracking-wider text-foreground/75 hover:text-foreground transition-colors py-2"
                activeProps={{ className: "is-active !text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                <span>{n.label}</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-0.5 h-px bg-[var(--coral)] scale-x-0 group-hover:scale-x-100 group-[.is-active]:scale-x-100 origin-left transition-transform duration-300"
                />
              </Link>
            ),
          )}
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-soft bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) =>
              n.children ? (
                <div key={n.to}>
                  <button
                    type="button"
                    onClick={() => setOpenMobile((cur) => (cur === n.label ? null : n.label))}
                    className="w-full flex items-center justify-between py-3 text-base font-semibold text-foreground/90"
                  >
                    <span>{n.label}</span>
                    <ChevronDown size={16} className={`transition-transform ${openMobile === n.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMobile === n.label && (
                    <div className="pl-3 pb-2 flex flex-col gap-1 border-l border-border-soft">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm font-medium text-foreground/70"
                      >
                        Overzicht
                      </Link>
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-foreground/80"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 text-base font-medium text-foreground/80"
                  activeProps={{ className: "text-foreground font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/aanbod", label: "Aanbod" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/visie", label: "Visie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-background/85 border-b border-border-soft shadow-[0_1px_0_0_var(--border-soft)]"
          : "bg-background/60 border-b border-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Adab Moves"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
          <span className="sr-only">Adab Moves</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
              activeProps={{ className: "is-active !text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 -bottom-0.5 h-px bg-[var(--coral)] scale-x-0 group-hover:scale-x-100 group-[.is-active]:scale-x-100 origin-left transition-transform duration-300"
              />
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm">
            Plan een gesprek
          </Link>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border-soft bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-2 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm self-start mt-2"
              onClick={() => setOpen(false)}
            >
              Plan een gesprek
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

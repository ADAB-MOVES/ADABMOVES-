import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/aanbod", label: "Aanbod" },
  { to: "/visie", label: "Visie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Adab Moves" className="h-11 w-auto" />
          <span className="sr-only">Adab Moves</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm">Plan een gesprek</Link>
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
        <div className="md:hidden border-t border-border bg-background">
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
            <Link to="/contact" className="btn-primary text-sm self-start mt-2" onClick={() => setOpen(false)}>
              Plan een gesprek
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

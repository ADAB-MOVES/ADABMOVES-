import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--ink)] text-[var(--cream)]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoDark} alt="Adab Moves" className="h-16 w-auto -ml-2" />
          <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
            Bewegen met betekenis. Dé islamitische multisport- en beweegorganisatie van Nederland —
            voor kinderen én tieners.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--coral)]" />
              Actief door de hele Randstad
            </div>
            <a href="mailto:info@adabmoves.nl" className="flex items-center gap-2 hover:text-[var(--coral)]">
              <Mail size={14} className="text-[var(--coral)]" />
              info@adabmoves.nl
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Ontdek</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/aanbod" className="hover:text-[var(--coral)]">Aanbod</Link></li>
            <li><Link to="/over-ons" className="hover:text-[var(--coral)]">Over ons</Link></li>
            <li><Link to="/visie" className="hover:text-[var(--coral)]">Visie & methodiek</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--coral)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Voor wie</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Basis- & middelbare scholen</li>
            <li>Ouders & gezinnen</li>
            <li>Partners & gemeenten</li>
            <li>Jongeren (8–17 jr)</li>
            <li className="text-white/60">Meidentak — binnenkort</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} ADAB MOVES. Alle rechten voorbehouden.</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-[var(--coral)]">Privacy</Link>
            <Link to="/voorwaarden" className="hover:text-[var(--coral)]">Voorwaarden</Link>
            <Link to="/cookies" className="hover:text-[var(--coral)]">Cookies</Link>
            <Link to="/disclaimer" className="hover:text-[var(--coral)]">Disclaimer</Link>
            <Link to="/toegankelijkheid" className="hover:text-[var(--coral)]">Toegankelijkheid</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

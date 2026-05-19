import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--ink)] text-[var(--cream)]">
      <div className="container-x py-20 md:py-24 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logoDark} alt="Adab Moves" className="h-14 w-auto -ml-2" />
          <p className="mt-6 max-w-sm text-[15px] text-white/65 leading-relaxed">
            Bewegen met betekenis. Dé islamitische multisport- en beweegorganisatie van Nederland —
            voor kinderen én tieners.
          </p>
          <div className="mt-7 space-y-2.5 text-sm text-white/75">
            <div className="flex items-center gap-2.5">
              <MapPin size={14} className="text-[var(--coral)]" />
              Actief door de hele Randstad
            </div>
            <a
              href="mailto:info@adabmoves.nl"
              className="flex items-center gap-2.5 hover:text-[var(--coral)] transition-colors"
            >
              <Mail size={14} className="text-[var(--coral)]" />
              info@adabmoves.nl
            </a>
          </div>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="eyebrow !text-[var(--coral)]">Ontdek</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/aanbod" className="hover:text-[var(--coral)] transition-colors">
                Aanbod
              </Link>
            </li>
            <li>
              <Link to="/over-ons" className="hover:text-[var(--coral)] transition-colors">
                Over ons
              </Link>
            </li>
            <li>
              <Link to="/visie" className="hover:text-[var(--coral)] transition-colors">
                Visie & methodiek
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--coral)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow !text-[var(--coral)]">Voor wie</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>Basis- & middelbare scholen</li>
            <li>Ouders & gezinnen</li>
            <li>Partners & gemeenten</li>
            <li>Jongeren (8–17 jr)</li>
            <li className="text-white/45">Meidentak — binnenkort</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/45 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} ADAB MOVES. Alle rechten voorbehouden.</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-[var(--coral)] transition-colors">
              Privacy
            </Link>
            <Link to="/voorwaarden" className="hover:text-[var(--coral)] transition-colors">
              Voorwaarden
            </Link>
            <Link to="/cookies" className="hover:text-[var(--coral)] transition-colors">
              Cookies
            </Link>
            <Link to="/disclaimer" className="hover:text-[var(--coral)] transition-colors">
              Disclaimer
            </Link>
            <Link to="/toegankelijkheid" className="hover:text-[var(--coral)] transition-colors">
              Toegankelijkheid
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

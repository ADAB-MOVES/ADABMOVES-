import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Mail, Instagram } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import { PHONE_DISPLAY, PHONE_TEL, WA, EMAIL } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--ink)] text-[var(--cream)]">
      <div className="container-x py-20 md:py-24 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logoDark} alt="ADAB MOVES" className="h-14 w-auto -ml-2" />
          <p className="mt-6 max-w-sm text-[15px] text-white/65 leading-relaxed">
            Bewegen met betekenis. Een multisport- en beweegorganisatie voor scholen, ouders en
            gemeenschap — voor kinderen.
          </p>
          <div className="mt-7 space-y-3 text-sm text-white/80">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 hover:text-[var(--coral)] transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                <Phone size={14} />
              </span>
              <span className="font-medium tracking-wide">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WA.generic}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[var(--coral)] transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <MessageCircle size={14} />
              </span>
              WhatsApp ons direct
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 hover:text-[var(--coral)] transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                <Mail size={14} />
              </span>
              <span className="font-medium">{EMAIL}</span>
            </a>
            <div className="flex items-center gap-3 text-white/65">
              <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={14} />
              </span>
              Metropoolregio Amsterdam
            </div>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="eyebrow !text-[var(--coral)]">Aanbod</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/aanbod/scholen" className="hover:text-[var(--coral)] transition-colors">Scholen</Link></li>
            <li><Link to="/aanbod/community/kinderen" className="hover:text-[var(--coral)] transition-colors">Multisport — kinderen</Link></li>
            <li><Link to="/aanbod/events" className="hover:text-[var(--coral)] transition-colors">Sportdagen & events</Link></li>
            <li><Link to="/aanbod/verhuur" className="hover:text-[var(--coral)] transition-colors">Verhuur</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow !text-[var(--coral)]">Over ons</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/over-ons/methode" className="hover:text-[var(--coral)] transition-colors">De ADAB Methode</Link></li>
            <li><Link to="/over-ons/verhaal" className="hover:text-[var(--coral)] transition-colors">Ons verhaal</Link></li>
            <li><Link to="/over-ons/missie-visie" className="hover:text-[var(--coral)] transition-colors">Missie & visie</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--coral)] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/45 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} ADAB MOVES. Alle rechten voorbehouden.</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-[var(--coral)] transition-colors">Privacy</Link>
            <Link to="/voorwaarden" className="hover:text-[var(--coral)] transition-colors">Voorwaarden</Link>
            <Link to="/cookies" className="hover:text-[var(--coral)] transition-colors">Cookies</Link>
            <Link to="/disclaimer" className="hover:text-[var(--coral)] transition-colors">Disclaimer</Link>
            <Link to="/toegankelijkheid" className="hover:text-[var(--coral)] transition-colors">Toegankelijkheid</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

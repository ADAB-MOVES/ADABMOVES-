import { Link } from "@tanstack/react-router";
import logoDark from "@/assets/logo-dark.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--ink)] text-[var(--cream)]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoDark} alt="Adab Moves" className="h-16 w-auto -ml-2" />
          <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
            Bewegen met betekenis. De islamitische multisport- en beweegorganisatie van Nederland.
          </p>
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
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>info@adabmoves.nl</li>
            <li>Nederland</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Adab Moves. Alle rechten voorbehouden.</span>
          <span>Bewegen · Karakter · Gemeenschap</span>
        </div>
      </div>
    </footer>
  );
}

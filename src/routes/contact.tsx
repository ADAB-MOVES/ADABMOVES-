import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Send, Phone } from "lucide-react";
import { useState } from "react";
import { FloatingDecor } from "@/components/FloatingDecor";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WA } from "@/lib/whatsapp";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ADAB MOVES | Sport voor scholen, kinderen & jongeren" },
      { name: "description", content: "Neem contact op met ADAB MOVES voor sportprogramma's, workshops, sportdagen of inschrijving in de multisport-community — in Amsterdam, Haarlem, Zaandam, Almere, Amstelveen en Hoofddorp." },
      { property: "og:title", content: "Contact — ADAB MOVES" },
      { property: "og:description", content: "Plan een vrijblijvend gesprek over sport, karaktervorming en jongerenwerk met onze coaches." },
      { property: "og:url", content: "https://www.adabmoves.nl/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim().slice(0, 200),
      org: String(fd.get("org") || "").trim().slice(0, 200) || null,
      email: String(fd.get("email") || "").trim().slice(0, 320),
      phone: String(fd.get("phone") || "").trim().slice(0, 40) || null,
      message: String(fd.get("message") || "").trim().slice(0, 5000),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setError("Vul naam, e-mail en bericht in.");
      setSending(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Contact submission failed");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(
        `Er ging iets mis. Mail ons direct op ${EMAIL} of probeer later opnieuw.`,
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section className="relative overflow-hidden container-x pt-16 md:pt-24 pb-24">
      <FloatingDecor />
      <div className="grid lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-5">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
            Laten we in beweging komen.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
            School, ouder of partner uit de gemeenschap? We bespreken graag vrijblijvend wat
            ADAB MOVES voor jullie kan betekenen.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)]">
                <Mail size={18}/>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">E-mail</div>
                <a href={`mailto:${EMAIL}`} className="mt-2 inline-block text-lg font-medium text-foreground hover:text-[var(--coral-deep)] transition-colors">{EMAIL}</a>
              </div>
            </div>
            <a href={WA.generic} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="h-11 w-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle size={18}/>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-medium text-foreground">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`tel:${PHONE_TEL}`} className="flex items-start gap-4 group">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
                <Phone size={18}/>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">Bellen</div>
                <div className="text-lg font-medium text-foreground">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)]">
                <MapPin size={18}/>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">Werkgebied</div>
                <div className="text-lg font-medium text-foreground">Nederland</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <Send size={22}/>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">Bedankt voor je bericht.</h2>
                <p className="mt-2 text-muted-foreground">We nemen zo snel mogelijk contact met je op.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Naam" name="name" required />
                  <Field label="Organisatie" name="org" />
                  <Field label="E-mail" type="email" name="email" required />
                  <Field label="Telefoon" name="phone" />
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Bericht <span className="text-[var(--coral)]">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={4000}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--coral)] transition-colors"
                    placeholder="Vertel ons over jullie locatie, doelgroep of wens..."
                  />
                </div>
                {error && (
                  <p className="mt-4 text-sm text-[var(--coral-deep)]">{error}</p>
                )}
                <button type="submit" disabled={sending} className="btn-primary mt-7 disabled:opacity-60">
                  {sending ? "Versturen..." : <>Verstuur bericht <Send size={16}/></>}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">{label}{required && <span className="text-[var(--coral)]"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--coral)] transition-colors"
      />
    </div>
  );
}

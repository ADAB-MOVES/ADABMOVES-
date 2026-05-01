import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adab Moves" },
      { name: "description", content: "Neem contact op met Adab Moves voor scholen, evenementen of de multisportcommunity." },
      { property: "og:title", content: "Contact — Adab Moves" },
      { property: "og:description", content: "Plan een vrijblijvend gesprek over sport en beweging met betekenis." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-x pt-16 md:pt-24 pb-24">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
            Laten we in beweging komen.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
            School, opvang, moskee of buurthuis? We bespreken graag vrijblijvend wat Adab Moves
            voor jullie kan betekenen.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/12 flex items-center justify-center text-[var(--coral-deep)]">
                <Mail size={18}/>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">E-mail</div>
                <a href="mailto:info@adabmoves.nl" className="text-lg font-medium text-foreground hover:text-[var(--coral-deep)]">info@adabmoves.nl</a>
              </div>
            </div>
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
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
                  <label className="block text-sm font-medium text-foreground mb-2">Bericht</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--coral)] transition-colors"
                    placeholder="Vertel ons over jullie locatie, doelgroep of wens..."
                  />
                </div>
                <button type="submit" className="btn-primary mt-7">
                  Verstuur bericht <Send size={16}/>
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

import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

const SERVICES = [
  "Employee Handbook",
  "Compliance & Policy",
  "Recruitment",
  "Onboarding & Ops",
  "Employee Relations",
  "Training & Consulting",
];

export function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setSelected([]);
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Contact</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1]">
            Let's build your HR foundation <span className="text-gradient-gold">with confidence.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Tell us a little about your team and what you need. We respond within one business day.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:afromadeit@gmail.com" className="flex items-center gap-4 group">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gradient-gold/10">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <span className="block font-medium group-hover:text-gold transition-colors">afromadeit@gmail.com</span>
              </span>
            </a>
            <a href="tel:+17862227364" className="flex items-center gap-4 group">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gradient-gold/10">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
                <span className="block font-medium group-hover:text-gold transition-colors">786-222-7364</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gradient-gold/10">
                <User className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Principal</span>
                <span className="block font-medium">Peggy Joseph, MS-HRM</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl bg-navy-surface/70 border border-white/10 p-6 sm:p-8 shadow-[var(--shadow-elevated)]"
        >
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Company / Organization" name="company" />
          </div>

          <div className="mt-6">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Services of interest
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const on = selected.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={`rounded-full px-3.5 py-1.5 text-xs border transition ${
                      on
                        ? "bg-gradient-gold text-midnight border-transparent"
                        : "border-white/15 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl bg-midnight/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition"
              placeholder="What's on your plate?"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-midnight shadow-[var(--shadow-gold)] hover:opacity-95 transition disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl bg-midnight/60 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}

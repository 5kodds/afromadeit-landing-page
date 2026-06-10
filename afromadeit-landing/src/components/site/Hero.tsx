import portrait from "@/assets/peggy-portrait.jpg";
import logo from "@/assets/logo-lockup.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 50% at 20% 0%, rgba(199,134,58,0.18) 0%, transparent 60%), radial-gradient(60% 40% at 90% 20%, rgba(233,191,111,0.10) 0%, transparent 60%), linear-gradient(180deg, #05132A 0%, #0D1A2E 100%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Strategic HR Consulting
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Strategic HR Consulting <span className="text-gradient-gold">Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Helping small businesses and nonprofits build strong, compliant, and people-centered workplaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-midnight shadow-[var(--shadow-gold)] hover:opacity-95 transition"
            >
              Let's Build Your HR Foundation
            </a>
            <a href="#services" className="text-sm text-foreground/80 hover:text-foreground underline-offset-4 hover:underline">
              Explore services →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><span className="text-foreground font-semibold">20+ yrs</span> HR experience</div>
            <div className="h-4 w-px bg-white/10" />
            <div>Healthcare · Nonprofit · Higher Ed</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-gold opacity-25 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-navy-surface shadow-[var(--shadow-elevated)]">
            <img
              src={portrait}
              alt="Peggy Joseph, MS-HRM — Founder of AfroMadeIt Global"
              width={896}
              height={1152}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-midnight/90 via-midnight/60 to-transparent">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-9 w-9" />
                <div>
                  <div className="font-display font-semibold">Peggy Joseph, MS-HRM</div>
                  <div className="text-xs text-muted-foreground">Founder & Principal Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

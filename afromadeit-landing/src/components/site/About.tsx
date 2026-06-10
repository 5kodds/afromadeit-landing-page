import portrait from "@/assets/peggy-portrait.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={portrait}
              alt="Peggy Joseph"
              loading="lazy"
              width={896}
              height={1152}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">About the Founder</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
            Peggy Joseph, <span className="text-gradient-gold">MS-HRM</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Peggy founded AfroMadeIt Global to bring enterprise-grade HR thinking to the
              small businesses and nonprofits that need it most — without the enterprise
              overhead.
            </p>
            <p>
              With more than 20 years across healthcare, higher education, and the
              nonprofit sector, she has built handbooks, recruited teams, navigated
              compliance, and coached leaders through the moments that define a workplace.
            </p>
            <p className="text-foreground">
              Her approach is simple: <span className="text-gold">people first, process always.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

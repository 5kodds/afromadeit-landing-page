const points = [
  {
    stat: "20+",
    title: "Years of HR & Recruitment Experience",
    body: "Two decades partnering with leaders to build workplaces people don't want to leave.",
  },
  {
    stat: "3",
    title: "Specialized Industries",
    body: "Deep expertise across healthcare, higher education, and the nonprofit sector.",
  },
  {
    stat: "1:1",
    title: "Practical, People-First Solutions",
    body: "No templated playbooks — every engagement is shaped to your team and your stage.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Why Work With Us</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
              Experience you can feel. Outcomes you can measure.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-midnight/50 border border-white/10 p-8">
              <div className="font-display text-5xl font-semibold text-gradient-gold leading-none">
                {p.stat}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

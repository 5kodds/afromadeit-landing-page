import {
  BookOpenCheck,
  ShieldCheck,
  Users,
  ClipboardList,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BookOpenCheck,
    title: "Employee Handbook Development & Updates",
    body: "Custom, compliant handbooks that reflect your culture and protect your business.",
  },
  {
    icon: ShieldCheck,
    title: "HR Compliance & Policy Review",
    body: "Federal and state policy audits that reduce risk before it costs you.",
  },
  {
    icon: Users,
    title: "Recruitment & Talent Acquisition",
    body: "Sourcing, screening, and hiring strategy to land the right people, faster.",
  },
  {
    icon: ClipboardList,
    title: "Onboarding & HR Operations",
    body: "Documentation, workflows, and systems that scale with your team.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Relations & Guidance",
    body: "Practical coaching for managers and clear pathways for tough conversations.",
  },
  {
    icon: TrendingUp,
    title: "Training & Process Improvement",
    body: "Leadership development and process design that lifts whole organizations.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Services Include</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
            Full-spectrum HR support, built for lean teams.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-navy-surface/60 p-6 transition-all hover:border-gold/40 hover:-translate-y-0.5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold/10 border border-gold/30">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

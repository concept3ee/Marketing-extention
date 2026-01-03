

type Stat = { value: string; label: string };
type Step = { title: string; desc: string };

type Props = {
  kicker?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  stats?: Stat[];
  steps?: Step[];
};

const defaultStats: Stat[] = [
  { value: "750+", label: "Total Supersiders available globally" },
  { value: "9.6/10", label: "Average customer satisfaction rating" },
];

const defaultSteps: Step[] = [
  {
    title: "Endless extra pairs of hands",
    desc: "Our unique model gives you access to a remote team with 250+ skill sets. No overtime, no recruitment, without the cost of an in-house team.",
  },
  {
    title: "Designed for speed",
    desc: "We deliver faster than traditional agencies. You can expect quick turnarounds, with most projects starting within 12–24 hours.",
  },
  {
    title: "AI-enhanced",
    desc: "AI assists our designers to accelerate the easy tasks so they can focus on the parts that matter. It helps us deliver more, without cutting quality.",
  },
  {
    title: "Superspace: our platform for briefs, feedback, and asset delivery",
    desc: "A single place for your briefs, feedback, and files. Superspace keeps work organized and makes collaboration seamless across teams.",
  },
  {
    title: "One consistent team",
    desc: "No handoffs, delays, or recurring questions. You work with a team that knows your brand and stays consistent across projects.",
  },
];

export default function ProcessSection({
  kicker = "HOW WE WORK WITH YOU",
  title = "A process built to give your brand the",
  subtitle = "support it deserves",
  ctaText = "Learn about our process",
  stats = defaultStats,
  steps = defaultSteps,
}: Props) {
  return (
    <section className="w-full bg-[#121818] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <div className="text-[10px] font-medium tracking-[0.22em] text-white/55">
              {kicker}
            </div>

            <h2 className="mt-4 text-[34px] leading-[1.06] tracking-tight md:text-[44px]">
              {title}{" "}
              <span className="font-serif italic font-medium text-white/90">
                {subtitle}
              </span>
            </h2>

            <p className="mt-5 max-w-[56ch] text-[11px] leading-[16px] text-white/55">
              Find the best people, just as fast. Our process is built to match your
              pace, deliver consistently, and feel like an extension of your team.
            </p>

            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-[11px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white">
              {ctaText}
            </button>

            <div className="mt-10 grid grid-cols-2 gap-10">
              {stats.map((s) => (
                <div key={s.value} className="border-t border-white/10 pt-6">
                  <div className="text-[24px] font-medium leading-none text-white/90 md:text-[28px]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[9px] leading-[13px] text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: timeline */}
          <div className="relative">
            {/* vertical line */}
            <div className="pointer-events-none absolute left-[14px] top-2 h-[calc(100%-8px)] w-px bg-white/10" />

            <ol className="space-y-7">
              {steps.map((step, idx) => {
                const n = idx + 1;
                return (
                  <li key={step.title} className="relative pl-12">
                    {/* number bubble */}
                    <div className="absolute left-0 top-[2px] flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#121818] text-[10px] font-medium text-white/70">
                      {n}
                    </div>

                    <div className="text-[11px] font-semibold text-white/85">
                      {step.title}
                    </div>
                    <p className="mt-2 text-[10px] leading-[15px] text-white/50">
                      {step.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

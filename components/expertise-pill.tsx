type Stat = { value: string; label: string };

type Props = {
  kicker?: string;
  title?: string;
  italicTitle?: string; // the italic part ("across every discipline")
  description?: string;
  body?: string;
  ctaText?: string;
  onCtaClick?: () => void;

  stats?: Stat[];

  // media (right side)
  videoSrc?: string;
  posterSrc?: string;

  // swap layout
  reverse?: boolean;

  className?: string;
};

export default function ExpertiseSplit({
  kicker = "FULL-STACK EXPERTISE",
  title = "Collaborate with brilliant people",
  italicTitle = "across every discipline",
  description = "The rise of video, motion, and AI-powered creative means teams need specialized skills they don’t always have.",
  body =
    "From brand strategy to motion design and everything in between, our team offers 20+ creative services across the full creative spectrum. No matter the ask, we have the specialists to get it done thoughtfully, expertly, and always on brand.",
  ctaText = "Get in touch",
  onCtaClick,
  stats = [
    { value: "20+", label: "Creative services" },
    { value: "750+", label: "Specialists available globally" },
  ],
  videoSrc,
  posterSrc,
  reverse = false,
  className = "",
}: Props) {
  return (
    <section className={["w-full ", className].join(" ")}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div
          className={[
            "flex flex-col gap-10 lg:items-start lg:gap-12",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          ].join(" ")}
        >
          {/* LEFT */}
          <div className="flex-1">
            <div className="text-[10px] tracking-[0.22em] text-black/60">
              {kicker}
            </div>
            <div className="mt-2 h-px w-full max-w-[520px] bg-black/20" />

            <h2 className="mt-6 max-w-[560px] text-[40px] leading-[1.05] tracking-tight text-black md:text-[56px]">
              {title}{" "}
              <span className="font-serif italic font-medium">{italicTitle}</span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[18px] leading-[1.35] text-black/75">
              {description}
            </p>

            <p className="mt-6 max-w-[560px] text-[11px] leading-[16px] text-black/55">
              {body}
            </p>

            {/* <div className="mt-7">
              <button
                type="button"
                onClick={onCtaClick}
                className="rounded-full border border-black/20 bg-transparent px-5 py-2 text-[11px] font-medium text-black/75 hover:border-black/30 hover:text-black"
              >
                {ctaText}
              </button>
            </div> */}

            {/* Stats */}
            <div className="mt-10 grid max-w-[520px] grid-cols-2 gap-10">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-black/15 pt-6">
                  <div className="text-[22px] font-medium leading-none text-black/85 md:text-[26px]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[9px] leading-[13px] text-black/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT (video card) */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-xl bg-black/10">
              <video
                className="h-full w-full object-cover"
                src={videoSrc}
                poster={posterSrc}
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

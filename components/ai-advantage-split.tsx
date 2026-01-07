
import Image from "next/image";


type Feature = {
  icon?: "clock" | "spark" | "shield" | "layers";
  title: string;
  desc: string;
};

type Props = {
  kicker?: string;
  title?: string;        // "Your shortcut to"
  italicTitle?: string;  // "AI’s creative advantage"
  description?: string;

  features: Feature[];

  imageSrc: string; // your background image (right side)
  imageAlt?: string;

  reverse?: boolean; // optional: swap sides
  className?: string;
};

function Icon({ name }: { name: NonNullable<Feature["icon"]> }) {
  const cls = "h-4 w-4 text-black/70";
  switch (name) {
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M19 13l.7 2.7L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-1.3L19 13Z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M12 3l8 4v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
          <path
            d="M8 7h10a3 3 0 0 1 3 3v7H6V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 17h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function AiAdvantageSplit({
  kicker = "SOLUTIONS FOR MODERN TEAMS",
  title = "Your shortcut to",
  italicTitle = "AI’s creative advantage",
  description =
    "You’re under pressure to do more: faster, cheaper, and with fewer resources, while figuring out how to use AI safely and effectively. That’s where we come in.",
  features,
  imageSrc,
  imageAlt = "",
  reverse = false,
  className = "",
}: Props) {
  return (
    <section className={["w-full bg-[#dfdec9]", className].join(" ")}>
      <div className="w-full">
        <div
          className={[
            "grid items-stretch gap-10 lg:grid-cols-2",
            reverse ? "lg:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* LEFT */}
          <div className="max-w-[520px] p-10">
            <div className="text-[9px] tracking-[0.22em] text-black/55">
              {kicker}
            </div>
            <div className="mt-2 h-px w-full bg-black/20" />

            <h2 className="mt-6 text-[26px] leading-[1.15] text-black md:text-[32px]">
              {title}{" "}
              <span className="font-serif italic font-medium">{italicTitle}</span>
            </h2>

            <p className="mt-4 max-w-[46ch] text-[11px] leading-[16px] text-black/65">
              {description}
            </p>

            {/* Features (2 x 2 like screenshot) */}
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {features.slice(0, 4).map((f, idx) => (
                <div key={f.title + idx} className="flex gap-3">
                  <div className="mt-[2px] flex  items-center justify-center ">
                    <Icon name={f.icon ?? (idx === 0 ? "clock" : idx === 1 ? "shield" : idx === 2 ? "spark" : "layers")} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-black/80">
                      {f.title}
                    </div>
                    <div className="mt-2 text-[9px] leading-[13px] text-black/55">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden w-full">
            <div className="relative h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

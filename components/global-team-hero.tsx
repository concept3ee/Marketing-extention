import Image from "next/image";

type Feature = {
  icon: "flag" | "video" | "remote";
  text: string;
};

type Props = {
  backgroundSrc: string;
  features?: Feature[];
};

function Icon({ type }: { type: Feature["icon"] }) {
  const common = "h-5 w-5 text-white/85";
  if (type === "flag") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M6 3v18M6 4h10l-1.5 3L16 10H6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M8 7h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M12 3a7 7 0 0 0-7 7c0 2.2 1 4.2 2.6 5.5L7 21l5-2 5 2-.6-5.5A7 7 0 0 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GlobalTeamHero({
  backgroundSrc,
  features = [
    { icon: "flag", text: "67 countries" },
    { icon: "video", text: "Video/photo production hubs in Bogotá and Johannesburg" },
    { icon: "remote", text: "100% remote from day one, so we're expert collaborators in remote settings" },
  ],
}: Props) {
  return (
    <section className="relative w-full overflow-hidden rounded-xl">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* overlays to match screenshot */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-8 py-10 md:py-12">
        <div className="max-w-[520px]">
          <p className="text-[10px] tracking-[0.22em] text-white/70">
            OUR GLOBAL TEAM
          </p>

          <h2 className="mt-3 text-[34px] leading-[1.05] text-white md:text-[44px]">
            When we say “world-class,”{" "}
            <span className="font-serif italic font-medium">we really mean it</span>
          </h2>

          <p className="mt-4 text-[11px] leading-[16px] text-white/70">
            As a fully remote company, we aren’t bound by borders. So we’re able to
            hire the best, no matter where they live, including South Africa, Brazil,
            Germany, Malaysia, Canada and more.
          </p>

          {/* Feature rows */}
          <div className="mt-6 space-y-3">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/20">
                  <Icon type={f.icon} />
                </div>
                <div className="text-[11px] leading-[15px] text-white/80">
                  {f.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

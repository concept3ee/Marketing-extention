// components/TrustedByMarquee.tsx
import React from "react";

type Logo = {
  name: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Logos: Logo[] = [
  {
    name: "Intuit",
    Svg: (props) => (
      <svg viewBox="0 0 160 40" {...props}>
        <text
          x="0"
          y="28"
          fontSize="28"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          letterSpacing="2"
        >
          INTUIT
        </text>
      </svg>
    ),
  },
  {
    name: "Lyft",
    Svg: (props) => (
      <svg viewBox="0 0 120 40" {...props}>
        <text
          x="0"
          y="28"
          fontSize="30"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
        >
          lyft
        </text>
      </svg>
    ),
  },
  {
    name: "MasterClass",
    Svg: (props) => (
      <svg viewBox="0 0 200 40" {...props}>
        <text
          x="0"
          y="26"
          fontSize="18"
          fontFamily="ui-serif, Georgia"
          fontWeight="700"
        >
          MasterClass
        </text>
        <path d="M10 34h70" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </svg>
    ),
  },
  {
    name: "Palo Alto Networks",
    Svg: (props) => (
      <svg viewBox="0 0 220 40" {...props}>
        <g fill="currentColor">
          <path d="M10 22l6-6 6 6-6 6-6-6z" opacity=".9" />
          <path d="M24 22l6-6 6 6-6 6-6-6z" opacity=".7" />
          <path d="M38 22l6-6 6 6-6 6-6-6z" opacity=".5" />
        </g>
        <text
          x="60"
          y="26"
          fontSize="18"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          paloalto
        </text>
        <text
          x="148"
          y="26"
          fontSize="10"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="600"
          opacity=".75"
        >
          NETWORKS
        </text>
      </svg>
    ),
  },
  {
    name: "Pernod Ricard",
    Svg: (props) => (
      <svg viewBox="0 0 220 40" {...props}>
        <circle cx="18" cy="20" r="10" fill="currentColor" opacity=".25" />
        <path
          d="M18 10c4 3 6 7 6 10s-2 7-6 10c-4-3-6-7-6-10s2-7 6-10z"
          fill="currentColor"
          opacity=".6"
        />
        <text
          x="40"
          y="26"
          fontSize="16"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="600"
          opacity=".85"
        >
          Pernod Ricard
        </text>
      </svg>
    ),
  },
  // a few extra “random” ones
  {
    name: "Nova",
    Svg: (props) => (
      <svg viewBox="0 0 140 40" {...props}>
        <text x="0" y="27" fontSize="24" fontFamily="ui-sans-serif, system-ui" fontWeight="800">
          NOVA
        </text>
        <path d="M88 14l10 6-10 6 4-6-4-6z" fill="currentColor" opacity=".55" />
      </svg>
    ),
  },
  {
    name: "Acme",
    Svg: (props) => (
      <svg viewBox="0 0 140 40" {...props}>
        <text x="0" y="27" fontSize="24" fontFamily="ui-serif, Georgia" fontWeight="700">
          ACME
        </text>
        <path d="M86 28c14 0 22-6 22-14" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </svg>
    ),
  },
];

export default function TrustedByMarquee() {
  // Duplicate for seamless scrolling
  const row = [...Logos, ...Logos];

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-700/90 text-center">
          TRUSTED BY 500+ OF THE WORLD&apos;S BIGGEST BRANDS
        </p>

        <div className="relative mt-8 overflow-hidden">
          {/* soft edge fade like the screenshot */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20   to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 to-transparent" />

          <div className="group flex w-max items-center gap-14 py-3">
            <div className="flex w-max animate-marquee items-center gap-14 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
              {row.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-10 items-center justify-center opacity-80 grayscale"
                  aria-label={logo.name}
                  title={logo.name}
                >
                  <logo.Svg className="h-10 w-auto text-neutral-900" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

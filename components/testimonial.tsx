// components/TestimonialScroller.tsx
"use client";

import React, { useMemo, useState } from "react";

type Stat = { value: string; label: string };
type Testimonial = {
  company: string;
  quote: { normal: string; bold: string; end: string };
  author: string;
  role: string;
  avatarUrl: string;
  stats: Stat[];
  caseStudy: {
    tag: string;
    title: string;
    thumbUrl: string;
  };
};

const data: Testimonial[] = [
  {
    company: "Oyster",
    quote: {
      normal: "I am beyond happy with the work. ",
      bold: "Your designers routinely save the day!",
      end: "",
    },
    author: "Justin Rands",
    role: "Director of Brand at Oyster",
    avatarUrl: "/kayla.avif",
    stats: [
      { value: "57%", label: "Production time saved" },
      { value: "$10,775", label: "Cost savings" },
      { value: "20", label: "Videos delivered" },
    ],
    caseStudy: {
      tag: "OYSTER",
      title: "How Oyster Automates Global Social Media Campaigns",
      thumbUrl: "/world-class.avif",
    },
  },
  {
    company: "Palo Alto Networks",
    quote: {
      normal: "The output is consistently high quality. ",
      bold: "It feels like an extension of our team.",
      end: "",
    },
    author: "Nina Patel",
    role: "Brand Lead at Palo Alto Networks",
    avatarUrl: "/agent.avif",
    stats: [
      { value: "42%", label: "Faster delivery" },
      { value: "$18,240", label: "Cost savings" },
      { value: "38", label: "Assets shipped" },
    ],
    caseStudy: {
      tag: "PALO ALTO",
      title: "Scaling Creative Ops Without Scaling Headcount",
      thumbUrl: "/workflow.avif",
    },
  },
  {
    company: "MasterClass",
    quote: {
      normal: "Everything lands on-brand and on-time. ",
      bold: "The turnaround is honestly unreal.",
      end: "",
    },
    author: "Chris Morgan",
    role: "Creative Producer at MasterClass",
    avatarUrl: "/pernord-richard.avif",
    stats: [
      { value: "3x", label: "More output" },
      { value: "$9,980", label: "Cost savings" },
      { value: "14", label: "Launches supported" },
    ],
    caseStudy: {
      tag: "MASTERCLASS",
      title: "From Brief to Launch in Record Time",
      thumbUrl: "/mac-image.avif",
    },
  },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function ArrowIcon({ dir }: { dir: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "up" ? <path d="M12 5l-6 6m6-6l6 6M12 5v14" /> : <path d="M12 19l-6-6m6 6l6-6M12 19V5" />}
    </svg>
  );
}

export default function TestimonialScroller() {
  const [index, setIndex] = useState(0);
  const t = data[index];

  const leftStack = useMemo(() => {
    const prev = data[mod(index - 1, data.length)];
    const curr = data[index];
    const next = data[mod(index + 1, data.length)];
    return [prev, curr, next];
  }, [index]);

  const goUp = () => setIndex((i) => mod(i - 1, data.length));
  const goDown = () => setIndex((i) => mod(i + 1, data.length));

  return (
    <section className="w-full ">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative">
          <div className="grid grid-cols-[110px_1fr_80px] gap-8 items-center">
            {/* Left stacked avatars */}
            <div className="flex flex-col items-center gap-6">
              {leftStack.map((p, i) => {
                const active = i === 1;
                return (
                  <button
                    key={p.avatarUrl + i}
                    type="button"
                    onClick={() => setIndex(data.findIndex((d) => d.company === p.company))}
                    className={[
                      "relative h-[74px] w-[74px] overflow-hidden rounded-full transition-all duration-300",
                      active ? "opacity-100 ring-2 ring-black/10" : "opacity-35 grayscale",
                    ].join(" ")}
                    aria-label={`Show testimonial: ${p.company}`}
                  >
                    {/* Use real images in /public/images/... */}
                    <img
                      src={p.avatarUrl}
                      alt={p.company}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </button>
                );
              })}
            </div>

            {/* Center content */}
            <div className="min-h-[220px]">
              <div className="text-[15px] font-semibold text-black/85">{t.company}</div>

              {/* Quote (fade/slide on change) */}
              <div key={t.company} className="mt-4 animate-[fadeSlide_.35s_ease]">
                <p className="text-[28px] leading-[1.15] text-black/90">
                  “{t.quote.normal}
                  <span className="font-semibold">{t.quote.bold}</span>
                  {t.quote.end}”
                </p>
                <p className="mt-4 text-[11px] text-black/55">
                  {t.author}, {t.role}
                </p>
              </div>

              {/* Stats + Case card */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-8">
                  {t.stats.map((s, idx) => (
                    <div key={s.label} className="flex items-start gap-3">
                      <div className="text-[12px] font-semibold text-black/80">{s.value}</div>
                      <div className="text-[9px] leading-[12px] text-black/55 max-w-[90px]">
                        {s.label}
                      </div>
                      {idx !== t.stats.length - 1 ? (
                        <div className="ml-2 h-6 w-px bg-black/10" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="ml-auto">
                  <a
                    href="#"
                    className="group flex w-[250px] items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm hover:border-black/15"
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-lg border border-black/10 bg-black/5">
                      <img
                        src={t.caseStudy.thumbUrl}
                        alt=""
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-semibold tracking-wide text-black/45">
                        {t.caseStudy.tag}
                      </div>
                      <div className="truncate text-[10px] font-medium text-black/75 group-hover:text-black/85">
                        {t.caseStudy.title}
                      </div>
                    </div>
                    <span className="ml-auto text-black/35">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right arrows */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={goUp}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-transparent text-black/70 hover:border-black/25 hover:text-black/90"
                aria-label="Previous testimonial"
              >
                <ArrowIcon dir="up" />
              </button>

              <button
                type="button"
                onClick={goDown}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-transparent text-black/70 hover:border-black/25 hover:text-black/90"
                aria-label="Next testimonial"
              >
                <ArrowIcon dir="down" />
              </button>
            </div>
          </div>

          {/* local keyframes (Tailwind arbitrary animation uses this name) */}
          <style jsx>{`
            @keyframes fadeSlide {
              from {
                opacity: 0;
                transform: translateY(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

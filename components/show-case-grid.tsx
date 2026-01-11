// components/SuperspaceShowcaseGrid.tsx
import React from "react";

function IconPencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20h9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07 0L5.52 12.4a5 5 0 0 0 7.07 7.07L14 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBinoculars(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 7h2l2 4v8H7a3 3 0 0 1-3-3v-4a5 5 0 0 1 3-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 7h-2l-2 4v8h4a3 3 0 0 0 3-3v-4a5 5 0 0 0-3-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 11h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l3 7 7 .5-5.2 4.4L18.5 21 12 17.3 5.5 21l1.7-7.1L2 9.5 9 9l3-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniTable() {
  return (
    <div className="w-full rounded-lg border border-black/10 bg-white shadow-sm">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="text-[10px] font-semibold text-black/80">Final designs</div>
        <div className="rounded-full bg-black/5 px-2 py-1 text-[9px] font-medium text-black/70">
          2x ready
        </div>
      </div>
      <div className="space-y-2 px-3 pb-3">
        {["New homepage", "Brand refresh"].map((t) => (
          <div key={t} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-black/10" />
              <div className="text-[9px] text-black/70">{t}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-black/5 px-2 py-1 text-[8px] font-medium text-black/70">
                view
              </div>
              <div className="h-2 w-2 rounded-full bg-black/25" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniNotification() {
  return (
    <div className="flex w-full items-center gap-3 rounded-lg border border-black/10 bg-white px-3 py-2 shadow-sm">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
        <span className="text-[10px] font-bold">S</span>
      </div>
      <div className="min-w-0">
        <div className="truncate text-[10px] font-semibold text-black/85">
          Superspace · API · 12:14
        </div>
        <div className="truncate text-[9px] text-black/60">
          John Smith marked this asset as approved
        </div>
      </div>
      <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-md bg-[#4A154B]">
        <span className="text-[11px] font-bold text-white">#</span>
      </div>
    </div>
  );
}

function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-[28px] bg-black/35 blur-[10px]" />
      <div className="relative w-[170px] rotate-[-8deg] rounded-[28px] border border-white/15 bg-black/70 p-2 shadow-xl">
        <div className="h-[320px] w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-white/15 to-white/5">
          <div className="px-3 pt-3 text-[10px] font-semibold text-white/90">amazon</div>
          <div className="mt-2 space-y-2 px-3">
            <div className="h-16 rounded-xl bg-white/12" />
            <div className="h-16 rounded-xl bg-white/10" />
            <div className="h-16 rounded-xl bg-white/8" />
          </div>
          <div className="absolute bottom-5 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export default function SuperspaceShowcaseGrid() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div
          className="
            grid gap-6
            md:grid-cols-2
            lg:grid-cols-3
            lg:auto-rows-[230px]
          "
        >
          {/* Card 1 (green) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#C7E48A] p-6 shadow-sm lg:row-span-1">
            <div className="flex items-center gap-3 text-black/80">
              <IconPencil className="h-5 w-5" />
            </div>

            <h3 className="mt-3 text-[20px] leading-tight text-black/90">
              From brief to review and <span className="font-semibold">sign off.</span>
            </h3>
            <p className="mt-2 max-w-[28ch] text-[11px] leading-[15px] text-black/60">
              Welcome to Superspace. Quickly submit a brief, review in platform, keep track
              of usage and more in one easy place.
            </p>

            <div className="absolute bottom-4 left-4 right-4">
              <MiniTable />
            </div>
          </div>

          {/* Card 2 (landscape image) */}
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-sm">
            {/* Replace with your real image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/world-class.avif)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

            <div className="relative h-full p-6">
              <div className="text-black/80">
                <IconLink className="h-5 w-5 text-black/80 mix-blend-luminosity" />
              </div>

              <h3 className="mt-3 text-[16px] font-semibold leading-tight text-black/90">
                Integrate with your favorite <br />
                platforms.
              </h3>
              <p className="mt-2 max-w-[34ch] text-[11px] leading-[15px] text-black/60">
                Already using platforms like Asana/Jira/Slack? They integrate too.
              </p>

              <div className="absolute bottom-4 left-4 right-4">
                <MiniNotification />
              </div>
            </div>
          </div>

          {/* Card 3 (tall, spans 2 rows on lg) */}
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-sm lg:row-span-2">
            {/* Replace with your real image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/workflow.avif)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/65" />

            <div className="relative h-full p-6">
              <IconBinoculars className="h-5 w-5 text-white/85" />

              <h3 className="mt-3 text-[16px] font-semibold leading-tight text-white">
                Organize and share all your <br />
                brand assets
              </h3>
              <p className="mt-2 max-w-[36ch] text-[11px] leading-[15px] text-white/70">
                Stop searching—store and organize everything on our platform.
              </p>

              {/* little UI tags like the screenshot */}
              <div className="absolute bottom-8 left-6 right-6 space-y-2">
                <div className="flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80 backdrop-blur">
                    Product shots
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80 backdrop-blur">
                    Approved
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80 backdrop-blur">
                    Campaign
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80 backdrop-blur">
                    Social
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-left card (spans 2 cols on lg) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#2a2a20] shadow-sm lg:col-span-2 lg:row-span-1">
            {/* textured / photo-ish background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-95"
              style={{ backgroundImage: "url(/bg-image.avif)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />

            <div className="relative h-full p-6">
              <IconStar className="h-5 w-5 text-white/85" />
              <h3 className="mt-3 text-[16px] font-semibold text-white">
                Learn from our customers’ <br />
                successful projects
              </h3>
              <p className="mt-2 max-w-[36ch] text-[11px] leading-[15px] text-white/70">
                Reference work from the world’s best brands on our platform.
              </p>

              {/* Phone mock on the right */}
              <div className="absolute bottom-0 right-6 top-0 hidden items-center justify-center md:flex">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

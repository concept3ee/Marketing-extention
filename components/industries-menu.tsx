
"use client";

import Image from "next/image";


function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

type Industry = { label: string; href: string };

export default function IndustriesMegaMenu({
  onMouseEnter,
  onMouseLeave,
  industries,
  previewImageSrc,
  previewImageAlt = "Industry preview",
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  industries: Industry[];
  previewImageSrc: string;
  previewImageAlt?: string;
}) {
  return (
    <div
      className="fixed left-0 right-0 top-20 z-50 bg-[#f6f7f2] shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_520px] lg:gap-0 lg:divide-x lg:divide-black/10">
          {/* LEFT CTA CARD */}
          <div className="lg:pr-8">
            <div className="rounded-xl bg-white/70 p-6 ring-1 ring-black/10">
              <h3 className="text-[34px] leading-[1.05] tracking-tight text-black/90">
                Ready to <br />
                bring your <br />
                idea to <br />
                life?
              </h3>

              <button
                type="button"
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#c47b2a] px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-white"
              >
                LET&apos;S TALK <span className="text-white/90">→</span>
              </button>
            </div>
          </div>

          {/* MIDDLE LIST */}
          <div className="pt-6 lg:px-10 lg:pt-2">
            <div className="space-y-2">
              {industries.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="block text-[16px] leading-[1.6] text-black/85 hover:text-black"
                >
                  {it.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT PREVIEW IMAGE */}
          <div className="mt-6 lg:mt-0 lg:pl-10">
            <div className="relative h-[210px] w-full overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10 lg:h-[250px]">
              <Image
                src={previewImageSrc}
                alt={previewImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

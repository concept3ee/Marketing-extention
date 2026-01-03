// components/HeroFooter.tsx
import React from "react";

const services = [
  {
    title: "Creative design services",
    items: [
      "Ad creative",
      "Social media creative",
      "Presentation design",
      "Illustration design",
      "Branding services",
      "eBooks & report design",
      "Concept creation",
      "Print design",
      "Packaging & merchandise design",
    ],
  },
  {
    title: "Specialized production services",
    items: [
      "Video production",
      "Motion design",
      "Immersive design",
      "Email creation",
      "Web design",
      "Design systems",
      "Product design",
      "Copywriting",
    ],
  },
  {
    title: "AI services",
    items: ["AI-powered creative", "AI consulting"],
  },
  {
    title: "Marketing services",
    items: ["Marketing strategy"],
  },
];

const navCols = [
  {
    title: "Navigation",
    items: ["Main", "Our work", "Our people", "About us", "Pricing", "Trust center", "Careers", "Playbooks", "Forrester TEI Report"],
  },
  {
    title: "\u00A0",
    items: ["Learn", "Blog", "Events & Summits", "Guides", "Reports", "Customer Stories", "Video Library", "Playbooks", "What’s new"],
  },
];

function SocialIcon({ label }: { label: string }) {
  // Simple circle icon placeholders that match the screenshot vibe
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white/80 hover:border-white/55 hover:text-white"
    >
      <span className="text-[12px] font-semibold">{label.slice(0, 1)}</span>
    </button>
  );
}

export default function HeroFooter({
  backgroundUrl = "/footer-bg.jpg",
}: {
  backgroundUrl?: string;
}) {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 text-white">
        {/* Top headline */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[44px] leading-[1.05] tracking-tight md:text-[54px]">
            Your{" "}
            <span className="font-serif italic font-medium">creative team’s</span>
            <br />
            creative team<span className="align-super text-[22px]">™</span>
          </h2>

          <button className="mt-6 rounded-full bg-[#C7E48A] px-5 py-2 text-[11px] font-semibold text-black hover:bg-[#bfe07d]">
            Book a demo
          </button>
        </div>

        {/* Divider line */}
        <div className="mt-12 h-px w-full bg-white/25" />

        {/* Link columns area */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Services */}
          <div>
            <div className="text-[11px] font-semibold text-white/90">Services</div>

            <div className="mt-6 grid gap-10 md:grid-cols-3">
              {services.slice(0, 3).map((col) => (
                <div key={col.title}>
                  <div className="text-[11px] font-medium text-white/90">
                    {col.title} <span className="ml-1 text-white/70">↗</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="text-[10px] leading-[14px] text-white/65 hover:text-white/90 cursor-pointer"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Marketing services sits like the screenshot (short) */}
              <div className="md:col-span-1">
                <div className="text-[11px] font-medium text-white/90">
                  {services[3].title} <span className="ml-1 text-white/70">↗</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {services[3].items.map((it) => (
                    <li
                      key={it}
                      className="text-[10px] leading-[14px] text-white/65 hover:text-white/90 cursor-pointer"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[11px] font-semibold text-white/90">Navigation</div>

            <div className="mt-6 grid grid-cols-2 gap-10">
              {navCols.map((col) => (
                <div key={col.title}>
                  {/* First item acts like a section label (Main / Learn) */}
                  <div className="text-[11px] font-medium text-white/90">
                    {col.items[0]}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {col.items.slice(1).map((it) => (
                      <li
                        key={it}
                        className="text-[10px] leading-[14px] text-white/65 hover:text-white/90 cursor-pointer"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Brand */}
          <div>
            <div className="text-[22px] font-semibold tracking-tight">Superside</div>
            <div className="mt-1 text-[9px] text-white/50">
              © {new Date().getFullYear()} Superside. All rights reserved.
            </div>
          </div>

          {/* Legal mini links */}
          <div className="flex flex-wrap items-center gap-4 text-[9px] text-white/55">
            {["Privacy policy", "Terms of use", "Status page", "DMCA"].map((t) => (
              <a key={t} href="#" className="hover:text-white/85">
                {t}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {["in", "f", "ig", "yt", "t"].map((l) => (
              <SocialIcon key={l} label={l} />
            ))}
            {/* little green badge like screenshot */}
            <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-md bg-[#C7E48A] text-black">
              <span className="text-[14px] font-black">S</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

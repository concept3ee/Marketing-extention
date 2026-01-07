
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type SpotlightProfile = {
  id: string;
  tabLabel: string;

  name: string;
  leftBio: string; // short paragraph under name (top-left card)
  leftBio2?: string; // optional second paragraph
  portraitSrc: string; // big person image
  leftBgSrc: string; // mountain/background behind text

  goToForTitle: string; // e.g. "THE GO-TO FOR"
  goToForText: string;
  goToThumbs: string[]; // 3 thumbs

  wordsKicker: string; // e.g. "IN MICHI'S WORDS"
  wordsQuote: string;

  dialingKicker: string; // e.g. "DIALING IN FROM"
  dialingQuote: string;
  mapSrc: string; // map image behind pin

  brandsKicker: string; // e.g. "SOME BRANDS ... WORKED ON"
  brandsText: string;
  brandsArtSrc: string; // illustration image
};

const demoProfiles: SpotlightProfile[] = [
  {
    id: "osoba",
    tabLabel: "Osoba",
    name: "Osoba",
    leftBio:
      "Osoba is the Founding Principal & Marketing Systems Architect at Marketing Extension.",
    leftBio2:
      "Leading the vision for building marketing engines that deliver measurable outcomes across Africa and beyond.",
    portraitSrc: "/agent.avif",
    leftBgSrc: "/bg-image.avif",

    goToForTitle: "THE GO-TO FOR",
    goToForText: "Marketing Systems Architecture, Strategic Planning and Growth Operations.",
    goToThumbs: ["/workflow.avif", "/space.avif", "/world-class.avif"],

    wordsKicker: "IN OSOBA'S WORDS",
    wordsQuote:
      "\"We don't just run campaigns—we build marketing engines. Every engagement is grounded in clarity, discipline, and measurable outcomes.\"",

    dialingKicker: "DIALING IN FROM",
    dialingQuote:
      "\"Working across Nigeria, Ghana, Kenya, Rwanda, South Africa, Canada, and the UK.\"",
    mapSrc: "/bg-pattern.png",

    brandsKicker: "SOME BRANDS OSOBA WORKED ON",
    brandsText: "Zone, Smartcomply Group, SabiTrack, Quidax, VeryPay, and Tamy Consulting",
    brandsArtSrc: "/workflow.avif",
  },
  {
    id: "motilola",
    tabLabel: "Motilola",
    name: "Motilola",
    leftBio:
      "Motilola is the Practice Lead for Growth & Client Partnerships.",
    leftBio2:
      "Specializing in building scalable demand generation systems and client relationships that drive growth.",
    portraitSrc: "/agent.avif",
    leftBgSrc: "/bg-image.avif",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Growth Strategy, Client Partnerships and Demand Generation Systems.",
    goToThumbs: ["/kayla.avif", "/amazon.avif", "/reddit.avif"],
    wordsKicker: "IN MOTILOLA'S WORDS",
    wordsQuote:
      "\"Growth isn't just about campaigns—it's about building systems that scale with your business.\"",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "\"Connecting teams across continents to deliver exceptional results.\"",
    mapSrc: "/bg-pattern.png",
    brandsKicker: "SOME BRANDS MOTILOLA WORKED ON",
    brandsText: "Fintech, SaaS, Healthcare, and EdTech companies",
    brandsArtSrc: "/space.avif",
  },
  {
    id: "lade",
    tabLabel: "Lade",
    name: "Lade",
    leftBio:
      "Lade is the Practice Lead for Creative Experience & Content+.",
    leftBio2:
      "Bringing creative excellence and strategic content to marketing engines that resonate with audiences.",
    portraitSrc: "/agent.avif",
    leftBgSrc: "/bg-image.avif",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Creative Strategy, Content Production and Brand Experience Design.",
    goToThumbs: ["/pernord-richard.avif", "/forter.avif", "/reuters.avif"],
    wordsKicker: "IN LADE'S WORDS",
    wordsQuote:
      "\"Great creative combines human insight with machine-level discipline to deliver faster, smarter, and more impactful work.\"",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "\"Leading creative teams that span multiple markets and cultures.\"",
    mapSrc: "/bg-pattern.png",
    brandsKicker: "SOME BRANDS LADE WORKED ON",
    brandsText: "Consumer brands, B2B SaaS, and fintech companies",
    brandsArtSrc: "/world-class.avif",
  },
  {
    id: "stanley",
    tabLabel: "Stanley",
    name: "Stanley",
    leftBio:
      "Stanley is the Practice Lead for Technology & MarTech Systems.",
    leftBio2:
      "Building technical foundations that enable marketing engines to scale efficiently and measure accurately.",
    portraitSrc: "/agent.avif",
    leftBgSrc: "/bg-image.avif",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "MarTech Integration, Marketing Automation and Technical Infrastructure.",
    goToThumbs: ["/mac-image.avif", "/satair.avif", "/workflow.avif"],
    wordsKicker: "IN STANLEY'S WORDS",
    wordsQuote:
      "\"Technology should enable marketing, not complicate it. We build systems that make teams more effective.\"",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "\"Integrating marketing systems across platforms and markets.\"",
    mapSrc: "/bg-pattern.png",
    brandsKicker: "SOME BRANDS STANLEY WORKED ON",
    brandsText: "Tech companies, fintech platforms, and SaaS businesses",
    brandsArtSrc: "/space.avif",
  },
  {
    id: "adebola",
    tabLabel: "Adebola",
    name: "Adebola",
    leftBio:
      "Adebola is the Director of Operations & Performance.",
    leftBio2:
      "Ensuring every engagement delivers on time, on scope, and with measurable impact.",
    portraitSrc: "/agent.avif",
    leftBgSrc: "/bg-image.avif",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Operations Excellence, Performance Measurement and Project Delivery.",
    goToThumbs: ["/kayla.avif", "/amazon.avif", "/reddit.avif"],
    wordsKicker: "IN ADEBOLA'S WORDS",
    wordsQuote:
      "\"Discipline in operations creates the foundation for exceptional marketing outcomes. We deliver what we promise.\"",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "\"Managing operations across 7+ countries with precision and care.\"",
    mapSrc: "/bg-pattern.png",
    brandsKicker: "SOME BRANDS ADEBOLA WORKED ON",
    brandsText: "Multi-country operations, enterprise clients, and high-growth startups",
    brandsArtSrc: "/workflow.avif",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TeamSpotlightTabs({
  profiles = demoProfiles,
  className = "",
}: {
  profiles?: SpotlightProfile[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState(profiles[0]?.id);
  const active = useMemo(
    () => profiles.find((p) => p.id === activeId) ?? profiles[0],
    [profiles, activeId]
  );

  if (!active) return null;

  return (
    <section className={cn("w-full ", className)}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {profiles.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-[11px] leading-none transition-colors",
                  isActive
                    ? "bg-[#121818] text-white"
                    : "border border-black/25 bg-transparent text-black/70 hover:border-black/40 hover:text-black/80"
                )}
              >
                {p.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div
          key={active.id}
          className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2"
        >
          {/* LEFT BIG CARD (row-span-2) */}
          <div className="relative overflow-hidden rounded-2xl lg:row-span-2">
            {/* background */}
            <div className="absolute inset-0">
              <Image
                src={active.leftBgSrc}
                alt=""
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/70" />
            </div>

            <div className="relative flex h-full min-h-[520px] flex-col justify-between p-7 text-white">
              <div>
                <h3 className="font-serif text-[28px] leading-none tracking-tight">
                  {active.name}
                </h3>

                <p className="mt-4 max-w-[46ch] text-[10px] leading-[15px] text-white/80">
                  {active.leftBio}
                </p>
                {active.leftBio2 ? (
                  <p className="mt-3 max-w-[46ch] text-[10px] leading-[15px] text-white/70">
                    {active.leftBio2}
                  </p>
                ) : null}
              </div>

              {/* portrait */}
              <div className="relative mt-8 h-[290px] w-full overflow-hidden rounded-xl">
                <Image
                  src={active.portraitSrc}
                  alt={active.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* TOP MIDDLE: GO-TO FOR */}
          <div className="overflow-hidden rounded-2xl bg-[#121818] p-6 text-white">
            <div className="text-[9px] tracking-[0.22em] text-white/50">
              {active.goToForTitle}
            </div>
            <div className="mt-2 text-[12px] leading-[16px] text-white/85">
              {active.goToForText}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {active.goToThumbs.slice(0, 3).map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-square overflow-hidden rounded-lg bg-white/5"
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* TOP RIGHT: QUOTE CARD */}
          <div className="rounded-2xl bg-[#1b1b1b] p-6 text-white">
            <div className="text-[22px] leading-none text-[#c9a6d8]">〝〞</div>
            <div className="mt-3 text-[9px] tracking-[0.22em] text-white/45">
              {active.wordsKicker}
            </div>
            <p className="mt-4 text-[11px] leading-[16px] text-white/70">
              {active.wordsQuote}
            </p>
          </div>

          {/* BOTTOM MIDDLE: MAP CARD */}
          <div className="relative overflow-hidden rounded-2xl bg-[#121818] p-6 text-white">
            <div className="text-[9px] tracking-[0.22em] text-white/50">
              {active.dialingKicker}
            </div>
            <p className="mt-2 max-w-[42ch] text-[11px] leading-[16px] text-white/80">
              {active.dialingQuote}
            </p>

            {/* map background */}
            <div className="absolute inset-0 opacity-55">
              <Image src={active.mapSrc} alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121818]/20 to-[#121818]/80" />

            {/* pin */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c7e48a]">
                <div className="h-4 w-4 rounded-full bg-[#121818]" />
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: BRANDS CARD */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0f1716] p-6 text-white">
            <div className="text-[9px] tracking-[0.22em] text-white/50">
              {active.brandsKicker}
            </div>
            <p className="mt-2 max-w-[44ch] text-[11px] leading-[16px] text-white/80">
              {active.brandsText}
            </p>

            {/* illustration */}
            <div className="absolute -bottom-10 -right-8 h-[240px] w-[240px] opacity-90">
              <Image
                src={active.brandsArtSrc}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

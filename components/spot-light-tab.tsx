
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
    id: "michi",
    tabLabel: "Michi Gonzalez",
    name: "Michi Gonzalez",
    leftBio:
      "Michi is a Senior Graphic Designer and Illustrator who has been with Superside for over 4.5 years.",
    leftBio2:
      "As a kid she created comics for her friends, which sparked her passion for storytelling through illustration.",
    portraitSrc: "/team/michi.png",
    leftBgSrc: "/bg/mountains.jpg",

    goToForTitle: "THE GO-TO FOR",
    goToForText: "Character Design, Motion Graphics and Digital Illustration.",
    goToThumbs: ["/art/thumb1.jpg", "/art/thumb2.jpg", "/art/thumb3.jpg"],

    wordsKicker: "IN MICHI'S WORDS",
    wordsQuote:
      "“My comics reflect a bit of my everyday life, and when I receive responses from people who relate to what I'm going through, it fosters a sense of connection. It reminds me that we're not alone in this world; we're all here living for the first time.”",

    dialingKicker: "DIALING IN FROM",
    dialingQuote:
      "“I come from Guatemala, but Superside gave me the opportunity to move to France as a resident!”",
    mapSrc: "/maps/americas.png",

    brandsKicker: "SOME BRANDS MICHI WORKED ON",
    brandsText: "Amazon, Meta, Boston Consulting, Morgan Lewis, and Obliq",
    brandsArtSrc: "/art/dragon.png",
  },
  {
    id: "daniel",
    tabLabel: "Daniel Soto",
    name: "Daniel Soto",
    leftBio:
      "Daniel is a Senior Designer focused on brand systems and product storytelling.",
    leftBio2:
      "He loves simplifying complex ideas into clean, scalable visual languages.",
    portraitSrc: "/team/daniel.png",
    leftBgSrc: "/bg/mountains2.jpg",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Brand Systems, Product Visuals and Identity Refreshes.",
    goToThumbs: ["/art/thumb4.jpg", "/art/thumb5.jpg", "/art/thumb6.jpg"],
    wordsKicker: "IN DANIEL'S WORDS",
    wordsQuote:
      "“Consistency builds trust. The best brands feel obvious—even when they’re complex under the hood.”",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "“Remote lets me collaborate with world-class teams daily.”",
    mapSrc: "/maps/europe.png",
    brandsKicker: "SOME BRANDS DANIEL WORKED ON",
    brandsText: "Shopify, Intuit, Palo Alto Networks, and startups",
    brandsArtSrc: "/art/brand.png",
  },
  {
    id: "mihaly",
    tabLabel: "Mihály Mózes",
    name: "Mihály Mózes",
    leftBio:
      "Mihály is a Motion Designer who brings energy and clarity to product launches.",
    portraitSrc: "/team/mihaly.png",
    leftBgSrc: "/bg/mountains3.jpg",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Motion Systems, Explainers and Social Animations.",
    goToThumbs: ["/art/thumb7.jpg", "/art/thumb8.jpg", "/art/thumb9.jpg"],
    wordsKicker: "IN MIHÁLY'S WORDS",
    wordsQuote:
      "“Motion should feel inevitable—like the design was always meant to move.”",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "“I collaborate across time zones without losing momentum.”",
    mapSrc: "/maps/europe.png",
    brandsKicker: "SOME BRANDS MIHÁLY WORKED ON",
    brandsText: "Fintech, SaaS, and media brands",
    brandsArtSrc: "/art/dragon.png",
  },
  {
    id: "paloma",
    tabLabel: "Paloma Pizarro",
    name: "Paloma Pizarro",
    leftBio:
      "Paloma is an Illustrator specializing in playful, character-led storytelling.",
    portraitSrc: "/team/paloma.png",
    leftBgSrc: "/bg/mountains.jpg",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Illustration, Character Worlds and Editorial Art.",
    goToThumbs: ["/art/thumb1.jpg", "/art/thumb2.jpg", "/art/thumb3.jpg"],
    wordsKicker: "IN PALOMA'S WORDS",
    wordsQuote:
      "“Characters help brands feel human—especially when the message is serious.”",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "“I take inspiration from my city every day.”",
    mapSrc: "/maps/americas.png",
    brandsKicker: "SOME BRANDS PALOMA WORKED ON",
    brandsText: "Consumer apps, publishers, and lifestyle brands",
    brandsArtSrc: "/art/brand.png",
  },
  {
    id: "sam",
    tabLabel: "Sam Saldorano",
    name: "Sam Saldorano",
    leftBio:
      "Sam is a multidisciplinary designer covering motion, brand and digital production.",
    portraitSrc: "/team/sam.png",
    leftBgSrc: "/bg/mountains2.jpg",
    goToForTitle: "THE GO-TO FOR",
    goToForText: "Digital Production, Motion Graphics and Campaign Design.",
    goToThumbs: ["/art/thumb4.jpg", "/art/thumb5.jpg", "/art/thumb6.jpg"],
    wordsKicker: "IN SAM'S WORDS",
    wordsQuote:
      "“Speed matters, but clarity matters more. Great design delivers both.”",
    dialingKicker: "DIALING IN FROM",
    dialingQuote: "“Remote work lets me stay close to my craft.”",
    mapSrc: "/maps/americas.png",
    brandsKicker: "SOME BRANDS SAM WORKED ON",
    brandsText: "Retail, SaaS, and B2B brands",
    brandsArtSrc: "/art/dragon.png",
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

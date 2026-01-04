// components/ShiftSplitHero.tsx
import Image from "next/image";
import React from "react";

type MiniFace = {
  src: string;
  alt: string;
  className?: string;
};

type FloatingLogo = {
  text: string;
  className?: string;
  // absolute positioning (desktop)
  pos: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  face?: MiniFace; // tiny avatar square near the logo
  facePos?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

type Person = {
  label: "GUEST" | "HOST";
  name: string;
  title: string;
  org: string; // "at Superside"
  avatarSrc: string;
  avatarAlt?: string;
};

type Props = {
  // LEFT
  leftBgSrc: string; // your sky/model bg
  leftBgAlt?: string;
  leftTitle?: string; // "Shift"
  leftKicker?: string; // "FROM AI HYPE TO CREATIVE IMPACT"
  leftCompanies?: FloatingLogo[];
  leftBottomTitle?: string; // "Shift Summit"
  leftBottomDesc?: string;
  leftCtaPill?: string; // "Summit"

  // RIGHT
  rightBgSrc?: string; // optional background image (or keep gradient)
  rightBgAlt?: string;
  guest: Person;
  host: Person;
  rightTalkTitle: string;
  rightTalkDesc: string;
  rightCtaPill?: string; // "Webinar"

  className?: string;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function MiniAvatar({ src, alt, className = "" }: MiniFace) {
  return (
    <div
      className={cn(
        "relative h-5 w-5 overflow-hidden rounded-[4px] bg-white/10 ring-1 ring-white/30",
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="20px" />
    </div>
  );
}

function SpeakerCard({ p }: { p: Person }) {
  return (
    <div className="w-[210px]">
      <div className="relative h-[170px] w-full overflow-hidden rounded-md bg-white/10 ring-1 ring-white/10">
        <Image
          src={p.avatarSrc}
          alt={p.avatarAlt ?? p.name}
          fill
          className="object-cover"
          sizes="210px"
        />
      </div>

      <div className="mt-3">
        <div className="text-[9px] tracking-[0.22em] text-white/40">
          {p.label}
        </div>
        <div className="mt-1 text-[16px] leading-[1.15] text-white/90">
          {p.name}
        </div>
        <div className="mt-1 text-[11px] leading-[14px] text-white/60">
          {p.title}
          <div className="font-serif italic text-white/55">{p.org}</div>
        </div>
      </div>
    </div>
  );
}

export default function ShiftSplitHero({
  leftBgSrc,
  leftBgAlt = "",
  leftTitle = "Shift",
  leftKicker = "FROM AI HYPE TO CREATIVE IMPACT",
  leftCompanies = [
    {
      text: "MICROSOFT",
      pos: { top: "38%", left: "12%" },
      face: { src: "/faces/1.jpg", alt: "face" },
      facePos: { top: "43%", left: "45%" },
    },
    {
      text: "AIRBNB",
      pos: { top: "44%", left: "12%" },
      face: { src: "/faces/2.jpg", alt: "face" },
      facePos: { top: "49%", left: "31%" },
    },
    {
      text: "FIGMA",
      pos: { top: "48%", left: "60%" },
      face: { src: "/faces/3.jpg", alt: "face" },
      facePos: { top: "52%", left: "52%" },
    },
    {
      text: "APOLLO",
      pos: { top: "63%", left: "18%" },
      face: { src: "/faces/4.jpg", alt: "face" },
      facePos: { top: "67%", left: "11%" },
    },
    {
      text: "SKYSCANNER",
      pos: { top: "70%", left: "27%" },
      face: { src: "/faces/5.jpg", alt: "face" },
      facePos: { top: "74%", left: "68%" },
    },
  ],
  leftBottomTitle = "Shift Summit",
  leftBottomDesc = "From AI hype to creative impact. Join industry leaders from Airbnb, Skyscanner, and Microsoft to see how AI is driving real creative impact…",
  leftCtaPill = "Summit",

  rightBgSrc,
  rightBgAlt = "",
  guest,
  host,
  rightTalkTitle,
  rightTalkDesc,
  rightCtaPill = "Webinar",

  className = "",
}: Props) {
  return (
    <section className={cn("w-full px-6 py-10", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-xl lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="relative min-h-[520px] bg-black/5">
            {/* bg */}
            <Image
              src={leftBgSrc}
              alt={leftBgAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#6f7dff]/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/0 to-black/35" />

            {/* top center header */}
            <div className="absolute left-1/2 top-14 w-full -translate-x-1/2 px-10 text-center">
              <div className="text-[#d9ff6f] text-[86px] leading-none tracking-tight md:text-[96px]">
                {leftTitle}
              </div>
              <div className="mt-1 text-[9px] tracking-[0.22em] text-white/85">
                {leftKicker}
              </div>
            </div>

            {/* floating company names */}
            {leftCompanies.map((c, idx) => (
              <React.Fragment key={c.text + idx}>
                <div
                  className={cn(
                    "absolute text-white/90 font-semibold tracking-tight",
                    "text-[28px] leading-none md:text-[30px]",
                    c.className
                  )}
                  style={c.pos as React.CSSProperties}
                >
                  {c.text}
                </div>
                {c.face ? (
                  <div
                    className="absolute"
                    style={(c.facePos ?? {}) as React.CSSProperties}
                  >
                    <MiniAvatar {...c.face} />
                  </div>
                ) : null}
              </React.Fragment>
            ))}

            {/* bottom left */}
            <div className="absolute bottom-6 left-6 max-w-[290px]">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-serif text-[18px] text-white/90"
              >
                {leftBottomTitle}
                <span className="text-[1px] text-white/70">↗</span>
              </a>
              <p className="mt-2 text-[9px] leading-[13px] text-white/70">
                {leftBottomDesc}
              </p>
            </div>

            {/* bottom right pill */}
            <div className="absolute bottom-6 right-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[10px] text-white/85 backdrop-blur">
                {leftCtaPill}
              </span>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative min-h-[520px] bg-[#0f1414]">
            {/* optional bg */}
            {rightBgSrc ? (
              <>
                <Image
                  src={rightBgSrc}
                  alt={rightBgAlt}
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#0f1414] to-black/70" />
                <div className="absolute inset-0 [background:radial-gradient(80%_60%_at_50%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
              </>
            )}

            <div className="relative flex h-full flex-col px-10 py-10">
              {/* speakers row */}
              <div className="flex gap-8">
                <SpeakerCard p={guest} />
                <SpeakerCard p={host} />
              </div>

              {/* talk info */}
              <div className="mt-10 max-w-[520px]">
                <a
                  href="#"
                  className="font-serif text-[22px] leading-[1.15] text-white/90 hover:underline"
                >
                  {rightTalkTitle} <span className="text-white/60 text-[3px]">↗</span>
                </a>
                <p className="mt-3 text-[9px] leading-[13px] text-white/55">
                  {rightTalkDesc}
                </p>
              </div>

              {/* bottom right pill */}
              <div className="mt-auto flex justify-end">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/75 ring-1 ring-white/15 backdrop-blur">
                  {rightCtaPill}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

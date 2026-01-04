// components/TeamHoverCard.tsx
import Image from "next/image";
import React from "react";

export type TeamHoverCardProps = {
  name: string;
  description: string;
  imageSrc: string; // local (/public/...) or remote (with next.config remotePatterns)
  imageAlt?: string;
  className?: string;

  // optional tweaks (defaults match your screenshot)
  nameColorClassName?: string; // e.g. "text-[#c9a6d8]"
};

export default function TeamHoverCard({
  name,
  description,
  imageSrc,
  imageAlt,
  className = "",
  nameColorClassName = "text-[#c9a6d8]",
}: TeamHoverCardProps) {
  const src = (imageSrc ?? "").trim();

  return (
    <div
      className={[
        "group w-[320px] overflow-hidden rounded-xl bg-[#121818] cursor-pointer",
        "ring-1 ring-white/10",
        className,
      ].join(" ")}
    >
      {/* Top image */}
      <div className="relative h-[360px] w-full bg-white/5">
        {src ? (
          <Image
            src={src}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="320px"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[12px] text-white/40">
            No photo
          </div>
        )}
      </div>

      {/* Bottom name area (dark bar) */}
      <div className="bg-[#1b1b1b] px-6 py-6">
        <div
          className={[
            "font-serif text-[22px] leading-[1.1]",
            nameColorClassName,
          ].join(" ")}
        >
          {name}
        </div>

        {/* Hover reveal */}
        <div
          className={[
            "mt-3 overflow-hidden",
            "max-h-0 opacity-0 translate-y-1",
            "transition-all duration-300 ease-out",
            "group-hover:max-h-10 group-hover:opacity-100 group-hover:translate-y-0",
          ].join(" ")}
        >
          <p className="text-[11px] leading-[15px] text-white/55">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

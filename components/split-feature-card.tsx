/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SplitFeatureCards.tsx
import Image from "next/image";
import React from "react";

type Card = {
  imageSrc: string;
  imageAlt?: string;

  // big overlay title (left card uses this)
  headline?: React.ReactNode; // e.g. <>Shift<br/>Happens</>
  headlineClassName?: string;

  // bottom content
  linkTitle: string;
  linkHref?: string;
  description: string;

  // style options
  blurImage?: boolean; // right card in your screenshot
  bottomTheme?: "dark" | "light"; // bottom text color
};

type Props = {
  left: Card;
  right: Card;
  className?: string;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}

function FeatureCard({ card }: { card: Card }) {
  const textDark = card.bottomTheme === "light";
  const Wrapper: any = card.linkHref ? "a" : "div";

  return (
    <div className="relative h-[520px] overflow-hidden rounded-none bg-black/5 group">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt ?? ""}
          fill
          priority={false}
          className={cn(
            "object-cover transition-all duration-300",
            card.blurImage && "group-hover:blur-[10px] group-hover:scale-[1.08]"
          )}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/80" />
        {/* overlay shading to match screenshot */}
       
      </div>

      {/* big headline */}
      {card.headline ? (
        <div
          className={cn(
            "absolute left-12 top-32 z-10",
            card.headlineClassName
          )}
        >
          {card.headline}
        </div>
      ) : null}

      {/* bottom copy */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-10 pb-9">
        <Wrapper
          href={card.linkHref}
          className={cn(
            "group inline-flex items-center gap-2 font-serif text-[22px] leading-[1.1]",
            textDark ? "text-black/90" : "text-white/90"
          )}
        >
          <span className={cn(!textDark && "drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]")}>
            {card.linkTitle}
          </span>
          <span
            className={cn(
              "inline-flex items-center justify-center",
              textDark ? "text-black/70" : "text-white/70"
            )}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Wrapper>

        <p
          className={cn(
            "mt-3 max-w-[52ch] text-[10px] leading-[14px]",
            textDark ? "text-black/60" : "text-white/65"
          )}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function SplitFeatureCards({ left, right, className = "" }: Props) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2">
          <FeatureCard card={left}  />
          <FeatureCard card={right} />
        </div>
      </div>
    </section>
  );
}

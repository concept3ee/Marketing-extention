
"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

type TabKey = "all" | "summit" | "webinar";

export type EventCard = {
  id: string;
  type: "summit" | "webinar";
  title: string;
  description: string;
  imageSrc: string; // use your image
  href?: string;

  // optional small label shown above title (like "SUMMIT"/"WEBINAR")
  metaLabel?: string;
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

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1 text-[10px] leading-none transition-colors",
        active
          ? "bg-[#121818] text-white"
          : "border border-black/25 bg-transparent text-black/70 hover:border-black/35 hover:text-black/80"
      )}
    >
      {children}
    </button>
  );
}

function EventTile({ item }: { item: EventCard }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper: any = item.href ? "a" : "div";

  return (
    <Wrapper
      href={item.href}
      className={cn(
        "group block",
        "rounded-xl bg-transparent"
      )}
    >
      {/* image */}
      <div className="relative overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10">
        <div className="relative h-[150px] w-full sm:h-[140px]">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* subtle overlay + arrow (like your style) */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/5" />
        <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white backdrop-blur">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* text */}
      <div className="mt-3">
        <div className="text-[9px] tracking-[0.22em] text-black/50">
          {item.metaLabel ?? item.type.toUpperCase()}
        </div>
        <div className="mt-1 text-[13px] font-medium leading-[1.15] text-black/85">
          {item.title}
        </div>
        <p className="mt-1 text-[10px] leading-[14px] text-black/55 line-clamp-2">
          {item.description}
        </p>
      </div>
    </Wrapper>
  );
}

export default function EventsGridWithTabs({
  items,
  className = "",
}: {
  items: EventCard[];
  className?: string;
}) {
  const [tab, setTab] = useState<TabKey>("all");

  const filtered = useMemo(() => {
    if (tab === "all") return items;
    return items.filter((i) => i.type === tab);
  }, [items, tab]);

  return (
    <section className={cn("w-full ", className)}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Tabs */}
        <div className="flex items-center gap-2">
          <TabButton active={tab === "all"} onClick={() => setTab("all")}>
            All
          </TabButton>
          <TabButton active={tab === "summit"} onClick={() => setTab("summit")}>
            Summit
          </TabButton>
          <TabButton
            active={tab === "webinar"}
            onClick={() => setTab("webinar")}
          >
            Webinar
          </TabButton>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
          {filtered.map((item) => (
            <EventTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

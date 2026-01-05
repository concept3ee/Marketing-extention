// components/ServicesMegaMenu.tsx
"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

type ServiceKey =
  | "design"
  | "development"
  | "research"
  | "validate"
  | "build"
  | "scale";

type ServiceGroup = {
  key: ServiceKey;
  label: string;
  items: { label: string; href: string }[];
  previewImageSrc: string;
  previewImageAlt?: string;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function ChevronRight() {
  return (
    <svg
      className="h-4 w-4 text-black/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function ServicesMegaMenu({
  onMouseEnter,
  onMouseLeave,
  groups,
  defaultActive = "design",
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  groups: ServiceGroup[];
  defaultActive?: ServiceKey;
}) {
  const [active, setActive] = useState<ServiceKey>(defaultActive);

  const activeGroup = useMemo(
    () => groups.find((g) => g.key === active) ?? groups[0],
    [groups, active]
  );

  const primary = groups.filter((g) =>
    ["design", "development", "research"].includes(g.key)
  );
  const secondary = groups.filter((g) =>
    ["validate", "build", "scale"].includes(g.key)
  );

  return (
    <div
      className="fixed left-0 right-0 top-20 z-50 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_560px] lg:divide-x lg:divide-black/10">
          {/* LEFT SIDEBAR */}
          <aside className="bg-white">
            <div className="px-8 py-8">
              <div className="space-y-1">
                {primary.map((g) => {
                  const isActive = g.key === active;
                  return (
                    <button
                      key={g.key}
                      type="button"
                      onClick={() => setActive(g.key)}
                      className={cn(
                        "flex w-full items-center justify-between py-3 text-left",
                        "transition-colors"
                      )}
                    >
                      <span
                        className={cn(
                          "text-[12px] tracking-[0.25em] uppercase",
                          isActive ? "text-black font-medium" : "text-black/35"
                        )}
                      >
                        {g.label}
                      </span>
                      <ChevronRight />
                    </button>
                  );
                })}
              </div>

              <div className="my-8 h-px bg-black/10" />

              <div className="space-y-1">
                {secondary.map((g) => {
                  const isActive = g.key === active;
                  return (
                    <button
                      key={g.key}
                      type="button"
                      onClick={() => setActive(g.key)}
                      className="flex w-full items-center justify-between py-3 text-left"
                    >
                      <span
                        className={cn(
                          "text-[12px] tracking-[0.25em] uppercase",
                          isActive ? "text-black font-medium" : "text-black/35"
                        )}
                      >
                        {g.label}
                      </span>
                      <ChevronRight />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MIDDLE LIST */}
          <section className="bg-white">
            <div className="px-10 py-10">
              <div className="space-y-3">
                {activeGroup.items.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    className="block text-[22px] leading-[1.3] text-black/90 hover:text-black"
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT PREVIEW IMAGE */}
          <section className="bg-white">
            <div className="px-10 py-10">
              <div className="relative h-[290px] w-full overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/10">
                <Image
                  src={activeGroup.previewImageSrc}
                  alt={activeGroup.previewImageAlt ?? activeGroup.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

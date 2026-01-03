/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ServiceCard.tsx
import React from "react";

type Props = {
  title: string;
  imageUrl: string;
  items: string[]; // expects at least 3
};

export default function ServiceCard({ title, imageUrl, items }: Props) {
  const bottom = items.slice(0, 3);

  return (
    <div className="group relative h-[360px] w-[260px] overflow-hidden rounded-2xl bg-black/150 cursor-pointer ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.06]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/55" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Title */}
        <div className="px-5 pt-5">
          <h3 className="text-center font-serif text-[22px] italic tracking-wide text-white drop-shadow">
            {title}
          </h3>
        </div>

        <div className="flex-1" />

        {/* Bottom hover grid */}
        <div className="px-5 pb-5">
          <div className="grid grid-cols-3 gap-2">
            {bottom.map((label, i) => (
              <div
                key={label}
                className="hover-chip flex items-center justify-center rounded-full border border-white/85 p1text-[11px] font-medium text-white"
                style={
                  {
                    // stagger delay for each chip
                    ["--delay" as any]: `${i * 140}ms`,
                  } as React.CSSProperties
                }
              >
                <span
                  className="type-text inline-block overflow-hidden whitespace-nowrap text-center text-[13px]"
                  style={
                    {
                      // number of characters for steps() typing
                      ["--chars" as any]: label.length,
                    } as React.CSSProperties
                  }
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

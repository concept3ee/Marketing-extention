
"use client";

import Image from "next/image";


type WhyUsItem = {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
};

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function WhyUsMegaMenu({
  onMouseEnter,
  onMouseLeave,
  items,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  items: WhyUsItem[];
}) {
  return (
    <div
      className="fixed left-0 right-0 top-20 z-50 bg-[#f6f7f2] shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 py-7">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((it) => (
            <a key={it.title} href={it.href} className="group block">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10">
                <div className="relative h-[150px] w-full md:h-[160px]">
                  <Image
                    src={it.imageSrc}
                    alt={it.imageAlt ?? it.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <div className="text-[12px] font-medium text-black/85">
                  {it.title}
                </div>
                <div className="mt-1 text-[10px] leading-[14px] text-black/55">
                  {it.subtitle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

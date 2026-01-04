
"use client";

import Image from "next/image";


export type GuideItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;

  // small label under the image (like "GUIDE")
  meta?: string;

  // optional pill inside the image (like the little green pill)
  pill?: string;
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

function GuideCard({ item }: { item: GuideItem }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper: any = item.href ? "a" : "div";

  return (
    <Wrapper href={item.href} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10">
        <div className="relative h-[120px] w-full sm:h-[130px]">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* subtle overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />

        {/* pill inside image */}
        {item.pill ? (
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center rounded-full bg-[#c7e48a] px-3 py-1 text-[9px] font-medium text-black/80">
              {item.pill}
            </span>
          </div>
        ) : null}

        {/* arrow appears on hover */}
        <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white backdrop-blur">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="mt-3">
        <div className="text-[9px] tracking-[0.22em] text-black/45">
          {item.meta ?? "GUIDE"}
        </div>

        <div className="mt-1 text-[12px] font-medium leading-[1.2] text-black/85 group-hover:underline">
          {item.title}
        </div>

        <p className="mt-2 text-[9px] leading-[13px] text-black/55 line-clamp-2">
          {item.description}
        </p>
      </div>
    </Wrapper>
  );
}

export default function GuidesGrid({
  title = "All guides",
  items,
  className = "",
}: {
  title?: string;
  items: GuideItem[];
  className?: string;
}) {
  return (
    <section className={cn("w-full ", className)}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center text-[12px] text-black/70">{title}</div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <GuideCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

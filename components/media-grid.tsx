"use client";

import Image from "next/image";


type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

type Span = { col: 1 | 2 | 3; row: 1 | 2 | 3 };

export type MosaicTile = {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  media: Media;
  span?: Span; // used on md+ screens
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function TileMedia({ media }: { media: Media }) {
  if (media.type === "video") {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      fill
      priority={false}
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}

function MosaicCard({ tile }: { tile: MosaicTile }) {
  const theme = tile.theme ?? "dark";

  const spanKey = tile.span ? `${tile.span.col}-${tile.span.row}` : "1-1";
  const spanClassMap: Record<string, string> = {
    "1-1": "md:col-span-1 md:row-span-1",
    "1-2": "md:col-span-1 md:row-span-2",
    "1-3": "md:col-span-1 md:row-span-3",
    "2-1": "md:col-span-2 md:row-span-1",
    "2-2": "md:col-span-2 md:row-span-2",
    "2-3": "md:col-span-2 md:row-span-3",
    "3-1": "md:col-span-3 md:row-span-1",
    "3-2": "md:col-span-3 md:row-span-2",
    "3-3": "md:col-span-3 md:row-span-3",
  };
  const spanClass = spanClassMap[spanKey] ?? spanClassMap["1-1"];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded",
        theme === "dark" ? "bg-[#121818]" : "bg-[#dfe1ef]",
        "ring-1 ring-black/5",
        spanClass
      )}
    >
      {/* media */}
      <div className="absolute inset-0">
        <TileMedia media={tile.media} />

        {/* overlay to match screenshot */}
        {theme === "dark" ? (
          <>
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-black/10" />
          </>
        )}
      </div>

      {/* content */}
      <div className="relative flex h-full flex-col justify-between p-5">
        <div>
          <div
            className={cn(
              "text-[15px] tracking-[0.22em]",
              theme === "dark" ? "text-white" : "text-black/55"
            )}
          >
            {tile.kicker}
          </div>

          <div
            className={cn(
              "mt-2 text-[20px] font-medium leading-[1.15]",
              theme === "dark" ? "text-white" : "text-black/85"
            )}
          >
            {tile.title}
          </div>
        </div>

        {tile.description ? (
          <p
            className={cn(
              "mt-4 text-[13px]  max-w-[48ch]",
              theme === "dark" ? "text-white" : "text-black/60"
            )}
          >
            {tile.description}
          </p>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default function MediaMosaicGrid({
  tiles,
  className = "",
}: {
  tiles: MosaicTile[];
  className?: string;
}) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* 3 columns on desktop + consistent row height for row-span mosaic */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[170px]">
          {tiles.map((t) => (
            <MosaicCard key={t.id} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

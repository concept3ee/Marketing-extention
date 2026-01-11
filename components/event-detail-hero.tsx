import Image from "next/image";
import type { EventSpeaker } from "@/data/events";

type EventDetailHeroProps = {
  typeLabel: string;
  date: string;
  title: string;
  description: string;
  speakers: EventSpeaker[];
};

function splitTitle(title: string) {
  const match = title.match(/^(.*?)(?:\s*\(([^)]+)\))?$/);
  if (!match) {
    return { main: title, emphasis: "" };
  }
  return { main: match[1].trim(), emphasis: match[2] ?? "" };
}

function SpeakerCard({ speaker }: { speaker: EventSpeaker }) {
  return (
    <div className="w-full max-w-[240px] rounded-3xl bg-white/5 p-4 backdrop-blur">
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">
        {speaker.company}
      </div>
      <div className="mt-3 relative h-44 w-full overflow-hidden rounded-2xl bg-white/10">
        <Image
          src={speaker.imageSrc}
          alt={speaker.imageAlt ?? speaker.name}
          fill
          className="object-cover"
          sizes="240px"
        />
      </div>
      <div className="mt-4 text-[15px] font-semibold text-white/90">{speaker.name}</div>
      <div className="mt-1 text-[12px] text-white/60">{speaker.title}</div>
    </div>
  );
}

export default function EventDetailHero({
  typeLabel,
  date,
  title,
  description,
  speakers,
}: EventDetailHeroProps) {
  const { main, emphasis } = splitTitle(title);

  return (
    <section className="relative overflow-hidden bg-[#0b1012] text-white">
     
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-60 mix-blend-screen" />
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/60">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                {typeLabel}
              </span>
              <span>{date}</span>
            </div>
            <h1 className="mt-6 max-w-[520px] font-display text-[40px] leading-[1.05] text-white/95 sm:text-[48px]">
              {main}
              {emphasis ? (
                <span className="font-instrument-serif italic text-white/80">
                  {" "}
                  ({emphasis})
                </span>
              ) : null}
            </h1>
            <p className="mt-5 max-w-[520px] text-[14px] leading-6 text-white/60">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-end">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

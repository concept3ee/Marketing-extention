import Image from "next/image";
import {
  Megaphone,
  Rocket,
  Route,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { EventSpeaker, EventTakeaway } from "@/data/events";

type EventDetailSpeakersProps = {
  speakers: EventSpeaker[];
  intro?: string;
  takeaways: EventTakeaway[];
};

const takeawayIcons = {
  Sparkles,
  Zap,
  Workflow,
  Rocket,
  Route,
  Users,
  Shield,
  Megaphone,
} as const;

function TakeawayIcon({ name }: { name: string }) {
  const Icon = takeawayIcons[name as keyof typeof takeawayIcons] ?? Sparkles;
  return <Icon className="h-10 w-10 text-black/45" strokeWidth={1.4} />;
}

export default function EventDetailSpeakers({
  speakers,
  intro,
  takeaways,
}: EventDetailSpeakersProps) {
  const introText =
    intro ??
    "Hear how large, multi-brand organizations navigate scale, consistency, and adoption through systems thinking, cross-functional collaboration, and community-led design leadership.";

  return (
    <section className="bg-[#f4f1e9] text-[#1c1b18]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              Learn from the best
            </div>
            <h2 className="mt-4 font-display text-[36px] leading-[1.05] text-black/90 sm:text-[42px]">
              Our{" "}
              <span className="font-instrument-serif italic text-black/80">
                speakers
              </span>
            </h2>
            <p className="mt-4 max-w-[420px] text-[13px] leading-6 text-black/55">
              {introText}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={speaker.imageSrc}
                    alt={speaker.imageAlt ?? speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                </div>
                <div className="bg-[#2b3d35] px-4 py-3">
                  <div className="text-[13px] font-semibold text-white">
                    {speaker.name}
                  </div>
                  <div className="text-[11px] text-white/70">
                    {speaker.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-black/45">
            Key topics
          </div>
          <h3 className="mt-3 font-display text-[30px] leading-[1.1] text-black/90 sm:text-[34px]">
            Key{" "}
            <span className="font-instrument-serif italic text-black/70">
              takeaways
            </span>
          </h3>
          <p className="mt-3 text-[12px] text-black/55">
            Missed a moment or want a quick recap? Here are the top insights.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {takeaways.map((takeaway) => (
            <div
              key={takeaway.title}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white/70 px-6 py-8 text-center shadow-sm ring-1 ring-black/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white">
                <TakeawayIcon name={takeaway.icon} />
              </div>
              <div className="text-[12px] font-medium text-black/70">
                {takeaway.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

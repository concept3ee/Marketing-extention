import EventDetailHero from "@/components/event-detail-hero";
import EventDetailSpeakers from "@/components/event-detail-speakers";
import { getEventById } from "@/data/events";

type EventPageProps = {
  searchParams?: Promise<{ id?: string | string[] }>;
};

export default async function EventPage({ searchParams }: EventPageProps) {
  const resolvedSearchParams = await searchParams;
  const event = getEventById(resolvedSearchParams?.id);
  const typeLabel = event.type === "webinar" ? "Webinar" : "Summit";

  return (
    <main className="bg-[#0b1012]">
      <EventDetailHero
        typeLabel={typeLabel}
        date={event.date}
        title={event.title}
        description={event.description}
        speakers={event.speakers}
      />
      <EventDetailSpeakers
        speakers={event.speakers}
        intro={event.speakersIntro}
        takeaways={event.takeaways}
      />
    </main>
  );
}

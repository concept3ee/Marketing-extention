import type { EventCard } from "@/components/event-grids-tabs";

export type EventSpeaker = {
  company: string;
  name: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

export type EventTakeaway = {
  title: string;
  icon: string;
};

export type EventDetail = {
  id: string;
  type: "summit" | "webinar";
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  speakers: EventSpeaker[];
  speakersIntro?: string;
  takeaways: EventTakeaway[];
};

export const events: EventDetail[] = [
  {
    id: "shift-summit",
    type: "summit",
    title: "Growth Marketing Summit: GMaaS in Action",
    description:
      "A practical look at Growth Marketing-as-a-Service: strategy, on-demand talent, and execution support delivered fast, flexibly, and affordably.",
    imageSrc: "/mac-image.avif",
    date: "October 3, 2024",
    speakers: [
      {
        company: "Superside",
        name: "Kae Neskovic",
        title: "Executive Creative Director",
        imageSrc: "/kayla.avif",
      },
      {
        company: "Lloyds",
        name: "Vishal Kapoor",
        title: "Brand OS Lead",
        imageSrc: "/agent.avif",
      },
    ],
    speakersIntro:
      "Hear how marketing leaders build clarity, teams, and execution that drive measurable growth across markets.",
    takeaways: [
      { title: "GMaaS operating model", icon: "Sparkles" },
      { title: "Fast, flexible delivery", icon: "Zap" },
      { title: "Strategy-to-execution flow", icon: "Workflow" },
      { title: "Leadership alignment", icon: "Rocket" },
    ],
  },
  {
    id: "design-guidelines",
    type: "webinar",
    title: "Let's Fix Your Marketing (For Real)",
    description:
      "An introduction to Marketing Extension: the consulting and outsourcing partner that delivers strategy, teams, and tailored campaigns for measurable progress.",
    imageSrc: "/mac-image.avif",
    date: "September 19, 2024",
    speakers: [
      {
        company: "Superside",
        name: "Kae Neskovic",
        title: "Executive Creative Director",
        imageSrc: "/kayla.avif",
      },
      {
        company: "Lloyds",
        name: "Vishal Kapoor",
        title: "Brand OS Lead",
        imageSrc: "/agent.avif",
      },
    ],
    speakersIntro:
      "Meet the leaders behind our Growth Marketing-as-a-Service model and how it helps businesses compete and grow with confidence.",
    takeaways: [
      { title: "Clear strategic direction", icon: "Route" },
      { title: "Right people, right time", icon: "Users" },
      { title: "Execution with accountability", icon: "Shield" },
      { title: "Measurable progress", icon: "Megaphone" },
    ],
  },
];

export const eventCards: EventCard[] = events.map((event) => ({
  id: event.id,
  type: event.type,
  title: event.title,
  description: event.description,
  imageSrc: event.imageSrc,
  href: `/event?id=${event.id}`,
}));

export function getEventById(id?: string | string[]) {
  const normalized = Array.isArray(id) ? id[0] : id;
  return events.find((event) => event.id === normalized) ?? events[0];
}

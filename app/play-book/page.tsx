import EventsGridWithTabs from "@/components/event-grids-tabs";
import { eventCards } from "@/data/events";

const Guide = () => {
  return (
    <div className="pt-28 bg-white w-full h-full">
      <div className="space-y-3  px-8">
        <h1 className="text-black/80 text-[15px] font-medium text-center font-inter-tight">
          Playbooks
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          Growth Marketing-as-a-Service, clearly explained
        </p>
        <p className="text-black/90 text-center text-[16px] font-medium">
          Practical resources that show how to deliver strategy, talent, and execution with confidence.
        </p>
      </div>
      {/* <SplitFeatureCards
        left={{
          imageSrc: "/mac-image.avif",
          headline: (
            <div className="font-serif italic text-[#c7e48a] text-[64px] leading-[0.9]">
              Growth <br />
              <span className="not-italic font-normal text-[#c7e48a]">
                Marketing
              </span>
            </div>
          ),
          linkTitle: "GMaaS Launch Guide",
          linkHref: "#",
          description:
            "A clear guide to strategy, team setup, and execution that drives measurable progress.",
          bottomTheme: "dark",
        }}
        right={{
          imageSrc: "/mac-image.avif",
          blurImage: true,
          linkTitle: "Marketing Extension Pod Playbook",
          linkHref: "#",
          description:
            "How to structure on-demand talent, workflows, and reporting for fast, flexible delivery.",
          bottomTheme: "dark",
        }}
      /> */}
      <div className="p-20">
      <EventsGridWithTabs items={eventCards} />
      </div>
    </div>
  );
};

export default Guide;

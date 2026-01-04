"use client";
import EventsGridWithTabs, { EventCard } from "@/components/event-grids-tabs";
import ShiftSplitHero from "@/components/shift-split-hero";

const items: EventCard[] = [
    {
      id: "shift-summit",
      type: "summit",
      title: "Shift Summit",
      description:
        "From AI hype to creative impact. Join industry leaders from Airbnb, Skyscanner, and Microsoft…",
      imageSrc: "/mac-image.avif",
    },
    {
      id: "design-guidelines",
      type: "webinar",
      title: "Why teams aren’t using your design guidelines",
      description:
        "How a large, multi-brand organization navigates scale, consistency, and adoption…",
      imageSrc: "/mac-image.avif",
    },
    // add the rest...
  ];

const Events = () => {
  return (
    <div className="pt-28 bg-white w-full h-full">
      <div className="space-y-3 pt-12 px-8">
        <h1 className="text-black/80 text-[15px] font-medium text-center">
          Events & Summits
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          The tech powering your
          <br /> creative edge
        </p>
        <p className="text-black/90 text-center text-[16px] font-medium">
          We use the latest and greatest technology to power your
          <br /> creative edge. We are constantly updating our
          <br /> technology to stay ahead of the curve.
        </p>
        <div className="p-20 ">
          <ShiftSplitHero
            leftBgSrc="/mac-image.avif"
            // optional: right background image (otherwise gradient)
            rightBgSrc="/mac-image.avif"
            guest={{
              label: "GUEST",
              name: "Vishal Kapoor",
              title: "Brand OS Lead",
              org: "at Lloyds",
              avatarSrc: "/mac-image.avif",
            }}
            host={{
              label: "HOST",
              name: "Kae Neskovic",
              title: "Executive Creative Director",
              org: "at Superside",
              avatarSrc: "/mac-image.avif",
            }}
            rightTalkTitle="Why teams aren’t using your design guidelines"
            rightTalkDesc="How a large, multi-brand organization navigates scale, consistency, and adoption through systems thinking, cross-functional collaboration, and…"
          />
        </div>
      </div>
      <div className="p-20">
        <h1 className="text-black/80 text-[15px] font-medium text-center my-3">All Events</h1>
      <EventsGridWithTabs items={items} />
      </div>
    </div>
  );
};

export default Events;

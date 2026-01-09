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
   
  ];

const Events = () => {
  return (
    <div className=" bg-white w-full h-full">
      <div className="space-y-3 pt-16 ">
        <h1 className="text-black/80 text-[15px] font-medium text-center font-inter-tight">
          Events & Summits
        </h1>
            <p className="text-black/80 text-[20px] text-center font-medium leading-7">
              Connect, Learn, and Lead
            </p>
            <p className="text-black/90 text-center text-[16px] font-medium">
              Exclusive events designed for marketing leaders, founders, and innovators.
            </p>
        

         {/* Key Features Section */}
         
      </div>
       <div className=" ">
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
             rightTalkTitle="Why teams aren't using your design guidelines"
             rightTalkDesc="How a large, multi-brand organization navigates scale, consistency, and adoption through systems thinking, cross-functional collaboration, and…"
           />
         </div>
      <div className="p-5">
        <h1 className="text-black/80 text-[15px] font-medium text-center my-3">All Events</h1>
      <EventsGridWithTabs items={items} />
      </div>
    </div>
  );
};

export default Events;

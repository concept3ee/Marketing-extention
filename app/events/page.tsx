"use client";
import EventsGridWithTabs from "@/components/event-grids-tabs";
import ShiftSplitHero from "@/components/shift-split-hero";
import { eventCards } from "@/data/events";

const Events = () => {
  return (
    <div className=" bg-white w-full h-full">
      <div className="space-y-3 pt-16 ">
        <h1 className="text-black/80 text-[15px] font-medium text-center font-inter-tight">
          Events & Summits
        </h1>
            <p className="text-black/80 text-[20px] text-center font-medium leading-7">
              Growth Marketing-as-a-Service in the real world
            </p>
            <p className="text-black/90 text-center text-[16px] font-medium">
              Clear, practical sessions on strategy, talent, and execution that drive measurable progress.
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
               org: "at Marketing Extension",
               avatarSrc: "/mac-image.avif",
             }}
             host={{
               label: "HOST",
               name: "Kae Neskovic",
               title: "Executive Creative Director",
               org: "at Marketing Extension",
               avatarSrc: "/mac-image.avif",
             }}
             rightTalkTitle="Growth Marketing-as-a-Service: Strategy to Execution"
             rightTalkDesc="A practical session on clear direction, the right people at the right time, and campaigns built for measurable growth."
           />
         </div>
      <div className="p-5">
        <h1 className="text-black/80 text-[15px] font-medium text-center my-3">All Events</h1>
      <EventsGridWithTabs items={eventCards} />
      </div>
    </div>
  );
};

export default Events;

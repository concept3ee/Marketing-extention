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
              Connect, Learn, and Lead
            </p>
            <p className="text-black/90 text-center text-[16px] font-medium">
              Exclusive events designed for marketing leaders, founders, and innovators.
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
             rightTalkTitle="Why teams aren't using your design guidelines"
             rightTalkDesc="How a large, multi-brand organization navigates scale, consistency, and adoption through systems thinking, cross-functional collaboration, and…"
           />
         </div>

         {/* Key Features Section */}
         <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-8">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-[32px] md:text-[40px] font-bold text-center text-black mb-4 animate-fade-in">
               Key Features
             </h2>
             <p className="text-center text-gray-600 mb-16 text-[16px] animate-fade-in animation-delay-200">
               Gain insights, expand your network, and discover strategies you can immediately apply.
             </p>
             <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
               <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-100 border border-gray-100 hover:border-orange-200">
                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Upcoming Events</h3>
                 <p className="text-[15px] text-gray-600 leading-relaxed">Stay ahead with our live summits, webinars, and workshops</p>
               </div>
               <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-200 border border-gray-100 hover:border-orange-200">
                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Recordings</h3>
                 <p className="text-[15px] text-gray-600 leading-relaxed">Access past sessions for on-demand learning and inspiration</p>
               </div>
               <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-300 border border-gray-100 hover:border-orange-200">
                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Networking</h3>
                 <p className="text-[15px] text-gray-600 leading-relaxed">Connect with Africa&apos;s leading marketers and founders</p>
               </div>
             </div>
           </div>
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

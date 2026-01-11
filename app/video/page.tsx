import GuidesGrid, { GuideItem } from "@/components/guides-grid";
import SplitFeatureCards from "@/components/split-feature-card";
import React from "react";

const Guide = () => {
  const guides: GuideItem[] = [
    {
      id: "gmaas-briefing",
      title: "GMaaS Briefing",
      description:
        "A short session on Growth Marketing-as-a-Service and how it helps teams move faster.",
      imageSrc: "/mac-image.avif",
      href: "#",
      meta: "VIDEO",
    },
    {
      id: "extension-pod",
      title: "Building the Marketing Extension Pod",
      description:
        "How to structure on-demand talent, workflows, and reporting for measurable progress.",
      imageSrc: "/mac-image.avif",
      href: "#",
      meta: "VIDEO",
      pill: "Watch now",
    },
    // add more...
  ];
  return (
    <div className="pt-28 bg-white w-full h-full">
      <div className="space-y-3  px-8">
        <h1 className="text-black/80 text-[15px] font-medium text-center">
          Video Library
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          Learn from the Marketing Extension team
        </p>
        <p className="text-black/90 text-center text-[25px] font-medium">
          Practical sessions on strategy, talent, and execution.
        </p>
        <p className="text-black/80 text-center text-[14px] font-normal max-w-3xl mx-auto mt-4">
          Access a curated library of talks and tutorials on Growth Marketing-as-a-Service, built for teams that want measurable progress.
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

      {/* Key Features Section */}
      {/* <div className=" py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-center text-black mb-4 animate-fade-in">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mb-16 text-[16px] animate-fade-in animation-delay-200">
            Visual learning that&apos;s practical, actionable, and easy to implement.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-100 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Step-by-Step Walkthroughs</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Detailed guides on marketing systems and processes</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-200 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Case Studies</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Real-world client stories and success examples</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-300 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Event Sessions</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Recorded sessions and thought leadership talks</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="">
      <GuidesGrid items={guides} />
      </div>
    </div>
  );
};

export default Guide;

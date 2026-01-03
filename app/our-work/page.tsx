"use client";

import IncludedInAllPlans from "@/components/All-plans";
import CaseStudyGrid from "@/components/case-study-grid";
import ImpactStatsRow from "@/components/impact-row";
import TrustedByMarquee from "@/components/trusted-by";

const OurWork = () => {
  return (
    <div className="bg-white h-full py-4 flex flex-col gap-5 ">
      <div className="pt-28 space-y-2">
        <h1 className="text-center text-black/80 text-[15px] font-bold ">
          Our Work
        </h1>
        <p className="text-center text-black/80 text-[30px] font-medium leading-7">
          Creative that works
        </p>
        <p className="text-center text-black/90 text-[16px] font-medium">
          We help the world&apos;s leading brands create standout ads
          <br /> and campaigns at speed—from concept to
          <br /> execution to results.
        </p>
        <ImpactStatsRow />
      </div>
    
      <TrustedByMarquee />
      <CaseStudyGrid />
      <div className="px-8">
      <div
          className="p-20 rounded-[20px]"
          style={{
            backgroundImage: "url(/bg-image.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white text-[15px] font-medium">
            ai design services
          </p>
          <p className="text-white text-[30px] font-medium ">
            Save up to 70% on production costs
          </p>
          <p className="text-white text-[16px] font-medium my-3">Through AI, customers like Amazon, Reddit, and Salesforce managed to spend less<br/> than half of what they normally would on similar projects.</p>
          <button className="border cursor-pointer border-white p-1 text-[10px] rounded-[20px] w-[90px] text-center whitespace-nowrap">
           Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;

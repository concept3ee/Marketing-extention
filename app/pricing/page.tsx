import IncludedInAllPlans from "@/components/All-plans";
import FaqGrid from "@/components/faq-grid";
import HeroFooter from "@/components/footer";
import ServiceCard from "@/components/service-card";
import SuperspaceShowcaseGrid from "@/components/show-case-grid";
import TestimonialScroller from "@/components/testimonial";
import TrustedByMarquee from "@/components/trusted-by";
import React from "react";

const Pricing = () => {
  return (
    <div className="bg-white h-full py-4 flex flex-col">
      <div className="pt-28 space-y-2">
        <h1 className="text-center text-black/80 text-[15px] font-bold ">
          pricing model
        </h1>
        <p className="text-center text-black/80 text-[30px] font-medium leading-7">
          A subscription built to fuel <br /> your growth
        </p>
      </div>
      <div className=" flex justify-center items-center pt-16 gap-5">
        <div
          className="w-full max-w-md  h-[500px]  py-9 bg-center cursor-pointer bg-cover bg-no-repeat flex-col flex px-16 rounded-md"
          style={{ backgroundImage: "url(/flower.jpg)" }}
        >
          <p className="text-[30px] font-medium  text-black text-center">
            Flexible plans
            <br />
            for every business
          </p>
          <p className="text-black w-full text-[16px] font-medium text-center">
            From basic asset production and motion graphics to video ads and
            brand strategy, a Superside subscription lets you choose how you
            want to use your budget every month based on your business needs.
          </p>
          <button className="px-4 py-3 rounded-full  bg-black cursor-pointer text-white mt-auto">
            View Plans
          </button>
        </div>
        <IncludedInAllPlans />
      </div>
      <div className="pt-16">
        <TrustedByMarquee />
      </div>
      <div className="bg-[#121818] w-full p-9 space-y-5">
        <div className="space-y-2  my-5">
          <p className="text-white text-[16px] font-medium ">
            easy & hassle-free
          </p>
          <div className="flex  gap-2 justify-between items-center">
            <p className="text-white text-[30px] font-medium leading-7">
              One subscription for access to all
              <br /> our creative services
            </p>
            <p>
              No matter your creative need, creating and
              <br /> submitting a project is easy and effortless.
            </p>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-10">
          <ServiceCard
            title="Presentation Design"
            imageUrl="/space.avif"
            items={["Decks", "Pitch", "Slides"]}
          />
          <ServiceCard
            title="Presentation Design"
            imageUrl="/space.avif"
            items={["Decks", "Pitch", "Slides"]}
          />
          <ServiceCard
            title="Presentation Design"
            imageUrl="/space.avif"
            items={["Decks", "Pitch", "Slides"]}
          />
          <ServiceCard
            title="Presentation Design"
            imageUrl="/space.avif"
            items={["Decks", "Pitch", "Slides"]}
          />
          <ServiceCard
            title="Presentation Design"
            imageUrl="/space.avif"
            items={["Decks", "Pitch", "Slides"]}
          />
        </div>
      </div>
      <div className=" p-9">
        <div className="space-y-2  my-5">
          <p className="text-black text-[16px] font-medium ">
            easy & hassle-free
          </p>
          <div className="flex  gap-2 justify-between items-center">
            <p className="text-black text-[30px] font-medium leading-7">
              One subscription for access to all
              <br /> our creative services
            </p>
            <p className="text-black text-[16px] font-medium">
              No matter your creative need, creating and
              <br /> submitting a project is easy and effortless.
            </p>
          </div>
          <SuperspaceShowcaseGrid />
          <TestimonialScroller />
        </div>
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
      <FaqGrid />
      
    </div>
  );
};

export default Pricing;

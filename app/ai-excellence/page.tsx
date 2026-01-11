"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, BarChart3 } from "lucide-react";
import AiAdvantageSplit from "@/components/ai-advantage-split";
import AiSuccessGrid from "@/components/ai-success-grid";
import ExpertiseSplit from "@/components/expertise-pill";
import MediaMosaicGrid, { MosaicTile } from "@/components/media-grid";
import TeamHoverCard from "@/components/team-card";
import AiStatRow from "@/components/ai-start-row";
const tiles: MosaicTile[] = [
  {
    id: "ai-video",
    kicker: "NO STOCK, NO SHOOT",
    title: "AI video production",
    description:
      "From scripting and storyboarding to generating new footage and voiceovers, AI-enhanced production brings efficiency to every stage of the process.",
    theme: "dark",
    media: { type: "image", src: "/amazon.avif", alt: "AI video" },
    span: { col: 1, row: 1 },
  },
  {
    id: "character",
    kicker: "THE FACE OF YOUR BRAND",
    title: "Character development",
    description:
      "From generating character concepts to rapid iteration on design and voice, AI helps create relatable, consistent characters.",
    theme: "dark",
    media: { type: "image", src: "/amazon.avif", alt: "Character dev" },
    span: { col: 1, row: 2 }, // tall (center column)
  },
  {
    id: "product",
    kicker: "GET EVERY ANGLE",
    title: "Product visuals",
    description:
      "Generate new product visuals, seasonal images, or lifestyle mockups with minimal reshoots—optimized for content.",
    theme: "dark",
    media: { type: "image", src: "/amazon.avif", alt: "Product visuals" },
    span: { col: 1, row: 2 }, // tall (right column)
  },
  {
    id: "enhance",
    kicker: "UPSCALE AT SCALE",
    title: "Image enhancements",
    description:
      "Upscale, sharpen, color-correct or apply a specific aesthetic for brand consistency across campaigns.",
    theme: "dark",
    media: {   type: "video",
      src: "/slack.mp4",  },
    span: { col: 1, row: 1 },
  },
  {
    id: "translate",
    kicker: "SPEAK THEIR LANGUAGE",
    title: "Translation and transcreation",
    description:
      "Take your message to a wider audience with localized images and global languages.",
    theme: "dark",
    media: {
      type: "video",
      src: "/slack.mp4",
      poster: "/amazon.avif",
    },
    span: { col: 1, row: 2 }, // tall left bottom
  },
  {
    id: "avatar",
    kicker: "PERSONALIZED BRAND PRESENCE",
    title: "Avatar and voice cloning",
    description:
      "Realistic digital personas customized to match brand tone and audience preferences.",
    theme: "dark",
    media: {
      type: "video",
      src: "/slack.mp4",
      poster: "/amazon.avif",
    },
    span: { col: 1, row: 2 }, // tall middle bottom
  },
  {
    id: "scale",
    kicker: "SCALE WITH CONSISTENCY",
    title: "Production at scale",
    description:
      "Adapt thousands of visuals for multichannel use—keep up with the pace of modern campaigns.",
    theme: "dark",
    media: { type: "image", src: "/amazon.avif", alt: "Scale" },
    span: { col: 1, row: 1 },
  },
  {
    id: "brand",
    kicker: "BEAUTIFULLY ON-BRAND",
    title: "Brand imagery",
    description:
      "From photorealistic to stylized, get a library of ready-to-use imagery that’s always on brand.",
    theme: "light",
    media: { type: "image", src: "/amazon.avif", alt: "Brand imagery" },
    span: { col: 1, row: 1 },
  },
];

const AiExcellence = () => {
  return (
    <div>
      <div
        className="p-20  flex flex-col gap-4"
        style={{
          backgroundImage: "url(/bg-image.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-16 space-y-3">
          <h1 className="text-white text-[15px] font-semibold uppercase tracking-widest">
            AI Excellence
          </h1>
          <p className="text-white text-[30px] font-semibold leading-7">
            Systems that make growth marketing faster and clearer
          </p>
          <p className="text-white text-[16px] font-medium">
            We combine strategic direction, on-demand talent, and automation to
            deliver measurable progress for ambitious teams.
          </p>
          <button className="bg-green-500 px-4 py-2 w-fit text-[15px] rounded-full">
            Book a call
          </button>
        </div>
      </div>
      <AiAdvantageSplit
        imageSrc="/amazon.avif"
        features={[
          {
            icon: "clock",
            title: "Fast, flexible delivery",
            desc: "Combine strategy, talent, and automation to move faster without sacrificing quality.",
          },
          {
            icon: "shield",
            title: "Human-led, system-backed",
            desc: "Senior marketing leadership with repeatable workflows and clear accountability.",
          },
          {
            icon: "spark",
            title: "Measured progress",
            desc: "Dashboards and reporting keep teams aligned on outcomes and impact.",
          },
          {
            icon: "layers",
            title: "On-demand expertise",
            desc: "Access Africa's top marketing talent exactly when you need it.",
          },
        ]}
      />
      <div className="flex flex-col gap-4 bg-white w-full p-10">
        <h1 className="text-black text-[15px] font-medium text-center uppercase tracking-widest">
          Marketing Execution in Practice
        </h1>

        <MediaMosaicGrid tiles={tiles} />
      </div>
      <div className="bg-[#121818] w-full grid grid-cols-2 py-9 px-12">
        
        <AiStatRow
          text="Measured lift from a focused campaign sprint and clear reporting."
          value="+40%"
          linkLabel="Market entry case study"
          linkHref="#"
        />
         <AiStatRow
          text="Reduced time-to-launch with on-demand talent and clear ownership."
          value="6 weeks"
          linkLabel="Product launch case study"
          linkHref="#"
        /> <AiStatRow
          text="Improved pipeline quality through tailored campaigns and consistent execution."
          value="+28%"
          linkLabel="Pipeline growth case study"
          linkHref="#"
        /> <AiStatRow
          text="Enabled leadership visibility with a unified marketing scorecard."
          value="100%"
          linkLabel="Leadership visibility case study"
          linkHref="#"
        />
      </div>
      <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        <ExpertiseSplit
          reverse={false}
          kicker="GMaaS DELIVERY"
          title="Strategic direction embedded in marketing engines"
          italicTitle="Consistent messaging and execution across channels"
          videoSrc="/slack.mp4"
        />
        <ExpertiseSplit
          reverse={true}
          kicker="PROCESS DISCIPLINE"
          title="Clear workflows and operating rhythms"
          italicTitle="Faster cycles with higher quality outputs"
          posterSrc="/amazon.avif"
        />
        <ExpertiseSplit
          reverse={false}
          kicker="MEASURED CAMPAIGNS"
          title="Campaign planning and measurement"
          italicTitle="Scalable execution without extra headcount"
          videoSrc="/slack.mp4"
        />
      </div>

      <div className="bg-white w-full p-16 flex flex-col gap-4">
        <h1 className="text-black text-[15px] font-medium text-center">
          CHOOSE YOUR AI APPROACH
        </h1>
        <p className="text-black text-[25px] font-medium text-center">
          Your AI, your rules
        </p>
        <p className="text-black text-[16px] font-medium text-center">
          As a Marketing Extension customer, you can choose fully human-driven projects,
          AI-enhanced
          <br /> workflows, or a mix of both. We protect your assets with
          <br /> industry-leading tools and best practices, ensuring your data
          stays
          <br /> safe, confidential, and fully compliant.
        </p>
        <button className="bg-black text-white px-3 py-2 w-[10%] text-[15px] rounded-full self-center">
          Book A Demo
        </button>
        <div className="flex gap-4">
          <TeamHoverCard
            name="karim Benzema"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/amazon.avif"
          />
          <TeamHoverCard
            name="Ferdi Kadıoğlu"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/footer.avif"
          />
          <TeamHoverCard
            name="Yasin Ayari"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/agent.avif"
          />
            <TeamHoverCard
            name="Diogo Jota"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/agent.avif"
          />
        </div>
      </div>
      <div className="px-8 bg-white py-9">
        <div
          className="p-20 rounded-[20px]"
          style={{
            backgroundImage: "url(/bg-image.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white text-[15px] font-medium uppercase tracking-widest">
            AI Excellence
          </p>
          <p className="text-white text-[30px] font-medium ">
            Marketing that is smarter, faster, and measurable
          </p>
          <p className="text-white text-[16px] font-medium my-3">
            Strategy, talent, and execution delivered fast, flexibly, and affordably.
          </p>
          <button className="bg-green-500 text-white font-family-inter cursor-pointer  p-1 text-[15px] rounded-[20px] w-[150px] text-center whitespace-nowrap">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiExcellence;

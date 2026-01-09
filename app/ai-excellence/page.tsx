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
            Your Shortcut to AI Creative Advantage
          </p>
          <p className="text-white text-[16px] font-medium">
            We use AI to supercharge marketing, combining human insight with
            machine-level discipline to deliver <br />
            faster,smarter, and more impactful creative.
          </p>
          <button className="bg-green-500 px-3 py-2 w-[10%] text-[15px] rounded-full">
            Book a demo
          </button>
        </div>
      </div>
      <AiAdvantageSplit
        imageSrc="/amazon.avif"
        features={[
          {
            icon: "clock",
            title: "Saving time and money",
            desc: "We know this ends up working with AI, completing your work faster and at lower cost.",
          },
          {
            icon: "shield",
            title: "Integrated human + AI workflow",
            desc: "Almost 100% of Superside creatives are AI-certified so they can move fast while ensuring alignment with brand and brief.",
          },
          {
            icon: "spark",
            title: "Continuously future-proofing",
            desc: "We’re always testing the limits of AI tools. When even a custom workflow is needed, we build it.",
          },
          {
            icon: "layers",
            title: "Transparency and control",
            desc: "You choose how we use AI in the creative process for your brand, ensuring output aligns with expectations.",
          },
        ]}
      />
      <div className="flex flex-col gap-4 bg-white w-full p-10">
        <h1 className="text-black text-[15px] font-medium text-center uppercase tracking-widest">
          AI-Powered Creative Production
        </h1>

        <MediaMosaicGrid tiles={tiles} />
      </div>
      <div className="bg-[#121818] w-full grid grid-cols-2 py-9 px-12">
        
        <AiStatRow
          text="Saved in a single project using AI. Mika tight deadline by delivering it off the time."
          value="$9k+"
          linkLabel="National Gas Marketing case study"
          linkHref="#"
        />
         <AiStatRow
          text="Saved in a single project using AI. Mika tight deadline by delivering it off the time."
          value="$9k+"
          linkLabel="National Gas Marketing case study"
          linkHref="#"
        /> <AiStatRow
          text="Saved in a single project using AI. Mika tight deadline by delivering it off the time."
          value="$9k+"
          linkLabel="National Gas Marketing case study"
          linkHref="#"
        /> <AiStatRow
          text="Saved in a single project using AI. Mika tight deadline by delivering it off the time."
          value="$9k+"
          linkLabel="National Gas Marketing case study"
          linkHref="#"
        />
      </div>
      <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        <ExpertiseSplit
          reverse={false}
          kicker="AI EXCELLENCE"
          title="Strategic AI integration into marketing engines"
          italicTitle="Consistent brand messaging and imagery across channels"
          videoSrc="/slack.mp4"
        />
        <ExpertiseSplit
          reverse={true}
          kicker="PROCESS AUTOMATION"
          title="Process Automation and Workflows"
          italicTitle="Faster production cycles with higher quality creative outputs"
          posterSrc="/amazon.avif"
        />
        <ExpertiseSplit
          reverse={false}
          kicker="AI ENABLED CAMPAIGNS"
          title="AI-enabled campaign planning & measurement"
          italicTitle="Scalable campaigns without additional headcount"
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
            Marketing that is smarter, faster, and AI-powered
          </p>
          <p className="text-white text-[16px] font-medium my-3">
            Marketing that is smarter, faster, and AI-powered—giving your brand
            a creative edge that scales.
          </p>
          <button className="bg-green-500 text-white font-family-inter cursor-pointer  p-1 text-[15px] rounded-[20px] w-[150px] text-center whitespace-nowrap">
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiExcellence;

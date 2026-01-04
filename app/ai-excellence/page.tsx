import AiAdvantageSplit from "@/components/ai-advantage-split";
import AiSuccessGrid from "@/components/ai-success-grid";
import IncludedInAllPlans from "@/components/All-plans";
import ExpertiseSplit from "@/components/expertise-pill";
import MediaMosaicGrid, { MosaicTile } from "@/components/media-grid";
import TeamSpotlightTabs from "@/components/spot-light-tab";
import TeamHoverCard from "@/components/team-card";
const tiles: MosaicTile[] = [
  {
    id: "ai-video",
    kicker: "NO STOCK, NO SHOOT",
    title: "AI video production",
    description:
      "From scripting and storyboarding to generating new footage and voiceovers, AI-enhanced production brings efficiency to every stage of the process.",
    theme: "dark",
    media: { type: "image", src: "/grid/ai-video.jpg", alt: "AI video" },
    span: { col: 1, row: 1 },
  },
  {
    id: "character",
    kicker: "THE FACE OF YOUR BRAND",
    title: "Character development",
    description:
      "From generating character concepts to rapid iteration on design and voice, AI helps create relatable, consistent characters.",
    theme: "dark",
    media: { type: "image", src: "/grid/character.jpg", alt: "Character dev" },
    span: { col: 1, row: 2 }, // tall (center column)
  },
  {
    id: "product",
    kicker: "GET EVERY ANGLE",
    title: "Product visuals",
    description:
      "Generate new product visuals, seasonal images, or lifestyle mockups with minimal reshoots—optimized for content.",
    theme: "dark",
    media: { type: "image", src: "/grid/product.jpg", alt: "Product visuals" },
    span: { col: 1, row: 2 }, // tall (right column)
  },
  {
    id: "enhance",
    kicker: "UPSCALE AT SCALE",
    title: "Image enhancements",
    description:
      "Upscale, sharpen, color-correct or apply a specific aesthetic for brand consistency across campaigns.",
    theme: "dark",
    media: { type: "image", src: "/grid/enhance.jpg", alt: "Enhancements" },
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
      src: "/grid/translate.mp4",
      poster: "/grid/translate-poster.jpg",
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
      src: "/grid/avatar.mp4",
      poster: "/grid/avatar-poster.jpg",
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
    media: { type: "image", src: "/grid/scale.jpg", alt: "Scale" },
    span: { col: 1, row: 1 },
  },
  {
    id: "brand",
    kicker: "BEAUTIFULLY ON-BRAND",
    title: "Brand imagery",
    description:
      "From photorealistic to stylized, get a library of ready-to-use imagery that’s always on brand.",
    theme: "light",
    media: { type: "image", src: "/grid/brand.jpg", alt: "Brand imagery" },
    span: { col: 1, row: 1 },
  },
];

const AiExcellence = () => {
  return (
    <div>
      <div
        className="p-20 rounded-[20px] flex flex-col gap-4"
        style={{
          backgroundImage: "url(/bg-image.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-16 space-y-3">
          <h1>our people</h1>
          <p className="text-white text-[30px] font-semibold leading-7">
            Partner with world-class
            <br /> creative talent without
            <br /> the hassle of hiring
          </p>
          <p className="text-white text-[16px] font-medium">
            Our people are our biggest strength. Superside has hired 750+ elite
            <br /> designers, project managers, animators, copywriters, AI
            technologists and
            <br /> more, so you can get high-quality work without compromise.
          </p>
          <button className="bg-green-500 px-3 py-2 w-[10%] text-[15px] rounded-full">
            Book a demo
          </button>
        </div>
      </div>
      <AiAdvantageSplit
        imageSrc="/agent.avif"
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
        <h1 className="text-black text-[15px] font-medium text-center">
          LET’S TALK AI
        </h1>
        <p className="text-black text-[25px] font-medium text-center">
          AI-powered creative production
        </p>
        <p className="text-black text-[16px] font-medium text-center">
          From concept to execution, we use AI to streamline your creative
          process and deliver results faster and more efficiently.
        </p>
        <MediaMosaicGrid tiles={tiles} />
      </div>
      <div className="bg-[#121818] w-full">
        <AiSuccessGrid
          cells={[
            {
              kind: "text",
              text: "Saved in a single project using AI. Mika tight deadline by delivering it off the time.",
              link: { label: "National Gas Marketing case study", href: "#" },
            },
            {
              kind: "stat",
              value: "$9k+",
              text: "Increase in the brand’s creative output for engaging ad design, thanks to AI.",
              link: { label: "Borna case study", href: "#" },
            },
            { kind: "stat", value: "3X" },

            {
              kind: "text",
              text: "Remarkable turnaround for a bank of AI illustrations, reducing design time by 90%.",
              link: { label: "CPG case study", href: "#" },
            },
            {
              kind: "stat",
              value: "12hrs",
              text: "Illustrations generated and coordinated into a single comic book project.",
              link: { label: "SecurityScorecard case study", href: "#" },
            },
            { kind: "stat", value: "500+" },
          ]}
        />
      </div>
      <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          videoSrc="/videos/another.mp4"
        />
        <ExpertiseSplit
          reverse={true}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          posterSrc="/agent.avif"
        />
        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          posterSrc="/agent.avif"
        />
      </div>
      <div className="bg-[#121818] w-full p-18 flex flex-col gap-4">
        <h1 className="text-white text-[15px] font-medium text-center">
          CHOOSE YOUR AI APPROACH
        </h1>
        <p className="text-white text-[25px] font-medium text-center">
          Your AI, your rules
        </p>
        <p className="text-white text-[16px] font-medium text-center">
          As a Superside customer, you can choose fully human-driven projects,
          AI-enhanced
          <br /> workflows, or a mix of both. We protect your assets with
          <br /> industry-leading tools and best practices, ensuring your data
          stays
          <br /> safe, confidential, and fully compliant.
        </p>
        <div className="flex gap-4">
          <IncludedInAllPlans /> <IncludedInAllPlans /> <IncludedInAllPlans />
        </div>
      </div>
      <div className="bg-white w-full p-16 flex flex-col gap-4">
        <h1 className="text-black text-[15px] font-medium text-center">
          CHOOSE YOUR AI APPROACH
        </h1>
        <p className="text-black text-[25px] font-medium text-center">
          Your AI, your rules
        </p>
        <p className="text-black text-[16px] font-medium text-center">
          As a Superside customer, you can choose fully human-driven projects,
          AI-enhanced
          <br /> workflows, or a mix of both. We protect your assets with
          <br /> industry-leading tools and best practices, ensuring your data
          stays
          <br /> safe, confidential, and fully compliant.
        </p>
        <div className="flex gap-4">
          <TeamHoverCard
            name="Tamara Dalhuijsen"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/agent.avif"
          />
          <TeamHoverCard
            name="Tamara Dalhuijsen"
            description="Senior Brand Designer focused on identity systems and campaign craft."
            imageSrc="/agent.avif"
          />
          <TeamHoverCard
            name="Tamara Dalhuijsen"
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
        <p className="text-white text-[15px] font-medium">ai design services</p>
        <p className="text-white text-[30px] font-medium ">
          Save up to 70% on production costs
        </p>
        <p className="text-white text-[16px] font-medium my-3">
          Through AI, customers like Amazon, Reddit, and Salesforce managed to
          spend less
          <br /> than half of what they normally would on similar projects.
        </p>
        <button className="border cursor-pointer border-white p-1 text-[10px] rounded-[20px] w-[90px] text-center whitespace-nowrap">
          Book a demo
        </button>
      </div>
      </div>
    </div>
  );
};

export default AiExcellence;

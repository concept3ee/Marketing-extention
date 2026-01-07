"use client";

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import AiAdvantageSplit from "@/components/ai-advantage-split";
import AiSuccessGrid from "@/components/ai-success-grid";
import ExpertiseSplit from "@/components/expertise-pill";
import MediaMosaicGrid, { MosaicTile } from "@/components/media-grid";
import TeamHoverCard from "@/components/team-card";
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
    media: { type: "image", src: "/amazon.avif", alt: "Enhancements" },
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
        className="p-20 rounded-[20px] flex flex-col gap-4"
        style={{
          backgroundImage: "url(/bg-image.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-16 space-y-3">
          <h1 className="text-white text-[15px] font-semibold uppercase tracking-widest">AI Excellence</h1>
          <p className="text-white text-[30px] font-semibold leading-7">
            Your Shortcut to AI Creative Advantage
          </p>
          <p className="text-white text-[16px] font-medium">
            We use AI to supercharge marketing, combining human insight with machine-level discipline to deliver faster, smarter, and more impactful creative.
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
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Video production & motion design</p>
          </div>
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Character & avatar development</p>
          </div>
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Product visuals & image enhancement</p>
          </div>
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Brand imagery & high-volume content production</p>
          </div>
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Translation & transcription</p>
          </div>
          <div className="text-center p-6">
            <p className="text-black text-[16px] font-semibold">Avatar & voice cloning</p>
          </div>
        </div>
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
      <div className="bg-[#121818] w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* AI Consulting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-white text-[15px] font-medium text-center uppercase tracking-widest mb-12">
              AI Consulting
            </h1>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, text: "Strategic AI integration into marketing engines" },
                { icon: Zap, text: "Process automation & workflow optimization" },
                { icon: BarChart3, text: "AI-enabled campaign planning & measurement" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-white text-[16px] font-semibold group-hover:text-primary transition-colors duration-300">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Success Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-white text-[15px] font-medium text-center uppercase tracking-widest mb-12">
              Success Metrics
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                "Faster production cycles with higher quality creative outputs",
                "Scalable campaigns without additional headcount",
                "Consistent brand messaging and imagery across channels",
                "Data-driven insights guiding creative decisions",
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 text-[14px] group-hover:text-white transition-colors duration-300">{metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-3xl text-center backdrop-blur-sm"
          >
            <p className="text-white text-[20px] md:text-[22px] font-display font-bold leading-relaxed">
              Marketing that is smarter, faster, and AI-powered—giving your brand a creative edge that scales.
            </p>
          </motion.div>
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
        <p className="text-white text-[15px] font-medium uppercase tracking-widest">AI Excellence</p>
        <p className="text-white text-[30px] font-medium ">
          Marketing that is smarter, faster, and AI-powered
        </p>
        <p className="text-white text-[16px] font-medium my-3">
          Marketing that is smarter, faster, and AI-powered—giving your brand a creative edge that scales.
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

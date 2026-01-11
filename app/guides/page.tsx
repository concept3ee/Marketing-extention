import GuidesGrid, { GuideItem } from "@/components/guides-grid";
import SplitFeatureCards from "@/components/split-feature-card";
import React from "react";

const Guide = () => {
  const guides: GuideItem[] = [
    {
      id: "gmaas-launch",
      title: "GMaaS Launch Guide",
      description:
        "How to set clear direction, assemble the right team, and execute your first 90 days of growth marketing.",
      imageSrc: "/mac-image.avif",
      href: "#",
      meta: "GUIDE",
    },
    {
      id: "extension-pod",
      title: "Marketing Extension Pod Playbook",
      description:
        "A practical blueprint for on-demand talent, fast workflows, and measurable delivery.",
      imageSrc: "/mac-image.avif",
      href: "#",
      meta: "GUIDE",
      pill: "Get the guide",
    },
    // add more...
  ];
  return (
    <div className="pt-28 bg-white w-full h-full">
      <div className="space-y-3  px-8">
        <h1 className="text-black/80 text-[15px] font-medium text-center font-inter-tight">
          Guides & Playbooks
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          Clarity, people, execution
        </p>
        <p className="text-black/90 text-center text-[16px] font-medium">
          Practical frameworks that explain Growth Marketing-as-a-Service and how to apply it in your business.
        </p>
      </div>
      <SplitFeatureCards
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
            "A clear, actionable guide to strategy, team setup, and execution that drives measurable progress.",
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
      />
      <div className="p-20">
      <GuidesGrid items={guides} />
      </div>
    </div>
  );
};

export default Guide;

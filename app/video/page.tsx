import GuidesGrid, { GuideItem } from "@/components/guides-grid";
import SplitFeatureCards from "@/components/split-feature-card";
import React from "react";

const Guide = () => {
  const guides: GuideItem[] = [
    {
      id: "shift-happens",
      title: "Shift Happens Survival Guide",
      description:
        "AI was meant to be the solution. So why are so many of us stuck in survival mode? This is your team's guide to…",
      imageSrc: "/mac-image.avif",
      href: "#",
      meta: "GUIDE",
    },
    {
      id: "partnerships",
      title: "Inside Great Creative Partnerships",
      description:
        "The secret to great creative? Great partnerships. Tap into the minds of 22 top creative and marketing leaders as they…",
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
        <h1 className="text-black/80 text-[15px] font-medium text-center">
          Events & Summits
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          The tech powering your
          <br /> creative edge
        </p>
        <p className="text-black/90 text-center text-[16px] font-medium">
          We use the latest and greatest technology to power your
          <br /> creative edge. We are constantly updating our
          <br /> technology to stay ahead of the curve.
        </p>
      </div>
      {/* <SplitFeatureCards
        left={{
          imageSrc: "/mac-image.avif",
          headline: (
            <div className="font-serif italic text-[#c7e48a] text-[64px] leading-[0.9]">
              Shift <br />
              <span className="not-italic font-normal text-[#c7e48a]">
                Happens
              </span>
            </div>
          ),
          linkTitle: "Shift Happens Survival Guide",
          linkHref: "#",
          description:
            "AI was meant to be the solution. So why are so many of us stuck in survival mode? This is your team's guide to navigating AI expectations, adoption,…",
          bottomTheme: "dark",
        }}
        right={{
          imageSrc: "/mac-image.avif",
          blurImage: true,
          linkTitle: "Inside Great Creative Partnerships",
          linkHref: "#",
          description:
            "The secret to great creative? Great partnerships. Tap into the minds of 22 top creative and marketing leaders as they tackle big questions, together.",
          bottomTheme: "dark",
        }}
      /> */}
      <div className="p-20">
      <GuidesGrid items={guides} />
      </div>
    </div>
  );
};

export default Guide;

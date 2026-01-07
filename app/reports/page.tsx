import GuidesGrid, { GuideItem } from "@/components/guides-grid";
import SplitFeatureCards from "@/components/split-feature-card";
import React from "react";

const Reports = () => {
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
          Reports
        </h1>
        <p className="text-black/80 text-[20px] text-center font-medium leading-7">
          Data for Smarter Decisions
        </p>
        <p className="text-black/90 text-center text-[16px] font-medium">
          Evidence-based insights to guide your strategy.
        </p>
        <p className="text-black/80 text-center text-[14px] font-normal max-w-3xl mx-auto mt-4">
          Marketing Extension reports provide rigorous, data-driven insights into markets, audiences, and campaigns. Make smarter decisions backed by structured research and analytics.
        </p>
      </div>
      <SplitFeatureCards
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
      />

      {/* Key Features Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-center text-black mb-4 animate-fade-in">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mb-16 text-[16px] animate-fade-in animation-delay-200">
            Turn data into actionable decisions that drive growth and impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-100 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Market Reports</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Comprehensive insights for African and global audiences</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-200 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Performance Analysis</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Campaign performance analyses and benchmarks</p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-300 border border-gray-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Strategic Recommendations</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">Actionable insights for leadership teams</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20">
      <GuidesGrid items={guides} />
      </div>
    </div>
  );
};

export default Reports;

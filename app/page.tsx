"use client";
import Awards from "@/components/awards";
import CaseStudies from "@/components/case-studies";
import ContactSection from "@/components/contact-section";
import FeaturedWins from "@/components/featured-wins";
import Hero from "@/components/hero";
import IndustriesTab from "@/components/industries-tab";
import ProblemsWeSolve from "@/components/problem-row";
import ServicesByStages from "@/components/services-by-stages";
import TeamSection from "@/components/team-section";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
export default function Home() {
  return (
    
    <div className="pt-28 ">
      <Hero />
    <div className="bg-white">
      <FeaturedWins />
    </div>
   <div className="bg-black w-full">
   <ProblemsWeSolve />
   <ServicesByStages />
   <CaseStudies />
   </div>
   <IndustriesTab />
   <TeamSection />
   <WhyChooseUs />
   <Testimonials />
   <Awards />
   <ContactSection />
    </div>
  );
}

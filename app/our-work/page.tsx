"use client";

import { motion } from 'framer-motion';
import { Users, Target, Network, Globe } from 'lucide-react';
import CaseStudyGrid from "@/components/case-study-grid";
import ImpactStatsRow from "@/components/impact-row";
import TrustedByMarquee from "@/components/trusted-by";

const OurWork = () => {
  return (
    <div className="bg-white h-full py-4 flex flex-col gap-5 ">
      <div className="pt-28 space-y-6 px-6 max-w-4xl mx-auto">
        <h1 className="text-center text-black/80 text-[15px] font-bold uppercase tracking-widest">
          Our Work
        </h1>
        <div className="space-y-6 text-center">
          <p className="text-black/80 text-[30px] md:text-4xl font-display font-bold leading-tight">
            We don&apos;t just run campaigns—we build marketing engines
          </p>
          <p className="text-black/90 text-[16px] md:text-lg leading-relaxed max-w-3xl mx-auto">
            At Marketing Extension, we don&apos;t just run campaigns—we build marketing engines. Across Africa and beyond, we partner with ambitious organisations to design, run, and scale marketing systems that deliver measurable outcomes.
          </p>
          <p className="text-black/90 text-[16px] md:text-lg leading-relaxed max-w-3xl mx-auto">
            Our work combines strategy, creative, and technology into one coherent operating model, embedded within our clients&apos; teams. Every engagement is tailored to the client&apos;s stage, market, and ambition—whether it&apos;s launching a fintech, scaling a multi-country payments company, or helping global entrants succeed in Africa.
          </p>
        </div>
        <ImpactStatsRow />
      </div>
    
      <TrustedByMarquee />
      
      {/* Case Studies Section */}
      <div className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-text-dark">
          Case Studies
        </h2>
      <CaseStudyGrid />
      </div>

      {/* What Sets Our Work Apart */}
      <div className="px-6 max-w-6xl mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-text-dark">
          What Sets Our Work Apart
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Users className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-dark group-hover:text-primary transition-colors duration-300">Embedded Partnership</h3>
              <p className="text-text-muted leading-relaxed group-hover:text-text-dark transition-colors duration-300">We sit at the table with leadership, co-owning outcomes.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Target className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-dark group-hover:text-primary transition-colors duration-300">Outcome-Focused</h3>
              <p className="text-text-muted leading-relaxed group-hover:text-text-dark transition-colors duration-300">Every campaign, system, and workflow drives measurable business results.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Network className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-dark group-hover:text-primary transition-colors duration-300">Systemic Approach</h3>
              <p className="text-text-muted leading-relaxed group-hover:text-text-dark transition-colors duration-300">We don&apos;t create fragments; we design repeatable, scalable marketing engines.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Globe className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-dark group-hover:text-primary transition-colors duration-300">Africa-Grounded, Globally Credible</h3>
              <p className="text-text-muted leading-relaxed group-hover:text-text-dark transition-colors duration-300">Deep local insight combined with international best practices.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;

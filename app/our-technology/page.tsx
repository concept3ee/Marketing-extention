"use client";

import { motion } from 'framer-motion';
import { Zap, BarChart3, Globe, TrendingUp, Settings, Repeat, Scale, Eye, Sparkles, Users, Bot, CheckCircle2, ArrowRight } from 'lucide-react';
import ExpertiseSplit from "@/components/expertise-pill"
import PlatformSplitQuad from "@/components/platform-split"
import TrustedByMarquee from "@/components/trusted-by"


const OurTechnology = () => {
  return (
    <div className='bg-white h-full pt-20 flex flex-col gap-5'>
        <div className='space-y-6 pt-12 px-8 max-w-4xl mx-auto'>
            <h1 className='text-black/80 text-[15px] font-medium text-center uppercase tracking-widest'>Our Technology</h1>
            <p className='text-black/80 text-[30px] md:text-4xl text-center font-display font-bold leading-tight'>The Systems Powering Your Creative Edge</p>
            <p className='text-black/90 text-center text-[16px] md:text-lg font-medium leading-relaxed'>Our technology connects people, processes, and creativity into a fully measurable marketing engine.</p>
            
            {/* Capabilities Section */}
            <div className="py-12">
              <h2 className="text-black/80 text-[15px] font-medium text-center uppercase tracking-widest mb-12">Capabilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Zap, text: "Marketing automation & workflows" },
                  { icon: BarChart3, text: "Custom dashboards (adoption, pipeline, revenue, ROI)" },
                  { icon: Globe, text: "Web & product experiences designed for conversion" },
                  { icon: TrendingUp, text: "Analytics platforms to unify data into actionable insights" },
                  { icon: Settings, text: "Tool selection & integration tailored to your business" },
                ].map((capability, idx) => {
                  const Icon = capability.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-black/80 text-[15px] font-semibold leading-relaxed group-hover:text-primary transition-colors duration-300">{capability.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

           <div className="p-20 ">
           <video
              src="/slack.mp4"
              className='w-full h-full object-cover rounded'
              controls
              preload="metadata"
              loop
            />
           </div>
           <TrustedByMarquee/>
        </div>
        <PlatformSplitQuad
        topLeft={{
          kicker: "A BETTER WAY TO WORK",
          title: "Creative workflows are broken, so we built a",
          italicTitle: "better one",
          lead: "Endless email threads. Scattered feedback. Files lost in a black hole. Sound familiar?",
          body:
            "Working with creative partners should speed you up, not slow you down. Superspace is a centralized hub for your projects, assets, and subscription details.",
          ctaText: "Book a demo",
          ctaHref: "#",
        }}
        bottomRight={{
          kicker: "YOUR CREATIVE PROCESS, SUPERCHARGED",
          title: "The platform",
          italicTitle: "built for creative teams like yours",
          lead:
            "Superspace is the engine behind every Superside project. It's built exclusively for our customers to streamline creative collaboration and execution.",
          body:
            "Use it to brief projects, track progress, manage feedback, and integrate it with your existing workflows for seamless, stress-free collaboration.",
          ctaText: "Book a demo",
          ctaHref: "#",
        }}
        topRightImage={{ src: "/workflow.avif", alt: "Laptop dashboard" }}
        bottomLeftImage={{ src: "/mac-image.avif", alt: "Laptop gallery" }}
      />
       <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        {/* How Tech Supports Your Marketing Engine */}
        <div className="max-w-5xl mx-auto py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-black/80 text-[15px] font-medium text-center uppercase tracking-widest mb-12"
          >
            How Tech Supports Your Marketing Engine
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Repeat, text: "Makes campaigns repeatable & measurable" },
              { icon: Scale, text: "Enables scalable execution across markets & teams" },
              { icon: Eye, text: "Provides leadership with real-time insights" },
              { icon: Sparkles, text: "Powers AI-enabled creative production" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-black/80 text-[15px] font-semibold leading-relaxed group-hover:text-primary transition-colors duration-300 pt-1">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Marketing Extension */}
        <div className="max-w-6xl mx-auto py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-black/80 text-[30px] md:text-4xl font-display font-bold text-center mb-12"
          >
            Why Choose Marketing Extension?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, text: "Embedded leadership & execution—you co-own outcomes" },
              { icon: Bot, text: "AI-driven creative advantage—scale faster & smarter" },
              { icon: Settings, text: "Technology-enabled systems—marketing that&apos;s measurable & repeatable" },
              { icon: CheckCircle2, text: "Proven, disciplined delivery—marketing as a true driver of growth" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-black/80 text-[15px] font-semibold leading-relaxed group-hover:text-primary transition-colors duration-300">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-10 py-5 rounded-full font-display font-bold text-lg flex items-center gap-3 mx-auto hover:bg-text-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Build Your Marketing Engine
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Outcome CTA Box */}
        <div className="max-w-4xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-primary rounded-3xl text-center text-white shadow-xl"
          >
            <p className="text-[18px] md:text-[20px] font-display font-bold leading-relaxed">
              Marketing operations that are efficient, accountable, and agile—letting your team focus on strategy and growth.
            </p>
          </motion.div>
        </div>

        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          videoSrc="/slack.mp4"
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
    </div>
  )
}

export default OurTechnology
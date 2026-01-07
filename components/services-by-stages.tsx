
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stages = [
  { 
    id: 'design', 
    label: 'Design Services', 
    title: 'Design experiences that communicate, convert, and scale',
    services: [
      { 
        title: 'Web App Design', 
        desc: 'We design web applications as part of a broader marketing and product system. Our approach starts with understanding the role the application plays in the business: acquisition, onboarding, daily usage, or trust-building. We focus on simplifying complexity and designing flows that reduce cognitive load, guide users toward value, and make the product easier to adopt. Outcomes: Faster user adoption, clearer communication of product value, reduced friction across key user journeys.' 
      },
      { 
        title: 'Mobile App Design', 
        desc: 'We design mobile apps for real usage patterns, balancing usability, performance, and brand credibility — particularly in mobile-first African markets. Our process goes beyond screens to define flows, states, error handling, and edge cases. Mobile design is treated as a critical growth surface supporting onboarding, engagement, retention, and long-term loyalty. Outcomes: Intuitive, trustworthy mobile experiences, stronger engagement and retention, products designed for real-world constraints.' 
      },
      { 
        title: 'Website Design', 
        desc: 'We design websites as core marketing infrastructure — structured systems designed to communicate narrative, build trust, and support demand generation. Our website design work starts with clarity: positioning, messaging, audience intent, and conversion paths. Every website is designed to work hand-in-hand with content engines, CRM systems, analytics, and sales processes. Outcomes: Clear, repeatable storytelling, stronger credibility with customers and partners, websites that actively support growth and sales.' 
      },
      { 
        title: 'Website Redesign', 
        desc: 'We redesign websites when the business has outgrown its current story or structure. Our redesign process is grounded in insight and performance data — assessing what\'s working, what\'s broken, and what the next phase of growth demands. Design decisions are tied to strategy, not trends. The result is a reset of clarity, structure, and effectiveness across the entire digital presence. Outcomes: A site aligned to the company\'s current stage, improved conversion and engagement, renewed confidence in the brand\'s digital presence.' 
      },
      { 
        title: 'Branding', 
        desc: 'We build brand systems designed to scale across teams, products, and markets. Branding at Marketing Extension goes beyond logos and colours — it establishes a shared language, visual logic, and narrative foundation the organisation can grow with. We create consistency without rigidity, defining principles that allow teams to execute confidently while maintaining coherence. Outcomes: Clear, consistent market narrative, stronger internal alignment, brand assets that scale across channels and markets.' 
      },
    ]
  },
  { 
    id: 'development', 
    label: 'Development Services', 
    title: 'Build scalable, reliable, and maintainable technical foundations',
    services: [
      { 
        title: 'Frontend Development', 
        desc: 'We build frontend experiences that translate strategy and design into fast, accessible, and reliable interfaces. Our frontend development focuses on performance, responsiveness, and consistency across devices. Frontend work is treated as a credibility layer — ensuring marketing and product experiences feel polished, intentional, and dependable. Our builds integrate seamlessly with CMS platforms, analytics tools, and automation systems. Outcomes: High-performance, reliable interfaces, consistent experiences across platforms, stronger trust and usability.' 
      },
      { 
        title: 'Backend Development', 
        desc: 'Backend development at Marketing Extension supports scalability, integration, and long-term stability. We design backend systems that can support growth without becoming brittle or overly complex. Our backend work is closely aligned with marketing and data needs — enabling integrations with CRM systems, analytics platforms, automation tools, and content management systems. We prioritise maintainability and clarity. Outcomes: Scalable, stable infrastructure, seamless integration across tools, systems that support long-term growth.' 
      },
      { 
        title: 'Design Systems', 
        desc: 'We create design systems that bring order and speed to execution. A design system defines reusable components, patterns, and rules that align brand, product, and marketing teams around a shared visual and interaction language. Our design systems reduce duplication, improve consistency, and make it easier for teams to ship confidently across websites, products, campaigns, and internal tools. Outcomes: Faster delivery without sacrificing quality, consistent brand and product experiences, reduced friction between design and development.' 
      },
      { 
        title: 'Webflow / CMS Builds', 
        desc: 'We build Webflow and CMS-driven websites that balance flexibility with control. Our CMS builds are structured to support content engines, thought leadership, and ongoing iteration — without breaking design or performance standards. We design CMS architectures that make sense to real teams, allowing content editors to publish confidently while maintaining consistency. Every CMS build is designed as part of a wider marketing operating system. Outcomes: Easy, confident content publishing, scalable website architecture, reduced reliance on developers for everyday updates.' 
      },
    ]
  },
  { 
    id: 'research', 
    label: 'Research Services', 
    title: 'Replace assumptions with evidence',
    services: [
      { 
        title: 'UX Research', 
        desc: 'We use UX research to replace assumptions with evidence. Our research focuses on understanding how users think, decide, and behave — especially in complex or emerging markets. UX research informs design, messaging, onboarding, and prioritisation, ensuring that decisions are grounded in reality and aligned with how people actually experience the product or service. Research outputs are practical and actionable, feeding directly into strategy, design, and execution. Outcomes: Reduced guesswork, better-informed design and marketing decisions, experiences grounded in real user behaviour.' 
      },
    ]
  },
];

const ServicesByStage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <section className="bg-bg-dark pt-32 pb-40 rounded-t-[80px] clipped-bottom">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Our Services</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white max-w-3xl">
            <span className="text-primary">Design, development, and research</span> services built to scale
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`text-left px-6 py-4 rounded-xl font-display font-bold text-xl transition-all duration-300 whitespace-nowrap ${activeStage.id === stage.id ? 'bg-primary text-white scale-105' : 'bg-white/5 text-white/40 hover:text-white'}`}
              >
                {stage.label}
              </button>
            ))}
            <div className="hidden lg:block mt-auto pt-10">
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Explore all services
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-display font-bold text-white mb-12">{activeStage.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  {activeStage.services.map((service, idx) => (
                    <div key={idx} className="p-10 bg-bg-dark hover:bg-white/5 transition-colors group">
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-white/60 mb-8 leading-relaxed">{service.desc}</p>
                      <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                        Explore
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesByStage;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { CaseStudy } from './types';

const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'User Interviews',
    industry: 'Research',
    location: 'Global',
    tags: ['Research', 'Strategy', 'Customer Insights'],
    techStack: 'Structured interviews, Synthesis, Insight mapping',
    timeline: '2-4 weeks',
    image: 'https://picsum.photos/seed/interviews/1200/800',
    description: 'We conduct structured user interviews to uncover insight that teams can act on. Interviews are designed to explore motivations, barriers, expectations, and mental models — not just surface opinions. Our interviews inform positioning, product design, onboarding flows, and messaging. They are synthesised into clear insights that guide decisions across teams. User interviews help leadership reconnect with customers and align teams around shared understanding.',
    results: ['Deeper customer understanding', 'Stronger alignment between teams', 'Clear inputs for strategy and execution']
  },
  {
    id: '2',
    title: 'Usability Testing',
    industry: 'Research',
    location: 'Global',
    tags: ['UX Research', 'Testing', 'Optimization'],
    techStack: 'Task-based testing, Scenario analysis, Friction mapping',
    timeline: '2-3 weeks',
    image: 'https://picsum.photos/seed/usability/1200/800',
    description: 'We run usability testing to identify friction before it becomes costly. Testing focuses on real tasks and real scenarios, revealing where users struggle, hesitate, or drop off. Our usability testing is practical and targeted. Findings are prioritised and translated into clear recommendations that teams can implement quickly. This ensures that products and digital experiences improve continuously, rather than relying on assumptions or delayed feedback.',
    results: ['Improved conversion and task completion', 'Fewer usability issues', 'Smoother, more confident user journeys']
  },
  {
    id: '3',
    title: 'Competitive Analysis',
    industry: 'Research',
    location: 'Global',
    tags: ['Strategy', 'Positioning', 'Market Research'],
    techStack: 'Market mapping, Positioning analysis, Gap identification',
    timeline: '3-4 weeks',
    image: 'https://picsum.photos/seed/competitive/1200/800',
    description: 'We conduct competitive analysis to inform smarter strategic choices — not to copy tactics. Our analysis examines positioning, messaging, experience patterns, and gaps in the market. The goal is to understand where competitors converge, where they differentiate, and where opportunities exist to tell a clearer or more credible story. Competitive insight feeds directly into narrative, product decisions, and go-to-market strategy.',
    results: ['Clearer differentiation', 'Stronger positioning in crowded markets', 'Better strategic trade-offs']
  },
  {
    id: '4',
    title: 'Prototype Validation',
    industry: 'Validation',
    location: 'Global',
    tags: ['Validation', 'Testing', 'Risk Reduction'],
    techStack: 'Prototype testing, User validation, Insight synthesis',
    timeline: '3-5 weeks',
    image: 'https://picsum.photos/seed/prototype/1200/800',
    description: 'We use prototype validation to reduce risk before meaningful time and capital are committed. Rather than assuming a concept works, we test early versions of the product with real users to understand comprehension, usability, and perceived value. Prototype validation focuses on how people interpret the product, where confusion appears, and whether the core proposition resonates. Insights are synthesised into clear recommendations that inform design, scope, and go-to-market decisions. This stage ensures that what gets built is grounded in evidence, not assumptions.',
    results: ['Early confidence in product direction', 'Clear visibility into usability and value gaps', 'Reduced risk before build begins']
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-bg-light pt-32 pb-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Research & Validation</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Replace assumptions with <span className="text-primary">evidence</span> and validation
          </h2>
        </div>

        <div className="space-y-32">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-video rounded-[32px] overflow-hidden group shadow-2xl">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>

              <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex gap-2 mb-6">
                  {cs.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-text-muted uppercase tracking-wider">#{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-4xl font-display font-bold mb-6 text-text-dark">{cs.title}</h3>
                
                {cs.description && (
                  <p className="text-lg text-text-muted leading-relaxed mb-10">{cs.description}</p>
                )}
                
                <div className="flex gap-4 mb-10">
                   <div className="bg-bg-gray px-4 py-2 rounded-lg text-xs font-bold uppercase flex items-center gap-2">
                     <Globe size={14} className="text-primary" /> {cs.location}
                   </div>
                   <div className="bg-bg-gray px-4 py-2 rounded-lg text-xs font-bold uppercase">{cs.industry}</div>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-12">
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Channels & Stack</p>
                    <p className="text-lg font-semibold border-t border-gray-100 pt-4">{cs.techStack}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Timeline</p>
                    <p className="text-lg font-semibold border-t border-gray-100 pt-4">{cs.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Outcome Results</p>
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    {cs.results.map((r, i) => (
                      <p key={i} className="text-lg font-display font-bold flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {r}
                      </p>
                    ))}
                  </div>
                </div>

                <button className="mt-12 w-full lg:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-text-dark transition-all duration-300">
                  Explore full case
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { IndustryExpertise } from './types';


const industries: IndustryExpertise[] = [
  {
    id: 'mvp-scope',
    name: 'MVP Scope Review',
    title: 'Bring discipline to product definition',
    challenges: [
      'Many MVPs fail because they are either too thin to be useful or too bloated to ship',
      'Lack of clear priorities and trade-offs between features',
      'Misalignment between business goals and product delivery'
    ],
    solutions: [
      'A focused, realistic MVP scope',
      'Clear priorities and trade-offs',
      'Alignment between business goals and product delivery'
    ],
    video: 'https://picsum.photos/seed/mvp-scope/800/600'
  },
  {
    id: 'mvp-build',
    name: 'MVP Build',
    title: 'Build MVPs as learning tools, not just early products',
    challenges: [
      'Balancing speed with quality and usability standards',
      'Ensuring MVPs are instrumented to capture feedback and performance',
      'Avoiding unnecessary technical or design debt'
    ],
    solutions: [
      'A functional, credible MVP',
      'Faster learning from real users',
      'A foundation that can evolve into a full product'
    ],
    video: 'https://picsum.photos/seed/mvp-build/800/600'
  },
  {
    id: 'product-build',
    name: 'Product Build',
    title: 'Full product builds for sustained delivery',
    challenges: [
      'Building for robustness, scalability, and integration',
      'Maintaining clarity and usability at scale',
      'Ensuring alignment between product and business strategy'
    ],
    solutions: [
      'Stable, scalable product foundations',
      'Clear alignment between product and business strategy',
      'Reduced rework and long-term complexity'
    ],
    video: 'https://picsum.photos/seed/product-build/800/600'
  },
  {
    id: 'feature-scale',
    name: 'Feature Scale',
    title: 'Support feature scale when products move from early adoption to broader usage',
    challenges: [
      'Extending functionality without introducing fragmentation',
      'Ensuring new features integrate cleanly with existing systems',
      'Maintaining clarity and performance as complexity increases'
    ],
    solutions: [
      'Confident expansion of product capabilities',
      'Features that integrate smoothly into the existing system',
      'Sustained usability as complexity increases'
    ],
    video: 'https://picsum.photos/seed/feature-scale/800/600'
  },
  {
    id: 'performance',
    name: 'Performance',
    title: 'Focus on performance as a core part of scale',
    challenges: [
      'Products must remain fast, reliable, and resilient as usage grows',
      'Preventing growth from degrading the experience or eroding trust',
      'Evaluating load times, responsiveness, and stability under real conditions'
    ],
    solutions: [
      'Faster, more reliable product experiences',
      'Reduced risk under increased usage',
      'Stronger trust with users and stakeholders'
    ],
    video: 'https://picsum.photos/seed/performance/800/600'
  },
  {
    id: 'qa',
    name: 'QA (Quality Assurance)',
    title: 'QA as a safeguard for consistency and confidence',
    challenges: [
      'Ensuring products behave as expected across devices, environments, and scenarios',
      'Focusing on critical paths, edge cases, and regression risks',
      'Maintaining high standards as velocity increases'
    ],
    solutions: [
      'Fewer bugs and release issues',
      'More predictable launches',
      'Increased confidence in product delivery'
    ],
    video: 'https://picsum.photos/seed/qa/800/600'
  },
  {
    id: 'saas',
    name: 'SaaS',
    title: 'Turn marketing into a disciplined growth engine',
    challenges: [
      'SaaS marketing breaks down when narrative, product, and demand generation operate in silos',
      'Clarifying positioning and defining ICPs in crowded categories',
      'Ensuring marketing is instrumented, accountable, and continuously improving'
    ],
    solutions: [
      'Clear positioning in crowded categories',
      'Stronger product adoption and activation',
      'Predictable, measurable pipeline growth'
    ],
    video: 'https://picsum.photos/seed/saas/800/600'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'Design marketing systems that balance growth with credibility and regulation',
    challenges: [
      'Balancing growth with credibility, regulation, and patient confidence',
      'Communicating complex services simply while respecting compliance',
      'Building trust, consistency, and long-term reputation'
    ],
    solutions: [
      'Stronger trust with patients and partners',
      'Clear communication of complex offerings',
      'Sustainable growth without reputational risk'
    ],
    video: 'https://picsum.photos/seed/healthcare/800/600'
  },
  {
    id: 'fintech',
    name: 'Fintech',
    title: 'Build marketing engines that support growth while reinforcing credibility',
    challenges: [
      'Supporting user growth while reinforcing credibility with regulators and partners',
      'Reducing friction in onboarding and supporting long-term usage',
      'Navigating complexity while holding work to global standards'
    ],
    solutions: [
      'Faster user adoption built on trust',
      'Clear, regulator-aware market narratives',
      'Marketing systems that scale across countries'
    ],
    video: 'https://picsum.photos/seed/fintech/800/600'
  },
  {
    id: 'edtech',
    name: 'EdTech',
    title: 'Design marketing systems that communicate value to diverse audiences',
    challenges: [
      'Communicating value to learners, parents, institutions, and partners simultaneously',
      'Aligning product value with learner outcomes',
      'Designing systems that feel credible, accessible, and purpose-driven'
    ],
    solutions: [
      'Clear articulation of learning value and outcomes',
      'Stronger engagement and retention',
      'Scalable growth across diverse audiences'
    ],
    video: 'https://picsum.photos/seed/edtech/800/600'
  }
];

const descriptions: Record<string, string> = {
  'mvp-scope': 'We conduct MVP scope reviews to bring discipline to product definition. Many MVPs fail because they are either too thin to be useful or too bloated to ship. Our role is to help teams define what actually needs to be built to validate the product and support early growth. The scope review evaluates features, user journeys, technical complexity, and business priorities. We help teams make deliberate trade-offs, ensuring the MVP supports learning, adoption, and future scale. This creates a shared understanding across product, marketing, and leadership before execution begins.',
  'mvp-build': 'We build MVPs as learning tools, not just early products. Our MVP builds are designed to test assumptions, support early users, and generate insight — while still meeting quality and usability standards. The build process integrates design, development, and measurement from the start. We ensure the MVP is instrumented to capture feedback and performance, allowing teams to learn quickly and iterate with confidence. This approach balances speed with discipline, enabling faster movement without accumulating unnecessary technical or design debt.',
  'product-build': 'We support full product builds for organisations ready to move beyond validation into sustained delivery. Product build focuses on robustness, scalability, and integration across systems — while maintaining clarity and usability. Our product builds are guided by clear operating assumptions: defined users, prioritised features, and measurable outcomes. We work closely with stakeholders to ensure the product aligns with broader business and marketing systems. The result is a product that is built to last, adapt, and grow.',
  'feature-scale': 'We support feature scale when products move from early adoption to broader usage. This involves extending functionality, refining workflows, and ensuring new features integrate cleanly with existing systems. Feature scaling is handled deliberately. We assess impact, dependencies, and user experience before expanding scope, ensuring growth does not introduce fragmentation or confusion. This allows products to evolve without losing clarity or performance.',
  'performance': 'We focus on performance as a core part of scale. As usage grows, products must remain fast, reliable, and resilient. Our performance work evaluates load times, responsiveness, stability, and system behaviour under real conditions. Performance improvements are prioritised based on user impact and business risk. We ensure that growth does not degrade the experience or erode trust. This work protects credibility as the product and user base expand.',
  'qa': 'We approach QA as a safeguard for consistency and confidence. Quality assurance ensures that products behave as expected across devices, environments, and user scenarios. Our QA process focuses on critical paths, edge cases, and regression risks. Issues are documented clearly and resolved systematically, reducing surprises during launches or updates. QA supports disciplined shipping and helps teams maintain high standards as velocity increases.',
  'saas': 'We work with SaaS companies to turn marketing into a disciplined growth engine that supports acquisition, activation, and retention — not just lead volume. SaaS marketing breaks down when narrative, product, and demand generation operate in silos. Our role is to bring them into one coherent system. We help SaaS teams clarify positioning, define ICPs, and design go-to-market strategies that reflect how buyers actually evaluate software. From website and product-led journeys to content engines, onboarding flows, and lifecycle campaigns, everything is designed to support measurable growth. Our work is deeply integrated with product, sales, and data. We ensure marketing is instrumented, accountable, and continuously improving as the business scales across markets.',
  'healthcare': 'Healthcare marketing requires precision, trust, and responsibility. We work with healthcare organisations to design marketing systems that balance growth with credibility, regulation, and patient confidence. Our approach focuses on clarity and integrity. We help healthcare brands communicate complex services simply, design credible digital experiences, and build content and education systems that inform rather than exaggerate. Where regulation and compliance matter, we design processes that respect constraints without slowing execution. Marketing in healthcare is not about noise — it\'s about trust, consistency, and long-term reputation. We build systems that support that reality.',
  'fintech': 'Fintech marketing lives at the intersection of trust, adoption, and scale. We work with fintech companies to build marketing engines that support user growth while reinforcing credibility with regulators, partners, and the market. Our work spans positioning, narrative, product education, and demand systems — ensuring users understand not just what the product does, but why it is safe, reliable, and valuable. We design experiences and content that reduce friction in onboarding and support long-term usage. With deep experience across African fintech markets, we help teams navigate complexity while holding work to global standards.',
  'edtech': 'EdTech marketing requires empathy, clarity, and proof. We work with education and learning platforms to design marketing systems that communicate value to learners, parents, institutions, and partners — often simultaneously. Our approach focuses on aligning product value with learner outcomes. We help EdTech teams articulate impact, design onboarding and engagement journeys, and build content engines that support acquisition and retention over time. Whether the audience is individuals, schools, or enterprises, we design marketing systems that feel credible, accessible, and purpose-driven.'
};

const IndustriesTabs: React.FC = () => {
  const [active, setActive] = useState(industries[0]);

  return (
    <section className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Our Services & Expertise</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            From build to scale, across <span className="text-primary">industries</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-16 pb-4 border-b border-gray-100">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${active.id === ind.id ? 'bg-text-dark text-white' : 'bg-bg-gray text-text-muted hover:bg-bg-gray/80'}`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-bg-gray relative group">
              <img src={active.video} alt={active.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                <p className="text-white font-display text-2xl font-bold">{active.name}</p>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-display font-bold mb-6 text-text-dark">{active.title}</h3>
              
              {descriptions[active.id] && (
                <p className="text-lg text-text-muted leading-relaxed mb-12">{descriptions[active.id]}</p>
              )}
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase mb-6 tracking-widest">
                    <AlertCircle size={14} /> What we address
                  </div>
                  <ul className="space-y-4">
                    {active.challenges.map((c, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary/20">{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-6 tracking-widest">
                    <CheckCircle2 size={14} /> Outcomes
                  </div>
                  <ul className="space-y-4">
                    {active.solutions.map((s, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-text-dark transition-all duration-300">
                Learn more about {active.name}
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustriesTabs;

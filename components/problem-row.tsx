
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const ProblemRow: React.FC<{
  num: number;
  question: string;
  solution: string;
  cta: string;
  image: string;
}> = ({ num, question, solution, cta, image }) => (
  <div className="sticky top-0 h-screen flex items-center bg-white border-t border-gray-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-16 items-center py-20">
        <div className="lg:pr-10">
          <span className="text-primary font-bold text-4xl mb-6 block font-display">0{num}</span>
          <h3 className="text-3xl font-display font-bold leading-tight text-text-dark">{question}</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          <p className="text-lg text-text-muted leading-relaxed">{solution}</p>
          <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-300">
            {cta}
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="relative group rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <img src={image} alt="Process" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
              <Play size={24} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProblemsWeSolve: React.FC = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Header Section */}
      <div className="sticky top-0 h-screen flex items-center bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-dark mb-6">
              From MVP to Market Domination
            </h2>
            <p className="text-xl text-text-muted leading-relaxed">
              Design and development solutions built to scale with your startup.
            </p>
          </div>
        </div>
      </div>

      <ProblemRow 
        num={1}
        question="Product Design"
        solution="UI/UX strategy, wireframes, and prototyping. Human-centered design for adoption and retention."
        cta="Explore design services"
        image="https://picsum.photos/seed/design/600/400"
      />
      <ProblemRow 
        num={2}
        question="Product Development"
        solution="Front-end, back-end, and full-stack solutions. Scalable, maintainable, and high-performance code."
        cta="See development work"
        image="https://picsum.photos/seed/development/600/400"
      />
      <ProblemRow 
        num={3}
        question="Launch & Growth Support"
        solution="MVP launches, feature scaling, and iterations. Analytics, dashboards, and performance tracking."
        cta="Get growth support"
        image="https://picsum.photos/seed/growth/600/400"
      />

      {/* Outcome Section */}
      <div className="sticky top-0 h-screen flex items-center bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-text-dark mb-6">
              Your startup launches faster, delights users, and grows revenue predictably.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;

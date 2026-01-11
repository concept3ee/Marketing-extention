
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'technology') => void;
  headerTone?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, headerTone = 'dark' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Resources', id: 'resources' },
    { label: 'Cases', id: 'cases', noMega: true },
    { label: 'Insights', id: 'insights', noMega: true },
  ];

  const handleNavClick = (page: 'home' | 'technology') => {
    onNavigate?.(page);
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  // We need dark text on light backgrounds (scrolled OR light-toned pages)
  const isLightMode = scrolled || activeMenu || headerTone === 'light';
  const textColor = isLightMode ? 'text-text-dark' : 'text-white';
  const headerBg = (scrolled || activeMenu) ? 'bg-bg-light shadow-sm py-4' : 'bg-transparent py-6';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${headerBg}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group outline-none">
            <div className="relative w-8 h-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
               {/* Phenomenon-style ring logo */}
               <div className="absolute inset-0 border-[6px] border-primary rounded-full shadow-lg shadow-primary/20" />
               <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${textColor}`}>
              Marketing Extension
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative py-2"
                onMouseEnter={() => !item.noMega && setActiveMenu(item.id)}
              >
                {item.id === 'cases' ? (
                  <Link href="/pricing" className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${
                    activeMenu === item.id ? 'text-primary' : textColor
                  } hover:text-primary`}>
                    {item.label}
                  </Link>
                ) : item.id === 'insights' ? (
                  <Link href="/blog" className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${
                    activeMenu === item.id ? 'text-primary' : textColor
                  } hover:text-primary`}>
                    {item.label}
                  </Link>
                ) : (
                  <button className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${
                    activeMenu === item.id ? 'text-primary' : textColor
                  } hover:text-primary`}>
                    {item.label}
                    {!item.noMega && (
                      <motion.span 
                        animate={{ rotate: activeMenu === item.id ? 180 : 0 }}
                        className="ml-0.5 opacity-50"
                      >
                        <ChevronRight size={14} className="rotate-90" />
                      </motion.span>
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
              isLightMode ? 'bg-text-dark text-white hover:bg-primary shadow-lg shadow-black/5' : 'bg-white text-text-dark hover:bg-primary hover:text-white shadow-lg'
            }`}>
              Book a strategy call
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors duration-300 ${mobileMenuOpen ? 'text-text-dark' : textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mega Menus Container */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="container mx-auto px-6 max-w-7xl py-12">
                {activeMenu === 'services' && <ServicesMega />}
                {activeMenu === 'industries' && <IndustriesMega />}
                {activeMenu === 'why-us' && <WhyUsMega />}
                {activeMenu === 'resources' && <ResourcesMega />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Backdrop */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[90] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[72px] bg-bg-light z-[99] lg:hidden overflow-y-auto px-6 py-10"
          >
             <div className="flex flex-col gap-6">
                {menuItems.map(item => (
                   item.id === 'cases' ? (
                     <Link key={item.id} href="/pricing" className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between">
                        {item.label} <ChevronRight size={20} className="text-primary" />
                     </Link>
                   ) : item.id === 'insights' ? (
                     <Link key={item.id} href="/blog" className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between">
                        {item.label} <ChevronRight size={20} className="text-primary" />
                     </Link>
                   ) : (
                     <button key={item.id} className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between">
                        {item.label} <ChevronRight size={20} className="text-primary" />
                     </button>
                   )
                ))}
                <button onClick={() => handleNavClick('technology')} className="text-2xl font-display font-bold text-left text-primary flex items-center justify-between">
                   Our Technology <ArrowRight size={20} />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* --- MEGA MENU COMPONENTS --- */

const ServicesMega = () => {
  const [activeTab, setActiveTab] = useState('marketing-consulting');
  
  const pillars = [
    { id: 'marketing-consulting', label: 'Marketing Consulting', items: ['GTM strategy & launch planning', 'Positioning & messaging architecture', 'Campaign strategy & channel mix', 'Audience & market research', 'Product marketing playbooks'], img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
    { id: 'contentplus', label: 'ContentPlus', items: ['Thought-leadership & long-form', 'Landing page & website copy', 'Lifecycle & email content', 'Social & community content', 'Content repurposing sprints'], img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800' },
    { id: 'martech-studio', label: 'Martech Studio', items: ['Marketing automation & CRM', 'Funnel & attribution tracking', 'Analytics dashboards & reporting', 'Experimentation & CRO', 'Tool evaluation & setup'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 'engagement-models', label: 'Engagement Models', items: ['Fractional CMO & strategy pods', 'Sprint-based project teams', 'Ongoing "extension" pod', 'Plug-in specialist support'], img: 'https://images.unsplash.com/photo-1522071823991-b5ae7264040e?auto=format&fit=crop&q=80&w=800' },
  ];

  const active = pillars.find(p => p.id === activeTab)!;

  return (
    <div className="grid grid-cols-[250px_1fr_400px] gap-12">
      <div className="border-r border-gray-100 pr-12 flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Core Pillars</p>
        {pillars.map(p => (
          <button 
            key={p.id}
            onMouseEnter={() => setActiveTab(p.id)}
            className={`text-left py-3 px-4 rounded-xl font-display font-bold text-lg transition-all ${
              activeTab === p.id ? 'bg-bg-gray text-primary translate-x-2' : 'text-text-muted hover:text-text-dark'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-display font-bold mb-8 text-text-dark">{active.label}</h3>
        <ul className="grid grid-cols-1 gap-4">
          {active.items.map(item => (
            <li key={item} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <span className="text-lg font-medium text-text-muted group-hover:text-text-dark transition-colors">{item}</span>
            </li>
          ))}
        </ul>
        <button className="mt-10 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
          Explore all services <ArrowRight size={14} />
        </button>
      </div>

      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-bg-gray shadow-xl">
        <motion.img 
          key={activeTab}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={active.img} 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

const IndustriesMega = () => {
  const buckets = [
    { label: "Financial Innovation", desc: "FinTech & Payments • Crypto & Web3 • Betting & Gaming" },
    { label: "Risk, Reg & Enterprise SaaS", desc: "RegTech & Cyber • B2B SaaS • IT Outsourcing" },
    { label: "People & Talent", desc: "Talent Platforms • HR Tech • EdTech" },
    { label: "Consumer & Commerce", desc: "Consumer / FMCG • Retail • E-Commerce" },
    { label: "Mobility & Built World", desc: "Mobility & Transport • Real Estate • Design" },
  ];

  return (
    <div className="grid grid-cols-[300px_1fr_400px] gap-12">
      <div className="bg-bg-gray p-8 rounded-2xl flex flex-col justify-between border border-gray-100">
        <div>
          <h3 className="text-2xl font-display font-bold text-text-dark mb-4 leading-tight">Ready to grow in complex markets?</h3>
          <p className="text-sm text-text-muted leading-relaxed">Marketing Extension helps B2B and tech brands turn complexity into momentum.</p>
        </div>
        <button className="bg-primary text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-text-dark transition-all">
          Let&apos;s talk <ArrowRight size={16} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {buckets.map(b => (
          <a key={b.label} href="#" className="group p-4 rounded-2xl hover:bg-bg-gray transition-all border border-transparent hover:border-gray-100">
            <p className="text-lg font-display font-bold text-text-dark group-hover:text-primary transition-colors">{b.label}</p>
            <p className="text-sm text-text-muted">{b.desc}</p>
          </a>
        ))}
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-bg-gray shadow-xl">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
          <p className="text-white font-display font-bold text-xl uppercase tracking-widest">Industry Landscape</p>
        </div>
      </div>
    </div>
  );
};

const WhyUsMega = () => {
  const cards = [
    { id: 'talent', title: 'Our strategic talent', desc: 'A distributed team of senior strategists and specialists plugged directly into your roadmap.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',href: '/our-creative-talent' },
    { id: 'ai', title: 'AI + Human excellence', desc: 'We combine human creativity with AI discipline to move faster—from insight to campaign.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',href: '/ai-excellence' },
    { id: 'technology', title: 'Our technology', desc: 'A lightweight operating system for marketing: shared workspaces and playbooks built around your stack.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',href: '/our-technology' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map(card => (
        <Link 
          key={card.id} 
          href={card.href}
          className="group text-left flex flex-col overflow-hidden rounded-[32px] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="p-8 bg-white flex-1">
            <h4 className="text-xl font-display font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">{card.title}</h4>
            <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
            <span className="mt-6 text-xs font-bold uppercase text-primary inline-flex items-center gap-2">Learn more <ArrowRight size={14} /></span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const ResourcesMega = () => {
  const items = [
    { label: 'Learning Center', desc: 'Live sessions with operators', icon: true, href: '/learning-center' },
    { label: 'Guides', desc: 'Playbooks from leaders', href: '/guides' },
    { label: 'Reports', desc: 'Data for smarter decisions', href: '/reports' },
    { label: 'Video Library', desc: 'Deep dives and breakdowns', href: '/video' },
    { label: 'Playbooks', desc: 'Hands-on frameworks', href: '/play-book' },
  ];

  return (
    <div className="grid grid-cols-[280px_1fr] gap-16">
      <div className="border-r border-gray-100 pr-16">
        <h4 className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
          MX Resources <ExternalLink size={12} />
        </h4>
        <ul className="flex flex-col gap-6">
          {items.map(item => (
            <li key={item.label}>
              <Link href={item.href || '#'} className="group block">
                <p className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors flex items-center justify-between">
                  {item.label} {item.icon && <span className="text-[10px]">↗</span>}
                </p>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <a href="#" className="group relative rounded-3xl overflow-hidden bg-bg-gray aspect-[16/9] col-span-2 md:col-span-1 shadow-md">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-2 bg-primary w-fit px-2 py-0.5 rounded">Featured Blog</span>
            <p className="text-xl font-display font-bold text-white">The 2025 B2B GTM Playbook for Complex Markets</p>
          </div>
        </a>
        <a href="#" className="group relative rounded-3xl overflow-hidden bg-bg-gray aspect-[16/9] shadow-md">
          <img src="https://images.unsplash.com/photo-1557426272-fc759fbbad95?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Customer Story</span>
            <p className="text-lg font-display font-bold text-white">How Lumify Scaled Growth 3x</p>
          </div>
        </a>
        <a href="#" className="group relative rounded-3xl overflow-hidden bg-bg-gray aspect-[16/9] shadow-md">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Updates</span>
            <p className="text-lg font-display font-bold text-white">New in MarTech Studio Q2</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;

"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const BlogPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const tableOfContents = [
    { id: "best-practices", label: "About Marketing Extension" },
    { id: "top-10-generators", label: "Growth Marketing-as-a-Service (GMaaS)" },
    { id: "superside", label: "Tone of Voice" },
    { id: "adcreative", label: "Tagline" },
    { id: "narrato", label: "Logo System" },
    { id: "invideo", label: "Clear Space and Scaling" },
    { id: "creaty", label: "Color Palette" },
    { id: "recreate", label: "Typography" },
    { id: "pencil", label: "Iconography" },
    { id: "adflow", label: "Stationery" },
    { id: "predis", label: "Media Identity" },
    { id: "quickads", label: "Patterns and Brand Elements" },
    { id: "faqs", label: "FAQs" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const tocIds = tableOfContents.map((item) => item.id);
    tocIds.forEach((id) => {
      const element = sectionRefs.current[id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-[42px] md:text-[48px] font-bold text-black mb-4 leading-tight">
            Marketing Extension Brand Overview
          </h1>
          
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">RM</span>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                By <span className="font-semibold">Marketing Extension</span> Brand Team
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:col-span-3">
            <div className="bg-[#c8e6c9] rounded-lg p-6 sticky top-32">
              <h2 className="text-sm font-bold text-black uppercase mb-4 tracking-wide">
                TABLE OF CONTENTS
              </h2>
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li
                    key={index}
                    className={`text-sm cursor-pointer transition-colors ${
                      activeSection === item.id
                        ? "text-black font-semibold"
                        : "text-gray-700 hover:text-black"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>

              {/* Social Media Icons at Bottom */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-300">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </aside>

          {/* Center Content */}
          <main className="lg:col-span-6">
            {/* Main Image */}
            <div className="mb-8">
              <div className="relative w-full h-[500px] bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/mac-image.avif"
                  alt="Marketing Extension Brand Overview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              {/* TL;DR Section */}
              <div className="bg-gray-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">TL;DR</h3>
                <p className="text-gray-700 leading-relaxed">
                  Marketing Extension helps businesses drive measurable progress through Growth Marketing-as-a-Service. We combine strategic consulting, on-demand talent, and execution support delivered fast, flexibly, and affordably.
                </p>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Marketing Extension is a consulting and outsourcing partner that helps businesses use marketing to drive meaningful, measurable progress.
                </p>

                <p>
                  We offer strategic direction, build high-performing teams, and execute tailored campaigns through a network of Africa&apos;s top marketing talent.
                </p>

                <p>
                  Our model, Growth Marketing-as-a-Service (GMaaS), combines consulting, on-demand talent, and execution support delivered fast, flexibly, and affordably.
                </p>

                <p>
                  This overview outlines our brand voice, visual system, and the standards that keep our work consistent across touchpoints.
                </p>
              </div>

              {/* IN THIS ARTICLE Section */}
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">IN THIS ARTICLE</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>About Marketing Extension</li>
                  <li>Growth Marketing-as-a-Service (GMaaS)</li>
                  <li>Tone of Voice</li>
                  <li>Tagline</li>
                  <li>Logo System</li>
                  <li>Clear Space and Scaling</li>
                </ul>
              </div>

              {/* Section: Best Practices */}
              <section
                id="best-practices"
                ref={(el) => {
                  sectionRefs.current["best-practices"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">
                  About Marketing Extension
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Marketing Extension is a consulting and outsourcing company that helps businesses use marketing to drive meaningful, measurable progress.
                  </p>
                  <p>
                    We provide strategic direction, build high-performing teams, and execute tailored campaigns through a network of Africa&apos;s top marketing talent. Whether you need short-term support or full-scale leadership, we deliver clarity, people, and execution to help you compete and grow with confidence.
                  </p>
                </div>
              </section>

              {/* Section: Top 10 Generators */}
              <section
                id="top-10-generators"
                ref={(el) => {
                  sectionRefs.current["top-10-generators"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">
                  Growth Marketing-as-a-Service (GMaaS)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Marketing Extension is defining a new category: Growth Marketing-as-a-Service. It combines strategic consulting, on-demand talent, and execution support delivered fast, flexibly, and affordably.
                </p>
              </section>

              {/* Section: Superside */}
              <section
                id="superside"
                ref={(el) => {
                  sectionRefs.current["superside"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Tone of Voice</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our voice is confident, clear, and fresh. We stay formal without being stiff and casual without being sloppy. We are confident, not cocky.
                  </p>
                  <p>
                    We choose words that are corporate and clear, avoiding forced language. The goal is clarity, trust, and momentum.
                  </p>
                </div>
              </section>

              {/* Section: AdCreative.ai */}
              <section
                id="adcreative"
                ref={(el) => {
                  sectionRefs.current["adcreative"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Tagline</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Let&apos;s Fix Your Marketing. For Real.
                  </p>
                  <p>
                    Use the tagline to reinforce our promise of clarity, execution, and measurable progress.
                  </p>
                </div>
              </section>

              {/* Section: Narrato */}
              <section
                id="narrato"
                ref={(el) => {
                  sectionRefs.current["narrato"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Logo System</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Use the masterbrand logo whenever possible. If the horizontal mark is not viable, the vertical variation can be used instead.
                  </p>
                  <p>
                    Keep the logo intact, legible, and consistent across formats to reinforce recognition.
                  </p>
                </div>
              </section>

              {/* Section: InVideo */}
              <section
                id="invideo"
                ref={(el) => {
                  sectionRefs.current["invideo"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Clear Space and Scaling</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Maintain clear space around the logo for instant recognition and readability. Avoid clutter and preserve visual balance.
                  </p>
                  <p>
                    Scale the logo proportionately across sizes and mediums to maintain its integrity.
                  </p>
                </div>
              </section>

              {/* Section: Creaty */}
              <section
                id="creaty"
                ref={(el) => {
                  sectionRefs.current["creaty"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Color Palette</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our palette pairs sophisticated greys with vibrant orange and brown accents to express audacity and boldness.
                  </p>
                  <p>
                    Use the core colors consistently across materials to build recognition and cohesion.
                  </p>
                </div>
              </section>

              {/* Section: Recreate */}
              <section
                id="recreate"
                ref={(el) => {
                  sectionRefs.current["recreate"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Typography</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Neue Kabel is our primary typeface and Windsor Pro is the secondary face. Typography hierarchy guides attention and improves readability.
                  </p>
                  <p>
                    Use font weights and sizes consistently to reinforce clarity and professionalism.
                  </p>
                </div>
              </section>

              {/* Section: Pencil */}
              <section
                id="pencil"
                ref={(el) => {
                  sectionRefs.current["pencil"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Iconography</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Icons should be simple, consistent, and easy to recognize. They help communicate quickly and reinforce the brand system across touchpoints.
                  </p>
                </div>
              </section>

              {/* Section: Adflow by Pixlet */}
              <section
                id="adflow"
                ref={(el) => {
                  sectionRefs.current["adflow"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Stationery</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Business cards and stationery follow the core logo, color, and typography rules to ensure consistency across physical touchpoints.
                  </p>
                </div>
              </section>

              {/* Section: Predis */}
              <section
                id="predis"
                ref={(el) => {
                  sectionRefs.current["predis"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Media Identity</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Social templates, favicons, and digital assets should use the logo and color palette consistently to strengthen recognition.
                  </p>
                  <p>
                    Keep layouts clean and clear to reflect our confident, corporate tone.
                  </p>
                </div>
              </section>

              {/* Section: Quickads */}
              <section
                id="quickads"
                ref={(el) => {
                  sectionRefs.current["quickads"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">Patterns and Brand Elements</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Use approved patterns and brand elements to add texture and consistency across materials without overpowering the message.
                  </p>
                </div>
              </section>

              {/* Section: FAQs */}
              <section
                id="faqs"
                ref={(el) => {
                  sectionRefs.current["faqs"] = el;
                }}
                className="mt-16 mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-black mb-6">FAQs</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-black mb-2">What is Growth Marketing-as-a-Service (GMaaS)?</h3>
                    <p>
                      GMaaS is our hybrid model that combines strategic consulting, on-demand talent, and execution support delivered fast, flexibly, and affordably.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">How should we use the Marketing Extension logo?</h3>
                    <p>
                      Use the masterbrand logo whenever possible, preserve clear space, and avoid distortion or color changes. Keep the mark legible and consistent across formats.
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </main>

          {/* Right Sidebar - Advertisement */}
          <aside className="lg:col-span-3">
            <div className="bg-[#1a3d0e] rounded-lg p-6 sticky top-32">
              <div className="mb-6">
                <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/mac-image.avif"
                    alt="Marketing Extension"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Need clarity in marketing?
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Strategy, talent, and execution delivered fast.
                </p>
              </div>
              <button className="w-full bg-[#4caf50] hover:bg-[#45a049] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300">
                Start a strategy call
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

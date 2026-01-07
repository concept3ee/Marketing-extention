"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const BlogPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const tableOfContents = [
    { id: "best-practices", label: "Best practices for creating effective AI-generated ads" },
    { id: "top-10-generators", label: "10 best AI ad creative generators in 2026" },
    { id: "superside", label: "1. Superside" },
    { id: "adcreative", label: "2. AdCreative.ai" },
    { id: "narrato", label: "3. Narrato" },
    { id: "invideo", label: "4. InVideo" },
    { id: "creaty", label: "5. Creaty" },
    { id: "recreate", label: "6. Recreate" },
    { id: "pencil", label: "7. Pencil" },
    { id: "adflow", label: "8. Adflow by Pixlet" },
    { id: "predis", label: "9. Predis" },
    { id: "quickads", label: "10. Quickads" },
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
            10 Best AI Ad Creative Generators & Tools in 2026 (Tested)
          </h1>
          
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">RM</span>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                By <span className="font-semibold">Roger Match</span> Content Marketer
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
                  alt="AI Ad Creative Generators"
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
                  Artificial Intelligence (AI) is adding a powerful edge to every aspect of marketing—and ad creative is no exception. With the proliferation of AI ad creative generators, all promising to squash turnaround times and maximize impact on advertising efforts, how do you even begin to find a tool that&apos;s right for you? Right here, with Superside&apos;s list of the top 10 generators.
                </p>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  AI ad generators are becoming indispensable artillery in the modern marketer&apos;s toolkit, enabling brands to conceptualize, test and optimize ad accounts with distinctive visual assets and compelling ad copy variations at a pace that leaves traditional methods eating their dust.
                </p>

                <p>
                  According to a 2023 survey by McKinsey, organizations that have already embedded AI capabilities are going all in on artificial intelligence, with Marketing and sales being the most reported uses.
                </p>

                <p>
                  While 2023 was the breakout year for generative AI, 2026 brings scalability in AI technologies for companies & marketing departments. Superside&apos;s AI design services have completed 4000+ AI-powered projects, saving our customers over $14 million and cutting delivery time in half.
                </p>

                <p>
                  Of course, not all AI ad production capabilities are created equal. Read on to discover the right AI ad creative builder for your business.
                </p>
              </div>

              {/* IN THIS ARTICLE Section */}
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">IN THIS ARTICLE</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Best practices for creating effective AI-generated ads</li>
                  <li>10 best AI ad creative generators in 2026</li>
                  <li>1. Superside</li>
                  <li>2. AdCreative.ai</li>
                  <li>3. Narrato</li>
                  <li>4. InVideo</li>
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
                  Best practices for creating effective AI-generated ads
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Creating effective AI-generated ads requires a strategic approach. Start by defining clear objectives and understanding your target audience. Use high-quality input prompts that are specific and detailed to get the best results from AI tools.
                  </p>
                  <p>
                    Always review and refine AI-generated content to ensure it aligns with your brand voice and messaging. Test different variations and analyze performance metrics to continuously improve your ad creatives.
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
                  10 best AI ad creative generators in 2026
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Here are the top AI ad creative generators that are making waves in 2026, each offering unique features and capabilities to help you create compelling ad content.
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
                <h2 className="text-3xl font-bold text-black mb-6">1. Superside</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Superside is a leading AI-powered design platform that combines human creativity with AI efficiency. With over 4000+ AI-powered projects completed, Superside has saved customers over $14 million and cut delivery time in half.
                  </p>
                  <p>
                    The platform offers comprehensive ad creative generation, from concept to final execution, with a focus on quality and brand consistency.
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
                <h2 className="text-3xl font-bold text-black mb-6">2. AdCreative.ai</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    AdCreative.ai specializes in generating high-converting ad creatives using advanced AI algorithms. The platform analyzes your brand and creates multiple ad variations optimized for different platforms and audiences.
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
                <h2 className="text-3xl font-bold text-black mb-6">3. Narrato</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Narrato offers AI-powered content creation tools that help marketers create engaging ad copy and visuals. The platform focuses on storytelling and narrative-driven ad creatives.
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
                <h2 className="text-3xl font-bold text-black mb-6">4. InVideo</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    InVideo is a powerful video ad creation platform that uses AI to help you create professional video ads quickly. The platform offers templates, automated editing, and AI-powered suggestions for better engagement.
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
                <h2 className="text-3xl font-bold text-black mb-6">5. Creaty</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Creaty provides AI-driven creative solutions for digital advertising, focusing on visual ad creation and optimization across multiple channels.
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
                <h2 className="text-3xl font-bold text-black mb-6">6. Recreate</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Recreate uses AI to transform existing content into new ad creatives, helping brands repurpose their assets efficiently while maintaining brand consistency.
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
                <h2 className="text-3xl font-bold text-black mb-6">7. Pencil</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Pencil offers AI-powered ad creation with a focus on performance optimization. The platform generates multiple ad variations and tests them to find the best-performing creatives.
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
                <h2 className="text-3xl font-bold text-black mb-6">8. Adflow by Pixlet</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Adflow by Pixlet provides automated ad creation workflows, helping teams scale their ad production while maintaining quality and brand standards.
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
                <h2 className="text-3xl font-bold text-black mb-6">9. Predis</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Predis leverages AI to create predictive ad creatives that are optimized for future performance, using data-driven insights to inform creative decisions.
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
                <h2 className="text-3xl font-bold text-black mb-6">10. Quickads</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Quickads focuses on speed and efficiency, using AI to generate ad creatives in minutes. The platform is ideal for teams that need to create multiple ad variations quickly.
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
                    <h3 className="font-semibold text-black mb-2">What are AI ad creative generators?</h3>
                    <p>
                      AI ad creative generators are tools that use artificial intelligence to create advertising content, including visuals, copy, and video ads, helping marketers produce content faster and more efficiently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">How do I choose the right AI ad generator?</h3>
                    <p>
                      Consider factors such as your specific needs, budget, integration capabilities, and the quality of output. Evaluate each tool&apos;s features, pricing, and customer reviews to find the best fit for your business.
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
                    alt="AI Excellence"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Notice the brilliance
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Discover the speed
                </p>
              </div>
              <button className="w-full bg-[#4caf50] hover:bg-[#45a049] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300">
                Achieve AI excellence
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


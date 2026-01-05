/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import IndustriesMegaMenu from "./industries-menu";
import WhyUsMegaMenu from "./why-us-mega-menu";
import ServicesMegaMenu from "./service-mega-menu";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const RESOURCES = "RESOURCES";
const INDUSTRIES = "INDUSTRIES";

const WHY_US = "WHY US";
const SERVICES = "SERVICES";

const servicesGroups = [
  {
    key: "design",
    label: "DESIGN",
    previewImageSrc: "/mac-image.avif", // <-- your image
    items: [
      { label: "Web app design", href: "#" },
      { label: "Mobile app design", href: "#" },
      { label: "Website design", href: "#" },
      { label: "Website redesign", href: "#" },
      { label: "Branding", href: "#" },
    ],
  },
  {
    key: "development",
    label: "DEVELOPMENT",
    previewImageSrc: "/mac-image.avif",
    items: [
      { label: "Frontend development", href: "#" },
      { label: "Backend development", href: "#" },
      { label: "Design systems", href: "#" },
      { label: "Webflow / CMS builds", href: "#" },
    ],
  },
  {
    key: "research",
    label: "RESEARCH",
    previewImageSrc: "/mac-image.avif",
    items: [
      { label: "UX research", href: "#" },
      { label: "User interviews", href: "#" },
      { label: "Usability testing", href: "#" },
      { label: "Competitive analysis", href: "#" },
    ],
  },
  {
    key: "validate",
    label: "VALIDATE",
    previewImageSrc: "/mac-image.avif",
    items: [
      { label: "Prototype validation", href: "#" },
      { label: "MVP scope review", href: "#" },
    ],
  },
  {
    key: "build",
    label: "BUILD",
    previewImageSrc: "/mac-image.avif",
    items: [
      { label: "MVP build", href: "#" },
      { label: "Product build", href: "#" },
    ],
  },
  {
    key: "scale",
    label: "SCALE",
    previewImageSrc: "/mac-image.avif",
    items: [
      { label: "Feature scaling", href: "#" },
      { label: "Performance & QA", href: "#" },
    ],
  },
];
const whyUsItems = [
  {
    title: "Our creative talent",
    subtitle: "Meet your dedicated team",
    href: "/our-creative-talent",
    imageSrc: "/mac-image.avif", // <-- your image
  },
  {
    title: "AI excellence",
    subtitle: "Your shortcut to AI’s creative advantage",
    href: "/ai-excellence",
    imageSrc: "/mac-image.avif", // <-- your image
  },
  {
    title: "Our technology",
    subtitle: "The tech powering your creative edge",
    href: "/our-technology",
    imageSrc: "/mac-image.avif", // <-- your image
  },
];

const industriesList = [
  { label: "Saas", href: "#" },
  { label: "Healthcare", href: "#" },
  { label: "Fintech", href: "#" },
  { label: "Edtech", href: "#" },
];



const navItems: NavItem[] = [
  {
    label: "SERVICES",
    href: "#",
    dropdown: [
      { label: "Fractional CMO & Leadership Advisory", href: "#" },
      { label: "Go-to-Market Strategy & Planning", href: "#" },
      { label: "Marketing Operating System (OS) & Program Office", href: "#" },
    ],
  },
  {
    label: "INDUSTRIES",
    href: "#",
    dropdown: [
      { label: "Fintech & Payments", href: "#" },
      { label: "Crypto / Web3", href: "#" },
      { label: "RegTech & Cybersecurity", href: "#" },
    ],
  },
  { label: "Our Work", href: "#" },
  {
    label: "WHY US",
    href: "#",
    dropdown: [
      { label: "About us", href: "#" },
      { label: "Team and Advisors", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  { label: RESOURCES, href: "#" }, // 👈 special mega menu
  { label: "PRICING", href: "#" },
];

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <span className={cn("inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", className)}>
      ↗
    </span>
  );
}

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/45">
      <path d="M15 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/45">
      <path d="M4 19V6a2 2 0 0 1 2-2h12v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20h12a2 2 0 0 0 2-2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/45">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 15l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/45">
      <path d="M10 8l6 4-6 4V8Z" fill="currentColor" />
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/45">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ResourcesMegaMenu({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const learning = [
    { title: "Events & Summits", desc: "Our upcoming events and recordings", icon: <IconBell />,href: "/events" },
    { title: "Guides", desc: "Insights from marketing leaders", icon: <IconBook />,href: "/guides" },
    { title: "Reports", desc: "Data for smarter decisions", icon: <IconChart />,href: "/reports" },
    { title: "Video library", desc: "Superside’s latest videos", icon: <IconPlay /> },
    { title: "Playbooks", desc: "Quick ways to step up your game", icon: <IconBolt />,href: "/play-book" },
  ];

  const blog = [
    {
      title: "Superside Release Notes: The updates that powered better creative in 2025",
      image: "/mac-image.avif", // ✅ replace
    href: "/events",
  },
  {
      title: "Another blog post title goes here",
      image: "/mac-image.avif", // ✅ replace
    href: "/guides",
  },
];

  const stories = [
    {
      title: "How a Fortune 500 doubled their AI adoption",
      image: "/mac-image.avif", // ✅ replace
      href: "/play-book",
      overlay: "Fortune 500",
    },
    {
      title: "Another customer story headline",
      image: "/mac-image.avif", // ✅ replace
      href: "/reports",
      overlay: "Fortune 500",
    },
  ];

  return (
    <div
      className="fixed left-0 right-0 top-20 z-50 bg-[#f6f7f2] shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-black/10">
          {/* LEFT: Learning Center */}
          <div className="lg:pr-8">
            <a href="#" className="group inline-flex items-center gap-2 text-[12px] text-black/80">
              <span>Learning Center</span>
              <ExternalArrow className="text-black/55" />
            </a>

            <div className="mt-5 divide-y divide-black/10">
              {learning.map((it) => (
                <a
                  key={it.title}
                  href={it.href}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <div className="text-[12px] font-medium text-black/85">{it.title}</div>
                    <div className="mt-1 text-[10px] leading-[14px] text-black/55">{it.desc}</div>
                  </div>
                  <div className="shrink-0">{it.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE: Blog */}
          <div className="lg:px-8">
            <a href="#" className="group inline-flex items-center gap-2 text-[12px] text-black/80">
              <span>Blog</span>
              <ExternalArrow className="text-black/55" />
            </a>

            <div className="mt-5 space-y-8">
              {blog.map((p) => (
                <a key={p.title} href={p.href} className="block">
                  <div className="relative h-[160px] w-full overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="mt-3 text-[12px] leading-[1.3] text-black/85">{p.title}</div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Customer Stories */}
          <div className="lg:pl-8">
            <a href="#" className="group inline-flex items-center gap-2 text-[12px] text-black/80">
              <span>Customer Stories</span>
              <ExternalArrow className="text-black/55" />
            </a>

            <div className="mt-5 space-y-8">
              {stories.map((s) => (
                <a key={s.title} href={s.href} className="block">
                  <div className="relative h-[170px] w-full overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/10">
                    <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                    {s.overlay ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/90 text-[34px] font-semibold tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                          {s.overlay}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-3 text-[12px] leading-[1.3] text-black/85">{s.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const isDropdownOpen = openMenu !== null;
  // const isWhyUs = item.label === WHY_US;
   

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-colors duration-300",
        isDropdownOpen ? "bg-[#f6f7f2]" : "bg-black"
      )}
    >
      <div className="relative w-full px-2 lg:px-7">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-orange-500 text-xl font-bold">*</span>
            <span
              className={cn(
                "ml-1 text-xl font-bold uppercase tracking-tight transition-colors duration-300",
                isDropdownOpen ? "text-black" : "text-white"
              )}
            >
              Marketing Extension
            </span>
          </div>

          {/* Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const isResources = item.label === RESOURCES;
              const isIndustries = item.label === INDUSTRIES;
              const isWhyUs = item.label === WHY_US;
              const isServices = item.label === SERVICES;
              const hasSimpleDropdown = !!item.dropdown?.length;
              const isOpen = openMenu === item.label;

              return (
              <div
                key={item.label}
                className="relative"
                  onMouseEnter={() => {
                    if (isResources || isServices || isWhyUs || item.dropdown) setOpenMenu(item.label);
                  }}
                  onMouseLeave={() => {
                    // don't close on mouse leave for mega menus (they handle their own hover areas)
                    if (!isServices && !isWhyUs && !isIndustries && !isResources) setOpenMenu(null);
                  }}
              >
                <a
                  href={item.href}
                    className={cn(
                      "text-sm font-medium uppercase tracking-wide transition-colors duration-300 flex items-center gap-1",
                      isDropdownOpen ? "text-black hover:text-black/60" : "text-white hover:text-white/70"
                    )}
                >
                  {item.label}
                    {(hasSimpleDropdown || isResources) && (
                    <svg
                        className={cn("h-3 w-3 transition-transform duration-300", isOpen && "rotate-180")}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                  {/* Simple dropdowns (Services/Industries/Why Us) */}
                  {hasSimpleDropdown && isOpen && (
                    <div className="fixed left-0 right-0 top-20 bg-white border-t border-gray-200 shadow-2xl py-3">
                      <div className="mx-auto max-w-7xl px-2 lg:px-5">
                        {item.dropdown!.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-5 py-2.5 text-black text-sm font-normal normal-case tracking-normal transition-colors hover:bg-gray-50"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
              );
            })}
          </div>

          {/* Button */}
          <div className="flex items-center">
            <button
              className={cn(
                "group px-6 py-3 rounded cursor-pointer text-sm font-medium uppercase tracking-wide flex items-center gap-2 border-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00]",
                isDropdownOpen
                  ? "bg-black border-black text-white hover:text-white"
                  : "bg-white border-white text-black hover:text-white"
              )}
            >
              <svg
                className={cn(
                  "h-4 w-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100",
                  isDropdownOpen ? "text-white" : "text-black group-hover:text-white"
                )}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h14M12 4l6 6-6 6" />
              </svg>
              <span className="transition-colors duration-300 ease-in-out group-hover:text-white">
                GET IN TOUCH
              </span>
              <svg
                className={cn(
                  "h-4 w-5 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0",
                  isDropdownOpen ? "text-white" : "text-black"
                )}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h14M12 4l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {openMenu === RESOURCES && (
        <ResourcesMegaMenu
          onMouseEnter={() => setOpenMenu(RESOURCES)}
          onMouseLeave={() => setOpenMenu(null)}
        />
      )}
      {openMenu === INDUSTRIES && (
  <IndustriesMegaMenu
    industries={industriesList}
    previewImageSrc="/mac-image.avif"
    onMouseEnter={() => setOpenMenu(INDUSTRIES)}
    onMouseLeave={() => setOpenMenu(null)}
  />
)}
{openMenu === WHY_US && (
  <WhyUsMegaMenu
    items={whyUsItems}
    onMouseEnter={() => setOpenMenu(WHY_US)}
    onMouseLeave={() => setOpenMenu(null)}
  />
)}
{openMenu === SERVICES && (
  <ServicesMegaMenu
    groups={servicesGroups as any}
    onMouseEnter={() => setOpenMenu(SERVICES)}
    onMouseLeave={() => setOpenMenu(null)}
    defaultActive="design"
  />
)}


    </nav>
  );
}

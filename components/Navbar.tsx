"use client";

import { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

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
  {
    label: "Our Work",
    href: "#",
  },
  {
    label: "WHY US",
    href: "#",
    dropdown: [
      { label: "About us", href: "#" },
      { label: "Team and Advisors", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    label: "RESOURCES",
    href: "#",
  },
  {
    label: "PRICING",
    href: "#",
  },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isDropdownOpen = hoveredItem !== null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isDropdownOpen ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-full   px-2 lg:px-7 relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-orange-500 text-xl font-bold">*</span>
            <span
              className={`ml-1 text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                isDropdownOpen ? "text-black" : "text-white"
              }`}
            >
              phenomenon
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 flex items-center gap-1 ${
                    isDropdownOpen
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`h-3 w-3 transition-transform duration-300 ${
                        hoveredItem === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Get In Touch Button */}
          <div className="flex items-center">
            <button
              className={`group px-6 py-3 rounded cursor-pointer text-sm font-medium uppercase tracking-wide flex items-center gap-2 border-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00] ${
                isDropdownOpen
                  ? "bg-black border-black text-white transition-colors duration-300 hover:text-white"
                  : "bg-white border-white text-black transition-colors duration-300 hover:text-white"
              }`}
            >
              {/* Icon before text - hidden by default, shows on hover */}
              <svg
                className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ${
                  isDropdownOpen
                    ? "text-white transition-colors duration-300"
                    : "text-black transition-colors duration-300 group-hover:text-white"
                }`}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 10h14M12 4l6 6-6 6"
                />
              </svg>
              <span className="transition-colors duration-300 ease-in-out group-hover:text-white">
                GET IN TOUCH
              </span>
              {/* Icon after text - visible by default, hides on hover */}
              <svg
                className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 ${
                  isDropdownOpen
                    ? "text-white transition-colors duration-300"
                    : "text-black transition-colors duration-300"
                }`}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 10h14M12 4l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Full Screen Width */}
      {hoveredItem && (
        <div
          className="fixed left-0 right-0 top-20 bg-white border-t border-gray-200 shadow-2xl py-3 opacity-100 transition-all duration-200"
          onMouseEnter={() => setHoveredItem(hoveredItem)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="mx-auto max-w-7xl px-2 lg:px-5">
            {navItems
              .find((item) => item.label === hoveredItem)
              ?.dropdown?.map((dropdownItem) => (
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
    </nav>
  );
}


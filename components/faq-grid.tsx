// components/FaqGrid.tsx
"use client";

import React, { useState } from "react";

type Faq = {
  q: string;
  a: string;
};

const faqs: Faq[] = [
  {
    q: "How do I know what budget is right for me?",
    a: "Pick a budget based on how many deliverables you need per month and how fast you need turnarounds. You can start small and upgrade anytime.",
  },
  {
    q: "What’s included in my subscription?",
    a: "You get access to creative services, a shared workspace, feedback rounds, and project tracking in one place.",
  },
  {
    q: "How fast do you deliver?",
    a: "Most requests start within 12–24 hours. Larger projects may take longer depending on scope.",
  },
  {
    q: "Can I pause or cancel anytime?",
    a: "Yes. You can pause or cancel whenever you want. Your remaining time or credits will be handled based on your plan terms.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-200 ${
        open ? "rotate-45" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function FaqItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-4 cursor-pointer text-left"
      >
        <span className="text-[12px] font-medium text-black/80">{q}</span>
        <span className="text-black/60">
          <PlusIcon open={open} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pb-4">
          <p className="text-[11px] leading-[16px] text-black/60">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqGrid() {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-black text-[12px] font-medium py-3">FAQS</p>
        <p className="text-black text-[25px] font-semibold py-5">
        Frequently asked questions</p>
        <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2 py-5">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

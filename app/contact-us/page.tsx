"use client";

import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function ContactUs() {
  const [copied, setCopied] = useState(false);
  const email = "HELLO@PHENOMENON-STU.COM";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="w-full min-h-screen bg-black pt-28 flex flex-col gap-5">
      <div className="space-y-2 px-7">
        <p className="text-[#e5e5e5] text-[20px] font-medium">
          We turn bold ideas into successful products
        </p>
        <p className="text-white text-[40px] font-bold">
          Got an idea?
          <br />
          Let&apos;s talk!
        </p>
      </div>
      <div className="w-full border-[#e5e5e5] border-b" />
      <div className="px-7  flex  ">
        <ContactForm />
        <div className="w-[2px] bg-[#e5e5e5] mx-5"/>
        <div className="flex flex-col gap-6">
          <p className="text-white text-[20px] font-medium">
            Have a project to discuss?
          </p>
          
          {/* Contact Card */}
          <div className="bg-black p-4 relative">
            {/* LinkedIn Icon */}
            <div className="absolute top-4 right-4">
              <div className="size-8 bg-[#2a2a2a] rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium lowercase">in</span>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-20 bg-gray-700 rounded-lg  overflow-hidden">
                <div className="w-full h-full bg-lineargradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Name and Title */}
              <div className="flex-1">
                <h3 className="text-white text-[12px] font-medium mb-1">
                  Kseniia Shalia
                </h3>
                <p className="text-[#e5e5e5] text-sm">Account Executive</p>
              </div>
            </div>

            {/* Email with Copy Icon */}
            <div className="flex items-center gap-2">
              <svg
                className="size-[16px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href={`mailto:${email}`}
                className="text-white text-sm underline hover:text-[#e5e5e5] transition-colors"
              >
                {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="ml-auto size-[30px] px-1 border-[#e5e5e5] border rounded-[20px] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
                aria-label="Copy email"
              >
                {copied ? (
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="w-full border-[#e5e5e5] border-b"/>
        </div>
      </div>
      <div className="px-7 bg-white w-full">

      </div>
    </div>
  );
}
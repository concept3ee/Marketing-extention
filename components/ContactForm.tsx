"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    }
  };

  const handleAttachFileClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { formData, files: selectedFiles });
    // You can add API call here to submit the form data
  };

  return (
    <form className="w-full space-y-8 py-6" onSubmit={handleSubmit}>
      {/* Top Row - Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-[#e5e5e5] text-sm font-medium uppercase tracking-wide my-3">
            YOUR NAME
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ENTER YOUR NAME"
              className="w-full bg-transparent text-white placeholder:text-white placeholder:uppercase placeholder:text-sm border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-white transition-colors pr-6"
              required
            />
            {!formData.name && (
              <span className="absolute right-0 bottom-2 text-orange-500">*</span>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-[#e5e5e5] text-sm font-medium uppercase tracking-wide my-3">
            YOUR EMAIL
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ENTER YOUR EMAIL"
              className="w-full bg-transparent text-white placeholder:text-white placeholder:uppercase placeholder:text-sm border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-white transition-colors pr-6"
              required
            />
            {!formData.email && (
              <span className="absolute right-0 bottom-2 text-orange-500">*</span>
            )}
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label className="text-[#e5e5e5] text-sm font-medium uppercase tracking-wide py-3">
          MESSAGE
        </label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="TELL US ABOUT YOUR PROJECT"
            rows={4}
            className="w-full bg-transparent text-white placeholder:text-white placeholder:uppercase placeholder:text-sm border-b border-[#e5e5e5] pb-2 focus:outline-none focus:border-white transition-colors resize-none"
          />
        </div>
      </div>

      {/* Attach File Button */}
      <div className="space-y-3">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="*/*"
        />
        <button
          type="button"
          onClick={handleAttachFileClick}
          className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white uppercase text-sm font-medium px-6 py-3 rounded-md transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 text-[#e5e5e5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          ATTACH FILE
        </button>
        
        {/* Display Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 rounded-md"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <svg
                    className="w-4 h-4 text-[#e5e5e5] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-white text-sm truncate">{file.name}</span>
                  <span className="text-[#e5e5e5] text-xs">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="ml-2 text-[#e5e5e5] hover:text-white transition-colors"
                  aria-label="Remove file"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button with Legal Text */}
      <div className="flex items-center gap-4 flex-wrap">
      <button
                className={`group px-6 py-3 rounded-full cursor-pointer text-sm font-medium uppercase flex items-center justify-center tracking-wide  gap-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00] ${"bg-[#ff7a00]  text-white w-56 cursor-pointer transition-colors duration-300 hover:text-white"}`}
              >
                {/* Icon before text - hidden by default, shows on hover */}
                <svg
                  className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ${"text-black transition-colors duration-300 group-hover:text-white"}`}
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
                <span className="transition-colors duration-300 ease-in-out group-hover:text-white text-center flex items-center justify-center">
                  SUBMIT
                </span>
                {/* Icon after text - visible by default, hides on hover */}
                <svg
                  className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 ${"text-white transition-colors duration-300"}`}
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
        <p className="text-[#e5e5e5] text-sm">
          BY CLICKING THIS BUTTON YOU ACCEPT{" "}
          <a
            href="#"
            className="text-white underline uppercase hover:text-[#e5e5e5] transition-colors"
          >
            TERMS OF SERVICE
          </a>{" "}
          AND
          <a
            href="#"
            className="text-white underline uppercase hover:text-[#e5e5e5] transition-colors"
          >
            PRIVACY POLICY
          </a>
        </p>
      </div>
    </form>
  );
}


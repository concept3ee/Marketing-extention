type StatRowProps = {
  text: string;
  value: string;
  linkLabel?: string;
  linkHref?: string;
  className?: string;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}

export default function AiStatRow({
  text,
  value,
  linkLabel,
  linkHref = "#",
  className = "",
}: StatRowProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-9 py-5">
        <div className="grid items-center gap-6 border-b border-white/10 pt-4 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-[20px]  text-white font-medium">{text}</p>
            {linkLabel ? (
              <a
                href={linkHref}
                className="group mt-2 inline-flex items-center gap-1 text-[15px] text-[#c7e48a]/80 hover:text-[#c7e48a]"
              >
                <span className="hover:underline">{linkLabel}</span>
                <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : null}
          </div>

          <div className="text-center md:text-right">
            <div className="text-[#c7e48a] text-[30px] leading-none md:text-[34px]">
              {value}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



type Link = { label: string; href: string };

type Cell =
  | {
      kind: "text";
      text: string;
      link?: Link;
    }
  | {
      kind: "stat";
      value: string;
      text?: string;
      link?: Link;
    };

type Props = {
  kicker?: string; // small label at top
  title?: string; // "What AI success looks like"
  highlightWord?: string; // "AI"
  italicWord?: string; // "success"
  cells: Cell[]; // must be 6 (3 cols x 2 rows) for this exact layout
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

function CaseLink({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      className="group mt-2 inline-flex items-center gap-1 text-[10px] leading-[14px] text-[#c7e48a]/80 hover:text-[#c7e48a]"
    >
      <span className="hover:underline">{link.label}</span>
      <span className="relative inline-flex h-[14px] w-[14px] items-center justify-center overflow-visible">
        <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function AiSuccessGrid({
  kicker = "RESULT, NOT HYPE",
  title = "What AI success looks like",
  highlightWord = "AI",
  italicWord = "success",
  cells,
  className = "",
}: Props) {
  if (cells.length !== 6) {
    // keep it strict so layout stays identical
    throw new Error("AiSuccessGrid: `cells` must be exactly 6 items (3 columns x 2 rows).");
  }

  return (
    <section className={cn("w-full ", className)}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="text-center">
          <div className="text-[9px] tracking-[0.22em] text-white/35">
            {kicker}
          </div>

          <h2 className="mt-3 text-[26px] leading-[1.1] text-white/90 md:text-[32px]">
            {title.split(highlightWord)[0]}
            <span className="text-[#c7e48a]">{highlightWord}</span>
            {title.split(highlightWord)[1]?.includes(italicWord) ? (
              <>
                {title
                  .split(highlightWord)[1]
                  .split(italicWord)[0]}
                <span className="font-serif italic text-[#c7e48a]/90">
                  {italicWord}
                </span>
                {title
                  .split(highlightWord)[1]
                  .split(italicWord)[1] ?? ""}
              </>
            ) : (
              title.split(highlightWord)[1] ?? ""
            )}
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {cells.map((cell, idx) => {
            const isTopRow = idx < 3;

            return (
              <div
                key={idx}
                className={cn(
                  "px-8 py-7",
                  "border-white/10",
                  // column dividers
                  idx % 3 !== 0 && "",
                  // row divider (line between row 1 and row 2)
                  isTopRow && "border-b"
                )}
              >
                {cell.kind === "text" ? (
                  <>
                    <p className="max-w-[44ch] text-[10px] leading-[14px] text-white/55">
                      {cell.text}
                    </p>
                    {cell.link ? <CaseLink link={cell.link} /> : null}
                  </>
                ) : (
                  <>
                    <div className="text-[#c7e48a] text-[30px] leading-none md:text-[34px]">
                      {cell.value}
                    </div>

                    {cell.text ? (
                      <p className="mt-3 max-w-[44ch] text-[10px] leading-[14px] text-white/55">
                        {cell.text}
                      </p>
                    ) : null}

                    {cell.link ? <CaseLink link={cell.link} /> : null}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

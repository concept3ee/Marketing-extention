

function IconThumb({ className = "" }: { className?: string }) {
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
      <path d="M14 9V5a3 3 0 0 0-3-3l-1 7" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      <path d="M7 11h9a3 3 0 0 1 3 3l-1 6a2 2 0 0 1-2 2H7V11z" />
    </svg>
  );
}

function IconHeart({ className = "" }: { className?: string }) {
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
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function BrandWordmark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`text-[16px] font-semibold tracking-[0.18em] ${className}`}>
      {text}
    </div>
  );
}

export default function ProofTiles() {
  return (
    <section className="w-full bg-[#f6f7f1]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Layout */}
        <div className="grid gap-6 md:grid-cols-[1.15fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="grid gap-6">
            {/* Top row: icon + 98% tile */}
            <div className="grid grid-cols-[56px_1fr] gap-6">
              {/* small icon tile */}
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[10px] bg-[#C7E48A]">
                <IconThumb className="h-6 w-6 text-black/90" />
              </div>

              {/* 98% tile */}
              <div className="h-[120px] rounded-2xl bg-[#e7edd9] p-3">
                <div className="font-serif text-[58px] leading-none tracking-tight text-black/90">
                  98%
                </div>
                <p className="mt-2 max-w-[32ch] text-[10px] leading-[14px] text-black/60">
                  of projects delivered on time & scope
                </p>
              </div>
            </div>

            {/* Big dark testimonial tile */}
            <div className="relative overflow-hidden rounded-2xl bg-[#191516] text-white">
              <p className="max-w-[56ch] p-6 pb-0 text-[12px] leading-[16px] text-[#f3a0a6]/90">
                “Marketing engines built”
              </p>

              <div className="mt-6 flex items-end justify-between gap-6 px-6 ">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded bg-white/10">
                    <img
                      src="/kayla.avif"
                      alt="Myriam Malinge"
                      className="h-full w-full object-cover pt-1"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-[#f3a0a6]/95">
                      Myriam Malinge
                    </div>
                    <div className="text-[9px] text-[#f3a0a6]/65">
                      Head of Marketing and Comms
                    </div>
                  </div>
                </div>

                <BrandWordmark text="SATAIR" className="mr-5 text-[#f3a0a6]/85" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6">
            {/* Top blue testimonial tile */}
            <div className="relative rounded-2xl bg-[#cfe2ff] text-black">
              <p className="max-w-[52ch] p-6 pb-0 text-[12px] leading-[16px] text-black/80">
               “countries spanned across engagements“
              </p>

              <div className="mt-6 flex items-end justify-between gap-6 px-6 pb-6">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded bg-black/10">
                    <img
                      src="/kayla.avif"
                      alt="Kayla Parker"
                      className="h-full w-full object-cover pt-0"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-black/85">
                      Kayla Parker
                    </div>
                    <div className="text-[9px] text-black/55">
                     115+ consultants and specialists across Nigeria, Ghana, Kenya, Rwanda, South Africa, Canada, and the UK.
                    </div>
                  </div>
                </div>

                <BrandWordmark
                  text="FORTER"
                  className="text-black/65 tracking-[0.12em] mr-5"
                />
              </div>
            </div>

            {/* Bottom row: 94% tile + heart icon tile */}
            <div className="grid grid-cols-[1fr_56px] gap-6">
              <div className="h-[150px]  rounded-2xl bg-[#e7edd9] p-6">
                <div className="font-serif text-[58px] leading-none tracking-tight text-black/90">
                  94%
                </div>
                <p className="mt-2 max-w-[38ch] text-[10px] leading-[14px] text-black/60">
                   Your marketing becomes coherent, scalable, measurable, and fully embedded into your business rhythm.
                </p>
              </div>

              <div className="flex size-[56px] items-center justify-center rounded-[10px] bg-[#191516]">
                <IconHeart className="h-6 w-6 text-[#f3a0a6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

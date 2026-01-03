

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
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Layout */}
        <div className="grid gap-6 md:grid-cols-[1.15fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="grid gap-6">
            {/* Top row: icon + 98% tile */}
            <div className="grid grid-cols-[56px_1fr] gap-6">
              {/* small icon tile */}
              <div className="flex h-[50px] p-3 items-center justify-center rounded-[10px] bg-[#C7E48A]">
                <IconThumb className="h-6 w-6 text-black/90" />
              </div>

              {/* 98% tile */}
              <div className="h-[120px] rounded-2xl bg-[#e7edd9] p-3 ">
                <div className="text-[58px] leading-none tracking-tight text-black/90">
                  98%
                </div>
                <p className="mt-2 max-w-[32ch] text-[10px] leading-[14px] text-black/60">
                  Of projects are delivered on or before the deadline.
                </p>
              </div>
            </div>

            {/* Big dark testimonial tile */}
            <div className="relative overflow-hidden rounded-2xl bg-[#141414] text-white">
              <p className="max-w-[56ch] text-[12px] leading-[16px] text-white/80  p-6">
                “For us it has been important to find a creative partner like
                Superside – a team we can trust to deliver quality work on time,
                even with short notices.”
              </p>

              <div className="mt-6 flex items-end justify-between gap-6">
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
                    <div className="text-[10px] font-semibold text-white/90">
                      Myriam Malinge
                    </div>
                    <div className="text-[9px] text-white/55">
                      Head of Marketing and Comms
                    </div>
                  </div>
                </div>

                <BrandWordmark text="SATAIR" className="text-white/70 mr-5" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6">
            {/* Top blue testimonial tile */}
            <div className="relative rounded-2xl bg-[#cfdcff]  text-black">
              <p className="max-w-[52ch] text-[12px] leading-[16px] text-black/80 p-6">
                “Superside is my creative team’s creative team—and one of the
                best creative teams I’ve ever worked with.”
              </p>

              <div className="mt-6 flex items-end justify-between gap-6">
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
                      Brand Design Manager
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
              <div className="h-[120px] rounded-2xl bg-[#e7edd9] p-6">
                <div className="text-[58px] leading-none tracking-tight text-black/90">
                  94%
                </div>
                <p className="mt-2 max-w-[38ch] text-[10px] leading-[14px] text-black/60">
                  Of our customers rate their deliverables as exceeding
                  expectations.
                </p>
              </div>

              <div className="flex h-[50px] items-center justify-center rounded-[10px] bg-[#141414]">
                <IconHeart className="h-6 w-6 text-white/85" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

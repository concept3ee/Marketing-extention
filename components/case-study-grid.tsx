

type Card = {
    title: string;
    subtitle: string;
    img: string; // can be .avif/.jpg OR .mp4
    size: "sm" | "md" | "lg";
  };
  
  const isVideo = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  

const cards: Card[] = [
  {
    title: "Zone",
    subtitle: "Africa's First Regulated Blockchain Payment Network - Full marketing operating system, group restructuring, rebrand, flagship narratives",
    img: "https://picsum.photos/seed/zone/800/600",
    size: "lg",
  },
  {
    title: "Smartcomply Group",
    subtitle: "From Fragmented Socials to Group-Wide Engine - Multi-brand ecosystem transformation, refreshed brand architectures, end-to-end marketing delivery",
    img: "https://picsum.photos/seed/smartcomply/800/600",
    size: "md",
  },
  {
    title: "SabiTrack",
    subtitle: "Investor-Ready Marketing Foundations - Six-month blueprint, embedded Head of Marketing, ongoing advisory",
    img: "https://picsum.photos/seed/sabitrack/800/600",
    size: "sm",
  },
  {
    title: "Quidax",
    subtitle: "Turning Crypto into a Pop-Culture Movement - 360° campaign (#TheQuidaxCall), operating rhythms, hero campaigns, six-figure sign-ups",
    img: "https://picsum.photos/seed/quidax/800/600",
    size: "md",
  },
  {
    title: "VeryPay",
    subtitle: "Multi-Country Marketing Bench - Marketing operations across Uganda, Zimbabwe, South Africa, and Nigeria",
    img: "https://picsum.photos/seed/verypay/800/600",
    size: "sm",
  },
  {
    title: "Tamy Consulting",
    subtitle: "Giving a Strong Operator a Voice - Coherent digital presence, content pillars, social engine, thought leadership",
    img: "https://picsum.photos/seed/tamy/800/600",
    size: "sm",
  },
];

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

function ImageCard({ card }: { card: Card }) {
    const sizeClass =
      card.size === "lg"
        ? "lg:col-span-2"
        : card.size === "md"
        ? "lg:col-span-2"
        : "";
  
    return (
      <a href="#" className={`block ${sizeClass}`}>
        <div className="group relative overflow-hidden rounded-xl bg-black/5">
          {/* MEDIA */}
          <div className="relative h-[160px] w-full md:h-[180px]">
            {isVideo(card.img) ? (
              <video
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={card.img}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}
  
            {/* overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
  
            {/* arrow only on hover */}
            <div className="pointer-events-none absolute right-3 top-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
  
        {/* TEXT */}
        <div className="mt-3">
          <div className="font-serif text-[14px] italic text-black/90">
            {card.title}
          </div>
          <div className="mt-1 text-[10px] leading-[14px] text-black/55">
            {card.subtitle}
          </div>
        </div>
      </a>
    );
  }
  

export default function CaseStudyGrid() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-1 py-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4">
          {cards.map((c) => (
            <ImageCard key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

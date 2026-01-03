type Stat = {
  title: string;
  linkText: string;
  value: string;
};

const stats: Stat[] = [
  {
    title: "Increase in CTR for PointCard",
    linkText: "PointCard case study",
    value: "240%",
  },
  {
    title: "Reduction in cost per asset for Amazon",
    linkText: "Amazon case study",
    value: "50%",
  },
  {
    title: "Design time saved for Thomson Reuters",
    linkText: "Thomson Reuters case study",
    value: "~90%",
  },
];

export default function ImpactStatsRow() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="border-b border-black/15 pb-6">
              <div className="flex items-start justify-between gap-6">
                <div className="pt-1">
                  <p className="text-[10px] leading-[14px] text-black/55">
                    {s.title}
                  </p>

                  <a
                    href="#"
                    className="group mt-2 inline-flex items-center gap-1 text-[10px] leading-[14px] text-black/70 hover:text-black"
                  >
                    <span className="cursor-pointer group-hover:underline">
                      {s.linkText}
                    </span>

                    <span className="text-[11px] transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>

                <div className="text-right text-[48px] font-medium leading-none tracking-tight text-black/90 md:text-[56px]">
                  {s.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

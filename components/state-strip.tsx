
import React from "react";

type Stat = {
  value: React.ReactNode;
  top: string;
  bottom: string;
};

const DEFAULT_STATS: Stat[] = [
  { value: "98.9%", top: "Customer", bottom: "Growth" },
  { value: "<2%", top: "Bounce", bottom: "Rate" },
  {
    value: (
      <span className="inline-flex items-start">
        <span>79%</span>
        <span className="ml-0.5 align-super text-[10px] font-semibold leading-none">*</span>
      </span>
    ),
    top: "Avg. MRR",
    bottom: "Growth",
  },
  { value: "90", top: "Day", bottom: "Impact" },
];

export default function StatsStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <div className="w-full">
      <div className="mx-auto  px-6 py-4">
        <div className="flex items-center justify-start gap-16">
          {stats.map((s, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="text-[32px] font-semibold tracking-tight leading-none text-gray-900">
                {s.value}
              </div>

              <div className="flex flex-col">
                <span className="text-[11px] font-medium leading-[14px] text-gray-500">
                  {s.top}
                </span>
                <span className="text-[11px] font-medium leading-[14px] text-gray-500">
                  {s.bottom}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

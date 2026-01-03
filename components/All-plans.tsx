

type Item = {
  title: string;
  subtitle?: string;
};

const items: Item[] = [
  {
    title: "Access to all creative services.",
    subtitle: "(based on available dollars in monthly subscription)",
  },
  { title: "Dedicated creative project manager and customer success" },
  { title: "Turnaround times starting at 12 hours" },
  { title: "Global timezone coverage" },
  { title: "AI-enhanced services" },
  { title: "Unlimited API calls to integrations" },
  { title: "Unlimited users and asset storage" },
  { title: "Support for multiple brands" },
  { title: "Access to Superspace platform" },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function IncludedInAllPlans() {
  return (
    <div className="w-full max-w-md rounded-md bg-[#C7E48A] p-6 shadow-sm cursor-pointer">
      <h3 className="text-[28px] leading-tight text-gray-900">
        Included in{" "}
        <span className="font-serif italic font-medium">all plans</span>:
      </h3>

      <div className="mt-6">
        {items.map((item, idx) => (
          <div key={item.title}>
            {/* row */}
            <div className="flex items-start justify-between gap-6 py-3">
              <div className="text-[11px] leading-[14px] text-gray-700">
                <div>{item.title}</div>
                {item.subtitle ? (
                  <div className="mt-1 text-[10px] leading-[13px] text-gray-600">
                    {item.subtitle}
                  </div>
                ) : null}
              </div>

              <CheckIcon className="mt-[2px] h-4 w-4 shrink-0 text-gray-900" />
            </div>

            {/* divider */}
            {idx !== items.length - 1 && (
              <div className="h-px w-full bg-black/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

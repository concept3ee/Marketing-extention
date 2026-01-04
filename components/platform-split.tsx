
import Image from "next/image";


type TextBlock = {
  kicker: string;
  title: string;          // e.g. "Creative workflows are broken, so we built a"
  italicTitle?: string;   // e.g. "better one"
  lead?: string;          // bold-ish short paragraph
  body?: string;          // small paragraph
  ctaText?: string;       // "Book a demo"
  ctaHref?: string;       // "#"
};

type Props = {
  topLeft: TextBlock;
  bottomRight: TextBlock;

  topRightImage: { src: string; alt?: string };
  bottomLeftImage: { src: string; alt?: string };

  className?: string;
};

export default function PlatformSplitQuad({
  topLeft,
  bottomRight,
  topRightImage,
  bottomLeftImage,
  className = "",
}: Props) {
  return (
    <section className={["w-full bg-[#dfdec9]", className].join(" ")}>
      <div className=" w-full ">
        {/* 2x2 grid like screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
          {/* TOP LEFT (text) */}
          <div className="bg-[#dfdec9] px-8 py-10 lg:px-12 lg:py-12">
            <div className="max-w-[460px]">
              <div className="text-[9px] tracking-[0.22em] text-black/55">
                {topLeft.kicker}
              </div>

              <h2 className="mt-4 text-[28px] leading-[1.1] text-black md:text-[34px]">
                {topLeft.title}{" "}
                {topLeft.italicTitle ? (
                  <span className="font-serif italic font-medium text-black/80">
                    {topLeft.italicTitle}
                  </span>
                ) : null}
              </h2>

              {topLeft.lead ? (
                <p className="mt-10 text-[11px] font-medium leading-[16px] text-black/75">
                  {topLeft.lead}
                </p>
              ) : null}

              {topLeft.body ? (
                <p className="mt-4 text-[9px] leading-[13px] text-black/55">
                  {topLeft.body}
                </p>
              ) : null}

              {topLeft.ctaText ? (
                <a
                  href={topLeft.ctaHref ?? "#"}
                  className="mt-6 inline-flex rounded-full bg-[#121818] px-4 py-2 text-[10px] font-medium text-white/90 hover:text-white"
                >
                  {topLeft.ctaText}
                </a>
              ) : null}
            </div>
          </div>

          {/* TOP RIGHT (image) */}
          <div className="relative min-h-[320px] lg:min-h-[420px]">
            <Image
              src={topRightImage.src}
              alt={topRightImage.alt ?? ""}
              fill
              priority
              className="object-cover "
              sizes="w-[100%]"
             
            />
          </div>

          {/* BOTTOM LEFT (image) */}
          <div className="relative w-full min-h-[320px] lg:min-h-[420px]">
            <Image
              src={bottomLeftImage.src}
              alt={bottomLeftImage.alt ?? ""}
              fill
              className="object-cover"
              sizes="w-full"
            />
          </div>

          {/* BOTTOM RIGHT (text) */}
          <div className="bg-[#dfdec9] px-8 py-10 lg:px-12 lg:py-12">
            <div className="max-w-[460px]">
              <div className="text-[9px] tracking-[0.22em] text-black/55">
                {bottomRight.kicker}
              </div>

              <h2 className="mt-4 text-[28px] leading-[1.1] text-black md:text-[34px]">
                {bottomRight.title}{" "}
                {bottomRight.italicTitle ? (
                  <span className="font-serif italic font-medium text-black/80">
                    {bottomRight.italicTitle}
                  </span>
                ) : null}
              </h2>

              {bottomRight.lead ? (
                <p className="mt-10 text-[11px] font-medium leading-[16px] text-black/75">
                  {bottomRight.lead}
                </p>
              ) : null}

              {bottomRight.body ? (
                <p className="mt-4 text-[9px] leading-[13px] text-black/55">
                  {bottomRight.body}
                </p>
              ) : null}

              {bottomRight.ctaText ? (
                <a
                  href={bottomRight.ctaHref ?? "#"}
                  className="mt-6 inline-flex rounded-full bg-[#121818] px-4 py-2 text-[10px] font-medium text-white/90 hover:text-white"
                >
                  {bottomRight.ctaText}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

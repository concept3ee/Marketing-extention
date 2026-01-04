import StatsStrip from "@/components/state-strip";
import Image from "next/image";
export default function Home() {
  return (
    <div
      className="flex h-screen w-full pt-28  flex-col gap-4"
      style={{
        backgroundImage: "url(/bg-pattern.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="space-y-2 px-6">
        <p className="text-white text-[20px] font-medium">
          Product Design and Development Agency
        </p>
        <p className="text-white text-[30px] leading-8 font-medium">
          Empowering startups to launch,
          <br /> scale, and <span className="">succeed faster</span>
        </p>
        <div className="flex items-center gap-3 my-3">
          <button
            className={`group px-6 py-5 rounded-[20px] cursor-pointer text-sm font-medium uppercase tracking-wide flex items-center gap-2 border-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00] ${"bg-orange-500 border-black text-white transition-colors duration-300 hover:text-white"}`}
          >
            {/* Icon before text - hidden by default, shows on hover */}
            <svg
              className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ${"text-white transition-colors duration-300"}`}
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
            <span className="transition-colors duration-300 ease-in-out group-hover:text-white">
              LET&apos;S TALK
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
          <button
            className={`group px-6 py-5 rounded-[20px] cursor-pointer text-sm font-medium uppercase tracking-wide flex items-center gap-2 border-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00] ${"bg-orange-500 border-black text-white transition-colors duration-300 hover:text-white"}`}
          >
            {/* Icon before text - hidden by default, shows on hover */}
            <svg
              className={`h-4 w-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ${"text-white transition-colors duration-300"}`}
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
            <span className="transition-colors duration-300 ease-in-out group-hover:text-white">
              VIEW OUR CASES
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
        </div>
      </div>
      <div className="flex  gap-5 px-6">
        <div className="w-1/2 border-white border px-5 py-2 rounded-[20px]"></div>
        <div className="spae-y-2 px-5 ">
          <h1 className="text-white text-[30px] text-center font-medium">
            From MVP to market domination – your reliable
            <br /> partner in UI/UX design and development
          </h1>
        </div>
      </div>
      <div
        className="flex flex-col gap-0 bg-[#f1f1f1] py-5"
        style={{
          backgroundImage: "url(/brands-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <section className=" px-10 flex justify-between pb-12">
          <div className="flex flex-col item-center">
            <p className="text-[#080d10] text-[20px] font-medium ">
              Product Design and Development Agency
            </p>
            <h1 className="text-black text-[30px] font-bold ">
              Our featured client wins
            </h1>
            <h1 className="text-black text-[30px] font-bold ">
              Building a startup is hard, but finding
              <br /> the right partner shouldn’t be
            </h1>
            <div className="flex  gap-3  mt-3">
              <p className="text-black text-[20px] font-medium">
                Need to meet tight
                <br /> deadlines but don’t have
                <br /> enough hands on deck?
              </p>
            </div>
          </div>
          <div className="w-[2px] h-full border-black/120 border" />
          <div className="flex flex-col">
            <StatsStrip />
            <div className="w-full border-black/120 border" />
            <div className="mt-12">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 mb-5">
                  <p className="text-black text-[20px] font-medium ">
                    Hiring in-house takes time—posting jobs, sorting
                    <br /> resumes, and onboarding. We can get you a <br />
                    dedicated designer or developer ready to start <br />
                    tomorrow, helping you hit your deadlines without
                    <br /> the wait.
                  </p>
                  <button
                    className={`group px-6 py-3 rounded-full cursor-pointer text-sm font-medium uppercase flex items-center justify-center tracking-wide  gap-2 border-2 transition-all duration-300 ease-in-out hover:bg-[#ff7a00] hover:border-[#ff7a00] ${"bg-[#ff7a00] border-white text-white w-1/2 transition-colors duration-300 hover:text-white"}`}
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
                      GET IN TOUCH
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full border-black/120 border" />
        <div className="flex">
          <div className="flex flex-col gap-2 px-5 mt-5">
            <Image
              src="/Media.png.webp"
              alt="image"
              width={700}
              height={100}
              className="rounded-[20px]"
            />
          </div>
          <div className="flex flex-col gap-2 px-5 mt-5">
            <h1 className="text-black/80 text-[16px] font-bold ">
              #Website design #Website development
            </h1>
            <p className="text-black/80 text-[35px] font-medium ">
              Shaga Odyssey – an award-winning
              <br /> web3 gamepad platform
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-[10px] bg-black text-white">
                View Case Study
              </button>
              <button className="px-4 py-2 rounded-[10px] bg-black text-white">
                View Case Study
              </button>
              
            </div>
            <p className="text-black/80 text-[16px] font-medium ">RESULTS</p>
            <div className="w-full border border-black/150 mt-3"/>
        
            <p className="text-black/80 text-[16px] font-medium ">+40% increase in user engagement</p>
              
              <p className="text-black/80 text-[16px] font-medium ">3x faster platform navigation</p>
              <p className="text-black/80 text-[16px] font-medium ">3x faster platform navigation</p>
              <p className="text-black/80 text-[16px] font-medium ">Awards Site of the Day for Best Interactive Design</p>
              <div className="w-full border border-black/150 mt-3"/>
        
           
          </div>
        </div>
      </div>
    </div>
  );
}

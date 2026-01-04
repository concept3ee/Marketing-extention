import ExpertiseSplit from "@/components/expertise-pill"
import PlatformSplitQuad from "@/components/platform-split"
import TrustedByMarquee from "@/components/trusted-by"


const OurTechnology = () => {
  return (
    <div className='bg-white h-full pt-20 flex flex-col gap-5'>
        <div className='space-y-3 pt-12 px-8'>
            <h1 className='text-black/80 text-[15px] font-medium text-center'>Our Technology</h1>
            <p className='text-black/80 text-[20px] text-center font-medium leading-7'>The tech powering your<br/> creative edge</p>
            <p className='text-black/90 text-center text-[16px] font-medium'>We use the latest and greatest technology to power your<br/> creative edge. We are constantly updating our<br/> technology to stay ahead of the curve.</p>
           <div className="p-20 ">
           <video
              src="/videos/another.mp4"
              className='w-full h-full object-cover rounded'
              controls
              preload="metadata"
              loop
            />
           </div>
           <TrustedByMarquee/>
        </div>
        <PlatformSplitQuad
        topLeft={{
          kicker: "A BETTER WAY TO WORK",
          title: "Creative workflows are broken, so we built a",
          italicTitle: "better one",
          lead: "Endless email threads. Scattered feedback. Files lost in a black hole. Sound familiar?",
          body:
            "Working with creative partners should speed you up, not slow you down. Superspace is a centralized hub for your projects, assets, and subscription details.",
          ctaText: "Book a demo",
          ctaHref: "#",
        }}
        bottomRight={{
          kicker: "YOUR CREATIVE PROCESS, SUPERCHARGED",
          title: "The platform",
          italicTitle: "built for creative teams like yours",
          lead:
            "Superspace is the engine behind every Superside project. It's built exclusively for our customers to streamline creative collaboration and execution.",
          body:
            "Use it to brief projects, track progress, manage feedback, and integrate it with your existing workflows for seamless, stress-free collaboration.",
          ctaText: "Book a demo",
          ctaHref: "#",
        }}
        topRightImage={{ src: "/workflow.avif", alt: "Laptop dashboard" }}
        bottomLeftImage={{ src: "/mac-image.avif", alt: "Laptop gallery" }}
      />
       <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          videoSrc="/videos/another.mp4"
        />
        <ExpertiseSplit
          reverse={true}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          posterSrc="/agent.avif"
        />
        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          posterSrc="/agent.avif"
        />
      </div>
    </div>
  )
}

export default OurTechnology
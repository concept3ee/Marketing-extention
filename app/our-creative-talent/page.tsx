import ExpertiseSplit from "@/components/expertise-pill";
import GlobalTeamHero from "@/components/global-team-hero";
import ProcessSection from "@/components/process-section";
import TeamSpotlightTabs from "@/components/spot-light-tab";
import { TeamMember, TeamMemberCard } from "@/components/team-members";

const members: TeamMember[] = [
  { name: "Osoba", role: "Founding Principal & Marketing Systems Architect", imageSrc: "/agent.avif" },
  { name: "Motilola", role: "Practice Lead, Growth & Client Partnerships", imageSrc: "/agent.avif" },
  { name: "Lade", role: "Practice Lead, Creative Experience & Content+", imageSrc: "/agent.avif" },
  { name: "Stanley", role: "Practice Lead, Technology & MarTech Systems", imageSrc: "/agent.avif" },
  { name: "Adebola", role: "Director of Operations & Performance", imageSrc: "/agent.avif" },
];

const CreativeTalent = () => {
  return (
    <div className="">
      <div
        className="p-20 rounded-[20px] flex flex-col gap-4"
        style={{
          backgroundImage: "url(/bg-image.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-16 space-y-3">
          <h1 className="text-white text-[15px] font-semibold uppercase tracking-widest">Our Creative Talents</h1>
          <p className="text-white text-[30px] font-semibold leading-7">
            The People Powering Your Marketing Engine
          </p>
          <p className="text-white text-[16px] font-medium">
            Our dedicated team of strategists, creatives, and technologists becomes an extension of your business. Every engagement is grounded in clarity, discipline, and measurable outcomes.
          </p>
          <button className="bg-green-500 px-3 py-2 w-[10%] text-[15px] rounded-full">
            Book a demo
          </button>
        </div>
      </div>
      <div className="bg-white flex justify-center flex-col gap-4 py-6">
        <p className="text-black text-[15px] font-semibold leading-7 text-center pt-6">
          Global Bench
        </p>
        <p className="text-black text-[21px] font-medium text-center">
          115+ consultants and specialists across Nigeria, Ghana, Kenya, Rwanda, South Africa, Canada, and the UK.
        </p>
        <div className="px-6 py-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-sm text-text-muted">of projects delivered on time & scope</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-sm text-text-muted">marketing engines built</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">7+</p>
              <p className="text-sm text-text-muted">countries spanned across engagements</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 max-w-3xl mx-auto bg-primary rounded-2xl text-center text-white">
          <p className="text-lg font-medium">
            Your marketing becomes coherent, scalable, measurable, and fully embedded into your business rhythm.
          </p>
        </div>
      </div>
      <div className="bg-[#121818] w-full ">
        <div className="p-12">
          <p className="text-white text-[13px] font-medium text-center uppercase tracking-widest">
            How We Work With You
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-white text-[18px] font-semibold mb-2">Embedded Marketing Office</p>
              <p className="text-white/70 text-[14px]">Fractional Leadership + Pods</p>
            </div>
            <div className="text-center">
              <p className="text-white text-[18px] font-semibold mb-2">Project & Launch Squads</p>
              <p className="text-white/70 text-[14px]">For campaigns, rebrands, or market entries</p>
            </div>
            <div className="text-center">
              <p className="text-white text-[18px] font-semibold mb-2">Training & Capability Programs</p>
              <p className="text-white/70 text-[14px]">For internal team upskilling</p>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-white text-[13px] font-medium text-center uppercase tracking-widest mb-4">
              Processes & Expertise
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <p className="text-white/80 text-[14px]">Human insight + machine-level discipline</p>
              <p className="text-white/80 text-[14px]">Structured operating rhythms, playbooks, dashboards</p>
              <p className="text-white/80 text-[14px]">Marketing strategy, GTM planning, brand development</p>
              <p className="text-white/80 text-[14px]">Content & multimedia, MarTech integration</p>
            </div>
          </div>
        </div>
        <div className={[" flex items-center p-5 gap-5", "", ,].join(" ")}>
          {members.map((m, i) => (
            <TeamMemberCard key={`${m.name}-${i}`} member={m} />
          ))}
        </div>
        <div className="w-full px-16 py-8 flex flex-col gap-3">
          <GlobalTeamHero backgroundSrc="/world-class.avif " />
          <ProcessSection />
        </div>
      </div>
      <div className="w-full px-16 py-8 flex flex-col gap-3 bg-white">
        <ExpertiseSplit
          reverse={false}
          kicker="FULL-STACK EXPERTISE"
          title="Collaborate with brilliant people"
          italicTitle="across every discipline"
          videoSrc="/slack.mp4"
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
        <div className="pt-12">
          <h3 className="text-black/80 text-[15px] font-medium text-center">
            creative showcase
          </h3>
          <p className="text-black text-[25px] font-medium text-center">
            The people behind the work
          </p>
        </div>

        <TeamSpotlightTabs />
        <div
          className="p-20 rounded-[20px]"
          style={{
            backgroundImage: "url(/bg-image.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white text-[15px] font-medium uppercase tracking-widest">
            AI Excellence
          </p>
          <p className="text-white text-[30px] font-medium ">
            Your Shortcut to AI Creative Advantage
          </p>
          <p className="text-white text-[16px] font-medium my-3">
            We use AI to supercharge marketing, combining human insight with machine-level discipline to deliver faster, smarter, and more impactful creative.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div>
              <p className="text-white text-[14px] font-semibold mb-3">AI-Powered Creative Production</p>
              <ul className="space-y-2 text-white/80 text-[13px]">
                <li>• Video production & motion design</li>
                <li>• Character & avatar development</li>
                <li>• Product visuals & image enhancement</li>
                <li>• Brand imagery & high-volume content production</li>
                <li>• Translation & transcription</li>
                <li>• Avatar & voice cloning</li>
              </ul>
            </div>
            <div>
              <p className="text-white text-[14px] font-semibold mb-3">AI Consulting</p>
              <ul className="space-y-2 text-white/80 text-[13px]">
                <li>• Strategic AI integration into marketing engines</li>
                <li>• Process automation & workflow optimization</li>
                <li>• AI-enabled campaign planning & measurement</li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <p className="text-white text-[14px] font-semibold mb-3">Success Metrics</p>
           
          </div>
          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <p className="text-white text-[16px] font-medium">
              Marketing that is smarter, faster, and AI-powered—giving your brand a creative edge that scales.
            </p>
          </div>
          {/* <button className="border cursor-pointer border-white p-1 text-[10px]  rounded-[20px] w-[90px] text-center whitespace-nowrap mt-4">
           Book a demo
          </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default CreativeTalent;

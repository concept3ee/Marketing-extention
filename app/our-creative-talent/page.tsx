import ExpertiseSplit from "@/components/expertise-pill";
import GlobalTeamHero from "@/components/global-team-hero";
import ProcessSection from "@/components/process-section";
import ProofTiles from "@/components/proof-tiles";
import TeamSpotlightTabs from "@/components/spot-light-tab";
import { TeamMember, TeamMemberCard } from "@/components/team-members";

const members: TeamMember[] = [
  { name: "Gradwell Sears", role: "CCO", imageSrc: "/agent.avif" },
  { name: "Jane Doe", role: "CTO", imageSrc: "/agent.avif" },
  { name: "Mike Stone", role: "Design Lead", imageSrc: "/agent.avif" },
  { name: "Mike Stoney", role: "Design Lead", imageSrc: "/agent.avif" },
  { name: "Mike Stones", role: "Design Lead", imageSrc: "/agent.avif" },
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
          <h1>our people</h1>
          <p className="text-white text-[30px] font-semibold leading-7">
            Partner with world-class
            <br /> creative talent without
            <br /> the hassle of hiring
          </p>
          <p className="text-white text-[16px] font-medium">
            Our people are our biggest strength. Superside has hired 750+ elite
            <br /> designers, project managers, animators, copywriters, AI
            technologists and
            <br /> more, so you can get high-quality work without compromise.
          </p>
          <button className="bg-green-500 px-3 py-2 w-[10%] text-[15px] rounded-full">
            Book a demo
          </button>
        </div>
      </div>
      <div className="bg-white flex justify-center flex-col gap-4 py-6">
        <p className="text-black text-[15px] font-semibold leading-7 text-center pt-6">
          creative excellence
        </p>
        <p className="text-black text-[21px] font-medium text-center">
          The team behind 500+ global
          <br /> brands? That’s us
        </p>
        <ProofTiles />
      </div>
      <div className="bg-[#121818] w-full ">
        <div className="p-12">
          <p className="text-white text-[13px] font-medium text-center">
            world-class roots
          </p>
          <p className="text-white text-[25px] font-medium text-center">
            The best talent recruited from top brands
            <br /> and agencies
          </p>
          <p className="text-white text-[16px] font-medium text-center">
            Before Superside, our people led award-winning campaigns at global
            <br /> agencies, built iconic brand systems at Fortune 500
            companies, and launched
            <br /> bold work from inside scrappy startups. Now, they bring that
            firepower directly to you.
          </p>
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
          <p className="text-white text-[15px] font-medium">
            ai design services
          </p>
          <p className="text-white text-[30px] font-medium ">
            Save up to 70% on production costs
          </p>
          <p className="text-white text-[16px] font-medium my-3">Through AI, customers like Amazon, Reddit, and Salesforce managed to spend less<br/> than half of what they normally would on similar projects.</p>
          <button className="border cursor-pointer border-white p-1 text-[10px] rounded-[20px] w-[90px] text-center whitespace-nowrap">
           Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativeTalent;

import Image from "next/image";
import React from "react";

export type TeamMember = {
  name: string;
  role: string;
  bio?: string; // <-- add this for the 3rd line
  imageSrc?: string | null;
  imageAlt?: string;
};

type Props = {
  member: TeamMember;
  className?: string;
};

export function TeamMemberCard({ member, className = "" }: Props) {
  const src = (member.imageSrc ?? "").trim();

  return (
    <div
      className={[
        // fixed size + dark card like screenshot
        "w-[220px] rounded-xl bg-[#121818] p-3",
        // "ring-1 ring-white/5",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded bg-white/5">
        {src ? (
          <Image
            src={src}
            alt={member.imageAlt ?? member.name}
            fill
            className="object-cover"
            sizes="220px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[12px] text-white/35">
            No photo
          </div>
        )}
      </div>

      {/* Text */}
      <div className="pt-4 pb-2 text-center">
        <div className="text-[13px] font-medium text-white/85">
          {member.name}
        </div>

        <div className="mt-1 text-[10px] uppercase tracking-wide text-white/35">
          {member.role}
        </div>

        {member.bio ? (
          <div className="mt-2 text-[10px] leading-[13px] text-white/30">
            {member.bio}
          </div>
        ) : null}
      </div>
    </div>
  );
}

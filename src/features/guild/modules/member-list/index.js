import { OUR_GUILD } from "constraint";
import { useGetGuild } from "features/guild/hooks";
import React, { useEffect, useRef } from "react";
import { CharacterInfo } from "./character-info";
import gsap from "gsap";
import { ScreenLoading } from "components";

export function MemberList({ ...rest }) {
  const comp = useRef();
  const { data, isLoading } = useGetGuild({ name: OUR_GUILD });

  useEffect(() => {
    if (!data) {
      return () => 1;
    }
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-card",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
        }
      );
    }, comp);

    return () => ctx.revert();
  }, [data]);

  if(!data && isLoading){
    return <ScreenLoading title="Hold up while we load giga chade member"/>
  }

  return (
    <div
      {...rest}
      className="min-h-screen w-full bg-black flex flex-col items-center"
    >
      <div className="h-[30vh]"></div>
      <h2 className="text-4xl md:text-6xl space-x-2 mb-10">
        <span className="text-orange-500">Our</span>
        <span className="text-red-500">Members</span>
      </h2>
      <div
        ref={comp}
        className="flex w-full flex-col items-center justify-start space-y-2 "
      >
        {data?.GuildMemberData?.map((player, idx) => (
          <CharacterInfo {...player} />
        ))}
      </div>
    </div>
  );
}

import { ParticleArea, ResponsiveBox } from "components";
import React, { useCallback, useState } from "react";
import snowImage from "assets/images/snow.png"

export function WelcomeVideo({ ...rest }) {
    
    const [particleContainerSize,setParticleContainerSize] = useState({width:0,height:0})

    const handleParicleContainerSizeChange = useCallback((dimension)=>setParticleContainerSize(dimension),[])

  return (
    <div
      {...rest}
      className="relative h-screen w-full bg-black flex flex-col justify-center items-center text-center p-4"
    >
      <h2 className="text-4xl md:text-6xl space-x-2 mb-4">
        <span className="text-orange-500">Welcome</span>
        <span className="text-red-500">Video</span>
      </h2>
      <ResponsiveBox onSizeChange={handleParicleContainerSizeChange} className="opacity-25 absolute top-0 left-0 pointer-events-none">
          <ParticleArea width={particleContainerSize.width} height={particleContainerSize.height} src={snowImage}/>
      </ResponsiveBox>
      <div className="z-10 inline-block w-full max-w-[720px] aspect-video bg-black border-2 border-white rounded-md">
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://www.youtube.com/embed/RJlnrgc-PqM"
          title="Welcome to GoDSlayeR [RotMG]"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

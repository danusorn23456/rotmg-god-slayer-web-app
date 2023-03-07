
import { ParticleArea, ResponsiveBox } from "components";
import React, { useCallback, useState } from "react";
import snowImage from "assets/images/snow.png";
import { MediaPlayer } from "./media-player";

export function WelcomeVideo({ ...rest }) {
  const [particleContainerSize, setParticleContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const handleParicleContainerSizeChange = useCallback(
    (dimension) => setParticleContainerSize(dimension),
    []
  );

  return (
    <div
      {...rest}
      className="relative h-screen w-full bg-black flex flex-col justify-center items-center text-center p-4"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl space-x-2 mb-4">
        <span className="text-orange-500">Welcome</span>
        <span className="text-red-500">Video</span>
      </h2>
      {/* Container to control size of canvas */}
      <ResponsiveBox
        onSizeChange={handleParicleContainerSizeChange}
        className="opacity-25 absolute top-0 left-0 pointer-events-none"
      >
        <ParticleArea
          width={particleContainerSize.width}
          height={particleContainerSize.height}
          src={snowImage}
        />
      </ResponsiveBox>
      <MediaPlayer/>
    </div>
  );
}

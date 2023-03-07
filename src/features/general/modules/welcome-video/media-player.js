import React from "react";

export function MediaPlayer({ ...rest }) {
  return (
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
  );
}

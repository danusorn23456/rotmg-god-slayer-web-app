import gsap from "gsap/gsap-core";
import React, { useLayoutEffect, useRef, useState } from "react";

export function ScreenLoading({
  className,
  title = "Loading",
  darkMode = true,
  ...rest
}) {
  const comp = useRef();
  const [squarePosition] = useState([
    "left-full",
    "top-full",
    "right-full",
    "bottom-full",
  ]);

  useLayoutEffect(
    function toAnimateLoadingEffect(params) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1 });
        squarePosition.forEach((square, idx) => {
          tl.to(".gsap-square-" + idx, {
            opacity: 1,
            duration:0.3,
          })
          tl.to(".gsap-square-" + idx, {
            opacity: 0.3,
            duration:0.0,
          });
        });
      }, comp);

      return () => ctx.revert();
    },
    [squarePosition]
  );

  return (
    <div className="h-screen pb-16 w-full bg-black flex items-center justify-center">
      <div className="relative">
        <div
          ref={comp}
          className={[
            "relative w-3 h-3 [&>div]:w-full [&>div]:h-full [&>div]:rotate-45 [&>div]:origin-center [&>div]:opacity-30",
            darkMode ? "[&>div]:bg-white" : "[&>div]:bg-black",
            className,
          ].join(" ")}
          {...rest}
        >
          {squarePosition.map((pos, idx) => (
            <div
              key={pos}
              className={["gsap-square-" + idx, "absolute", pos].join(" ")}
            ></div>
          ))}
        </div>
        <div
          className={[
            "absolute top-full left-0 text-2xl translate-x-[-50%] ml-[50%] mt-5 whitespace-nowrap",
            darkMode ? "text-white" : "text-black",
          ].join(" ")}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

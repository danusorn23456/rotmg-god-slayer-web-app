import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function Title({ ...rest }) {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.fromTo(
        ".gsap-title-head",
        { opacity: 0,y:-100 },
        { opacity: 1,y:0, duration: 0.5 }
      );
      tl.fromTo(
        ".gsap-title-end",
        { opacity: 0, width: "0" },
        { opacity: 1, width: "auto", scaleX: 1, duration: 0.5 }
      );
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <h2 ref={comp} className="text-7xl whitespace-nowrap md:text-9xl text-center space-x-4">
      <span className="gsap-title-head inline-block text-orange-500 drop-shadow-2xl">
        GoD
      </span>
      <span className="gsap-title-end inline-block text-red-500 drop-shadow-2xl">
        SlayeR
      </span>
    </h2>
  );
}

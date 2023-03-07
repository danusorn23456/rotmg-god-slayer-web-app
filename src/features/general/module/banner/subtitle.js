import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap"

export function Subtitle({ ...rest }) {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-sub-title",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1 }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <p className="gsap-sub-title text-xl md:text-3xl text-center text-white drop-shadow-2xl">
        Lookin' for chill doods We love Anime Titties Anti hack but not anti
        crash 😎
      </p>
    </div>
  );
}

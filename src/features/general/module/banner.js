import React from "react";
import backgroundImage from "assets/images/rotmg-wall-1.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function Banner({ onGoDown }) {
  return (
    <div className="relative h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Gradient Area */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black"></div>
      {/* Main Content */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-col space-y-4 select-none">
          <h2 className="text-7xl md:text-9xl text-center">
            <span className="text-orange-500 drop-shadow-2xl">GoD</span>
            <span className="text-red-500 drop-shadow-2xl">SlayeR</span>
          </h2>
          <p className="text-xl md:text-3xl text-center text-white drop-shadow-2xl">
          Lookin' for chill doods
We love Anime Titties
Anti hack but not anti crash 😎
          </p>
        </div>
      </div>
      {/* The Symbol That CLick To Scroll DOwn */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-4">
        <ChevronDownIcon className="w-8 h-8 text-white inline-block opacity-50 cursor-pointer" onClick={onGoDown} />
      </div>
    </div>
  );
}

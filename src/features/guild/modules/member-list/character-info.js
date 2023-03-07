import React from 'react'
import fameImage from "assets/images/fame.png"
// props of this
// characters
// fame
// guild_rank
// name
// star_rank

export function CharacterInfo({ name, fame, guild_rank, ...rest }) {
  return (
    <div
      {...rest}
      className="gsap-card bg-zinc-500 w-full max-w-[640px] rounded-sm flex"
    >
      <div className="flex-1 flex flex-col space-y-2 p-4">
        <div className="flex items-end space-x-2">
          {/* name */}
          <p className="font-8bit leading-none text-md text-green-400 drop-shadow-lg">
            {name}
          </p>
          {/* fame */}
          <div className="flex leading-none items-center space-x-1 text-white">
            &nbsp;(
            <img className="scale-125" src={fameImage} width={16} alt="fame symbol" />
            <p className="font-8bit text-xs text-white drop-shadow-lg">
              {fame}
            </p>
            &nbsp;)
          </div>
        </div>
        {/* rank */}
        <p className="font-8bit text-xs text-white drop-shadow-lg">
          {guild_rank}
        </p>
      </div>
      <div className="flex-1 w-full h-full p-4 flex flex-col justify-end items-end">
        <div className="flex-1">&nbsp;</div>
        {/* gear slot */}
        {/* <div className="flex-1 flex space-x-2">
          <div className="w-8 h-8 bg-zinc-700 rounded-sm" />
          <div className="w-8 h-8 bg-zinc-700 rounded-sm" />
          <div className="w-8 h-8 bg-zinc-700 rounded-sm" />
          <div className="w-8 h-8 bg-zinc-700 rounded-sm" />
        </div> */}
      </div>
    </div>
  );
}
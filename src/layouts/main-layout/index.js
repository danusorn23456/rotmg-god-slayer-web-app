import React from "react";

export function MainLayout({ children, ...rest }) {
  return (
    <div className="flex flex-col">
      <div className="absolute z-10 w-screen bg-black">
          <div className="flex space-x-4 p-2">
            <a href="/" className="text-white text-2xl">Home</a>
            <a href="https://remaster.realmofthemadgod.com/?page_id=15" rel="noreferrer" target="_blank" className="text-white text-2xl">News</a>
            <a href="/member" className="text-white text-2xl">Members</a>
            <a href="https://discord.gg/reUJxHF83M" rel="noreferrer" target="_blank" className="text-white text-2xl">Discord</a>
          </div>
      </div>
      <main className="z-0">{children}</main>
    </div>
  );
}

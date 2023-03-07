import {
  PATH_ROTMG_NEWS,
  PATH_HOME_PAGE,
  PATH_MEMBERS_PAGE,
  PATH_DISCORD_INVITE,
} from "constraint";
import React from "react";

export function MainLayout({ children, ...rest }) {
  const links = [
    {
      href: PATH_HOME_PAGE,
      label: "Home",
    },
    {
      href: PATH_ROTMG_NEWS,
      label: "News",
    },
    {
      href: PATH_MEMBERS_PAGE,
      label: "Members",
    },
    {
      href: PATH_DISCORD_INVITE,
      label: "Discord",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="fixed top-0 left-0 w-full z-10 bg-black">
        <div className="flex space-x-4 p-2">
          {links.map(({ label, ...rest }, idx) => (
            <a
              key={idx}
              {...rest}
              className="text-white text-2xl duration-150 hover:text-red-500"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <main className="z-0">{children}</main>
    </div>
  );
}

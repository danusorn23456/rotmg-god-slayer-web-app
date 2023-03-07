import React from "react";

export function Button({ children, ...rest }) {
  return (
    <button
      className="bg-[#D18B06] font-bold uppercase border-4 rounded-sm border-[#FFB740] text-white px-4 py-1"
      {...rest}
    >
      {children}
    </button>
  );
}

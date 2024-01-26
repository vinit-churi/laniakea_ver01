import React from "react";

const divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`block w-[90%] h-0 max-w-[1024px] mx-auto border-t-2 border-stone-300 ${className}`}
    ></div>
  );
};

export default divider;

import React from "react";

import Image from "next/image";
const QuickLinks = () => {
  return (
    <div className=" mx-auto my-16 flex w-max  max-w-full gap-16 max-[500px]:gap-4">
      <div className="py-8">
        <Image
          height={96}
          width={96}
          sizes=""
          // style={{
          //   width: "64px",
          //   height: "64px",
          // }}
          alt="support"
          src="/images/local_mall_dark.svg"
          className="mx-auto block max-[500px]:h-[64px] max-[500px]:w-[64px]"
        />
        <h2 className="mt-4 text-center text-[28px] font-normal leading-9 text-red-950 max-[500px]:text-sm">
          Store
        </h2>
        <p className="mt-2 text-center text-sm font-normal leading-tight text-red-950">
          Learn more ›
        </p>
      </div>
      <div className="py-8">
        <Image
          height={96}
          width={96}
          alt="support"
          src="/images/headset_mic.svg"
          className="mx-auto block max-[500px]:h-[64px] max-[500px]:w-[64px]"
        />
        <h2 className="mt-4 text-center text-[28px] font-normal leading-9 text-red-950 max-[500px]:text-sm">
          Support
        </h2>
        <p className="mt-2 text-center text-sm font-normal leading-tight text-red-950">
          Learn more ›
        </p>
      </div>
      <div className="py-8">
        <Image
          height={96}
          width={96}
          alt="support"
          src="/images/voice_selection.svg"
          className="mx-auto block max-[500px]:h-[64px] max-[500px]:w-[64px]"
        />
        <h2 className="mt-4 text-center text-[28px] font-normal leading-9 text-red-950 max-[500px]:text-sm">
          Chat with us
        </h2>
        <p className="mt-2 text-center text-sm font-normal leading-tight text-red-950">
          Learn more ›
        </p>
      </div>
    </div>
  );
};

export default QuickLinks;

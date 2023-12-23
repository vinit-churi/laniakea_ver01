import Image from "next/image";
import React from "react";

const LatestTrends = () => {
  return (
    <div className="mx-auto my-[128px] flow-root w-[90%] max-w-[1024px]">
      {/* Your component content goes here */}
      <div className="text-center text-[45px] font-normal leading-[52px] text-red-950 max-[725px]:mx-auto max-[725px]:w-72 max-[725px]:text-4xl max-[725px]:leading-[44px]">
        Discover The Latest Trends
      </div>
      <div className="mt-16 flex w-full gap-8 max-[725px]:flex-col">
        <div className="relative aspect-[3/4] flex-1">
          <Image
            src="/images/trends_01.webp"
            alt="jewelry"
            fill={true}
            className="aspect-[3/4] rounded-2xl outline outline-2 outline-white"
          />
        </div>
        <div className="relative aspect-[3/4] flex-1">
          <Image
            src="/images/trends_02.webp"
            alt="jewelry"
            fill={true}
            className="aspect-[3/4] rounded-2xl object-center outline outline-2 outline-white"
          />
        </div>
        <div className="relative aspect-[3/4] flex-1">
          <Image
            src="/images/trends_03.webp"
            alt="jewelry"
            fill={true}
            className="aspect-[3/4] rounded-2xl object-center outline outline-2 outline-white"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestTrends;

import Image from "next/image";
import React from "react";

const LatestTrends = () => {
  return (
    <div className="flow-root my-[128px] w-[90%] max-w-[1024px] mx-auto">
      {/* Your component content goes here */}
      <div className="text-center text-red-950 text-[45px] font-normal leading-[52px]">
        Discover The Latest Trends
      </div>
      <div className="flex gap-8 w-full mt-16">
        <div className="flex-1 relative rounded-2xl aspect-[3/4] bg-red-300">
          <Image
            src="/images/trends_01.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="flex-1 relative rounded-2xl aspect-[3/4] bg-red-300">
          <Image
            src="/images/trends_02.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="flex-1 relative rounded-2xl aspect-[3/4] bg-red-300">
          <Image
            src="/images/trends_03.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestTrends;

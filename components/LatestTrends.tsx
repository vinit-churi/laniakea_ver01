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
        <div className="flex-1 relative aspect-[3/4]">
          <Image
            src="/images/trends_01.webp"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="aspect-[3/4] rounded-2xl outline-2 outline-white outline"
          />
        </div>
        <div className="flex-1 relative aspect-[3/4]">
          <Image
            src="/images/trends_02.webp"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center aspect-[3/4] rounded-2xl outline-2 outline-white outline"
          />
        </div>
        <div className="flex-1 relative aspect-[3/4]">
          <Image
            src="/images/trends_03.webp"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center aspect-[3/4] rounded-2xl outline-2 outline-white outline"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestTrends;

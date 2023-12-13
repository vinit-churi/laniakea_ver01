import Image from "next/image";
import React from "react";

const JewelryMagicDiscovery = () => {
  return (
    <div className="flow-root">
      <h2 className="mt-[128px] w-[601px] mx-auto text-center text-red-950 text-[45px] font-normal leading-[52px]">
        Discover the Magic of Jewelry Collection
      </h2>
      <div className="gap-[32px] grid grid-cols-2 w-[90%] max-w-[1024px] mx-auto mt-[64px] mb-[128px]">
        <div className="rounded-2xl w-full aspect-square relative">
          <Image
            src="/images/discover_01.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="rounded-2xl w-full aspect-square  relative">
          <Image
            src="/images/discover_02.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="rounded-2xl w-full aspect-square  relative">
          <Image
            src="/images/discover_03.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="rounded-2xl w-full aspect-square relative">
          <Image
            src="/images/discover_04.png"
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

export default JewelryMagicDiscovery;

import Image from "next/image";
import React from "react";

const JewelryMagicDiscovery = () => {
  return (
    <div className="flow-root">
      <h2 className="mt-[128px] w-[90%] max-w-[601px] mx-auto text-center text-red-950 text-[45px] font-normal leading-[52px]">
        Discover the Magic of Jewelry Collection
      </h2>
      <div className="gap-[32px] grid grid-cols-2 max-[700px]:grid-cols-1 w-[90%] max-[900px]: max-w-[1024px] mx-auto mt-[64px] mb-[128px]">
        <div className="w-full aspect-square relative">
          <Image
            src="/images/discover_01.webp"
            alt="jewelry"
            fill={true}
            className="object-center rounded-2xl outline-2 outline-white outline"
          />
        </div>
        <div className="w-full aspect-square relative">
          <Image
            src="/images/discover_02.webp"
            alt="jewelry"
            fill={true}
            className="object-center rounded-2xl outline-2 outline-white outline"
          />
        </div>
        <div className="w-full aspect-square relative">
          <Image
            src="/images/discover_03.webp"
            alt="jewelry"
            fill={true}
            className="object-center rounded-2xl outline-2 outline-white outline"
          />
        </div>
        <div className="w-full aspect-square relative">
          <Image
            src="/images/discover_04.webp"
            alt="jewelry"
            fill={true}
            className="object-center rounded-2xl outline-2 outline-white outline"
          />
        </div>
      </div>
    </div>
  );
};

export default JewelryMagicDiscovery;

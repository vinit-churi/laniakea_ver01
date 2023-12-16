import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const ShineTheDreams = () => {
  return (
    <div className="bg-primaryBackground flow-root py-[128px] ">
      <div className="w-[90%] mx-auto max-w-[1024px] text-center text-orange-800 text-base font-medium leading-normal">
        SHINE THE DREAMS
      </div>
      <div className="w-[90%] mx-auto max-w-[1024px] mt-2 text-center text-red-950 text-[45px] font-normal  leading-[52px]">
        Style With Precious Simplicity
      </div>
      <div className="w-[90%] mx-auto max-w-[1024px] mt-4 text-center text-red-950 text-sm font-normal  leading-tight">
        Embrace the elegance of simplicity with our exquisite jewelry
        collection, where precious metals and delicate designs intertwine to
        create pieces that embody timeless beauty.
        <br />
        <br />
        Let your dreams sparkle with our jewelry, the perfect adornment to
        celebrate life&apos;s special moments and everyday joys.
      </div>
      <div className="w-[90%] mx-auto max-w-[1024px] my-[64px] grid grid-rows-2 grid-cols-3 gap-8">
        <Image
          src="/images/dream_01.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-tl-[160px] rounded-tr-[16px] rounded-b-[16px] relative w-full aspect-square outline-2 outline-white outline"
        />
        <Image
          src="/images/dream_02.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-t-[160px] rounded-b-[16px] relative w-full aspect-square outline-2 outline-white outline"
        />
        <Image
          src="/images/dream_03.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-tl-[160px] rounded-tr-[16px] rounded-b-[16px] relative w-full aspect-square outline-2 outline-white outline"
        />
        <Image
          src="/images/dream_04.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-t-[16px] rounded-bl-[16px] rounded-br-[160px] relative w-full aspect-square outline-2 outline-white outline"
        />
        <Image
          src="/images/dream_05.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-t-[16px] rounded-b-[160px] relative w-full aspect-square outline-2 outline-white outline"
        />
        <Image
          src="/images/dream_06.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="rounded-t-[16px] rounded-bl-[160px] rounded-br-[16px] relative w-full aspect-square outline-2 outline-white outline"
        />
      </div>
      <Button className=" bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full mx-auto w-[187px] h-[40px] flex items-center justify-center gap-2">
        Explore All Categories
      </Button>
    </div>
  );
};

export default ShineTheDreams;

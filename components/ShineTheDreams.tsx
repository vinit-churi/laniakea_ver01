import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const ShineTheDreams = () => {
  return (
    <div className="flow-root bg-primaryBackground py-[128px] ">
      <div className="mx-auto w-[90%] max-w-[1024px] text-center text-base font-medium leading-normal text-orange-800">
        SHINE THE DREAMS
      </div>
      <div className="mx-auto mt-2 w-[90%] max-w-[1024px] text-center text-[45px] font-normal leading-[52px]  text-red-950">
        Style With Precious Simplicity
      </div>
      <div className="mx-auto mt-4 w-[90%] max-w-[1024px] text-center text-sm font-normal leading-tight  text-red-950">
        Embrace the elegance of simplicity with our exquisite jewelry
        collection, where precious metals and delicate designs intertwine to
        create pieces that embody timeless beauty.
        <br />
        <br />
        Let your dreams sparkle with our jewelry, the perfect adornment to
        celebrate life&apos;s special moments and everyday joys.
      </div>
      <div className="mx-auto my-[64px] grid w-[90%] max-w-[1024px] grid-cols-3 grid-rows-2 gap-8 max-[700px]:grid-cols-2 max-[700px]:grid-rows-3 max-[700px]:gap-4">
        <Image
          src="/images/dream_01.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-b-[16px] rounded-tl-[160px] rounded-tr-[16px] outline outline-2 outline-white  max-[500px]:rounded-tl-lg max-[500px]:rounded-tr-lg max-[500px]:rounded-bl-[70px] max-[500px]:rounded-br-lg" 
        />
        <Image
          src="/images/dream_02.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-b-[16px] rounded-t-[160px] outline outline-2 outline-white  max-[500px]:rounded-tl-lg max-[500px]:rounded-tr-lg max-[500px]:rounded-bl-lg max-[500px]:rounded-br-[70px] "
        />
        <Image
          src="/images/dream_03.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-b-[16px] rounded-tl-[160px] rounded-tr-[16px] outline outline-2 outline-white  max-[500px]:rounded-tl-[70px] max-[500px]:rounded-tr-lg max-[500px]:rounded-bl-[70px] max-[500px]:rounded-br-lg"
        />
        <Image
          src="/images/dream_04.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-t-[16px] rounded-bl-[16px] rounded-br-[160px] outline outline-2 outline-white  max-[500px]:rounded-tl-lg max-[500px]:rounded-tr-[70px] max-[500px]:rounded-bl-lg max-[500px]:rounded-br-[70px] "
        />
        <Image
          src="/images/dream_05.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-b-[160px] rounded-t-[16px] outline outline-2 outline-white rounded-tl-[70px] max-[500px]:rounded-tr-lg max-[500px]:rounded-bl-lg max-[500px]:rounded-br-lg"
        />
        <Image
          src="/images/dream_06.webp"
          alt="jewelry"
          width={320}
          height={320}
          className="relative aspect-square w-full rounded-t-[16px] rounded-bl-[160px] rounded-br-[16px] outline outline-2 outline-white max-[500px]:rounded-tl-lg max-[500px]:rounded-tr-[70px] max-[500px]:rounded-bl-lg max-[500px]:rounded-br-lg"
        />
      </div>
      <Button className=" mx-auto flex h-[40px] w-[187px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80">
        Explore All Categories
      </Button>
    </div>
  );
};

export default ShineTheDreams;

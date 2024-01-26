import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex w-full">
      <div className="bg-lightPink relative h-[640px] flex-[1_1_30%]">
        <div className="absolute left-[50%] top-1/2 z-[1] translate-y-[-50%]">
          <div className="text text-base font-medium leading-normal text-orange-800">
            BEAUTIFUL SELECTION
          </div>
          <div className="w-[560px] text-[45px] font-normal leading-[52px] text-red-950">
            Exquisitely Crafted Jewelry Collection
          </div>
          <div className="w-[496px] text-sm font-normal leading-tight text-black">
            Shop our wide selection of high-quality jewelry and find the perfect
            piece to elevate your style.
          </div>
          <Button className="mt-[16px] flex h-[44px] w-[105px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 max-[900px]:mx-auto">
            <Image
              src="/images/local_mall.svg"
              height={24}
              width={24}
              alt="shop"
            />
            Shop
          </Button>
        </div>
      </div>
      <div className="relative flex flex-[1_1_70%] items-center justify-center bg-white">
        <Image
          height={600}
          width={600}
          className=""
          src="/images/category_hero_image.png"
          alt="all category"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const OccasionJewelrySpotlight = () => {
  return (
    <div className="h-[364px] w-[1024px] justify-between  mx-auto flex items-center leading-[36px]">
      <h1 className="w-[265px] h-max text-[28px]">
        Discover The Perfect Jewelry For Any Occassion
      </h1>
      <div className="max-w-[496px]">
        <p className="leading-[20px] text-[14px]">
          Shop our wide selection of high-quality jewelry and find the perfect
          piece to elevate your style.
        </p>
        <Button className="mt-[16px] bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[105px] h-[44px] flex items-center justify-center gap-2">
          <Image
            src="/images/local_mall.png"
            height={24}
            width={24}
            alt="shop"
          />
          Shop
        </Button>
      </div>
    </div>
  );
};

export default OccasionJewelrySpotlight;

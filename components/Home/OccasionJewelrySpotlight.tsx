import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const OccasionJewelrySpotlight = () => {
  return (
    <div className="h-[364px] w-[90%] max-w-[1024px] justify-between max-[900px]:my-16 max-[900px]:justify-start max-[900px]:gap-8  mx-auto flex items-center leading-[36px] max-[900px]:flex-col">
      <h1 className="w-[265px]  h-max text-[28px] max-[900px]:text-center max-[900px]:text-4xl">
        Discover The Perfect Jewelry For Any Occassion
      </h1>
      <div className="max-w-[496px]">
        <p className="leading-[20px] text-[14px] max-[900px]:max-w-sm max-[900px]:font-xs  max-[900px]:text-center">
          Shop our wide selection of high-quality jewelry and find the perfect
          piece to elevate your style.
        </p>
        <Button className="mt-[16px] max-[900px]:mx-auto bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[105px] h-[44px] flex items-center justify-center gap-2">
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
  );
};

export default OccasionJewelrySpotlight;

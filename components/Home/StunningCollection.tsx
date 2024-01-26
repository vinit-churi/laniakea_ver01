import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const StunningCollection = () => {
  return (
    <div className="mx-auto my-[128px] flex w-[90%] max-w-[1024px] gap-16 max-[1130px]:my-16  max-[1130px]:flex-col max-[1130px]:gap-8">
      <div className="w-[480px] max-[1130px]:mx-auto max-[1130px]:max-w-[90%]">
        <h4 className="mb-2 text-base font-medium leading-normal text-orange-800  max-[1130px]:text-center">
          ELEGANT
        </h4>
        <h2 className="mb-2 w-[445px] text-center text-[45px] font-normal leading-[52px] text-red-950  max-[1130px]:w-full">
          Discover Our Stunning Jewelry Collection
        </h2>
        <p className="w-[480px] text-center text-sm font-normal leading-tight text-red-950  max-[1130px]:w-full">
          Experience the beauty and craftsmanship of our handcrafted jewelry.
          Each piece is meticulously designed to make you feel extraordinary.
        </p>
        <div className="flex gap-4 py-8 max-[1130px]:flex-col">
          <div className="max-[1130px]:flex-1">
            <h4 className="mb-2 w-[232px] text-base font-medium leading-normal text-red-950 max-[1130px]:w-full max-[1130px]:text-center">
              Luxury Jewelry
            </h4>
            <p className="w-[232px] text-sm font-normal leading-tight text-red-950 max-[1130px]:w-full  max-[1130px]:text-center">
              Indulge in our exquisite collection of fine jewelry, crafted with
              the finest materials.
            </p>
          </div>
          <div className="max-[1130px]:flex-1">
            <h4 className="mb-2 w-[232px] text-base font-medium leading-normal text-red-950 max-[1130px]:w-full max-[1130px]:text-center">
              Timeless Elegance
            </h4>
            <p className="w-[232px] text-sm font-normal leading-tight text-red-950 max-[1130px]:w-full  max-[1130px]:text-center">
              Discover the perfect piece that will elevate your style and leave
              a lasting impression.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 max-[1130px]:justify-center">
          <Button className="flex h-[40px] w-[112px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80">
            Top rated
          </Button>
          <Button
            variant="ghost"
            className="w-max px-3 py-2.5 text-primaryRegular transition-colors duration-300 ease-in-out hover:text-primaryRegular/80"
          >
            Explore
          </Button>
        </div>
      </div>
      <Image
        src="/images/stunning_collection.webp"
        alt="jewelry"
        width={480}
        height={480}
        className="relative mx-auto rounded-2xl outline outline-2 outline-white"
      />
    </div>
  );
};

export default StunningCollection;

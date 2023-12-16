import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const StunningCollection = () => {
  return (
    <div className="flex my-[128px] w-[90%] max-w-[1024px] mx-auto gap-16">
      <div className="w-[480px]">
        <h4 className="text-orange-800 text-base mb-2 font-medium  leading-normal">
          ELEGANT
        </h4>
        <h2 className="w-[445px] mb-2 text-red-950 text-[45px] font-normal  leading-[52px]">
          Discover Our Stunning Jewelry Collection
        </h2>
        <p className="w-[480px] text-red-950 text-sm font-normal  leading-tight">
          Experience the beauty and craftsmanship of our handcrafted jewelry.
          Each piece is meticulously designed to make you feel extraordinary.
        </p>
        <div className="py-8 flex gap-4">
          <div className="">
            <h4 className="w-[232px] text-red-950 text-base font-medium mb-2 leading-normal">
              Luxury Jewelry
            </h4>
            <p className="w-[232px] text-red-950 text-sm font-normal  leading-tight">
              Indulge in our exquisite collection of fine jewelry, crafted with
              the finest materials.
            </p>
          </div>
          <div className="">
            <h4 className="w-[232px] text-red-950 text-base font-medium mb-2 leading-normal">
              Timeless Elegance
            </h4>
            <p className="w-[232px] text-red-950 text-sm font-normal  leading-tight">
              Discover the perfect piece that will elevate your style and leave
              a lasting impression.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[112px] h-[40px] flex items-center justify-center gap-2">
            Top rated
          </Button>
          <Button
            variant="ghost"
            className="transition-colors duration-300 ease-in-out text-primaryRegular hover:text-primaryRegular/80 w-max px-3 py-2.5"
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
        className="rounded-2xl relative outline-2 outline-white outline"
      />
    </div>
  );
};

export default StunningCollection;

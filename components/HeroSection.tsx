import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="bg-slate-100 min-h-[600px] h-[calc(100vh-40px)] max-h-[760px] relative">
      <Navbar />
      <div className="absolute inset-0 bg-red-100">
        <Image
          src="/images/banner_image_1.jpg"
          objectFit="cover"
          layout="fill"
          alt="banner 1"
          className=""
        />
      </div>
      <div className="absolute bottom-[64px] w-full pl-[20px] block max-w-[1024px] mx-auto left-0 right-0">
        <ul className="relative flex flex-col gap-[8px] text-[14px] text-white ">
          <li className="opacity-60 font-medium cursor-pointer">
            Tisot Santa Crown
          </li>
          <li className="font-medium cursor-pointer">
            Silverdine Headwear Gen 3
          </li>
          <li className="opacity-60 font-medium cursor-pointer">
            Lumere Forever Ring
          </li>
          <Image
            src="/images/current_banner.svg"
            height={2}
            width={2}
            alt="current"
            className="absolute top-0 bottom-0 my-auto left-[-16px] "
          />
        </ul>
      </div>
      <div className="absolute top-0 w-[90%] max-w-[1024px] pb-[46px] mt-[110px] mx-auto left-0 right-0">
        <p className="text-center text-[#EDE0DD] text-[16px] leading-[24px] font-medium">
          Rhinestone Headband
        </p>
        <h2 className="text-center text-[45px] text-white leading-[52px]">
          SILVERDINE HEADWEAR GEN 3
        </h2>
        <p className="text-center leading-[28px] text-[22px] text-white">
          For Soft Feathery Feel
        </p>
        <div className="flex gap-[16px] mx-auto mt-[24px] py-[8px] justify-center">
          <Button
            variant={"outline"}
            className="bg-transparent rounded-full text-white"
          >
            Learn more
          </Button>
          <Button
            variant={"outline"}
            className="bg-transparent rounded-full text-white"
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

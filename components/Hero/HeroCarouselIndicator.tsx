import React from "react";
import Image from "next/image";

type TProps = {
  // slides: THeroSliderItem[];
  currentSlide: number;
};

const HeroCarouselIndicator = (props: TProps) => {
  return (
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
  );
};

export default HeroCarouselIndicator;

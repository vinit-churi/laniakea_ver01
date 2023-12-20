"use client";
import React, { useState } from "react";
import Image from "next/image";
import { slides } from "@/constants/Slider";
import { AnimatePresence, motion } from "framer-motion";

type TProps = {
  // slides: THeroSliderItem[];
  currentSlide: number;
};

const HeroCarouselIndicator = (props: TProps) => {
  const [currentSlides, setCurrentSlides] = useState(slides);
  return (
    <div className="absolute bottom-[64px] w-full pl-[20px] block max-w-[1024px] mx-auto left-0 right-0">
      <ul className="relative flex flex-col gap-[8px] text-[14px] text-white ">
        <AnimatePresence>
          {slides.slice(0, 3).map((item, index) => (
            <motion.li
              exit={{ opacity: 0, scale: 0 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              key={item.id}
              layout
              className={`${
                item.id === props.currentSlide ? "font-medium" : "opacity-60"
              } cursor-pointer`}
            >
              {item.mainTitle} {index}
            </motion.li>
          ))}
        </AnimatePresence>
        {/* <li className="opacity-60 font-medium cursor-pointer">
          Tisot Santa Crown
        </li>
        <li className="font-medium cursor-pointer">
          Silverdine Headwear Gen 3
        </li>
        <li className="opacity-60 font-medium cursor-pointer">
          Lumere Forever Ring
        </li> */}
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

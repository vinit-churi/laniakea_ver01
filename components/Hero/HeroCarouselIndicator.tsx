"use client";
import React, { useState } from "react";
import Image from "next/image";
import { slides } from "@/constants/Slider";
import { AnimatePresence, motion } from "framer-motion";
import { rotateLeft, rotateRight } from "@/utils/utils";
type TProps = {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
};

const HeroCarouselIndicator = (props: TProps) => {
  const currentSlides = [slides[props.currentSlide]];
  if (props.currentSlide === 0) {
    currentSlides.unshift(slides[slides.length - 1]);
  } else {
    currentSlides.unshift(slides[props.currentSlide - 1]);
  }

  if (props.currentSlide === slides.length - 1) {
    currentSlides.push(slides[0]);
  } else {
    currentSlides.push(slides[props.currentSlide + 1]);
  }
  return (
    <div className="absolute bottom-[64px] w-full pl-[20px] block max-w-[1024px] mx-auto left-0 right-0">
      <ul className="relative h-[80px] flex flex-col gap-[8px] text-[14px] text-white ">
        {currentSlides.map((item, index) => (
          <motion.li
            exit={{
              opacity: 0,
              height: "0",
            }}
            initial={{
              opacity: 0,
              height: "0",
            }}
            animate={{ opacity: 1, height: "30px", y: `${100 * index}%` }}
            transition={{ duration: 0.3 }}
            key={item.id}
            onClick={() => {
              if (index === 0) {
                props.prevSlide();
              }
              if (index === 2) {
                props.nextSlide();
              }
            }}
            className={`${
              item.id === props.currentSlide ? "font-medium" : "opacity-40"
            } cursor-pointer absolute`}
          >
            {item.mainTitle} {index}
          </motion.li>
        ))}
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

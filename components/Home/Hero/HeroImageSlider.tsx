"use client";
import React from "react";
import Image from "next/image";
import { slides } from "@/constants/Slider";
type TProps = {
  currentSlide: number;
};

const HeroImageSlider = (props: TProps) => {
  return (
    <div className="absolute inset-0">
      {slides.map((item) => (
        <Image
          key={item.id}
          src={item.image}
          fill
          alt={`banner ${item.image}`}
          className={`${
            item.id === props.currentSlide ? "opacity-100" : "opacity-0"
          } object-cover object-center transition-opacity duration-1000 ease-in-out`}
        />
      ))}
    </div>
  );
};

export default HeroImageSlider;

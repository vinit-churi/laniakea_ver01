"use client";
import React from "react";
import HeroImageSlider from "./HeroImageSlider";
import { useRef } from "react";
import HeroCarouselIndicator from "./HeroCarouselIndicator";
import HeroCarouselTitle from "./HeroCarouselTitle";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
const HeroAnimationController = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numberOfSlides = 4;
  const isBlocked = useRef(false);

  async function nextSlide() {
    if (isBlocked.current) return;
    isBlocked.current = true;
    setCurrentSlide((currentSlide + 1) % numberOfSlides);
    setTimeout(() => {
      isBlocked.current = false;
    }, 500);
  }

  async function prevSlide() {
    if (isBlocked.current) return;
    isBlocked.current = true;
    setCurrentSlide((currentSlide - 1 + numberOfSlides) % numberOfSlides);
    setTimeout(() => {
      isBlocked.current = false;
    }, 500);
  }
  return (
    <>
      <HeroImageSlider currentSlide={currentSlide} />
      <HeroCarouselIndicator currentSlide={currentSlide} />
      <HeroCarouselTitle currentSlide={currentSlide} />
      <Button
        onClick={prevSlide}
        className="absolute top-1/2 left-[15px] w-[34px] h-[34px] bg-white bg-opacity-60 rounded-full backdrop-blur-[6px] p-0 hover:bg-white transition-colors ease-in-out duration-300"
      >
        <Image
          src="/images/keyboard_arrow_left.svg"
          width={24}
          height={24}
          alt="arrow left"
        />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute top-1/2 right-[15px] w-[34px] h-[34px] bg-white bg-opacity-60 rounded-full backdrop-blur-[6px] p-0 hover:bg-white transition-colors ease-in-out duration-300"
      >
        <Image
          src="/images/keyboard_arrow_right.svg"
          width={24}
          height={24}
          alt="arrow left"
        />
      </Button>
    </>
  );
};

export default HeroAnimationController;

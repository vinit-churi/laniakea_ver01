"use client";
import React from "react";
import HeroImageSlider from "@/components/Home/Hero/HeroImageSlider";
import { useRef } from "react";
import HeroCarouselIndicator from "@/components/Home/Hero/HeroCarouselIndicator";
import HeroCarouselTitle from "@/components/Home/Hero/HeroCarouselTitle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const HeroAnimationController = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numberOfSlides = 7;
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
      <HeroCarouselIndicator
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <HeroCarouselTitle currentSlide={currentSlide} />
      <Button
        onClick={prevSlide}
        className="absolute left-[15px] top-1/2 h-[34px] w-[34px] rounded-full bg-white bg-opacity-60 p-0 backdrop-blur-[6px] transition-colors duration-300 ease-in-out hover:bg-white"
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
        className="absolute right-[15px] top-1/2 h-[34px] w-[34px] rounded-full bg-white bg-opacity-60 p-0 backdrop-blur-[6px] transition-colors duration-300 ease-in-out hover:bg-white"
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

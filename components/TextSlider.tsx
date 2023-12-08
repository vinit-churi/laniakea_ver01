"use client";
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/effect-fade";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
const TextSlider = () => {
  <Swiper
    // install Swiper modules
    modules={[EffectFade]}
    spaceBetween={50}
    slidesPerView={3}
    vertical={true}
    loop={true}
    onActiveIndexChange={(param) => console.log("active index", param)}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={(param) => console.log("slide change", param)}
    effect={"fade"}
  >
    <SwiperSlide>
      <div className="w-full bg-red-400 border-yellow-200 border-2 border-solid h-56">
        slide 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="w-full bg-red-400 border-yellow-200 border-2 border-solid h-56">
        slide 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="w-full bg-red-400 border-yellow-200 border-2 border-solid h-56">
        slide 3
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="w-full bg-red-400 border-yellow-200 border-2 border-solid h-56">
        slide 4
      </div>
    </SwiperSlide>
  </Swiper>;
};

export default TextSlider;

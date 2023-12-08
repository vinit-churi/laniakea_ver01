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

const MainSlider = () => {
  const swiperRef = React.useRef(null);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  React.useEffect(() => {
    // const swiper = swiperRef.current;
    // console.log("swiper", swiper?.swiper);
    // const timer = setInterval(() => {
    //   swiper?.swiper.slideNext();
    // }, 3000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);
  const handleSlide = (e) => {
    e.preventDefault();
    const { goto } = e.target;
    console.log("goto", goto.value);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(goto.value);
    }
  };
  return (
    <Swiper
      ref={swiperRef}
      // install Swiper modules
      modules={[EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onActiveIndexChange={(param) => console.log("active index", param)}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(param) => console.log("slide change", param)}
      effect={"fade"}
    >
      {/* <SwiperSlide>
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
      </SwiperSlide> */}
      <SwiperSlide>
        <img
          className="h-[800px] w-full object-cover"
          src="https://swiperjs.com/demos/images/nature-1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[800px] w-full object-cover"
          src="https://swiperjs.com/demos/images/nature-2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[800px] w-full object-cover"
          src="https://swiperjs.com/demos/images/nature-3.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[800px] w-full object-cover"
          src="https://swiperjs.com/demos/images/nature-4.jpg"
        />
      </SwiperSlide>
      <button onClick={slideNext}>next</button>
      <button onClick={slidePrev}>prev</button>
      <form onSubmit={handleSlide}>
        <input type="number" name="goto" />
      </form>
    </Swiper>
  );
};

export default MainSlider;

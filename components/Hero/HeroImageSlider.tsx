import React, { useEffect } from "react";
import Image from "next/image";
// import { THeroSliderItem } from "@/types/types";
import { slides } from "@/constants/Slider";
import { motion, AnimatePresence } from "framer-motion";
type TProps = {
  // slides: THeroSliderItem[];
  currentSlide: number;
};

const HeroImageSlider = (props: TProps) => {
  console.log(slides[props.currentSlide].image);
  const [firstRender, setFirstRender] = React.useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);
  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={props.currentSlide}
          initial={firstRender ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        >
          <Image
            src={slides[props.currentSlide].image}
            objectFit="cover"
            layout="fill"
            alt="banner 1"
            className=""
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroImageSlider;

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

type TProps = {
  // slides: THeroSliderItem[];
  currentSlide: number;
};

import { slides as slidesData } from "@/constants/Slider";

const HeroCarouselTitle = (props: TProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={props.currentSlide}
        initial={{ opacity: 0, y: "-100px" }}
        animate={{ opacity: 1, y: "0px" }}
        exit={{ opacity: 0, y: "-100px" }}
        className="absolute top-0 w-[90%] max-w-[1024px] pb-[46px] mt-[110px] mx-auto left-0 right-0"
      >
        <p className="text-center text-[#EDE0DD] text-[16px] leading-[24px] font-medium">
          {slidesData[props.currentSlide].headTitle}
        </p>
        <h2 className="text-center text-[45px] text-white leading-[52px]">
          {slidesData[props.currentSlide].mainTitle}
        </h2>
        <p className="text-center leading-[28px] text-[22px] text-white">
          {slidesData[props.currentSlide].info}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroCarouselTitle;

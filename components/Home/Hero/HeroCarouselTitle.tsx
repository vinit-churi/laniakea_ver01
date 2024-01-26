import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type TProps = {
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
        className="absolute left-0 right-0 top-0 mx-auto mt-[110px] w-[90%] max-w-[1024px] pb-[46px]"
      >
        <p className="text-center text-[16px] font-medium leading-[24px] text-[#EDE0DD]">
          {slidesData[props.currentSlide].headTitle}
        </p>
        <h2 className="text-center text-[45px] uppercase leading-[52px] text-white">
          {slidesData[props.currentSlide].mainTitle}
        </h2>
        <p className="text-center text-[22px] leading-[28px] text-white">
          {slidesData[props.currentSlide].info}
        </p>
        <div className="mx-auto mt-[24px] flex justify-center gap-[16px] py-[8px]">
          <Button
            variant={"outline"}
            className="rounded-full bg-transparent text-white"
          >
            Learn more
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full bg-transparent text-white"
          >
            Shop now
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroCarouselTitle;

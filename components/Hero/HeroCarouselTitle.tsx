import { Button } from "../ui/button";

type TProps = {
  // slides: THeroSliderItem[];
  currentSlide: number;
};

const HeroCarouselTitle = (props: TProps) => {
  return (
    <div className="absolute top-0 w-[90%] max-w-[1024px] pb-[46px] mt-[110px] mx-auto left-0 right-0">
      <p className="text-center text-[#EDE0DD] text-[16px] leading-[24px] font-medium">
        Rhinestone Headband
      </p>
      <h2 className="text-center text-[45px] text-white leading-[52px]">
        SILVERDINE HEADWEAR GEN 3
      </h2>
      <p className="text-center leading-[28px] text-[22px] text-white">
        For Soft Feathery Feel
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
    </div>
  );
};

export default HeroCarouselTitle;

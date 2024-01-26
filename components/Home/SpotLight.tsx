import React from "react";
import Image from "next/image";
const SpotLight = () => {
  return (
    <div className="mx-auto my-[128px] flow-root w-[90%] max-w-[1024px]">
      <div className=" text-center text-base font-medium leading-normal text-orange-800">
        DAZZLE THE AUDIENCE
      </div>
      <div className="mt-2 text-center text-[45px] font-normal leading-[52px]  text-red-950">
        Spotlight
      </div>
      <div className="mx-auto mt-4 w-full max-w-[992px] text-center text-sm font-normal leading-tight text-red-950 max-[1120px]:max-w-[600px]">
        Step into the spotlight and let your inner radiance shine with exquisite
        jewelry that captures the essence of your unique style. Our dazzling
        collection of handcrafted pieces will elevate your every look,
        transforming you into a captivating vision that commands attention.
        <br />
        <br />
        With every piece you adorn, you become a captivating beacon of light,
        drawing admiring glances and captivating the hearts of all who gaze upon
        you.
      </div>
      <div className=" mt-16  flex h-[288px] max-w-[1024px] gap-8 max-[1120px]:h-[700px] max-[1120px]:flex-col max-[650px]:h-[356px]">
        <div className="transition-height peer relative order-1 aspect-[16/9] h-[121px] shrink grow self-center   duration-300 ease-in-out hover:h-full max-[1120px]:h-[300px] max-[650px]:h-[162px]">
          <Image
            src="/images/spotlight_01.webp"
            alt="jewelry"
            fill={true}
            className="rounded-2xl outline outline-2 outline-white"
          />
        </div>

        <div className="transition-height peer relative order-3 aspect-[16/9] h-[121px] shrink grow self-center  duration-300 ease-in-out hover:h-full max-[1120px]:h-[300px] max-[650px]:h-[162px]">
          <Image
            src="/images/spotlight_03.webp"
            alt="jewelry"
            fill={true}
            className="rounded-2xl outline outline-2 outline-white"
          />
        </div>
        <div className="transition-height relative order-2 aspect-[16/9] h-full shrink grow self-center duration-300 ease-in-out  peer-hover:h-[121px] max-[1120px]:peer-hover:h-[300px]  max-[650px]:peer-hover:h-[162px]">
          <Image
            src="/images/spotlight_02.webp"
            alt="jewelry"
            fill={true}
            className="rounded-2xl outline outline-2 outline-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;

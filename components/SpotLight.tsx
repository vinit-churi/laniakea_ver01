import React from "react";
import Image from "next/image";
const SpotLight = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1024px] flow-root my-[128px]">
      <div className=" text-center text-orange-800 text-base font-medium leading-normal">
        DAZZLE THE AUDIENCE
      </div>
      <div className="mt-2 text-center text-red-950 text-[45px] font-normal  leading-[52px]">
        Spotlight
      </div>
      <div className="max-w-[992px] w-full mt-4 text-center text-red-950 text-sm font-normal leading-tight">
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
      <div className=" h-[288px]  flex max-w-[1024px] mt-16 gap-8">
        <div className="rounded-2xl transition-height ease-in-out duration-300 hover:h-full grow shrink h-[121px] peer order-1 self-center aspect-[16/9]   relative">
          <Image
            src="/images/spotlight_01.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>

        <div className="rounded-2xl transition-height ease-in-out duration-300 hover:h-full grow shrink h-[121px] peer order-3 self-center aspect-[16/9]  relative">
          <Image
            src="/images/spotlight_03.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
        <div className="rounded-2xl grow self-center transition-height ease-in-out duration-300 shrink h-full peer-hover:h-[121px] order-2 aspect-[16/9]  relative">
          <Image
            src="/images/spotlight_02.png"
            alt="jewelry"
            fill={true}
            objectFit="cover"
            className="object-center rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;

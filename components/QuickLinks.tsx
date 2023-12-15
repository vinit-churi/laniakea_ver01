import React from "react";

import Image from "next/image";
const QuickLinks = () => {
  return (
    <div className=" w-max mx-auto  my-16 flex gap-16">
      <div className="py-8">
        <Image
          height={96}
          width={96}
          alt="support"
          src="/images/local_mall_dark.svg"
          className="mx-auto block"
        />
        <h2 className="text-center text-red-950 text-[28px] font-normal mt-4 leading-9">
          Store
        </h2>
        <p className="text-center text-red-950 text-sm font-normal mt-2 leading-tight">
          Learn more ›
        </p>
      </div>
      <div className="py-8">
        <Image
          height={96}
          width={96}
          alt="support"
          src="/images/headset_mic.svg"
          className="mx-auto block"
        />
        <h2 className="text-center text-red-950 text-[28px] font-normal mt-4 leading-9">
          Support
        </h2>
        <p className="text-center text-red-950 text-sm font-normal mt-2 leading-tight">
          Learn more ›
        </p>
      </div>
      <div className="py-8">
        <Image
          height={96}
          width={96}
          alt="support"
          src="/images/voice_selection.svg"
          className="mx-auto block"
        />
        <h2 className="text-center text-red-950 text-[28px] font-normal mt-4 leading-9">
          Chat with us
        </h2>
        <p className="text-center text-red-950 text-sm font-normal mt-2 leading-tight">
          Learn more ›
        </p>
      </div>
    </div>
  );
};

export default QuickLinks;

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const NewCollection = () => {
  return (
    <div className='bg-[url("/images/n_c_bg.png")] bg-cover bg-center py-[128px]'>
      <h2 className="mb-16 text-center text-[45px] font-normal leading-[52px]  text-red-950">
        New Collection
      </h2>
      <div className="mx-auto grid  w-[1024px] grid-cols-3 gap-8 max-[1070px]:w-[90%] max-[950px]:grid-cols-2 max-[950px]:gap-4">
        <div className="relative aspect-square w-full">
          <Image
            fill={true}
            src="/images/collection_01.webp"
            alt="craftsmanship 1"
            className="relative aspect-square w-full rounded-t-[16px] rounded-bl-[16px] rounded-br-[160px] outline outline-2 outline-white"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-b-[300px] rounded-t-3xl bg-white max-[950px]:col-start-1 max-[950px]:row-start-2">
          <div className="max-[600px]:text-large w-[150px] text-center text-[28px] font-normal leading-9 text-orange-800 max-[600px]:w-[150px] max-[500px]:w-[120px] max-[500px]:text-[22px] max-[500px]:leading-tight max-[420px]:w-[120px] max-[420px]:text-sm">
            Boost the aesthetics of your style
          </div>
          <Button className=" mx-auto flex h-[40px] w-[131px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 max-[600px]:h-[40px] max-[600px]:w-[110px] max-[520px]:h-[40px] max-[520px]:w-[110px] max-[500px]:text-sm max-[420px]:h-[24px] max-[420px]:w-[72px]">
            Explore
          </Button>
        </div>
        <div className="relative aspect-square w-full">
          <Image
            fill={true}
            src="/images/collection_02.webp"
            alt="craftsmanship 2"
            className="relative aspect-square w-full rounded-b-[16px] rounded-tl-[16px] rounded-tr-[160px] outline outline-2 outline-white"
          />
        </div>
        <div className="relative aspect-square w-full">
          <Image
            fill={true}
            src="/images/collection_03.webp"
            alt="craftsmanship 3"
            className="relative aspect-square w-full rounded-t-[16px] rounded-bl-[160px] rounded-br-[16px] outline outline-2 outline-white"
          />
        </div>
        <div className="relative aspect-square w-full">
          <Image
            fill={true}
            src="/images/collection_04.webp"
            alt="craftsmanship 4"
            className="relative aspect-square w-full rounded-b-[16px] rounded-t-[160px] outline outline-2 outline-white"
          />
        </div>
        <div className="relative aspect-square w-full">
          <Image
            fill={true}
            src="/images/collection_05.webp"
            alt="craftsmanship 5"
            className="relative aspect-square w-full rounded-b-[16px] rounded-tl-[160px] rounded-tr-[16px] outline outline-2 outline-white"
          />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const NewCollection = () => {
  return (
    <div className='bg-[url("/images/collection-background.png")] bg-cover bg-center py-[128px]'>
      <h2 className="text-center text-red-950 text-[45px] font-normal mb-16  leading-[52px]">
        New Collection
      </h2>
      <div className="grid grid-cols-3 gap-8 w-[90%] max-w-[1024px] mx-auto">
        <div className="relative w-full aspect-square">
          <Image
            fill={true}
            src="/images/collection_01.png"
            alt="craftsmanship"
          />
        </div>
        <div className="bg-white h-full w-full rounded-t-3xl rounded-b-[300px] flex flex-col gap-4 justify-center items-center">
          <div className="w-[150px] text-center text-orange-800 text-[28px] font-normal   leading-9">
            Boost the aesthetics of your style
          </div>
          <Button className=" bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full mx-auto w-[131px] h-[40px] flex items-center justify-center gap-2">
            Explore
          </Button>
        </div>
        <div className="relative w-full aspect-square">
          <Image
            fill={true}
            src="/images/collection_02.png"
            alt="craftsmanship"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            fill={true}
            src="/images/collection_03.png"
            alt="craftsmanship"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            fill={true}
            src="/images/collection_04.png"
            alt="craftsmanship"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            fill={true}
            src="/images/collection_05.png"
            alt="craftsmanship"
          />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;

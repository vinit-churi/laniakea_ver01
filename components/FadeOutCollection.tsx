import Image from "next/image";
import React from "react";

const FadeOutCollection = () => {
  return (
    <div className="before:contents-[''] after:contents-[''] relative mx-auto my-[128px] flex w-[100%] max-w-[1114px] justify-center  gap-8 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:from-30% before:via-white/70 before:via-60% before:to-transparent before:to-100% after:absolute after:right-0 after:top-0 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:from-30% after:via-white/70 after:via-60% after:to-transparent after:to-100% max-[900px]:mt-16 max-[500px]:gap-4">
      <div className="relative aspect-[16/9] w-[688px]  shrink-0 max-[900px]:w-[500px] max-[715px]:w-[300px] max-[500px]:w-[200px]">
        <Image
          fill
          src="/images/fade_out_collection.png"
          alt="collection"
          className="cover rounded-2xl object-cover object-center"
        />
      </div>
      <div className="relative aspect-[16/9] w-[688px]   shrink-0 max-[900px]:w-[500px] max-[715px]:w-[300px] max-[500px]:w-[200px]">
        <Image
          fill
          src="/images/fade_out_collection.png"
          alt="collection"
          className="cover rounded-2xl object-cover object-center"
        />
      </div>
      <div className="relative aspect-[16/9] w-[688px]  shrink-0 max-[900px]:w-[500px] max-[715px]:w-[300px] max-[500px]:w-[200px]">
        <Image
          fill
          src="/images/fade_out_collection.png"
          alt="collection"
          className="cover rounded-2xl object-cover object-center"
        />
      </div>
    </div>
  );
};

export default FadeOutCollection;

import Image from "next/image";
import React from "react";

const FadeOutCollection = () => {
  return (
    <div
      className="before:contents-[''] before:h-full before:w-32 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r before:from-white before:from-30% before:via-white/70 before:via-60% before:to-transparent before:to-100% 
               after:contents-[''] after:h-full after:w-32 after:absolute after:right-0 after:top-0 after:bg-gradient-to-l after:from-white after:from-30% after:via-white/70 after:via-60% after:to-transparent after:to-100% 
    relative mx-auto overflow-hidden flex justify-center gap-8 w-[100%] max-w-[1114px] my-[128px]"
    >
      <Image
        height={387}
        width={688}
        src="/images/fade_out_collection.png"
        alt="collection"
        className="rounded-2xl w-[688px] h-[387px] flex-1 shrink-0"
      />
      <Image
        height={387}
        width={688}
        src="/images/fade_out_collection.png"
        alt="collection"
        className="rounded-2xl w-[688px] h-[387px] flex-1 shrink-0"
      />
      <Image
        height={387}
        width={688}
        src="/images/fade_out_collection.png"
        alt="collection"
        className="rounded-2xl w-[688px] h-[387px] flex-1 shrink-0"
      />
    </div>
  );
};

export default FadeOutCollection;

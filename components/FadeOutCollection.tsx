import Image from "next/image";
import React from "react";

const FadeOutCollection = () => {
  return (
    <div
      className="before:contents-[''] before:h-full before:w-28 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r before:from-white before:from-30%  before:to-transparent before:to-90%  after:contents-[''] after:h-full after:w-28 after:absolute
    after:right-0 after:top-0 after:bg-gradient-to-l after:from-white after:from-30%  after:to-transparent after:to-90% 
    relative   mx-auto overflow-hidden flex justify-center gap-8 w-[90%] max-w-[1024px] my-[128px]"
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

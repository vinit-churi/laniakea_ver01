import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-red-300">
      <div className="relative aspect-[9/4] w-full">
        <Image
          fill
          className="h-full w-full object-cover object-right-top"
          src="/images/category_hero_image.webp"
          alt="all category"
        />
        <div>some content</div>
      </div>
    </div>
  );
};

export default page;

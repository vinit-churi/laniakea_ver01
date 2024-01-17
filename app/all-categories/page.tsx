import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-red-300">
      <div className="relative aspect-[9/4] w-full">
        <Image
          height={400}
          width={400}
          className="h-full w-full object-contain object-right-top"
          src="/images/category_hero_image.png"
          alt="all category"
        />
        <div>some content</div>
      </div>
    </div>
  );
};

export default page;

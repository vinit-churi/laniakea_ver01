import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MaterialCategories } from "@/constants/Categories";
const Materials = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1024px] py-32">
      <div className="text-center text-base font-medium leading-normal text-orange-800">
        ETHICALLY SOURCED MATERIAL
      </div>
      <div className="mb-4 text-center text-[45px] font-normal leading-[52px] text-red-950">
        Explore By Material
      </div>
      <div className="w-full text-justify text-sm font-normal leading-tight text-red-950">
        When it comes to jewelry, there is no one-size-fits-all material. The
        materials used to craft these treasures play a vital role in their
        value, durability, and aesthetic appeal. <br />
        <br />
        The right piece for you will depend on your personal style, budget, and
        lifestyle. If you&apos;re not sure where to start, exploring by material
        is a great way to narrow down your options.
      </div>
      <div>
        <div className="my-8 grid grid-cols-4 gap-8">
          {MaterialCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="relative h-[187px] w-[187px]">
                <Image
                  src={category.imgSrc}
                  layout="fill"
                  objectFit="contain"
                  alt={category.title}
                />
              </div>
              <div className="w-[232px] text-center text-sm font-medium leading-tight text-zinc-900">
                {category.title}
              </div>
            </div>
          ))}
        </div>
        <Button className=" mx-auto flex h-[40px] w-[187px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80">
          Explore All Categories
        </Button>
      </div>
    </div>
  );
};

export default Materials;

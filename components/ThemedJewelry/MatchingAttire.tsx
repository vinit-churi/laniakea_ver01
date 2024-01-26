import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type Category = {
  id: number;
  title: string;
  imgSrc: string;
};

type TMatchingAttire = {
  leftImage: string;
  themeSet: Category[];
  className?: string;
};

const MatchingAttire = ({
  leftImage,
  themeSet,
  className,
}: TMatchingAttire) => {
  return (
    <>
      <div className="mx-auto flex w-[90%] max-w-[1024px] gap-16 py-4">
        <div className="relative aspect-[9/16] flex-[1_1_60%] rounded-lg">
          <Image
            src={leftImage}
            fill
            alt="theme hero"
            className="object-cover"
          />
        </div>
        <div
          className={cn(
            "grid flex-[1_1_40%] grid-rows-4 gap-8 rounded-[32px] bg-rose-200 p-8",
            className,
          )}
        >
          {themeSet.map((item) => (
            <div
              key={item.id}
              className="flex h-auto w-full cursor-pointer flex-col transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative h-full w-full ">
                <Image
                  src={item.imgSrc}
                  layout="fill"
                  objectFit="contain"
                  alt={item.title}
                  className=""
                />
              </div>
              <div className="text-center text-sm font-medium leading-tight text-red-950">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button className=" mx-auto my-8 flex h-[40px] w-[187px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80">
        Explore All Categories
      </Button>
    </>
  );
};

export default MatchingAttire;

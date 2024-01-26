import { Button } from "@/components/ui/button";
import { ProductCategories } from "@/constants/Categories";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="bg-lightPink relative h-[640px] flex-[1_1_30%]">
          <div className="absolute left-[50%] top-1/2 z-[1] translate-y-[-50%]">
            <div className="text text-base font-medium leading-normal text-orange-800">
              BEAUTIFUL SELECTION
            </div>
            <div className="w-[560px] text-[45px] font-normal leading-[52px] text-red-950">
              Exquisitely Crafted Jewelry Collection
            </div>
            <div className="w-[496px] text-sm font-normal leading-tight text-black">
              Shop our wide selection of high-quality jewelry and find the
              perfect piece to elevate your style.
            </div>
            <Button className="mt-[16px] flex h-[44px] w-[105px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 max-[900px]:mx-auto">
              <Image
                src="/images/local_mall.svg"
                height={24}
                width={24}
                alt="shop"
              />
              Shop
            </Button>
          </div>
        </div>
        <div className="relative flex flex-[1_1_70%] items-center justify-center bg-white">
          <Image
            height={600}
            width={600}
            className=""
            src="/images/category_hero_image.png"
            alt="all category"
          />
        </div>
      </div>
      <div className="mx-auto w-[90%] max-w-[1024px] py-32">
        <div className="text-center text-base font-medium leading-normal text-orange-800">
          DIVE INTO DAZZLING DELIGHTS
        </div>
        <div className="text-center text-[45px] font-normal leading-[52px] text-red-950">
          Explore By Category
        </div>
        <div className="mt-5 w-[1024px] text-justify text-sm font-normal leading-tight text-red-950">
          Adorn your world with exquisite artistry, one piece at a time. Whether
          you&apos;re a classic charm seeker or a trendsetting trailblazer, our
          curated collections cater to every desire. <br />
          <br />
          Let your fingers dance with the whisper of sparkling rings, each
          design a captivating melody of gemstones and precious metals. Embrace
          the timeless elegance of a pendant necklace, a whisper of brilliance
          against your skin. Or make a statement with a bold choker, a symphony
          of glamour that speaks volumes. From delicate earrings that frame your
          face like whispered secrets to statement bracelets that add a touch of
          drama, each category is a treasure trove waiting to be discovered.{" "}
          <br />
          <br />
          So, embark on a dazzling journey, lose yourself in the kaleidoscope of
          brilliance, and find your perfect piece to tell your own unique story.
          Explore by category, and let your inner star shine!
        </div>
        <div>
          <div className="my-8 grid grid-cols-4 gap-8">
            {ProductCategories.map((category) => (
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
    </div>
  );
};

export default page;

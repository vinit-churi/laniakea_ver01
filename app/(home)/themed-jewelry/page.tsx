import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  OccasionCategories,
  themeSet1,
  themeSet2,
  themeSet3,
} from "@/constants/Categories";
import MatchingAttire from "@/components/ThemedJewelry/MatchingAttire";
const page = () => {
  return (
    <div>
      <div className="relative aspect-[16/9] w-full">
        <Image fill src="/images/themed_hero.webp" alt="theme hero" />
      </div>
      <div>
        <div className="mx-auto w-[90%] max-w-[1024px] py-32">
          <div className="text-center text-base font-medium leading-normal text-orange-800">
            DIVE INTO DAZZLING DELIGHTS
          </div>
          <div className="mb-4 text-center text-[45px] font-normal leading-[52px] text-red-950">
            Explore By Category
          </div>
          <div className="mt-5 w-[1024px] text-justify text-sm font-normal leading-tight text-red-950">
            Adorn your world with exquisite artistry, one piece at a time.
            Whether you&apos;re a classic charm seeker or a trendsetting
            trailblazer, our curated collections cater to every desire. <br />
            <br />
            Let your fingers dance with the whisper of sparkling rings, each
            design a captivating melody of gemstones and precious metals.
            Embrace the timeless elegance of a pendant necklace, a whisper of
            brilliance against your skin. Or make a statement with a bold
            choker, a symphony of glamour that speaks volumes. From delicate
            earrings that frame your face like whispered secrets to statement
            bracelets that add a touch of drama, each category is a treasure
            trove waiting to be discovered. <br />
            <br />
            So, embark on a dazzling journey, lose yourself in the kaleidoscope
            of brilliance, and find your perfect piece to tell your own unique
            story. Explore by category, and let your inner star shine!
          </div>
          <div>
            <div className="my-8 grid grid-cols-4 gap-8">
              {OccasionCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex cursor-pointer flex-col items-center justify-center gap-2"
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
      <div className="mx-auto w-[90%] max-w-[1024px] py-32">
        <div className="w-[1024px] text-center text-base font-medium leading-normal text-orange-800">
          BEAUTIFULL JEWELRY FLAVORS
        </div>
        <div className="mb-4 w-[1024px] text-center text-[45px] font-normal leading-[52px] text-red-950">
          Themed Jewelry Matching The Attire
        </div>
        <div className="w-[1024px] text-justify text-sm font-normal leading-tight text-red-950">
          Jewelry isn&apos;t just an accessory; it&apos;s an extension of your
          personality and a way to express your unique style. But sometimes,
          choosing the right piece to complement your outfit can feel like a
          daunting task. That&apos;s where themed jewelry comes in! By
          incorporating a specific theme into your jewelry choices, you can
          create a cohesive and eye-catching look that tells a story.
        </div>
      </div>
      <MatchingAttire
        leftImage="/images/theme_set_parent1.webp"
        className="bg-rose-200"
        themeSet={themeSet1}
      />
      <MatchingAttire
        leftImage="/images/theme_set_parent2.webp"
        className="bg-neutral-200"
        themeSet={themeSet2}
      />
      <MatchingAttire
        leftImage="/images/theme_set_parent3.webp"
        className="bg-rose-200"
        themeSet={themeSet3}
      />
    </div>
  );
};

export default page;

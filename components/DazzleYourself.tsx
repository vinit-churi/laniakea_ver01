import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const DazzleYourself = () => {
  return (
    <div className="mx-auto flex w-[90%] max-w-[1024px] gap-16 py-[128px] max-[1085px]:flex-col max-[1085px]:gap-4 max-[1085px]:py-16">
      <Image
        src="/images/dazzle_yourself.webp"
        alt="Ethenic jewelry"
        width={489}
        height={586}
        className="max-[1085px]:order-2 max-[1085px]:mx-auto"
      />
      <div className="w-[471px] py-16 max-[1085px]:mx-auto max-[1085px]:pb-0 max-[1085px]:text-center">
        <h4 className="mb-1 text-base font-medium leading-normal text-orange-800">
          DAZZLE YOURSELF
        </h4>
        <h2 className="mb-2 w-[471px] text-[45px] font-normal leading-[52px] text-red-950">
          Adore With The Ethnicity
        </h2>
        <ul className="my-4">
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            Embrace the beauty of diverse cultures and traditions with our
            exquisite collection of ethnic jewelry. Our pieces are handcrafted
            with intricate designs and vibrant gemstones, reflecting the rich
            heritage of each culture.
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            Explore our collection and discover the unique beauty of each ethnic
            style:
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            📌 Europe (Greek, Etruscan, Byzantine, German Jewelry)
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            📌 India (Kundan, Meenakari, Pachchikam, Bengali, Kolhapuri Jewelry)
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            📌 China (Jingjing(京晶), Yumen(玉门), Diancui(点翠), Tuoba(吐巴)
            Jewelry)
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            📌 Africa (Masai, Turkana, Zulu, Ndebele Jewelry)
          </li>
          <li className="mb-3 w-[471px] text-sm font-normal leading-tight text-black">
            📌 Latina America (Oazacan Filigree, Minas Gerais, Amazonian
            Jewelry)
          </li>
        </ul>
        <Button className="flex h-[40px] w-[152px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 max-[1085px]:mx-auto">
          Themed Jewelry
        </Button>
      </div>
    </div>
  );
};

export default DazzleYourself;

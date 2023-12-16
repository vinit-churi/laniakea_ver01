import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const DazzleYourself = () => {
  return (
    <div className="py-[128px] w-[90%] max-w-[1024px] flex gap-16 mx-auto">
      <Image
        src="/images/dazzle_yourself.webp"
        alt="Ethenic jewelry"
        width={489}
        height={586}
      />
      <div className="w-[471px] py-16">
        <h4 className="text-orange-800 text-base font-medium leading-normal mb-1">
          DAZZLE YOURSELF
        </h4>
        <h2 className="w-[471px] text-red-950 text-[45px] font-normal mb-2 leading-[52px]">
          Adore With The Ethnicity
        </h2>
        <ul className="my-4">
          <li className="w-[471px] text-black text-sm font-normal mb-3 leading-tight">
            Embrace the beauty of diverse cultures and traditions with our
            exquisite collection of ethnic jewelry. Our pieces are handcrafted
            with intricate designs and vibrant gemstones, reflecting the rich
            heritage of each culture.
          </li>
          <li className="w-[471px] text-black text-sm font-normal mb-3 leading-tight">
            Explore our collection and discover the unique beauty of each ethnic style:
          </li>
          <li className="w-[471px] mb-3 text-black text-sm font-normal leading-tight">
            📌 Europe (Greek, Etruscan, Byzantine, German Jewelry)
          </li>
          <li className="w-[471px] mb-3 text-black text-sm font-normal leading-tight">
            📌 India (Kundan, Meenakari, Pachchikam, Bengali, Kolhapuri Jewelry)
          </li>
          <li className="w-[471px] mb-3 text-black text-sm font-normal leading-tight">
            📌 China (Jingjing(京晶), Yumen(玉门), Diancui(点翠), Tuoba(吐巴) Jewelry)
          </li>
          <li className="w-[471px] mb-3 text-black text-sm font-normal leading-tight">
            📌 Africa (Masai, Turkana, Zulu, Ndebele Jewelry)
          </li>
          <li className="w-[471px] mb-3 text-black text-sm font-normal leading-tight">
            📌 Latina America (Oazacan Filigree, Minas Gerais, Amazonian Jewelry)
          </li>
        </ul>
        <Button className="bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[152px] h-[40px] flex items-center justify-center gap-2">
          Themed Jewelry
        </Button>
      </div>
    </div>
  );
};

export default DazzleYourself;

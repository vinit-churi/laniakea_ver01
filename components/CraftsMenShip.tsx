import Image from "next/image";
import React from "react";

const CraftsMenShip = () => {
  return (
    <div className="py-[192px] mx-auto w-[90%] max-w-[1024px]">
      <div className="flex mb-16 justify-between">
        <Image
          width={480}
          height={468}
          src="/images/craftsmanship_01.png"
          alt="craftsmanship"
        />
        <div className="w-[480px] py-[43px]">
          <div className="w-[444px] text-red-950 mb-4 text-[45px] font-normal  leading-[52px]">
            Discover Our Story: Craftsmanship, Passion and Elegance
          </div>
          <div className="w-full text-red-950 text-sm font-normal  leading-tight">
            Our jewelry is designed and crafted by best artisans in industry.
            Every piece in our collection we decide to produce in economy of
            scale is first sketched by artisan and then handcrafted. Once we
            feel that piece has right texture, look and feel our engineers build
            3D model. The final piece is produced uniformly and with precision
            at scale using CNC / Laser machines and 3D printers
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[480px] self-center text-red-950 text-[28px] font-normal leading-9">
          Crafted with precision by CNC/Laser cutting, marking and soldering
          machines
        </div>
        <Image
          width={480}
          height={480}
          src="/images/craftsmanship_02.png"
          alt="craftsmanship"
        />
      </div>
      <div className="flex justify-between mt-[-64px]">
        <Image
          width={320}
          height={480}
          src="/images/craftsmanship_03.png"
          alt="craftsmanship"
        />
        <div className="w-[480px] text-red-950 text-[28px] font-normal self-center leading-9">
          CNC engraving helps us reduce gold wastage which is depicted in our
          very low making charges
        </div>
      </div>
      <div className="flex justify-between mt-[-92px]">
        <div className="w-[480px] text-red-950 text-[28px] font-normal self-center leading-9">
          Laser marking and soldering machines provide our jewelry their unique
          look and feel
        </div>
        <Image
          width={320}
          height={480}
          src="/images/craftsmanship_04.png"
          alt="craftsmanship"
        />
      </div>
      <div className="flex justify-between mt-[-64px]">
        <Image
          width={480}
          height={480}
          src="/images/craftsmanship_05.png"
          alt="craftsmanship"
        />
        <div className="w-[480px] text-red-950 text-[28px] font-normal self-center leading-9">
          3D printed precious metal parts for complex designs
        </div>
      </div>
    </div>
  );
};

export default CraftsMenShip;

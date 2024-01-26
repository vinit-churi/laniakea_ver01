import Image from "next/image";
import React from "react";

const CraftsMenShip = () => {
  return (
    <div
      id="craftsmanship"
      className="mx-auto w-[90%] max-w-[1024px] py-[192px] max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:gap-16 max-[1100px]:py-16"
    >
      <div className="mb-16 flex justify-between max-[1100px]:mb-0 max-[1100px]:flex-col">
        <Image
          width={480}
          height={468}
          src="/images/craftsmanship_01.png"
          alt="craftsmanship"
          className="max-[1100px]:order-3 max-[1100px]:mx-auto"
        />
        <div className="w-[480px] py-[43px] max-[1100px]:mx-auto max-[1100px]:w-[90%]">
          <div className="mb-4 w-[444px] text-[45px] font-normal leading-[52px] text-red-950  max-[1100px]:w-full max-[1100px]:text-center max-[1100px]:text-4xl">
            Discover Our Story: Craftsmanship, Passion and Elegance
          </div>
          <div className="w-full text-sm font-normal leading-tight text-red-950  max-[1100px]:mx-auto max-[1100px]:w-[90%] max-[1100px]:text-center max-[1100px]:text-xs">
            Our jewelry is designed and crafted by best artisans in industry.
            Every piece in our collection we decide to produce in economy of
            scale is first sketched by artisan and then handcrafted. Once we
            feel that piece has right texture, look and feel our engineers build
            3D model. The final piece is produced uniformly and with precision
            at scale using CNC / Laser machines and 3D printers
          </div>
        </div>
      </div>
      <div className="flex justify-between max-[1100px]:flex-col max-[1100px]:gap-4">
        <div className="w-[480px] self-center text-[28px] font-normal leading-9 text-red-950 max-[1100px]:w-full max-[1100px]:text-center max-[1100px]:text-2xl">
          Crafted with precision by CNC/Laser cutting, marking and soldering
          machines
        </div>
        <Image
          width={480}
          height={480}
          src="/images/craftsmanship_02.webp"
          alt="craftsmanship"
          className=" aspect-square rounded-bl-[160px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[160px] outline outline-2 outline-white max-[1100px]:mx-auto max-[1100px]:rounded-bl-[96px] max-[1100px]:rounded-br-[9.60px] max-[1100px]:rounded-tl-[9.60px] max-[1100px]:rounded-tr-[96px]"
        />
      </div>
      <div className="mt-[-64px] flex justify-between max-[1100px]:mt-0 max-[1100px]:flex-col  max-[1100px]:gap-4">
        <Image
          width={320}
          height={480}
          src="/images/craftsmanship_03.webp"
          alt="craftsmanship"
          className="rounded-t-[160px] rounded-bl-[16px] rounded-br-[160px] outline outline-2 outline-white max-[1100px]:order-2 max-[1100px]:mx-auto "
        />
        <div className="w-[480px] self-center text-[28px] font-normal leading-9 text-red-950 max-[1100px]:order-1 max-[1100px]:mt-4 max-[1100px]:w-full max-[1100px]:text-center max-[1100px]:text-2xl">
          CNC engraving helps us reduce gold wastage which is depicted in our
          very low making charges
        </div>
      </div>
      <div className="mt-[-92px] flex justify-between max-[1100px]:mt-0 max-[1100px]:flex-col">
        <div className="w-[480px] self-center text-[28px] font-normal leading-9 text-red-950 max-[1100px]:w-full max-[1100px]:text-center max-[1100px]:text-2xl">
          Laser marking and soldering machines provide our jewelry their unique
          look and feel
        </div>
        <Image
          width={320}
          height={480}
          src="/images/craftsmanship_04.webp"
          alt="craftsmanship"
          className="rounded-[160px] outline outline-2 outline-white max-[1100px]:mx-auto  max-[1100px]:mt-4"
        />
      </div>
      <div className="mt-[-64px] flex justify-between max-[1100px]:mt-0 max-[1100px]:flex-col max-[1100px]:gap-4">
        <Image
          width={480}
          height={480}
          src="/images/craftsmanship_05.webp"
          alt="craftsmanship"
          className="aspect-square rounded-bl-[160px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[160px] outline outline-2 outline-white max-[1100px]:order-2  max-[1100px]:mx-auto max-[1100px]:rounded-bl-[96px] max-[1100px]:rounded-br-[9.60px] max-[1100px]:rounded-tl-[9.60px] max-[1100px]:rounded-tr-[96px]"
        />
        <div className="w-[480px] self-center text-[28px] font-normal leading-9 text-red-950 max-[1100px]:mt-4 max-[1100px]:w-full max-[1100px]:text-center max-[1100px]:text-2xl">
          3D printed precious metal parts for complex designs
        </div>
      </div>
    </div>
  );
};

export default CraftsMenShip;

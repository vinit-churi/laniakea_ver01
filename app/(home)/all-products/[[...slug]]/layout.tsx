import React from "react";
import AllProductsSidebarFilter from "@/components/AllProducts/AllProductsSidebarFilter";
import Image from "next/image";
import { AllProductsHeroImageSelector } from "@/constants/AllProductsHeroImages";
import { TAllProductsHeroImageType } from "@/types/common/types";
const ProductsLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string[] | undefined;
  };
}) => {
  const { slug = ["default"] } = params;
  const heroSectionData: TAllProductsHeroImageType =
    AllProductsHeroImageSelector(slug[0]);
  return (
    <div>
      <div className="relative h-[300px] w-full ">
        <Image
          src={heroSectionData.image}
          fill
          className="h-full w-full object-cover"
          alt="products page"
        />
        <div className="absolute inset-0 flex items-center px-[50px] text-white">
          <p>{heroSectionData.title}</p>
        </div>
      </div>
      <div className="flex w-full ">
        <AllProductsSidebarFilter />
        <div className="flex-[1_1_auto] overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;

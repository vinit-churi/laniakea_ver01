import React from "react";
import AllProductsSidebarFilter from "@/components/AllProducts/AllProductsSidebarFilter";
import Image from "next/image";
import { AllProductsHeroImageSelector } from "@/constants/AllProductsHeroImages";
import { TAllProductsHeroImageType } from "@/types/common/types";
import BreadCrumbs from "@/components/AllProducts/BreadCrumbs";
import AllProductsActiveFilters from "@/components/AllProducts/AllProductsActiveFilters";

const ProductsLayout = async (
  props: {
    children: React.ReactNode;
    params: Promise<{
      slug: string[] | undefined;
    }>;
  }
) => {
  const params = await props.params;

  const {
    children
  } = props;

  const { slug = ["default"] } = params;
  const heroSectionData: TAllProductsHeroImageType =
    AllProductsHeroImageSelector(slug[0]);
  console.log(heroSectionData);
  return (
    <div>
      <div className="relative h-[350px] w-full ">
        <Image
          src={heroSectionData.image}
          fill
          className="h-full w-full object-cover object-center"
          alt="products page"
        />
        <div className="before:contents-[''] absolute inset-0 z-0 flex flex-col items-center justify-center px-[50px] text-white before:absolute before:inset-0 before:z-[-1] before:bg-black/25">
          <p className="text-[50px] font-semibold ">{heroSectionData.title}</p>
          <p className="text-[20px]">{heroSectionData.description}</p>
        </div>
      </div>
      <div className="flex h-16 items-center gap-10 px-5">
        <BreadCrumbs />
        <div className="flex gap-4">
          <AllProductsActiveFilters />
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

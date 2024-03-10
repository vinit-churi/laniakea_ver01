import React from "react";
import AllProductsSidebarFilter from "@/components/AllProducts/AllProductsSidebarFilter";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full border border-solid ">
      <AllProductsSidebarFilter />
      <div className="flex-[1_1_auto] overflow-auto">{children}</div>
    </div>
  );
};

export default ProductsLayout;

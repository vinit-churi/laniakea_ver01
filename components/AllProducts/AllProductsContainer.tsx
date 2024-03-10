import React from "react";
import Product from "@/components/AllProducts/Product";
import { products } from "@/constants/Products";

const AllProductsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProductsContainer;

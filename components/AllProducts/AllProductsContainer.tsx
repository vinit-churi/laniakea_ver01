import React from "react";
import Product from "@/components/AllProducts/Product";
import { products } from "@/constants/Products";

const AllProductsContainer = () => {
  return (
    <div
      className="mr-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem",
      }}
    >
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProductsContainer;

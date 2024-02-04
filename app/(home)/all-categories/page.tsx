import React from "react";
import Hero from "@/components/AllCategories/Hero";
import Categories from "@/components/AllCategories/Categories";
import Materials from "@/components/AllCategories/Materials";
const page = () => {
  return (
    <div className="w-full ">
      <Hero />
      <Categories />
      <Materials />
    </div>
  );
};

export default page;

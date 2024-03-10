import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AllProductsSidebarFilter = () => {
  const materials = [
    "Rose Gold",
    "Gold",
    "Silver",
    "Tungsten",
    "Titanium",
    "Stainless Steel",
    "Silicone",
    "Carbon Fiber",
    "Damascus Steel",
  ];

  const productTypes = ["Bracelet", "Earrings", "Necklace", "Ring"];

  const productOccasions = [
    "Anniversary",
    "Birthday",
    "Engagement",
    "Wedding",
    "Just Because",
  ];

  const productSizes = [
    "3.5",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "14.5",
    "15",
    "16",
    "Large (7.5 in)",
    "Large (7.7 in)",
    "Medium (7.1 in)",
    "Medium (7.5 in)",
    "Small (6.7 in)",
    "Small (7.1 in)",
  ];

  return (
    <div className="flex-[0_1_300px]  p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Sort by</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="ml-2 flex items-center gap-3">
              <Checkbox id="featured" />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Featured
              </label>
            </div>
            <div className="ml-2 flex items-center gap-3">
              <Checkbox id="price_sort" color="#fff" />
              <label
                htmlFor="price_sort"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Price: Low to High
              </label>
            </div>
            <div className="ml-2 flex items-center gap-3">
              <Checkbox id="a-z" />
              <label
                htmlFor="a-z"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                A-Z
              </label>
            </div>
            <div className="ml-2 flex items-center gap-3">
              <Checkbox id="Z-A" />
              <label
                htmlFor="Z-A"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Z-A
              </label>
            </div>
            <div className="ml-2 flex items-center gap-3">
              <Checkbox id="best_selling" />
              <label
                htmlFor="best_selling"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Best Selling
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Material</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {materials.map((material) => (
              <div key={material} className="ml-2 flex items-center gap-3">
                <Checkbox id="material" />
                <label
                  htmlFor="material"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {material}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Product type</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {productTypes.map((type) => (
                <div key={type} className="ml-2 flex items-center gap-3">
                  <Checkbox id="product_type" />
                  <label
                    htmlFor="product_type"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>sizes</AccordionTrigger>
          <AccordionContent className="h-[200px]">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-4">
                {productSizes.map((size) => (
                  <div key={size} className="ml-2 flex items-center gap-3">
                    <Checkbox id="product_size" />
                    <label
                      htmlFor="product_size"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Occasion</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {productOccasions.map((occasion) => (
                <div key={occasion} className="ml-2 flex items-center gap-3">
                  <Checkbox id="product_occasion" />
                  <label
                    htmlFor="product_occasion"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {occasion}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AllProductsSidebarFilter;

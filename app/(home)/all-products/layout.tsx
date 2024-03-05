import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <ScrollArea className="flex-[0_1_300px] p-4">
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
                <Checkbox id="price_sort" />
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
            <AccordionTrigger>Featured</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Material</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Product type</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
      <div className="flex-[1_1_auto] ">{children}</div>
    </div>
  );
};

export default ProductsLayout;

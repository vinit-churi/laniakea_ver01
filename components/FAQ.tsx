import React from "react";
import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Divider from "./Divider";

const FAQ = () => {
  return (
    <div className="my-[128px] w-[90%] max-w-[1024px] mx-auto flex gap-16">
      <div className="w-[351px]">
        <div className="w-[350px] text-red-950 text-[45px] font-normal  leading-[52px]">
          Frequently Asked Questions
        </div>
        <div className="w-[351px] text-red-950 text-sm font-normal my-4 leading-tight">
          Find answers to common questions about jewelry care, the purchase
          process and shipping information.
        </div>
        <Button className="bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[112px] h-[40px] flex items-center justify-center gap-2  text-white text-sm font-medium  leading-tight">
          Contact Us
        </Button>
      </div>
      <div className="  flex-1">
        <Divider className="w-full border-t-[1px]" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-red-950 text-base font-medium leading-normal">
              How do I care for my Jewelry?
            </AccordionTrigger>
            <AccordionContent className="text-red-950 text-sm font-normal leading-tight">
              Properly caring for your jewelry will ensure its longevity. Avoid
              exposing it to harsh chemicals and store it in jewelry box when
              not in use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-red-950 text-base font-medium leading-normal">
              What is the purchase process?
            </AccordionTrigger>
            <AccordionContent className="text-red-950 text-sm font-normal leading-tight">
              To purchase jewelry, simply browse our collection, select the
              items you want and proceed to checkout. We offer secure payment
              options for your convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-red-950 text-base font-medium leading-normal">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-red-950 text-sm font-normal leading-tight">
              Shipping times may vary depending on your location. We strive to
              process and ship orders as quickly as possible. You can track your
              package using tracking number.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-red-950 text-base font-medium leading-normal">
              Can I return my purchase?
            </AccordionTrigger>
            <AccordionContent className="text-red-950 text-sm font-normal leading-tight">
              We accept returns within 30 days of purchase. Please refer to our
              return policy for more information on eligibility and the return
              process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-red-950 text-base font-medium leading-normal">
              Do you offer customization?
            </AccordionTrigger>
            <AccordionContent className="text-red-950 text-sm font-normal leading-tight">
              Yes, we offer customization services for select jewelry pieces.
              Contact our customer support team for more details and assistance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

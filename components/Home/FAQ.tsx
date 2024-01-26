import React from "react";
import { Button } from "../ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Divider from "./Divider";

const FAQ = () => {
  return (
    <div className="mx-auto my-[128px] flex w-[90%] max-w-[1024px] gap-16 max-[1130px]:my-16 max-[1130px]:gap-8 max-[900px]:flex-col">
      <div className="w-[351px] max-[1130px]:mx-auto max-[500px]:w-full">
        <div className="w-[350px] text-[45px] font-normal leading-[52px] text-red-950 max-[500px]:mx-auto max-[500px]:text-center max-[390px]:w-full">
          Frequently Asked Questions
        </div>
        <div className="my-4 w-[351px] text-sm font-normal leading-tight text-red-950 max-[500px]:mx-auto max-[500px]:text-center max-[390px]:w-full">
          Find answers to common questions about jewelry care, the purchase
          process and shipping information.
        </div>
        <Button className="flex h-[40px] w-[112px] items-center justify-center gap-2 rounded-full bg-primaryRegular text-sm font-medium leading-tight text-white transition-colors  duration-300 ease-in-out hover:bg-primaryRegular/80  max-[1130px]:mx-auto">
          Contact Us
        </Button>
      </div>
      <div className="max-[1130px]:w-xl w-full max-[1130px]:mx-auto max-[1130px]:max-w-xl">
        <Divider className="w-full border-t-[1px]" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-medium leading-normal text-red-950">
              How do I care for my Jewelry?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal leading-tight text-red-950">
              Properly caring for your jewelry will ensure its longevity. Avoid
              exposing it to harsh chemicals and store it in jewelry box when
              not in use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-medium leading-normal text-red-950">
              What is the purchase process?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal leading-tight text-red-950">
              To purchase jewelry, simply browse our collection, select the
              items you want and proceed to checkout. We offer secure payment
              options for your convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-medium leading-normal text-red-950">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal leading-tight text-red-950">
              Shipping times may vary depending on your location. We strive to
              process and ship orders as quickly as possible. You can track your
              package using tracking number.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-medium leading-normal text-red-950">
              Can I return my purchase?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal leading-tight text-red-950">
              We accept returns within 30 days of purchase. Please refer to our
              return policy for more information on eligibility and the return
              process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base font-medium leading-normal text-red-950">
              Do you offer customization?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-normal leading-tight text-red-950">
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

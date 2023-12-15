import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import Divider from "./Divider";
import {
  CommunityFooterLinks,
  CooperationFooterLinks,
  ExploreFooterLinks,
  ServiceFooterLinks,
  SupportFooterLinks,
  jewelryCategories,
} from "@/constants/Categories";
const Footer = () => {
  return (
    <div className="bg-[#272727] py-8">
      <div className="w-[1024px] mx-auto text-center text-white text-[22px] font-medium leading-7">
        Shop with Lanikea Store
      </div>
      <div className="w-[1024px] my-4 text-center text-white text-opacity-90 text-sm font-normal mx-auto  leading-tight">
        Making charges as low as 3% on select jewelry, Get Lanikea Royalty
        Rewards, Free Shipping on Orders Over INR ₹10,000, 14-Day Returns, and
        other exclusive <br />
        official offers.
      </div>
      <Button className="mt-[16px] bg-primaryRegular mx-auto mb-8 transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80 rounded-full w-[105px] h-[44px] flex items-center justify-center gap-2">
        Shop Now
      </Button>
      <Divider className="max-w-[1024px] border-stone-300/50" />
      <div className="my-8 grid grid-cols-4 w-[90%] max-w-[1024px] mx-auto">
        <div className="w-full ">
          <div className="text-white mb-4 text-base font-medium leading-tight">
            Product Categories
          </div>
          {jewelryCategories.map((category) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={category.id}
            >
              {category.category}
            </p>
          ))}
        </div>
        <div className="  w-full ">
          <div className="text-white mb-4 text-base font-medium leading-tight">
            Explore
          </div>
          {ExploreFooterLinks.map((item) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="text-white mt-16 mb-4 text-base font-medium leading-tight">
            Cooperation
          </div>
          {CooperationFooterLinks.map((item) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="w-full">
          <div className="text-white mb-4 text-base font-medium leading-tight">
            Service plan
          </div>
          {ServiceFooterLinks.map((item) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="text-white mt-16 mb-4 text-base font-medium leading-tight">
            Support
          </div>
          {SupportFooterLinks.map((item) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="w-full">
          <div className="text-white mb-4 text-base font-medium leading-tight">
            Community
          </div>
          {CommunityFooterLinks.map((item) => (
            <p
              className="text-white pb-4  text-sm cursor-pointer font-regular leading-none"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="text-white mt-16 mb-4 text-base font-medium leading-tight">
            Subscribe and get updates
          </div>
          <div className="w-[197px] text-stone-200 text-sm font-normal leading-tight">
            Get the latest news and updates from Laniakea
          </div>
          <div className="w-full relative mt-4">
            <Input
              className="bg-black text-white px-[42px] py-6"
              placeholder="Email"
              type="email"
            />
            <Image
              height={24}
              width={24}
              alt="ic"
              className="absolute top-1/2 translate-y-[-50%] left-2"
              src="/images/message.svg"
            />
            <Image
              height={24}
              width={24}
              alt="ic"
              className="absolute top-1/2 translate-y-[-50%] right-2"
              src="/images/send.svg"
            />
          </div>
        </div>
      </div>
      <Divider className="max-w-[1024px] border-stone-300/50" />
      <p className="text-stone-300 mt-4 text-xs font-medium  leading-none w-[90%] max-w-[1024px] mx-auto">
        Copyright ©️ 2024 Lanikea All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

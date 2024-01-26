import React from "react";
import { Button } from "../ui/button";
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
      <div className="mx-auto w-[90%] max-w-[1024px] text-center text-[22px] font-medium leading-7 text-white">
        Shop with Lanikea Store
      </div>
      <div className="mx-auto my-4 w-[90%] max-w-[1024px] text-center text-sm font-normal leading-tight text-white  text-opacity-90">
        Making charges as low as 3% on select jewelry, Get Lanikea Royalty
        Rewards, Free Shipping on Orders Over INR ₹10,000, 14-Day Returns, and
        other exclusive <br />
        official offers.
      </div>
      <Button className="mx-auto mb-8 mt-[16px] flex h-[44px] w-[105px] items-center justify-center gap-2 rounded-full bg-primaryRegular transition-colors duration-300 ease-in-out hover:bg-primaryRegular/80">
        Shop Now
      </Button>
      <Divider className="max-w-[1024px] border-stone-300/50" />
      <div className="max-[1120px]: mx-auto my-8 grid w-[90%] max-w-[1024px] grid-cols-4 max-[900px]:grid-cols-2 max-[425px]:grid-cols-1 max-[425px]:text-center">
        <div className="w-full ">
          <div className="mb-4 text-base font-medium leading-tight text-white">
            Product Categories
          </div>
          {jewelryCategories.map((category) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={category.id}
            >
              {category.category}
            </p>
          ))}
        </div>
        <div className="  w-full ">
          <div className="mb-4 text-base font-medium leading-tight text-white">
            Explore
          </div>
          {ExploreFooterLinks.map((item) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="mb-4 mt-16 text-base font-medium leading-tight text-white max-[900px]:mt-4">
            Cooperation
          </div>
          {CooperationFooterLinks.map((item) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="w-full">
          <div className="mb-4 text-base font-medium leading-tight text-white">
            Service plan
          </div>
          {ServiceFooterLinks.map((item) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="mb-4 mt-16 text-base font-medium leading-tight text-white max-[900px]:mt-4">
            Support
          </div>
          {SupportFooterLinks.map((item) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="w-full max-[900px]:mt-[-255px] max-[425px]:mt-0">
          <div className="mb-4 text-base font-medium leading-tight text-white">
            Community
          </div>
          {CommunityFooterLinks.map((item) => (
            <p
              className="font-regular cursor-pointer  pb-4 text-sm leading-none text-white"
              key={item.id}
            >
              {item.label}
            </p>
          ))}
          <div className="mb-4 mt-16 text-base font-medium leading-tight text-white max-[900px]:mt-4">
            Subscribe and get updates
          </div>
          <div className="w-[197px] text-sm font-normal leading-tight text-[#EDE0DD] max-[425px]:mx-auto max-[425px]:text-center">
            Get the latest news and updates from Laniakea
          </div>
          <div className="relative mt-4 w-full">
            <Input
              className="bg-black px-[42px] py-6 text-white"
              placeholder="Email"
              type="email"
            />
            <Image
              height={24}
              width={24}
              alt="ic"
              className="absolute left-2 top-1/2 translate-y-[-50%]"
              src="/images/message.svg"
            />
            <Image
              height={24}
              width={24}
              alt="ic"
              className="absolute right-2 top-1/2 translate-y-[-50%]"
              src="/images/send.svg"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mx-auto my-8 flex w-[90%] max-w-[1024px] items-center gap-8 max-[820px]:flex-col">
        <Image width={133} height={40} alt="logo" src="/images/Laniakea.svg" />
        <ul className="flex gap-8 text-white max-[820px]:mb-10 max-[820px]:flex-col">
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            About us
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            Contact us
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            Careers
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            FAQs
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            Returns
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            Shipping
          </li>
          <li className="relative mt-2 text-sm font-medium leading-none text-white max-[820px]:text-center">
            Track order
          </li>
        </ul>
      </div>
      <Divider className="max-w-[1024px] border-stone-300/50" />
      <div className="mx-auto mt-4 flex w-[90%] max-w-[1024px] gap-2 text-xs text-white max-[820px]:my-16 max-[820px]:flex-col max-[820px]:items-center max-[820px]:gap-4">
        <p>Laniakea Privacy Policy</p>
        <p>•</p>
        <p>Use of Cookies</p>
        <p>•</p>
        <p>Terms of Use</p>
        <p>•</p>
        <p>Business Information</p>
        <p>•</p>
        <p>Cookie Preferences</p>
      </div>
      <div className="mx-auto  mt-2 flex w-[90%] max-w-[1024px] gap-4 max-[820px]:flex-col max-[820px]:text-center">
        <p className="text-xs font-medium leading-none text-stone-300">
          Copyright ©️ 2024 Lanikea All Rights Reserved.
        </p>
        <p className="text-xs font-medium leading-none text-white">
          Feedback on web experience
        </p>
      </div>
    </div>
  );
};

export default Footer;

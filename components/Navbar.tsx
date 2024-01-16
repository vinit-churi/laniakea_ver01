"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import AppDownloadPrompt from "./Hero/AppDownloadPrompt";
import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Featured Items",
    href: "/",
    description: "Explore our curated collection of exquisite jewelry pieces.",
  },
  {
    title: "New Arrivals",
    href: "/",
    description:
      "Discover the latest additions to our stunning jewelry selection.",
  },
  {
    title: "Collections",
    href: "/",
    description: "Browse through our exclusive jewelry collections.",
  },
  {
    title: "Special Offers",
    href: "/",
    description:
      "Find amazing deals and discounts on our high-quality jewelry.",
  },
  {
    title: "Gift Ideas",
    href: "/",
    description:
      "Explore thoughtful and elegant jewelry options for special occasions.",
  },
  {
    title: "All Categories",
    href: "/all-categories",
    description:
      "Explore rest of the categories and find the best products for you.",
  },
];

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      <AppDownloadPrompt />
      <div
        className={`${pathname === "/all-categories" ? "bg-[#3E0500]" : ""}`}
      >
        <div
          className={`mx-auto grid w-[90%] max-w-[1024px] grid-cols-[max-content_auto_max-content] grid-rows-[max-content_max-content] items-center py-4 max-[1060px]:hidden `}
        >
          <Link href="/">
            <Image
              src="/images/Laniakea.svg"
              alt="logo"
              width={133}
              height={40}
              className="relative z-10 cursor-pointer"
            />
          </Link>
          <NavigationMenu className="pl-[32px]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white">
                  Explore
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white">
                  All Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex h-max w-max gap-4 p-4">
                    <li className="h-[300px] w-[300px]">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="w-[600px] self-stretch bg-purple-50">
                      temp container
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-white`}
                  >
                    Themed jewelry
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-white`}
                  >
                    Customized
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-white`}
                  >
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className=" relative z-10 flex items-center gap-5 ">
            <Image
              className="cursor-pointer"
              src="/images/search.svg"
              height={24}
              width={24}
              alt="search"
            />
            <Image
              className="cursor-pointer"
              src="/images/local_mall.svg"
              height={24}
              width={24}
              alt="mall"
            />
            <Image
              className="cursor-pointer"
              src="/images/web.svg"
              height={24}
              width={24}
              alt="web"
            />
            <Button
              className=" flex h-[44px] w-[115px]  items-center justify-center gap-2 rounded-full bg-primaryRegular text-white transition-[colors_scale] duration-300 ease-in-out hover:scale-105 hover:bg-primaryRegular/80 hover:text-white"
              variant="ghost"
            >
              <Image
                src="/images/person.svg"
                height={24}
                width={24}
                alt="person"
              />
              Sign in
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto hidden w-[100%] max-w-[1024px] grid-cols-[max-content_auto_max-content]  items-center py-4 max-[1060px]:grid">
        <MobileNav>
          <Image
            src="/images/mobile_menu_trigger.svg"
            alt="logo"
            width={24}
            height={24}
            className="relative z-10 m-4 cursor-pointer"
          />
        </MobileNav>
        <Image
          src="/images/mobile_menu_trigger.png"
          alt="logo"
          width={133}
          height={40}
          className="relative z-10 mx-auto block cursor-pointer"
        />
        <Image
          src="/images/vertical_3_dots.svg"
          alt="logo"
          width={24}
          height={24}
          className="relative z-50 m-4 cursor-pointer"
        />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

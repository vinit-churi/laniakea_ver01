"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import AppDownloadPrompt from "@/components/Home/Hero/AppDownloadPrompt";
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
  return (
    <div className="">
      <AppDownloadPrompt />
      <div
        className={`${pathname === "/" ? "bg-transparent" : "bg-[#3E0500]"}`}
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
                  <Link href="/all-categories">Explore</Link>
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
                  <Link href="/themed-jewelry">Themed jewelry</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href=""
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/themed-jewelry" title="Explore all theme">
                      Styles for wedding, marriage, honeymoon ...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#craftsmanship" legacyBehavior passHref>
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
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

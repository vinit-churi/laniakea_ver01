import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const MobileNav = ({ children }: { children: React.ReactElement }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side="left"
        className="" //w-[90%]  !max-w-[500px] bg-yellow-300
      >
        <SheetHeader>
          <SheetTitle>Laniakea</SheetTitle>
          <SheetDescription className="text-left">
            Laniakea is a supercluster of galaxies that includes the Milky Way.
          </SheetDescription>
          <ul className="">
            <li>
              <Link href="/all-categories">all categories</Link>
            </li>
            <li>
              <Link href="/themed-jewelry">themed jewelry</Link>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

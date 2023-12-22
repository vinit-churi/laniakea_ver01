import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = ({ children }: { children: React.ReactElement }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side="left"
        className="" //w-[90%]  !max-w-[500px] bg-yellow-300
      >
        <SheetHeader>
          <SheetTitle>SideBar header</SheetTitle>
          <SheetDescription>mobileMenu items</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

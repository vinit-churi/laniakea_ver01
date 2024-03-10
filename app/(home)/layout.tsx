import Navbar from "@/components/common/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen  grid-rows-[auto,1fr]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

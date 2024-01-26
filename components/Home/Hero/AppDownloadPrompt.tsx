"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const AppDownloadPrompt = () => {
  const [showAppPrompt, setShowAppPrompt] = useState(true);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-100%", height: "0px" },
  };
  return (
    <div>
      <motion.div
        variants={variants}
        initial={"visible"}
        animate={showAppPrompt ? "visible" : "hidden"}
        className="relative z-50 col-span-3 row-span-1 flex h-[40px] justify-center bg-white max-[645px]:h-max"
      >
        <div className="relative flex h-full w-[90%] max-w-[1024px] items-center justify-center text-[12px] font-medium ">
          <p className="flex max-[645px]:inline-block max-[645px]:py-3 max-[645px]:pr-[40px]">
            Download the Laniakea Store app available both on android and ios.{" "}
            <span className="flex text-primaryRegular">
              &nbsp;Download the App now.{" "}
            </span>
          </p>
          <Image
            className="absolute right-4 cursor-pointer"
            src="/images/close.svg"
            height="24"
            width="24"
            alt="close"
            onClick={() => setShowAppPrompt(false)}
          />
        </div>
      </motion.div>
    </div>
  );
};
export default AppDownloadPrompt;

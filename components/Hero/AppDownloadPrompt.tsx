"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const AppDownloadPrompt = () => {
  const [display, setDisplay] = useState(true);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-100%", height: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={display ? "visible" : "hidden"}
      className="bg-white h-[40px] flex justify-center max-[645px]:h-max max-[645px]:py-3"
    >
      <div className="text-[12px] flex justify-center items-center h-full max-w-[1024px] w-[90%] relative font-medium ">
        <p className="flex max-[645px]:inline-block max-[645px]:pr-[40px]">
          Download the Laniakea Store app available both on android and ios.{" "}
          <span className="flex text-primaryRegular">
            &nbsp;Download the App now.{" "}
            {/* <Image
              src="/images/go-to-link.svg"
              height="12"
              width="12"
              alt="go to link"
              className=""
            /> */}
          </span>
        </p>
        <Image
          className="absolute right-4 cursor-pointer"
          src="/images/close.svg"
          height="24"
          width="24"
          alt="close"
          onClick={() => setDisplay(false)}
        />
      </div>
    </motion.div>
  );
};

export default AppDownloadPrompt;

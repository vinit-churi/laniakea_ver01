"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const staticList = [
  {
    id: 1,
    name: "111111111111",
  },
  {
    id: 2,
    name: "22222222222",
  },
  {
    id: 3,
    name: "33333333333",
  },
  {
    id: 4,
    name: "44444444444",
  },
];

const ExperimentalList = () => {
  const [list, setList] = React.useState(staticList);
  function rotateArray() {
    const [first, ...rest] = list;
    setList([...rest, first]);
  }
  return (
    <div className="bg-black h-80 flex justify-between items-center">
      <motion.ul className="relative bg-purple-400 h-[300px] w-[300px] border-y-stone-500 block mx-auto text-[14px] text-white ">
        <AnimatePresence>
          {list.slice(0, 3).map((item, index) => {
            return (
              <motion.li
                key={item.id}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, y: `${100 * index}%` }}
                initial={{ opacity: 0, y: "300%" }}
                className={`font-medium cursor-pointer transition-colors duration-300 ease-in-out absolute w-full text-white h-1/3 ${
                  index === 1 ? "bg-red-500" : ""
                }`}
              >
                {item.name}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
      <button
        onClick={rotateArray}
        className="mx-auto m-6 block bg-white text-black px-4 py-2 rounded-md"
      >
        click
      </button>
    </div>
  );
};

export default ExperimentalList;

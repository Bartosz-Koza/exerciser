"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./profile";


export default function Navbar() {

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      className="fixed top-0 bg-white w-full z-10 h-[80px] border-b-black shadow-md"
    >
      <nav className="flex items-center h-full justify-between px-[4vw] py-4">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800"
        >
          EXERCISER
        </motion.h1>
        <ul className="lg:flex flex items-center lg:flex-row flex-col lg:gap-10 gap-5 lg:static absolute lg:w-auto md:w-[45vw] sm:w-[55vw] w-[90vw] rounded-3xl lg:inset-0 right-[5vw] top-20 lg:p-0 p-20 bg-white lg:shadow-none shadow-lg">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link href={"/"}>
              <p className="text-black-600 text-xl hover:text-gray-800 transition-colors duration-300 font-bold">
                Home
              </p>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Link href={"/exercises"}>
              <p className="text-black-600 text-xl hover:text-gray-800 transition-colors duration-300 font-bold">
                Exercises
              </p>
            </Link>
          </motion.li>
          <motion.li>
            <Profile/>
          </motion.li>
        </ul>
      </nav>
    </motion.div>
  );
}

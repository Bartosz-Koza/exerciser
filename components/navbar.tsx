"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 bg-white w-full z-10 h-[80px] border-b-black border-b-2">
      <nav className="flex items-center h-full justify-between px-[4vw] py-4">
        <h1>EXERSIER</h1>
        <ul className="lg:flex flex items-center lg:flex-row flex-col lg:gap-10 gap-5 lg:static absolute lg:w-auto md:w-[45vw] sm:w-[55vw] w-[90vw] rounded-3xl lg:inset-0 right-[5vw] top-20 lg:p-0 p-20 bg-white lg:shadow-none shadow-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/exercises"}>Exercises</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

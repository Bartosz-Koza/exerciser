"use client";

import { PostType } from "@/lib/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Post = ({ item }: { item: PostType }) => {

  
  return (
    <>

    <Link
      href={"/details"}
      className="block max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          {item.name}
        </h1>
        <Image
          width={500}
          height={500}
          src={item.gifUrl}
          alt="gif"
          className="w-full h-auto mb-4 rounded-md"
        />
        <div className="flex flex-col text-center items-center justify-between font-bold">
          <p className="text-base text-gray-700">Target: {item.target}</p>
          <p className="text-base text-gray-700">Equipment: {item.equipment}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

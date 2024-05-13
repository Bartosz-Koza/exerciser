"use client";

import { PostType } from "@/lib/types";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import heart from '../public/fav.svg'
import { motion } from "framer-motion";

export const Post = ({ item }: { item: PostType }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <>
      <Link
        href={`/${item.id}`}
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
          <motion.button
            onClick={toggleFavorite}
            className={`flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg focus:outline-none ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              width={30}
              height={30}
              src={heart}
              alt="heart"
            />
          </motion.button>
        </div>
      </Link>
    </>
  );
};

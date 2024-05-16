"use client";

import { PostType } from "@/lib/types";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import heart from "../public/fav.svg";
import { motion } from "framer-motion";
import { Heart } from '../public/fav';
import { useMutation } from '@tanstack/react-query';
import { add_to_fav } from "@/lib/api";
import { useUser } from '../providers/AuthProvider';

export const Post = ({ item }: { item: PostType }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [fill, setFill] = useState<string>('white')

  const user = useUser()

  const toggleFavorite = () => {
    if(user){
    mutation.mutate(item.id)
    }
  };

  const mutation = useMutation({
    mutationFn: add_to_fav,
    onSuccess:() => setFill('red')
  })

  return (
    <>
      <div className="block max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="px-6 py-4">
          <Link href={`/${item.id}`}>
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {item.name}
            </h1>
            <Image
              width={500}
              height={500}
              src={item.gifUrl}
              alt="gif"
              className="w-full h-auto mb-4 rounded-md"
              unoptimized
            />
            <div className="flex flex-col text-center items-center justify-between font-bold">
              <p className="text-base text-gray-700">Target: {item.target}</p>
              <p className="text-base text-gray-700">
                Equipment: {item.equipment}
              </p>
            </div>
          </Link>
          <div>
            <motion.button
              onClick={toggleFavorite}
              className={`flex items-center justify-center bg-white focus:outline-none`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart fill={fill.toString()}/>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

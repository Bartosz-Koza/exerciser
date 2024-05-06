"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center h-[90vh] text-center"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-12">
        Welcome to Exerciser!
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-prose mb-12 px-6 md:px-12 lg:px-20">
        Ready to take control of your health? Exerciser provides you with a
        vast collection of exercises to help you achieve your fitness goals.
        Whether you're a beginner or an experienced athlete, we've got you
        covered.
      </p>
      <Link href="/exercises">
        <p className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Explore Exercises
        </p>
      </Link>
    </motion.div>
    </div>
  );
}

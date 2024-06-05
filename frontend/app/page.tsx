"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-[60vh] text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-12">
          Welcome to Exerciser!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-prose mb-12 px-6 md:px-12 lg:px-20">
          Ready to take control of your health? Exerciser provides you with a
          vast collection of exercises to help you achieve your fitness goals.
          Whether you&#39;re a beginner or an experienced athlete, we&#39;ve got you
          covered.
        </p>
        <Link href="/exercises">
          <p className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Exercises
          </p>
        </Link>
      </motion.div>

      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20 text-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-10 text-center">
            <h3 className="text-2xl font-semibold mb-4">Advanced Searching</h3>
            <p className="text-gray-700">Easily find exercises tailored to your needs with our advanced search functionality.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-10  text-center">
            <h3 className="text-2xl font-semibold mb-4">Add to Favorites</h3>
            <p className="text-gray-700">Save your favorite exercises for quick access and personalized workout plans.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-10  text-center">
            <h3 className="text-2xl font-semibold mb-4">Extensive Database</h3>
            <p className="text-gray-700">Access a vast database of exercises for all fitness levels and goals.</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Join our community and start your fitness journey today!</p>
          <Link href="/signup">
            <p className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300">Sign Up Now</p>
          </Link>
        </div>
      </footer>
    </>
  );
}

'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid place-items-center px-20 h-screen text-black"
      >
        <div className=" grid place-items-center ">
          <h1 className=" text-8xl pb-20 font-semibold">EXERCISER!</h1>
          <h1 className="pb-20 px-40">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            beatae maxime rem suscipit quod! Est, impedit ad reprehenderit non
            nam maiores, sed eius ipsum magnam fugit saepe rem similique
            voluptates? Animi hic recusandae optio cum nesciunt aut
            necessitatibus fuga sunt porro quae cupiditate ipsam nostrum
            molestiae accusamus, nobis omnis consequatur eaque qui quidem!
            Itaque, harum illo! Consequatur quas laboriosam labore.
          </h1>
          <Link
            className=" bg-gradient-to-r from-green-400 to-blue-500 transition-all ease-in-out hover:from-pink-500 hover:to-yellow-500 p-4 rounded-xl"
            href={"/exercises"}
          >
            search for exercises!
          </Link>
        </div>
      </motion.div>
    </>
  );
}

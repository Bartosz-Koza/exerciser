"use client";

import { api_id } from "@/lib/api";
import { PostType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { detailsDummy } from "@/components/detailsDummy";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Details = ({ params }: { params: { id: string } }) => {
  // const { data, isLoading } = useQuery<PostType>({
  //   queryKey: ["exer_detail"],
  //   queryFn: () => api_id(params.id),
  // });

  const data = detailsDummy;
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 flex flex-col md:flex-row mt-[11vh]"
    >
      <div className="md:w-1/2 flex flex-col justify-between md:mr-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
        >
          {data?.name}
        </motion.h1>
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Equipment: <span className="text-black">{data?.equipment}</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Body part: <span className="text-black-600">{data?.bodyPart}</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Target: <span className="text-black-600">{data?.target}</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            SECONDARY MUSCLES:{" "}
            <span className="text-black">{data?.secondaryMuscles}</span>
          </h2>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">INSTRUCTIONS</h1>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl leading-relaxed list-decimal"
          >
            {data?.instructions.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className=""
          height={500}
          width={600}
          src={data?.gifUrl}
          alt="Exercise GIF"
        />
      </div>
    </motion.div>
  );
};

export default Details;

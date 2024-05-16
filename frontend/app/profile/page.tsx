"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "../../providers/AuthProvider";
import Image from "next/image";
import profilePic from "../../public/profile.svg";
import { motion } from "framer-motion";
import { dummy } from "@/components/dummy";
import { Post } from "@/components/post";
import arrow from "@/public/arrow.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiCall, api_id, fav_get, login } from '@/lib/api';
import { useRouter } from "next/navigation";
import { PostType } from "@/lib/types";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const favorites = dummy;

  const user = useUser();
  const router = useRouter();

  if (!user) {
    router.push("/");
  }

  const { data, status } = useQuery({
    queryFn: fav_get,
    queryKey: ["fav_data"],
    staleTime: Infinity,
  });
  
  return (
    <div className="flex flex-col items-start  min-h-[90vh] py-8 px-4 overflow-hidden">
      <div className="flex items-start mb-4 w-[100vw] border-b-black border-solid border-b-2">
        <div className="relative mr-4 overflow-hidden">
          <Image
            src={profilePic}
            alt="profile pic"
            width={300}
            height={300}
            objectFit="cover"
            unoptimized
          />
        </div>
        <div>
          <p className="text-3xl font-semibold mb-1">{user?.user.name}</p>
          <p className="text-gray-600 text-2xl">{user?.user.email}</p>
        </div>
      </div>
      <div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={arrow} height={100} width={50} alt="arrow" />
          </motion.div>
          <p className="text-4xl font-bold mb-4 ml-4">Favorites</p>
        </div>
        {open && (
          <div className="grid grid-cols-5 gap-4">
            {data?.data.rows.map((favorite: any, index: any) => (
              <Post item={JSON.parse(favorite.exer_data)} isFav={true}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

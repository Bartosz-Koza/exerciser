import React, { use, useEffect, useState } from "react";
import profile from "../public/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { logout, useUser } from "../providers/AuthProvider";
import { queryClient } from "@/providers/ReactQueryProvider";

const ProfilePic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [exerciseData, setExerciseData] = useState(null);

  const user_data = useUser();

  queryClient.invalidateQueries({queryKey: ['user']})

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div onClick={toggleMenu} className="cursor-pointer">
        {
        !user_data ?(
        <Image src={profile} alt="profile pic" height={80} width={80} /> 
        ):
        (
          <div className=" bg-black w-14 h-14 rounded-full text-center text-white flex text-3xl items-center justify-center">
            {user_data.user.name.slice(0,1)}
          </div>
        )
      }
      </div>
      {isMenuOpen &&
        (!user_data ? (
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/signin">
                <p>Sign In</p>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/signup">
                <p>Sign Up</p>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href={"/profile"}>
                <p>{user_data.user.name}</p>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <button onClick={logout}>
                <p>Logout</p>
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};
export default ProfilePic;

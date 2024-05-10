import React, { useState } from "react";
import profile from "../public/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { useUser } from '../providers/AuthProvider';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useUser()

  console.log(user)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image src={profile} alt="profile pic" height={80} width={80} />
      </div>
      {isMenuOpen &&(
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
      )}
    </div>
  );
};
export default Profile;

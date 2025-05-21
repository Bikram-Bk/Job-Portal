import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import User from "../Helper/User";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[13vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="h-full flex items-center">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Logo"
              width={100}
              height={100}
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!session && (
            <Link href="/signup">
              <button
                className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 
            font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          )}

          {session && <User session={session} />}
          {session && (
            <button
              className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 
            font-semibold text-white rounded-lg hover:bg-orange-800 transition-all duration-300">
              Post A Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

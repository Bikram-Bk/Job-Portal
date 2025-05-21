import React from "react";
import HeroImg from "@/public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          {/* Content */}
          <div>
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold">
              The <span className="text-blue-500">Easiest Way</span> To Get Your
              New Job
            </h1>
            <p className="text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem] text-justify leading-relaxed">
              You are not defined by a job title — you are a collection of
              dreams, talents, and untapped potential. Your next opportunity
              should empower you, challenge you, and remind you of what you&rsquo;re
              truly capable of. We&rsquo;re here to guide you toward a role where you
              don&rsquo;t just work — you thrive.
            </p>

            {/* Search Box */}
            <div className="mt-[1.5rem]">
              <input
                type="text"
                placeholder="Search Job."
                className=" text-black w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 rounded-l-md bg-gray-200 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-4 rounded-r-md bg-blue-500 outline-none text-white">
                Search
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <Image src={HeroImg} alt="hero" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

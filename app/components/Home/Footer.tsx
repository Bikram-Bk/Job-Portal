import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]
      items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* First Part */}
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase ">
            Tech Zen
          </h1>
          <p className="text-[14px] text-white text-opacity-70 text-justify leading-relaxed">
            Based in Kathmandu, Tech Zen connects Nepal&rsquo;s tech talent with
            growing job opportunities across the region. We help professionals
            find meaningful roles that support Nepal&rsquo;s digital growth,
            from startups to established companies. Whether you&apos;re starting
            out or experienced, Tech Zen is here to guide your career journey.
          </p>

          {/* Social Icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div
              className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center
                justify-center flex-col">
              <FaFacebook className="text-white" />
            </div>
            <div
              className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center
                justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div
              className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center
                justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div
              className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center
                justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* Second Part of footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Policy
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* Third Part of Footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Job Details
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Resume
          </p>
        </div>

        {/* Fourth Part of Footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            +977-9805767767
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            bisu7767@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity mb-[0.7rem]">
            Thapagaun, New Baneshwor, KTM
          </p>
        </div>
      </div>
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        COPYRIGHT BY BIKRAM-2025
      </h1>
    </div>
  );
};

export default Footer;

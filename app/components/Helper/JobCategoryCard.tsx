import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  category: string;
  openPosition: string;
}

const JobCategoryCard = ({ category, image, openPosition }: Props) => {
  return (
    <div
      className="p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all
    duration-300 border-gray-50 rounded-lg border-opacity-10 ">
      <div className="flex items-center space-x-4">
        {/* Images */}
        <Image src={image} alt={category} width={60} height={60} />
        {/* Content */}
        <div>
          <h1 className="text-[17px] font-semi-bold mb-[0.4rem]">{category}</h1>
          <p className="text-[14px] text-black font-semibold text-opacity-50">
            ({openPosition} open Position)
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;

import React from "react";
import { MdSwapVerticalCircle } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const IconFixedRight = () => {
  return (
    <div className="flex flex-col p-[10px] gap-[12px] fixed bottom-[100px] right-[30px] bg-transparent z-20">
      <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#efefef] text-[#9a542c] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#9a542c] hover:text-[#efefef] transition-colors duration-300">
        <MdSwapVerticalCircle className="text-[30px]" />
      </div>
      <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#efefef] text-[#9a542c] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#9a542c] hover:text-[#efefef] transition-colors duration-300">
        <FaTiktok className="text-[30px]" />
      </div>
      <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#efefef] text-[#9a542c] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#9a542c] hover:text-[#efefef] transition-colors duration-300">
        <FaFacebookMessenger className="text-[30px]" />
      </div>
    </div>
  );
};

export default IconFixedRight;

import React from "react";
import { FaBell } from "react-icons/fa";

const IconFixedLeft = () => {
  return (
    <div className="flex flex-col p-[10px] gap-[12px] fixed bottom-[30px] left-[20px] bg-transparent z-20">
      <div className="w-[45px] border-[1px] border-[#efefef] h-[45px] flex items-center justify-center bg-[#9a542c] text-[#efefef] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#efefef] hover:text-[#9a542c] transition-colors duration-300">
        <FaBell className="text-[25px]" />
      </div>
    </div>
  );
};

export default IconFixedLeft;

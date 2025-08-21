import { ListCategory } from "@/utils/Contants";
import React from "react";

const Category = () => {
  const categories = ListCategory;
  return (
    <div
      data-aos="fade-up"
      className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[50px] flex items-center justify-between"
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className={`w-[86px] h-[68px] ${index === 6 && "hidden xl:flex"} ${
            index === 5 && "hidden lg:flex"
          } ${index === 2 && "hidden md:flex"} ${
            index === 4 && "hidden sm:flex"
          } cursor-pointer`}
        >
          <img
            src={category.image}
            alt={`Category ${index}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Category;

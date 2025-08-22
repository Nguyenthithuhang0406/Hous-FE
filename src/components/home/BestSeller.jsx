import { sofas } from "@/utils/contants/sofaFake";
import React, { useEffect, useState } from "react";
import ProductItem from "../product/ProductItem";

const BestSeller = () => {
  const [category, setCategory] = useState("sofa");
  const [data, setData] = useState(sofas);

  const categories = [
    {
      name: "Sofa",
      title: "Sofa",
    },
    {
      name: "Bàn",
      title: "Bàn",
    },
    {
      name: "Ghế",
      title: "Ghế",
    },
    {
      name: "Giường",
      title: "Giường",
    },
    {
      name: "Tủ",
      title: "Tủ",
    },
  ];

  useEffect(() => {
    setData(sofas);
  }, [category]);

  return (
    <div className="w-full px-[20px]  md:px-[50px] xl:px-[130px] py-[50px] flex flex-col gap-[30px] items-center justify-center">
      <p
        data-aos="fade-down"
        className="text-[25px] md:text-[32px] font-semibold leading-[120%]"
      >
        Sản phẩm bán chạy
      </p>
      <div
        data-aos="fade-down"
        className="flex items-center gap-5 justify-center flex-wrap"
      >
        {categories.map((c, index) => (
          <div
            key={index}
            onClick={() => setCategory(c.name)}
            className={`py-[6px] px-[24px] border-[1px] border-[#ad7555] rounded-lg cursor-pointer ${
              category === c.name
                ? "text-[#fff] bg-[#ad7555]"
                : "text-[#ad7555] bg-[#fff]"
            }`}
          >
            <h3>{c.title}</h3>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-center gap-5 w-full"
      >
        {data?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

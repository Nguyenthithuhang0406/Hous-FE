/* eslint-disable */
import { listProduct } from "@/utils/contants/product";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "../product/ProductItem";

const Materials = () => {
  const [products, setProducts] = useState(listProduct);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width > 1400) {
      setSlidesPerView(3);
    } else if (width > 568) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      const updateNavigation = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateNavigation);
      updateNavigation(); // Gọi 1 lần để cập nhật trạng thái ban đầu

      return () => {
        swiperInstance.off("slideChange", updateNavigation);
      };
    }
  }, []);
  const listMaterials = [
    {
      image:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/bg_menu_1.png?1755707267701",
      name: "Vải",
      title: "Vải",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/bg_menu_2.png?1755707267701",
      name: "Gỗ",
      title: "Gỗ",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/bg_menu_3.png?1755707267701",
      name: "Đá",
      title: "Đá",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/bg_menu_4.png?1755707267701",
      name: "Da",
      title: "Da",
    },
  ];

  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] pt-[250px] sm:pt-[20px] py-[20px] flex flex-col gap-[50px]">
      {/* header */}
      <div
        data-aos="fade-down"
        className="w-full flex flex-col sm:flex-row items-center justify-between"
      >
        <div className="flex flex-col gap-[30px]">
          <p className="text-[18px] w-fit leading-[140%] text-[#ad7555] font-medium py-[2px] border-b-[2px] border-[#ad7555]">
            SẢN PHẨM ĐA CHẤT LIỆU
          </p>
          <p className="text-[30px] md:text-[35px] lg:text-[42px] font-semibold left-[140%] cursor-pointer hover:text-[#ad7555]">
            Đa dạng hóa không gian sống
          </p>
        </div>

        <button
          className="px-[25px] py-[12px] bg-[#ad7555] text-[#fff] text-[18px] font-medium leading-[120%] flex items-center gap-[10px] rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.25))] bg-no-repeat bg-center
  bg-[length:0%_100%] hover:bg-[length:100%_100%] 
  transition-[background-size] duration-500 ease-out"
        >
          XEM TẤT CẢ <MdArrowRightAlt />
        </button>
      </div>

      {/* content */}
      <div className="w-full flex items-start justify-between gap-[50px]">
        <div
          data-aos="fade-right"
          className="hidden md:flex w-[210px] flex-col gap-[20px]"
        >
          {listMaterials.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[210px] h-[57px] rounded-xl cursor-pointer flex items-center justify-center bg-[length:0%_100%] hover:bg-[length:100%_100%] 
             bg-no-repeat bg-center transition-[background-size] duration-500 ease-out"
            >
              <div
                className="w-full h-full rounded-xl flex items-center justify-center 
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.25))] 
                  bg-[length:0%_100%] hover:bg-[length:100%_100%] 
                  bg-no-repeat bg-center transition-[background-size] duration-500 ease-out"
              >
                <p
                  className={`text-[16px] md:text-[18px] font-medium text-center ${
                    index === 2 ? "text-[#000]" : "text-[#fff]"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-left" className="w-[100%] md:w-[70%] xl:w-[75%]">
          <div className="w-auto flex items-center justify-center relative">
            <button
              ref={prevRef}
              className={`absolute shadow-xl ring-1 ring-[#f4b896] border-[#ad7555] top-[50%] left-[10px] z-10 p-1 rounded-md flex items-center justify-center ${
                isBeginning
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
              disabled={isBeginning}
            >
              <GrFormPrevious className="swiper-icon" />
            </button>
            <Swiper
              modules={[Navigation]}
              ref={swiperRef}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={slidesPerView}
              loop={true}
              className="w-full flex items-center justify-center"
            >
              <div className="w-full flex items-center !justify-center">
                {products.map((product, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center"
                    key={index}
                  >
                    <ProductItem product={product} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <button
              ref={nextRef}
              className={`absolute top-[50%] shadow-xl ring-1 ring-[#ad7555] right-0 z-10 p-1 rounded-md flex items-center justify-center ${
                isEnd
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
              disabled={isEnd}
            >
              <GrFormNext className="swiper-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;

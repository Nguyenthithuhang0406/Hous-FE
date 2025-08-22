import { listNew } from "@/utils/contants/News";
import React, { useEffect, useRef, useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const News = () => {
  const news = listNew;

  const [slidesPerView, setSlidesPerView] = useState(1);
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width > 1400) {
      setSlidesPerView(3);
    } else if (width > 768) {
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

  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[50px] flex flex-col gap-[20px] items-center justify-center">
      <p
        data-aos="fade-down"
        className="text-[18px] text-[#ad7555] font-semibold leading-[140%] py-[2px] border-b[2px] border-[#ad7555] w-fit"
      >
        BLOG HAUS
      </p>
      <p
        data-aos="fade-down"
        className="text-[35px] text-center md:text-[42px] font-bold leading-[140%]"
      >
        Tin tức và xu hướng nội thất
      </p>

      <div data-aos="fade-up" className="w-full ">
        <div className=" flex items-center justify-center relative">
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
            <div
              data-aos="fade-up"
              className="w-full flex items-center !justify-center gap-[30px] py-[50px]"
            >
              {news.map((newItem, index) => (
                <SwiperSlide
                  className="flex items-center justify-center"
                  key={index}
                >
                  <div
                    data-aos="fade-up"
                    className="max-w-[366px] hover:shadow-lg p-[20px] rounded-lg hover:bg-[#faf0eb] cursor-pointer group"
                  >
                    <div className="w-full max-h-[207px] rounded-lg">
                      <img
                        src={newItem.image}
                        alt={newItem.title}
                        className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between py-[15px]">
                      <p className="flex gap-[5px] text-[16px] leading-[140%] items-center">
                        <IoIosCalendar className="text-[20px] text-[#ad7555]" />{" "}
                        {newItem.date}
                      </p>
                      <p className="flex gap-[5px] text-[16px] leading-[140%] items-center">
                        <MdOutlineAccountCircle className="text-[20px] text-[#ad7555]" />{" "}
                        {newItem.author}
                      </p>
                    </div>
                    <p className="w-full text-[18px] font-semibold leading-[140%] break-words  line-clamp-2">
                      {newItem.title}
                    </p>
                    <p className="w-full mt-[10px] text-[15px] text-[#4d4e50] leading-[140%] break-words line-clamp-5">
                      {newItem.excerpt}
                    </p>
                  </div>
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

      <div
        data-aos="fade-up"
        className="w-full flex items-center justify-center"
      >
        <button
          className="px-[25px] py-[12px] bg-[#ad7555] rounded-lg text-[#fff] font-semibold flex items-center gap-[10px] bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.25))] bg-no-repeat bg-center
  bg-[length:0%_100%] hover:bg-[length:100%_100%] 
  transition-[background-size] duration-500 ease-out"
        >
          XEM TẤT CẢ <MdArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default News;

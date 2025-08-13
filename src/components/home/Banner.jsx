import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

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

  const sliders = [
    {
      imageUrl:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/slider_1.jpg?1754927926286",
    },
    {
      imageUrl:
        "https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/slider_2.jpg?1754927926286",
    },
  ];
  return (
    <div className="w-full relative top-0 left-0 flex items-center justify-center">
      <button
        ref={prevRef}
        className={`absolute z-10 left-[10px] bg-slate-100 text-[#9a542c] p-[4px] text-[25px] shadow-lg rounded-lg ${
          isBeginning ? "bg-slate-100 opacity-30 cursor-not-allowed" : ""
        }`}
        disabled={isBeginning}
      >
        <GrFormPrevious className="swiper-icon" />
      </button>

      <Swiper
        // navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        ref={swiperRef}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[100vh]"
              src={slider.imageUrl}
              alt={`Slide ${index + 1}`}
            />

            {/* Lớp phủ màu nâu nhẹ */}
            <div className="absolute inset-0 bg-[#0a0400] opacity-50 z-1 pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-[100vh] z-10 flex flex-col  gap-[20px] items-center justify-center px-[50px]  md:px-[100px] lg:px-[200px] xl:px-[300px]">
              <p
                data-aos="fade-down"
                className="text-[25px] md:text-[30px] break-words text-center text-[#9a542c] leading-[120%] font-semibold py-[3px] border-b-[2px] border-b-[#9a542c]"
              >
                CHÀO MỪNG BẠN ĐẾN VỚI CHÚNG TÔI
              </p>
              <p
                data-aos="fade-right"
                className="text-[30px] ms:text-[35px] md:text-[40px] lg:text-[50px] break-words text-[#efefef] leading-[140%] text-center font-bold"
              >
                Haus - Chuyên Thi Công & Cung Cấp Sản Phẩm Nội Thất Cao Cấp
              </p>
              <p
                data-aos="fade-left"
                className="text-[16px] sm:text-[18px] md:text-[20px] text-center break-words text-[#efefef] leading-[140%]"
              >
                Đơn vị chuyên nghiệp trong lĩnh vực thi công nội thất trọn gói
                và cung cấp sản phẩm nội thất cao cấp, mang đến không gian sống
                và làm việc hoàn hảo cho khách hàng
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={nextRef}
        className={`absolute z-10 right-[10px] bg-slate-100 text-[#9a542c] p-[4px] text-[25px] shadow-lg rounded-lg ${
          isEnd ? "bg-slate-100 opacity-30 cursor-not-allowed" : ""
        }`}
        disabled={isEnd}
      >
        <GrFormNext className="swiper-icon" />
      </button>
    </div>
  );
};

export default Banner;

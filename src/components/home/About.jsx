import React from "react";
import Counter from "./Counter";

const About = () => {
  const listInventory = [
    {
      total: 1600,
      title: "Dự án hoàn thành",
    },
    {
      total: 180,
      title: "Nhân sự chuyên môn cao",
    },
    {
      total: 38,
      title: "Đối tác uy tín toàn quốc",
    },
  ];
  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[20px] flex flex-col lg:flex-row items-center justify-between gap-[100px]">
      <div data-aos="fade-down" className="w-full lg:w-3/5 flex flex-col gap-5">
        <p className="w-fit text-[#ad7555] text-[18px] md:text-[20px] py-2 border-b-[2px] border-[#ad7555] font-semibold">
          VỀ CHÚNG TÔI
        </p>
        <p className="text-[30px] md:text-[40px] lg:text-[48px] font-bold leading-[140%]">
          Giải pháp nội thất hoàn hảo cho không gian của bạn
        </p>
        <p className="text-[16px] text-[#757F95] leading-[140%]">
          Haus là đơn vị chuyên thiết kế và thi công nội thất trọn gói, đồng
          thời cung cấp các sản phẩm nội thất cao cấp dành cho nhà ở, biệt thự,
          căn hộ, văn phòng, showroom. Với sứ mệnh tạo ra không gian sống và làm
          việc đẳng cấp, mang đậm dấu ấn cá nhân của mỗi khách hàng, chúng tôi
          luôn đặt chất lượng và sự hài lòng của khách hàng làm giá trị cốt lõi
          trong mọi hoạt động.
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between flex-wrap gap-[20px]">
          {listInventory.map((item, index) => (
            <Counter key={index} total={item.total} title={item.title} />
          ))}
        </div>
      </div>
      <div data-aos="flip-left" className="w-full lg:w-2/5">
        <img
          src="https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/img_mobile_about.png?1755227708045"
          alt="About Us"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;

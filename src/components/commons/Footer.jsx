import Logo from "@/assets/icons/Logo";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[50px] bg-[#150131] border-t-[1px] border-t-[#9a542c] flex flex-col gap-[50px] sm:flex-row sm:items-start sm:justify-between items-center justify-center">
      <div className="flex md:w-[30%] sm:w-[50%] w-full flex-col gap-[12px]">
        <Logo />
        <div className="flex items-center gap-[10px] text-[#efefef]">
          <div className="h-[40px] w-[40px] rounded-[8px] bg-[#9a542c] flex items-center justify-center">
            <FaMapMarkerAlt className="text-[24px] text-[#efefef]" />
          </div>
          <p className="text-[16px] text-[#efefef] leading-[120%]">
            Nguyên Xá, Bắc Từ Liêm, Hà Nội
          </p>
        </div>

        <div className="flex items-center gap-[10px] text-[#efefef]">
          <div className="h-[40px] w-[40px] rounded-[8px] bg-[#9a542c] flex items-center justify-center">
            <MdEmail className="text-[24px] text-[#efefef]" />
          </div>
          <p className="text-[16px] text-[#efefef] leading-[120%]">
            haus@example.com
          </p>
        </div>

        <div className="flex items-center gap-[10px] text-[#efefef]">
          <div className="h-[40px] w-[40px] rounded-[8px] bg-[#9a542c] flex items-center justify-center">
            <BsFillTelephoneFill className="text-[24px] text-[#efefef]" />
          </div>
          <p className="text-[16px] text-[#efefef] leading-[120%]">
            +84 123 456 789
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[50%] md:2/3 sm:mt-[30px] flex md:flex-row flex-col items-start justify-between gap-[20px]">
        <div className="flex md:w-[50%] w-full flex-col gap-[12px]">
          <p className="text-[16px] text-[#efefef] leading-[120%]">
            VỀ CHÚNG TÔI
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] text-[16px] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Giới thiệu
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Liên hệ
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Tin tức
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Hệ thống cửa hàng
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Sản phẩm
          </p>
        </div>

        <div className="flex md:w-[50%] w-full flex-col gap-[12px]">
          <p className="text-[16px] text-[#efefef] leading-[120%]">
            DỊCH VỤ KHÁCH HÀNG
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Kiểm tra đơn hàng
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Chính sách vận chuyển
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Chính sách đổi trả
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Bảo mật khách hàng
          </p>
          <p className="flex items-center gap-[10px] text-[#efefef] cursor-pointer">
            <BiLinkExternal className="text-[24px] text-[#9a542c]" />
            Đăng ký tài khoản
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FaCaretDown, FaBars, FaShoppingCart, FaCaretUp } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { menuListProduct, menuProjects } from "@/utils/contants/Menu";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productCategorys, setProductCategorys] = useState(menuListProduct);
  const [projectCategorys, setProjectCategorys] = useState(menuProjects);

  const [isLogin, setIsLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowMenuMb, setIsShowMenuMb] = useState(false);

  const childRef = useRef(null);
  const menuMbRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (childRef.current && !childRef.current.contains(event.target)) {
        setIsShow(false);
      }
      if (menuMbRef.current && !menuMbRef.current.contains(event.target)) {
        setIsShowMenuMb(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [childRef, menuMbRef]);

  const handleLogout = () => {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // toast.success("Đăng xuất thành công");
    // setIsLogin(false);
    // navigate("/auth");
  };

  return (
    <>
      {/* Menu desktop */}
      <div className="hidden lg:flex w-full items-center">
        <ul className="flex gap-5 items-center justify-center list-none">
          <li
            className={`relative text-[15px] ${
              location.pathname === "/" ? "text-[#9a542c]" : "text-[#efefef]"
            } hover:text-[#9a542c] cursor-pointer transition-all`}
          >
            <span onClick={() => navigate("/")} className="flex items-end">
              Trang chủ
            </span>
          </li>

          <li className="relative text-[15px] text-black cursor-pointer transition-all group">
            <span className="flex items-center text-[#efefef]  group-hover:text-[#9a542c]">
              Sản phẩm
              <FaCaretDown className="block text-[15px] group-hover:hidden" />
              <FaCaretUp className="hidden text-[15px] group-hover:block" />
            </span>
            <div className="hidden absolute top-full left-0 bg-white p-5 rounded shadow-lg z-10 group-hover:flex group-hover:flex-wrap gap-[20px] justify-between w-[900px]">
              {productCategorys.map((category) => (
                <ul className="flex flex-col gap-[10px] list-none w-[200px]">
                  <li
                    key={category.id}
                    className="font-medium text-[15px] cursor-pointer hover:text-[#fd8f7c]"
                  >
                    {category.title}
                  </li>
                  {category.childrens && category.childrens.length > 0 && (
                    <ul className="flex flex-col gap-[10px] list-none">
                      {category.childrens.map((child) => (
                        <li
                          key={child.id}
                          className="text-[15px] cursor-pointer hover:text-[#fd8f7c]"
                        >
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              ))}
            </div>
          </li>

          <li className="relative text-[15px] text-black cursor-pointer transition-all group">
            <span className="flex items-center text-[#efefef] group-hover:text-[#9a542c]">
              Dự án
              <FaCaretDown className="block text-[15px] group-hover:hidden" />
              <FaCaretUp className="hidden text-[15px] group-hover:block" />
            </span>
            <div className="hidden absolute top-full left-0 bg-white p-5 rounded shadow-lg z-10 group-hover:flex justify-between w-[200px]">
              <ul className="flex flex-col gap-5 list-none">
                {projectCategorys.map((project) => (
                  <li
                    key={project.id}
                    className="text-[15px] cursor-pointer hover:text-[#fd8f7c]"
                  >
                    {project.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative text-[15px] text-black cursor-pointer transition-all group">
            <span
              // onClick={() => navigate("/blog")}
              className="flex items-center text-[#efefef] group-hover:text-[#9a542c] cursor-pointer"
            >
              Tin tức
              <FaCaretDown className="block text-[15px] group-hover:hidden" />
              <FaCaretUp className="hidden text-[15px] group-hover:block" />
            </span>
            <div className="hidden absolute top-full left-0 bg-white p-5 rounded shadow-lg z-10 group-hover:flex justify-between w-[200px]">
              <ul className="flex flex-col gap-5 list-none">
                <li className="text-[15px] cursor-pointer hover:text-[#fd8f7c]">
                  Đội ngũ
                </li>
                <li className="text-[15px] cursor-pointer hover:text-[#fd8f7c]">
                  Chi tiết đội ngũ
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span
              // onClick={() => navigate("/contact")}
              className="flex items-end text-[#efefef] hover:text-[#9a542c] cursor-pointer"
            >
              Ước tính chi phí
            </span>
          </li>
          <li>
            <span
              // onClick={() => navigate("/market-system")}
              className="flex items-end text-[#efefef] hover:text-[#9a542c] cursor-pointer"
            >
              Liên hệ
            </span>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 z-[999] w-full bg-[#9a542c] shadow flex items-center justify-between px-20 py-2 sm:px-12 xs:px-5">
        <ul className="flex justify-between items-center w-full list-none">
          <li
            className="text-white text-center cursor-pointer"
            onClick={() => setIsShowMenuMb(!isShowMenuMb)}
          >
            <FaBars className="w-5 h-5 mx-auto" />
            <p className="text-[15px]">Menu</p>
          </li>
          {isShowMenuMb && (
            <div
              ref={menuMbRef}
              className="absolute bg-white shadow-lg rounded-lg py-4 flex flex-col gap-2 w-[150px] bottom-[60px]"
            >
              <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                Sản phẩm
              </p>
              <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                Dự án
              </p>
              <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                Tin tức
              </p>
              <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                Ước tính chi phí
              </p>
              <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                Liên hệ
              </p>
            </div>
          )}
          <li className="text-white text-center cursor-pointer">
            <IoHeart className="w-5 h-5 mx-auto" />
            <p className="text-[15px]">Yêu thích</p>
          </li>
          <li
            className="text-white text-center cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            <MdAccountCircle className="w-5 h-5 mx-auto" />
            <p className="text-[15px]">Tài khoản</p>
          </li>
          {isShow && !isLogin && (
            <div
              ref={childRef}
              className="absolute bottom-[60px] right-[25%] bg-white shadow-lg rounded-lg flex flex-col gap-2 py-2"
            >
              <p
                className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                Đăng ký
              </p>
              <p
                className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                Đăng nhập
              </p>
            </div>
          )}
          {isShow && isLogin && (
            <div
              ref={childRef}
              className="absolute bottom-[60px] right-[25%] bg-white shadow-lg rounded-lgflex flex-col gap-2 py-2"
            >
              <p
                className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                Trang cá nhân
              </p>
              <p
                className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer"
                onClick={handleLogout}
              >
                Đăng xuất
              </p>
            </div>
          )}
          <li className="text-white text-center cursor-pointer">
            <FaShoppingCart className="w-5 h-5 mx-auto" />
            <p className="text-[15px]">Giỏ hàng</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

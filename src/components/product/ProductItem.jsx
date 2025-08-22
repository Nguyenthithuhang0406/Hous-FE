/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { formatNumber } from "@/utils/function";
import SaleProgressBar from "./SaleProgressBar";

const ProductItem = ({ product }) => {
  const [indexImage, setIndexImage] = useState(0);
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const [likeProducts, setLikeProducts] = useState(
    JSON.parse(localStorage.getItem("likeProducts")) || []
  );

  useEffect(() => {
    setLikeProducts(JSON.parse(localStorage.getItem("likeProducts")) || []);
  }, [isFetching]);

  const isLiked = (product) => {
    return likeProducts.some((item) => item?.id === product?.id);
  };

  const handleLike = (product) => {
    setIsFetching(!isFetching);
    const isLike = isLiked(product);
    if (isLike) {
      const updatedLikeProducts = likeProducts.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("likeProducts", JSON.stringify(updatedLikeProducts));
    } else {
      likeProducts.push(product);
      localStorage.setItem("likeProducts", JSON.stringify(likeProducts));
    }
  };

  return (
    <div
      onClick={() => navigate("/product/2")}
      className="relative w-[200px] h-[350px] lg:w-[260px] lg:h-[370px] xl:w-[300px] xl:h-[400px] bg-white rounded-xl shadow cursor-pointer overflow-hidden group transition-all duration-300"
    >
      {/* Giảm giá */}
      {product?.discount ? (
        <button className="absolute top-2 left-2 z-10 bg-[#ad7555] text-white text-[15px] px-2 py-1 rounded-lg">
          - {product?.discount}%
        </button>
      ) : null}

      {/* Nút yêu thích */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute shadow-lg top-2 right-2 z-10 w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-[#faf5f5] cursor-pointer
          opacity-0 translate-x-6 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible transition-all duration-300
          ${isLiked(product) ? "bg-[#ff6347] text-white" : ""}`}
      >
        <FaRegHeart onClick={() => handleLike(product)} />
      </div>

      {/* Ảnh sản phẩm */}
      <div className="absolute top-0 left-0 w-full h-[184px] lg:h-[185px] xl:h-[245px] overflow-hidden">
        <img
          src={product?.image[indexImage]}
          alt={product?.name}
          className="w-full h-full object-cover rounded-t-xl transform scale-110 group-hover:scale-100 transition-transform duration-300"
        />
      </div>

      {/* Button thêm giỏ hàng */}
      <div className="w-full flex items-center justify-center absolute top-[140px] lg:top-[140px] xl:top-[200px] left-0">
        <button
          onClick={(e) => e.stopPropagation()}
          className={` w-[70%] z-10 bg-white text-[15px] font-medium px-3 py-2 rounded-xl
          opacity-0 translate-y-6 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300
          hover:bg-[#ad7555] hover:text-white ${
            product?.sell === product?.total
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          {product?.image.length > 1
            ? "Tùy chọn"
            : product?.sell === product?.total
            ? "Hết hàng"
            : "Thêm vào giỏ hàng"}
        </button>
      </div>

      {/* List thumbnail */}
      <div className="absolute top-[190px] lg:top-[190px] xl:top-[250px] flex gap-2 px-5 items-center z-10">
        {product?.image.map((image, index) => (
          <div
            onMouseEnter={() => setIndexImage(index)}
            key={index}
            className={`w-[30px] h-[30px] rounded-lg overflow-hidden p-[2px] border 
              ${
                index === indexImage
                  ? "border-[#ad7555] shadow-md z-10"
                  : "border-gray-300"
              }`}
          >
            <img
              src={image}
              alt={product?.name}
              className="w-full h-full rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Tên sản phẩm */}
      <p
        className="absolute top-[220px] lg:top-[220px] xl:top-[280px] px-5 text-[15px] font-medium line-clamp-2"
        title={product?.name}
      >
        {product?.name}
      </p>

      {/* Đã bán */}
      <div className="absolute hidden lg:block bottom-[50px] w-full px-5">
        <SaleProgressBar sold={product?.sell} total={product?.total} />
      </div>

      {/* Giá */}
      <div className="absolute bottom-[20px] w-full px-5 flex flex-col lg:flex-row justify-between lg:items-center text-[15px] font-medium">
        <p className="text-[#ff6347] font-medium">
          {formatNumber(product?.price * (1 - product?.discount / 100))}đ
        </p>
        {product?.discount > 0 && (
          <p className="line-through text-gray-400">
            {formatNumber(product?.price)} đ
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

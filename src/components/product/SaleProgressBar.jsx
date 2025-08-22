import React from "react";

const SaleProgressBar = ({ sold, total }) => {
  const percent = Math.min((sold / total) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
      {/* Thanh progress với hiệu ứng kẻ chéo chạy */}
      <div
        className="h-full bg-[repeating-linear-gradient(45deg,#ad7555,#ad7555_10px,#e1b196_10px,#e1b196_20px)] animate-stripes"
        style={{ width: `${percent}%` }}
      ></div>

      {/* Text nằm trên progress bar */}
      <span className="absolute inset-0 flex items-center gap-[3px] justify-center text-[12px] text-black">
        <span className="font-semibold">{sold}</span> sản phẩm đã
        bán
      </span>
    </div>
  );
};

export default SaleProgressBar;

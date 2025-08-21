import { useEffect, useState } from "react";

const Counter = ({ total, title, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1); // tiến độ 0 -> 1
      const value = Math.floor(progress * total); // giá trị hiện tại theo tiến độ
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [total, duration]);

  return (
    <div className="w-full mt-[20px] sm:mt-0 sm:w-[180px] lg:w-[200px] h-[120px] text-center bg-[#ad7555] bg-opacity-20 p-[20px] rounded-xl border-b-[3px] border-[#ad7555]">
      <p className="text-[35px] font-bold text-[#ad7555]">{count}+</p>
      <p className="text-[15px] mt-[10px]">{title}</p>
    </div>
  );
};

export default Counter;

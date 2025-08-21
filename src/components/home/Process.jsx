import { listProcess } from "@/utils/contants/Process";
import React from "react";

const Process = () => {
  const processes = listProcess;

  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[50px] flex flex-col gap-[50px] items-center justify-center">
      <div
        data-aos="fade-down"
        className="flex flex-col items-center justify-center gap-[20px]"
      >
        <p className="w-fit text-[18px] leading-[140%] font-medium text-[#ad7555] py-[2px] border-b-[2px] border-[#ad7555]">
          QUY TRÌNH LÀM VIỆC
        </p>
        <p className="text-[35px] md:text-[42px] leading-[140%] font-semibold">
          Cam kết chất lượng từ Haus
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-[30px] xl:gap-[50px]">
        <div className="w-full lg:w-1/2 h-[250px] flex gap-[30px] xl:gap-[50px]">
          {/* 1 */}
          <div data-aos="fade-right" className="w-1/2 flex flex-col gap-[20px]">
            <div className="w-full flex flex-col gap-[30px] items-center justify-center">
              <div className="relative bg-[#e7e6e6] shadow-lg rounded-full p-[7px] w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
                <div className="absolute top-0 left-0 z-10 h-[40px] w-[40px] rounded-full bg-[#ad7555] flex items-center justify-center text-white text-[14px] font-medium">
                  {processes[0].number}
                </div>
                <div className="h-[90px] w-[90px] xl:h-[110px] xl:w-[110px] rounded-full border-[3px] border-[#ad7555] flex items-center justify-center">
                  <img
                    src={processes[0].icon}
                    alt={processes[0].title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <img
                  src="https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/icon-arrow.png?1750130832000"
                  alt="Arrow"
                  className="absolute z-10 hidden md:block md:left-[200px] lg:left-[130px] xl:left-[150px] md:w-[100px] lg:w-[80px] xl:w-[100px] top-[30px]"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[20px]">
                <p className="word-break text-center text-[24px] font-bold leading-[120%]">
                  {processes[0].title}
                </p>
                <p className="word-break text-center text-[16px] text-[#757F95] leading-[120%]">
                  {processes[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div data-aos="fade-right" className="w-1/2 flex flex-col gap-[20px]">
            <div className="w-full flex flex-col gap-[30px] items-center justify-center">
              <div className="relative bg-[#e7e6e6] shadow-lg rounded-full p-[7px] w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
                <div className="absolute top-0 left-0 z-10 h-[40px] w-[40px] rounded-full bg-[#ad7555] flex items-center justify-center text-white text-[14px] font-medium">
                  {processes[1].number}
                </div>
                <div className="h-[90px] w-[90px] xl:h-[110px] xl:w-[110px] rounded-full border-[3px] border-[#ad7555] flex items-center justify-center">
                  <img
                    src={processes[1].icon}
                    alt={processes[1].title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <img
                  src="https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/icon-arrow.png?1750130832000"
                  alt="Arrow"
                  className="absolute z-10 hidden lg:block md:left-[200px] lg:left-[130px] xl:left-[150px] md:w-[100px] lg:w-[80px] xl:w-[100px] top-[30px]"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[20px]">
                <p className="word-break text-center text-[24px] font-bold leading-[120%]">
                  {processes[1].title}
                </p>
                <p className="word-break text-center text-[16px] text-[#757F95] leading-[120%]">
                  {processes[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[250px] flex gap-[30px] xl:gap-[50px]">
          {/* 3 */}
          <div data-aos="fade-right" className="w-1/2 flex flex-col gap-[20px]">
            <div className="w-full flex flex-col gap-[30px] items-center justify-center">
              <div className="relative bg-[#e7e6e6] shadow-lg rounded-full p-[7px] w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
                <div className="absolute top-0 left-0 z-10 h-[40px] w-[40px] rounded-full bg-[#ad7555] flex items-center justify-center text-white text-[14px] font-medium">
                  {processes[2].number}
                </div>
                <div className="h-[90px] w-[90px] xl:h-[110px] xl:w-[110px] rounded-full border-[3px] border-[#ad7555] flex items-center justify-center">
                  <img
                    src={processes[2].icon}
                    alt={processes[2].title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <img
                  src="https://bizweb.dktcdn.net/100/570/902/themes/1027061/assets/icon-arrow.png?1750130832000"
                  alt="Arrow"
                  className="absolute z-10 hidden md:block md:left-[200px] lg:left-[130px] xl:left-[150px] md:w-[100px] lg:w-[80px] xl:w-[100px] top-[30px]"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[20px]">
                <p className="word-break text-center text-[24px] font-bold leading-[120%]">
                  {processes[2].title}
                </p>
                <p className="word-break text-center text-[16px] text-[#757F95] leading-[120%]">
                  {processes[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div data-aos="fade-right" className="w-1/2 flex flex-col gap-[20px]">
            <div className="w-full flex flex-col gap-[30px] items-center justify-center">
              <div className="relative bg-[#e7e6e6] shadow-lg rounded-full p-[7px] w-[100px] h-[100px] xl:w-[130px] xl:h-[130px] flex items-center justify-center">
                <div className="absolute top-0 left-0 z-10 h-[40px] w-[40px] rounded-full bg-[#ad7555] flex items-center justify-center text-white text-[14px] font-medium">
                  {processes[3].number}
                </div>
                <div className="h-[90px] w-[90px] xl:h-[110px] xl:w-[110px] rounded-full border-[3px] border-[#ad7555] flex items-center justify-center">
                  <img
                    src={processes[3].icon}
                    alt={processes[3].title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[20px]">
                <p className="word-break text-center text-[24px] font-bold leading-[120%]">
                  {processes[3].title}
                </p>
                <p className="word-break text-center text-[16px] text-[#757F95] leading-[120%]">
                  {processes[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

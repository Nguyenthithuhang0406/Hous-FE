import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const faqData = [
    {
      question: "Haus cung cấp những dịch vụ nào?",
      answer:
        "Haus chuyên thiết kế, thi công nội thất trọn gói và cung cấp sản phẩm nội thất cao cấp, phù hợp với nhiều phong cách và nhu cầu khác nhau.",
    },
    {
      question: "Thời gian thi công nội thất mất bao lâu?",
      answer:
        "Thời gian thi công phụ thuộc vào quy mô dự án, thông thường dao động từ 15 - 45 ngày. Chúng tôi luôn cam kết đúng tiến độ và đảm bảo chất lượng.",
    },
    {
      question: "Haus có hỗ trợ thiết kế theo yêu cầu không?",
      answer:
        "Có, chúng tôi cung cấp dịch vụ thiết kế riêng theo yêu cầu của khách hàng, đảm bảo không gian tối ưu, thẩm mỹ và phù hợp với sở thích cá nhân.",
    },
    {
      question: "Chính sách bảo hành sản phẩm như thế nào?",
      answer:
        "Chúng tôi bảo hành sản phẩm từ 12 - 24 tháng tùy theo từng loại, đồng thời hỗ trợ bảo trì dài hạn để khách hàng yên tâm sử dụng.",
    },
  ];

  const [opens, setOpens] = useState([]);

  const handleClick = (index) => {
    if (opens.includes(index)) {
      setOpens(opens.filter((i) => i !== index));
    } else {
      setOpens([...opens, index]);
    }
  };

  return (
    <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[100px] flex flex-col  lg:flex-row gap-[50px] items-center justify-between bg-[#f4f3f3]">
      <div
        data-aos="fade-right"
        className="w-full lg:w-1/2 flex flex-col gap-[20px]"
      >
        <p className="text-[18px] text-[#ad7555] leading-[140%] font-medium py-[2px] border-b-[2px] border-[#ad7555] w-fit">
          FAQ'S
        </p>
        <p className="w-full break-words text-[35px] md:text-[42px] font-semibold leading-[140%]">
          Câu hỏi thường gặp
        </p>
        <p className="w-full break-words text-[#757F95] leading-[140%]">
          Tại Haus, chúng tôi cung cấp dịch vụ thiết kế và thi công nội thất
          trọn gói, giúp khách hàng hiện thực hóa không gian sống và làm việc lý
          tưởng. Với đội ngũ giàu kinh nghiệm, chúng tôi cam kết đảm bảo tiến
          độ, chất lượng và tính thẩm mỹ cao trong từng công trình.
          <br /> <br /> Bên cạnh dịch vụ thi công, ND Interior còn cung cấp sản
          phẩm nội thất cao cấp, đa dạng mẫu mã, phù hợp với nhiều phong cách từ
          hiện đại, tối giản đến tân cổ điển, đáp ứng nhu cầu của mọi khách
          hàng.
          <br />
          <br /> Nếu bạn có bất kỳ thắc mắc nào về quy trình thi công, chất
          liệu, giá cả hay chính sách bảo hành, hãy xem ngay phần Câu hỏi thường
          gặp để biết thêm chi tiết hoặc liên hệ với chúng tôi để được tư vấn
          trực tiếp! 🚀
        </p>
        <button
          className="bg-[#ad7555] text-[#fff] px-[25px] py-[12px] rounded-lg font-medium w-fit bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.25))] bg-no-repeat bg-center
  bg-[length:0%_100%] hover:bg-[length:100%_100%] 
  transition-[background-size] duration-500 ease-out"
        >
          GỬI CÂU HỎI ?
        </button>
      </div>

      <div
        data-aos="fade-down"
        className="w-full lg:w-1/2 flex flex-col gap-[20px]"
      >
        {faqData.map((item, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="w-full bg-[#fff] rounded-lg"
          >
            <div
              className="w-full p-[20px] flex items-center justify-between"
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center gap-[10px] text-[18px] font-semibold leading-[140%]">
                <AiFillQuestionCircle className="text-[30px] text-[#ad7555]" />
                <p>{item.question}</p>
              </div>
              {opens.includes(index) ? (
                <IoIosArrowUp className="text-[20px]" />
              ) : (
                <IoIosArrowDown className="text-[20px]" />
              )}
            </div>

            <div
              className={`${
                opens.includes(index) ? "block" : "hidden"
              } w-full p-[20px] border-t-[1px] border-[#ad7555] leading-[140%]`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

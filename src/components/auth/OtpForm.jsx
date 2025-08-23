import React, { useState, useRef, useEffect } from "react";
import { FaUserLock } from "react-icons/fa";

const AuthenOTP = ({ email, onSubmit, onResend }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    // Quan ly thoi gian gui lai
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = () => {
        onSubmit(otp.join(""));
    };

    const handleResend = () => {
        setTimeLeft(120);
        setOtp(new Array(6).fill(""));
        inputRefs.current[0].focus();
        onResend();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px] text-center">
                <div className="flex justify-center mb-4">
                    <FaUserLock className="text-orange-500 drop-shadow-md" size={80} />
                </div>

                <h2 className="text-xl font-bold text-orange-500 mb-2">XÁC THỰC OTP</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Vui lòng nhập mã số chúng tôi đã gửi cho bạn qua{" "}
                    <span className="font-medium">{email}</span>.{" "}
                    Mã xác thực có giá trị trong{" "}
                    <span className="font-semibold text-red-500">{timeLeft}s</span>
                </p>

                <div className="flex justify-center gap-3 mb-6">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition cursor-pointer"
                >
                    Tiếp tục
                </button>

                <p className="text-sm text-gray-600 mt-4">
                    {timeLeft > 0 ? (
                        <>
                            Chưa nhận được mã?{" "}
                            <span className="text-gray-400">Gửi lại sau {timeLeft}s</span>
                        </>
                    ) : (
                        <>
                            Chưa nhận được mã?{" "}
                            <span
                                onClick={handleResend}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Gửi lại
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthenOTP;

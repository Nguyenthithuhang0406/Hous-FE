import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate = "2025-12-31T23:59:59" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2 text-[#ad7555] text-[20px] md:text-[25px] lg:text-[30px] font-bold">
      <div className="bg-[#ad7555] p-4 rounded-lg text-white">{timeLeft.days ?? "00"}</div>{" "}
      :
      <div className="bg-[#ad7555] p-4 rounded-lg text-white">
        {String(timeLeft.hours ?? 0).padStart(2, "0")}
      </div>{" "}
      :
      <div className="bg-[#ad7555] p-4 rounded-lg text-white">
        {String(timeLeft.minutes ?? 0).padStart(2, "0")}
      </div>{" "}
      :
      <div className="bg-[#ad7555] p-4 rounded-lg text-white">
        {String(timeLeft.seconds ?? 0).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown;

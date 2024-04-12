import { useState, useEffect } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  const shift = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      console.log(date.getUTCHours());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex">
        {date.getUTCHours() < shift
          ? date.getUTCHours() + 20
          : date.getUTCHours() < 10 + shift
          ? "0" + date.getUTCHours() - shift
          : date.getUTCHours() - shift}
        <div className="animate-pulse">:</div>
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
    </>
  );
}

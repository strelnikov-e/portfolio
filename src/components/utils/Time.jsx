import { useState, useEffect } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex">
        {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
        <div className="animate-pulse">:</div>
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </div>
    </>
  );
}

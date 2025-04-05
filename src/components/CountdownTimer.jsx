import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const receptionDate = new Date("2025-05-18T18:00:00").getTime(); // Target Date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = receptionDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-5">
      <div className="font-bold text-center">
        <p className="font-secondary text-4xl">{timeLeft.days}</p>
        <p>Days</p>
      </div>
      <p className="font-secondary font-black">:</p>

      <div className="font-bold text-center">
        <p className="font-secondary text-4xl">{timeLeft.hours}</p>
        <p>Hours</p>
      </div>
      <p className="font-secondary font-black">:</p>

      <div className="font-bold text-center">
        <p className="font-secondary text-4xl">{timeLeft.minutes}</p>
        <p>Minutes</p>
      </div>
      <p className="font-secondary font-black">:</p>

      <div className="font-bold text-center">
        <p className="font-secondary text-4xl">{timeLeft.seconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
}

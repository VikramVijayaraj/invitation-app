import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ReceptionSection() {
  const receptionDate = new Date("2025-04-18T10:00:00").getTime(); // Target Date
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
    <div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-4xl">Reception</h2>
        <p className="text-lg">time left</p>

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
      </div>

      <div className="flex items-center justify-center mt-10">
        <Dialog className="bg-black">
          <DialogTrigger asChild>
            <Button className="cursor-pointer font-secondary tracking-wider p-8">
              RSVP
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full h-[500px]">
            {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader> */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScS4La5IX7jai9g6NtGQ-q4YtS2fEIVwUW09bmUTvn7Vgsdvw/viewform?embedded=true"
              // width="640"
              // height="669"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              className="w-full h-full"
            >
              Loading…
            </iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

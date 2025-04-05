import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CountdownTimer from "./CountdownTimer";

export default function ReceptionSection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-4xl tracking-wide">Reception</h2>

        <div className="font-secondary font-bold text-center space-y-2">
          <p className="text-4xl text-[#ff2056]">May 18, 2025</p>
          <p className="text-4xl text-[#ff2056]">6:00 - 9:00 PM</p>
        </div>

        <div className="text-center">
          <p className="text-lg">Futsing Building, 2 Allenby Road,</p>
          <p className="text-lg">#02 - 01 Singapore 209973</p>
        </div>

        <p className="text-xl">time remaining</p>

        <CountdownTimer />
      </div>

      <p className="text-xl text-center mt-12 px-10">
        We would be honored by your presence as <br /> we celebrate this union
        of love and <br /> togetherness.
      </p>

      <div className="flex items-center justify-center mt-6">
        <Dialog className="bg-black">
          <DialogTrigger asChild>
            <Button className="cursor-pointer font-secondary text-lg tracking-wider px-20 py-8 rounded-xl">
              RSVP
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full h-[550px]">
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

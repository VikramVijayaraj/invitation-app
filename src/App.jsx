import { useState } from "react";

import "./App.css";
import HeroSection from "./components/HeroSection";
import ReceptionSection from "./components/ReceptionSection";
import WeddingSection from "./components/WeddingSection";
import { Separator } from "@/components/ui/separator";

function App() {
  const [started, setStarted] = useState(false);

  function handleStartInvitation() {
    const audio = new Audio("/music/bgm-1.mp3");
    audio.loop = true;
    audio.play();
    setStarted(true);
  }

  return (
    <div className="relative h-full min-h-screen text-white">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/flowers-5-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          filter: "blur(2px)",
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        {!started ? (
          <div className="h-screen flex items-center justify-center">
            <button
              onClick={handleStartInvitation}
              className="cursor-pointer px-8 py-4 text-lg font-semibold text-[#6f000c] bg-[#fee4d2] rounded-full shadow-lg hover:bg-white"
            >
              Open Invitation
            </button>
          </div>
        ) : (
          <div className="font-primary py-20 animate-slide-up">
            <div className="flex flex-col items-center justify-center space-y-12">
              <HeroSection />
              <WeddingSection />
              <div className="w-1/2 md:w-2/5 lg:w-1/6 opacity-70">
                <Separator />
              </div>
              <ReceptionSection />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

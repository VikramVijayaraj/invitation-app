import { useState } from "react";

import "./App.css";
import HeroSection from "./components/HeroSection";
import ReceptionSection from "./components/ReceptionSection";
import WeddingSection from "./components/WeddingSection";
import { Separator } from "@/components/ui/separator";

function App() {
  const [started, setStarted] = useState(false);

  function handleStartInvitation() {
    const audio = new Audio("/music/bgm.mp3");
    audio.loop = true;
    audio.play();
    setStarted(true);
  }

  return (
    <div className="relative h-full min-h-screen">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/flowers-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        {!started ? (
          <div className="h-screen flex items-center justify-center bg-gradient-to-b from-rose-100 to-white">
            <button
              onClick={handleStartInvitation}
              className="cursor-pointer px-8 py-4 text-lg font-semibold text-white bg-[#ff2056] rounded-full shadow-lg hover:bg-rose-700 "
            >
              Open Invitation
            </button>
          </div>
        ) : (
          <div className="font-primary py-20 animate-slide-up">
            <div className="flex flex-col items-center justify-center space-y-12">
              <HeroSection />
              <WeddingSection />
              <div className="w-1/2">
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

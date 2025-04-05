import "./App.css";
import { HeroSection } from "./components/HeroSection";
import ReceptionSection from "./components/ReceptionSection";
import WeddingSection from "./components/WeddingSection";

function App() {
  return (
    <div
      className="h-full bg-cover"
      style={{ backgroundImage: "url('/watermark.jpg')" }}
    >
      <div className="font-primary my-20">
        <div className="flex flex-col items-center justify-center space-y-18">
          <HeroSection />
          <WeddingSection />
          <ReceptionSection />
        </div>

        {/* <div> */}
        {/* <audio autoPlay loop>
        <source src="/music/gorila.mp3" type="audio/mp3" />
      </audio> */}
      </div>
    </div>
  );
}

export default App;

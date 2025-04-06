export default function HeroSection() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-xl px-10 text-center">
          We cordially invite you to the wedding & <br /> reception ceremony of
        </p>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-title tracking-wider text-5xl text-shadow-sm font-[1000] text-center text-[#ff2056]">
            M.Rajarajan
          </h1>
          <p className="text-xl text-[#ff2056]">&</p>
          <h1 className="font-title tracking-wider text-5xl text-shadow-sm font-[1000] text-center text-[#ff2056]">
            L.Krithika
          </h1>
        </div>
      </div>

      <div className="mx-12">
        <img
          src="/images/couple.jpeg"
          alt="Wedding Couple"
          className="h-80 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

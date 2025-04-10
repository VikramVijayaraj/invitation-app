export default function HeroSection() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-3xl font-black px-10 text-center">
          Sthapathi V.Loganathan <br /> - Sudha <br /> Daughter's Wedding
        </p>
        <div className="space-y-4 text-xl px-10 text-center">
          <p>
            We are overwhelmed with joy as we <br /> announce the wedding ceremony of
            our beloved daughter.
          </p>
          <p>
            We invite you to join us and bless the <br /> couple as they begin their
            new life together.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center uppercase font-title tracking-wide text-4xl text-shadow-lg font-[1000] text-center text-[#fee4d2]">
          <h1 className="">M.Rajarajan</h1>
          <p className="text-xl">&</p>
          <h1 className="">L.Krithika</h1>
        </div>
      </div>

      <div className="mx-12">
        <img
          src="/images/couple.jpeg"
          alt="Wedding Couple"
          className="h-80 w-full md:px-40 md:h-[500px] lg:h-[500px] rounded-2xl object-cover lg:object-contain"
        />
      </div>
    </div>
  );
}

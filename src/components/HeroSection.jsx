import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HeroSection() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="tracking-wider text-4xl font-bold text-center">
          Rajarajan & Krithika
        </h1>
        <p className="text-xl">Are Getting Married</p>
      </div>

      <AspectRatio ratio={9 / 9} className="bg-muted">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_1280.jpg"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}

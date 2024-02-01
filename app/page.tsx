import Image from "next/image";
import screenshot from "../public/screenshot.png";
import appstore from "../public/app-store.svg";
import lineOrnaments from "../public/lines-ornament.svg";
import triangleOrnaments from "../public/triangles-ornament.svg";

export default function Home() {
  return (
    <main className="flex flex-grow items-center flex-col-reverse md:flex-row justify-center">
      <div className="md:w-1/2 w-full">
        <div className="space-y-9 relative text-center md:text-left">
          <div className="space-y-2 relative">
            <Image
              className="absolute top-0 transform -translate-y-full left-1/2 -translate-x-1/2 pointer-events-none"
              src={triangleOrnaments}
              alt=""
            />
            <h1 className="text-5xl font-bold">Vulcanova</h1>
            <h2 className="text-2xl">
              Nieoficjalny otwartoźródłowy mobilny klient dziennika Vulcan
              UONET+
            </h2>
          </div>
          <a
            className="block"
            href="https://apps.apple.com/pl/app/vulcanova/id6451334441"
            target="_blank"
          >
            <Image src={appstore} alt="Download on the App Store" />
          </a>
          <a
            href="https://testflight.apple.com/join/fGMjqr58"
            className="text-primary underline inline-block"
            target="_blank"
          >
            Lubisz życie na krawędzi? Dołącz do beta testów już teraz!
          </a>
          <Image
            src={lineOrnaments}
            alt=""
            className="absolute pointer-events-none left-1/2 -translate-x-1/2 transform md:left-0 md:transform-none"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full relative">
        <Image
          src={screenshot}
          alt=""
          className="transform rotate-12 md:max-w-[400px] max-w-[200px] mx-auto"
        />
      </div>
    </main>
  );
}

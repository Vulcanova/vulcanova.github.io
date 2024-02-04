import Image from "next/image";
import screenshot from "../public/screenshot.png";
import appstore from "../public/app-store.svg";
import lineOrnaments from "../public/lines-ornament.svg";
import triangleOrnaments from "../public/triangles-ornament.svg";

export default function Home() {
  return (
    <div>
      <main className="flex flex-grow items-center flex-col-reverse md:flex-row justify-center min-h-screen p-5 md:p-10">
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
              className="flex md:justify-start justify-center"
              href="https://apps.apple.com/pl/app/vulcanova/id6451334441"
              target="_blank"
            >
              <Image src={appstore} alt="Pobierz w App Store" />
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
              className="absolute pointer-events-none left-1/2 -translate-x-1/2 hidden md:block transform md:left-0 md:transform-none"
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
      <section className="flex justify-center flex-col items-center space-y-5 py-5 -mt-5">
        <h2 className="text-center text-3xl font-bold">Kontakt</h2>
        <div className="space-y-5 flex flex-col text-center items-center">
          <div className="md:w-1/2 w-full space-y-2">
            <h3 className="text-xl">Pomysły, sugestie, błędy</h3>
            <p>
              Jeśli chcesz zasugerować jakąś funkcjonalność, powiedzieć nam o
              napotkanym błędzie lub po prostu porozmawiać z twórcami i innymi
              użytkownikami, dołącz do naszego serwera na{" "}
              <a
                className="text-primary"
                href="https://discord.com/invite/QJqu9gBZKt"
              >
                Discordzie
              </a>
              !
            </p>
          </div>
          <div className="md:w-1/2 w-full space-y-2">
            <h3 className="text-xl">Bezpośredni kontakt</h3>
            <p>
              Skontaktuj się ze mną bezpośrednio, wysyłając wiadomość na{" "}
              <a className="text-primary" href="mailto:vulcanova@romanowski.me">
                vulcanova@romanowski.me
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

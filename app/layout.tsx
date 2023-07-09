import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vulcanova",
  description:
    "Nieoficjalny otwartoźródłowy mobilny klient dziennika Vulcan UONET+",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} bg-background flex max-w-screen-2xl mx-auto p-5 md:p-10 flex-col min-h-screen`}
      >
        <nav>
          <div className="flex items-center">
            <Image
              src="vulcanova.svg"
              alt=""
              height="42"
              width="42"
              className="rounded-lg shadow-logoShadow shadow-primary/10"
            />
            <p className="font-bold ml-4">Vulcanova</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

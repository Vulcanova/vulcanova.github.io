import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${inter.className} bg-background flex max-w-screen-2xl mx-auto flex-col min-h-screen`}
      >
        <NavBar />
        <div className="flex flex-col flex-grow">{children}</div>
      </body>
    </html>
  );
}

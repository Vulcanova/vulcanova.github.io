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
      <body
        className={`${inter.className} bg-background flex max-w-screen-2xl mx-auto flex-col min-h-screen`}
      >
        <NavBar />
        <div className="p-5 md:p-10 flex flex-col">{children}</div>
      </body>
    </html>
  );
}

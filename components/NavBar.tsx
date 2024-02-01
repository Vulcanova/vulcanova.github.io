"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      const selfHeight = 10;

      if (window.scrollY > selfHeight) {
        setScrolled(true);
      } else if (window.scrollY <= selfHeight) {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", listener);

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition bg-background max-w-screen-2xl transform -translate-x-1/2 left-1/2 ${
        scrolled
          ? "bg-opacity-80 backdrop-blur"
          : "bg-opacity-0 backdrop-blur-0"
      }`}
    >
      <div className="p-5 md:px-10">
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
      </div>
    </nav>
  );
};

export default NavBar;

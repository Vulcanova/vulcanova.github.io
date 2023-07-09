"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const elementRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const listener = () => {
      const selfHeight = element.clientHeight;

      if (window.scrollY > selfHeight) {
        setScrolled(true);
      } else if (window.scrollY <= selfHeight) {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", listener);

    const resizeObserver = new ResizeObserver(listener);
    resizeObserver.observe(element);

    return () => {
      document.removeEventListener("scroll", listener);
      resizeObserver.unobserve(element);
    };
  }, []);

  return (
    <nav
      ref={elementRef}
      className={`sticky p-5 top-0 z-10 transition bg-background backdrop-blur ${
        scrolled ? "bg-opacity-80" : "bg-opacity-100"
      }`}
    >
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
  );
};

export default NavBar;

import { useState, useEffect } from "react";
import { navbarLinks } from "../constants";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY, lastScrollY);
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (lastScrollY > currentScrollY + 20) {
        setIsVisible(true);
      } else if (currentScrollY < 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`fixed flex items-center justify-center inset-x-0 top-4 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="h-16 flex items-center justify-around gap-x-10 px-10 bg-neutral-400/10 dark:bg-neutral-700/10 backdrop-blur-md rounded-xl text-neutral-700 font-semibold dark:text-neutral-100 dark:font-normal shadow-md w-fit">
        {navbarLinks.map((link) => (
          <div
            key={link.name}
            className="flex items-center justify-center gap-x-1"
          >
            <link.icon size={20} />
            <a href={link.href} className="hover:underline">
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

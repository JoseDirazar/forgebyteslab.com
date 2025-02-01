import { navbarLinks } from "../constants";
import useNavbarAnimation from "../hook/useNavbarAnimation";

export default function Navbar() {
  const { isVisible } = useNavbarAnimation();
  return (
    <div
      className={`fixed flex items-center justify-center inset-x-0 top-4 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="h-16 flex items-center justify-around gap-x-10 px-10 bg-neutral-400/10 dark:bg-neutral-700/10 backdrop-blur-md rounded-xl text-neutral-400 font-semibold dark:text-neutral-100 dark:font-normal shadow-md w-fit">
        {navbarLinks.map((link) => (
          <div
            key={link.name}
            className="flex items-center justify-center gap-x-1 active:scale-110 duration-150 transition-transform hover:text-neutral-500"
          >
            <link.icon size={20} />
            <a href={link.href}>{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

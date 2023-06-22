import { Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface linkType {
  path: string;
  name: string;
}

const Header = ({ links }: { links: Array<linkType> }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [show, setShow] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currScroll = window.scrollY;
      if (currScroll === 0) {
        return;
      } else if (currScroll > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScroll = currScroll;
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 flex text-xl w-screen 
      bg-white h-16 border-b shadow-sm z-50
      transition-transform duration-300 ease-in-out 
      py-2 px-4 sm:px-8 md:px-12 lg:px-[20%] xl:px-[25%]
      ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="w-full flex items-center justify-between ">
          {/* logo */}
          <div>
            <img src="/vite.svg" className="w-8" alt="logo" />
          </div>

          {/* Links */}
          <div id="links" className="flex gap-2 ml-auto">
            {links.map((link) => (
              <Link to={link.path} key={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          {/* theme toggle */}
          <button
            onClick={() => {
              if (theme === "dark") setTheme("light");
              else setTheme("dark");
            }}
          >
            {theme === "light" ? (
              <SunIcon className="w-8" />
            ) : (
              <MoonIcon className="w-8" />
            )}
          </button>
          {/* mobile menu toggle */}
          <Bars3Icon className={`w-8 h-8 md:hidden`} />
        </nav>
      </header>
      {/* to push the content down since the header is fixed */}
      <div className="w-screen h-16"></div>
    </>
  );
};

export default Header;

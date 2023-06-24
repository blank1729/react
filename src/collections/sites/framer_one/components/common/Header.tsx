import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-2 sm:px-6 md:px:12 lg:px-[15%] h-24 flex items-center">
      <nav className="flex justify-between w-full text-xl  sm:text-2xl md:text-xl">
        <NavLink to="/framer-one" className="hidden sm:block">
          HOME
        </NavLink>
        <div className="flex gap-x-6">
          <NavLink to="/framer-one" className="underline font-semibold">
            HOME
          </NavLink>
          <NavLink to="/framer-one/contact" className="underline font-semibold">
            CONTACT
          </NavLink>
          <NavLink to="/framer-one/about" className="underline font-semibold">
            ABOUT
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

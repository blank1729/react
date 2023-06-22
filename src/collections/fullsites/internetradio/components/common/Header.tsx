import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, RadioIcon, SignalIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const onair = true;
  return (
    <header className="py-4 relative shadow-sm border-b border-black">
      <div className="absolute w-full h-full z-20 bg-white"></div>
      <nav className="w-full flex justify-between items-center z-30">
        <div className="w-full flex items-center z-30 justify-between">
          <div className="flex items-end gap-x-2">
            <Link to={"/internetradio"}>
              <RadioIcon className="w-10" />
            </Link>

            {/* on air button */}
            <Link
              to={"/internetradio"}
              className={`flex gap-x-1 text-sm items-center border px-1 shadow-lg animate-bounce outline-none border-none shadow-green-400 backdrop-blur-md rounded-md ${
                onair ? "bg-green-400" : "bg-red-400"
              }`}
            >
              on air <SignalIcon className="w-4 h-4" />
            </Link>
            {/* end of on air button */}
          </div>

          {/* links base */}
          <div className="flex justify-between items-center gap-x-2 md:gap-x-4 lg:gap-x-6 text-lg">
            {location.pathname !== "/internetradio" && (
              <Link to={"/internetradio"}>Home</Link>
            )}

            <Link to={"/internetradio/about"}>About</Link>

            {/* className="border duration-300 transition-colors ease-in-out rounded-md md:hover:bg-purple-400 md:hover:text-white  border-purple-400 px-2 py-1" */}
            <Link to={"/internetradio/donate"}>Donate</Link>

            <button onClick={() => setShow(!show)}>
              <Bars3Icon className="w-8" />
            </button>
          </div>
        </div>
      </nav>
      {/* Dropdown links */}
      <div
        className="w-full absolute bg-white top-[75px] border-b border-black py-2 px-2 left-0 z-10
              duration-300 ease-in-out transition-all
               -translate-y-full
               md:px-16 lg:px-[20%] 
               grid gap-y-2. text-center md:justify-between md:flex text-lg"
        style={
          show
            ? {
                transform: "translateY(0px)",
              }
            : {}
        }
      >
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          Bible
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          Blog
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          Videos
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          About
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          Partners
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/internetradio"}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;

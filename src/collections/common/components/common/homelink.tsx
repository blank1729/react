import { NavLink } from "react-router-dom";
import { HomeModernIcon } from "@heroicons/react/24/outline";

const HomeLink = () => {
  return (
    <NavLink
      className="fixed group p-3 rounded-md duration-150 transition-all bottom-8 right-4 md:right-8 hover:bg-blue-500"
      to={"/"}
    >
      <HomeModernIcon className="w-8 h-8 duration-150 group-hover:stroke-white" />
    </NavLink>
  );
};

export default HomeLink;

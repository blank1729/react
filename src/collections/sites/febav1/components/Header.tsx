import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 bg-gray-800 text-white">
      <nav className="flex w-full justify-between items-center mx-2 lg:mx-[10%] py-2">
        {/* set both weight and heigh else the height might not be the same as width and it will give bad results on ui */}
        <NavLink className="w-16 h-16" to={"/"}>
          <img src="/imgs/feba.png" alt="" />
        </NavLink>
        <div className="flex gap-x-2">
          <NavLink className="navlink" to={"/febaradio"}>
            Home
          </NavLink>
          <NavLink className="navlink" to={"/about"}>
            About Us
          </NavLink>
          <NavLink className="navlink" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className="navlink" to={"/podcast"}>
            Podcast
          </NavLink>
          <NavLink className="navlink" to={"/blog"}>
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

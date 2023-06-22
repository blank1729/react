import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex space-x-16 mx-[10%] mt-4 p-4 shadow-md">
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/course"}
      >
        Course
      </Link>
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/course/id"}
      >
        Course Id
      </Link>
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/login"}
      >
        Login
      </Link>
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/course/add"}
      >
        Add Course
      </Link>
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/timer"}
      >
        Timer
      </Link>
      <Link
        className="text-xl hover:scale-[1.2] hover:bg-teal-300 hover:text-black px-3 rounded-md p-1"
        to={"/home"}
      >
        HOMETAB
      </Link>
    </nav>
  );
};

export default Nav;

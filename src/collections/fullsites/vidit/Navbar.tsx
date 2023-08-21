import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-6 mr-2" />
          <span className="text-white font-bold">My Website</span>
        </div>
        <div className="flex items-center">
          <Link to={"/"} className="text-white font-medium mr-4">
            Home
          </Link>
          <a href="#" className="text-white font-medium mr-4">
            About
          </a>
          <a href="#" className="text-white font-medium mr-4">
            Services
          </a>
          <a href="#" className="text-white font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

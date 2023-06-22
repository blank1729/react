import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="md:h-[50px] bg-slate-400 flex items-center">
      <div className="mx-[20%] flex justify-between w-full">
        <Link to={"/"}>Go Back</Link>
        <div>
          <input type="text" />
        </div>
        <div className="flex space-x-4">
          <Link to={"/"}>HOME</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

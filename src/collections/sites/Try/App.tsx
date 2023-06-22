import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const TryDiv = () => {
  return (
    <div className="grid lg:grid-cols-7">
      <Navbar />
      <main className="col-span-6 flex justify-center items-center min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default TryDiv;

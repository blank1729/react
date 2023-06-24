import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
import "./App.module.css";
import HomeLink from "../../common/components/common/homelink";

const App = () => {
  return (
    <>
      <div className="bg-green-400 bg-opacity-20">
        <Header />
        <div className="min-h-[calc(100vh-6rem)] text-6xl md:text-9xl flex justify-center items-center">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
      <HomeLink />
    </>
  );
};

export default App;

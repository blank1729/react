import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomeLink from "../../collections/common/components/common/homelink";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <HomeLink />
    </>
  );
};

export default App;

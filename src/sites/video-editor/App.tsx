import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Helmet } from "react-helmet";
// import MuiIcon from "../assets/mui.svg";
import HomeLink from "../../collections/common/components/common/homelink";

const App = () => {
  <Helmet>
    <title>Something</title>
    {/* <link rel="icon" href={MuiIcon} type="image/svg" /> */}
  </Helmet>;
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

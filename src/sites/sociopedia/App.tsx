import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Helmet } from "react-helmet";
import HomeLink from "../../collections/common/components/common/homelink";

const App = () => {
  <Helmet>
    <title>Sociopedia</title>
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

import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Helmet } from "react-helmet";
import HomeLink from "../../collections/common/components/common/homelink";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  <Helmet>
    <title>Something</title>
  </Helmet>;
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
      <Footer />
      <HomeLink />
    </ChakraProvider>
  );
};

export default App;

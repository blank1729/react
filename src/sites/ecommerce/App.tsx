import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Helmet } from "react-helmet";
import HomeLink from "../../collections/common/components/common/homelink";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => {
  <Helmet>
    <title>Something</title>
  </Helmet>;
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        <HomeLink />
      </Provider>
    </>
  );
};

export default App;

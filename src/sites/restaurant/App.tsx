import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { store } from "./app/store";
import HomeLink from "../../collections/common/components/common/homelink";
import { Provider } from "react-redux";
const App = () => {
  <Helmet>
    <title>Something</title>
    {/* <link rel="icon" href={MuiIcon} type="image/svg" /> */}
  </Helmet>;
  return (
    <Provider store={store}>
      <Outlet />
      <HomeLink />
    </Provider>
  );
};

export default App;

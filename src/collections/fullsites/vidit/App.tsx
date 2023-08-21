import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomeLink from "../../common/components/common/homelink";

const App = () => {
  <Helmet>
    <title>Something</title>
    {/* <link rel="icon" href={MuiIcon} type="image/svg" /> */}
  </Helmet>;
  return (
    <>
      <Outlet />
      <HomeLink />
    </>
  );
};

export default App;

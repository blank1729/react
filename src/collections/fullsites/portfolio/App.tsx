import { Outlet } from "react-router-dom";
import HomeLink from "../../common/components/common/homelink";

const App = () => {
  return (
    <>
      <Outlet />
      <HomeLink />
    </>
  );
};

export default App;

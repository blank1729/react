import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import HomeLink from "../../common/components/common/homelink";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
        <HomeLink />
      </ThemeProvider>
    </>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";

const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PortfolioRoutes;

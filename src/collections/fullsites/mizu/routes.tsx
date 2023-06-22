import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import Store from "./pages/store";

const MizuRoutes = () => {
  return (
    <Routes>
      <Route path="/mizu" element={<App />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
      </Route>
    </Routes>
  );
};

export default MizuRoutes;

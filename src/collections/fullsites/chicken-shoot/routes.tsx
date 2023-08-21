import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const ChickenShootRoutes = () => {
  return (
    <Routes>
      <Route path="/chicken-shoot" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default ChickenShootRoutes;

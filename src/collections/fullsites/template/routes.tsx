import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const MizuRoutes = () => {
  return (
    <Routes>
      <Route path="/mizu" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MizuRoutes;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const SociopediaRoutes = () => {
  return (
    <Routes>
      <Route path="/social" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default SociopediaRoutes;

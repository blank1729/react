import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const MaterialUiRoutes = () => {
  return (
    <Routes>
      <Route path="/material-ui" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MaterialUiRoutes;

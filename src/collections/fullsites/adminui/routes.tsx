import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const AdminUiRoutes = () => {
  return (
    <Routes>
      <Route path="/admin-ui" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AdminUiRoutes;

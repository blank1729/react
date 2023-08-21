import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const PaginationRoutes = () => {
  return (
    <Routes>
      <Route path="/pagination" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PaginationRoutes;

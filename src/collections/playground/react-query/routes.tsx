import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const ReactQueryRoutes = () => {
  return (
    <Routes>
      <Route path="/react-query" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default ReactQueryRoutes;

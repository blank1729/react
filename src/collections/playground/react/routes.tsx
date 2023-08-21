import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import { Suspense } from "react";
import Input from "./pages/input";

const ReactPlaygroundRoutes = () => {
  return (
    <Routes>
      <Route path="/react" element={<App />}>
        <Route index element={<Home />} />
        <Route path={"suspense"} element={<Suspense />} />
        <Route path={"input"} element={<Input />} />
      </Route>
    </Routes>
  );
};

export default ReactPlaygroundRoutes;

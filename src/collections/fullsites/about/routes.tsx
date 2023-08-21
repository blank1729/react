import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import { AnimatePresence } from "framer-motion";

const AboutRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/aboutme" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AboutRoutes;

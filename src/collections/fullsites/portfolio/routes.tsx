import { Route, Routes, useLocation } from "react-router-dom";
import Porjects from "./pages/projects";
import PortfolioOne from "./pages/home";
import { AnimatePresence } from "framer-motion";
import App from "./App";

const FramerMotionPortfolio = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/portfolio/" element={<App />}>
          <Route path="one" element={<PortfolioOne />} />
          <Route path="one/projects" element={<Porjects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default FramerMotionPortfolio;

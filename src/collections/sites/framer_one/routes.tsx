import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import About from "./pages/about";
import Contact from "./pages/contact";
import Transition from "./components/common/Transition";
import TransitionTwo from "./components/transitions/TransitionTwo";

const FramerOneRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/framer-one" element={<App />}>
          <Route index element={Transition(Home)} />
          <Route path="about" element={Transition(About)} />
          <Route path="contact" element={TransitionTwo(Contact)} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default FramerOneRoutes;

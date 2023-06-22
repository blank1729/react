import { Route, Routes } from "react-router-dom";
import ParallaxTestOne from "./ParallaxTestOne";

const ParallaxRoutes = () => {
  return (
    <Routes>
      <Route path="/parallax/one" element={<ParallaxTestOne />} />
    </Routes>
  );
};

export default ParallaxRoutes;

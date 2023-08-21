import { AnimatePresence } from "framer-motion";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Post from "../Components/Post";
import Home from "../Pages/home/Home";
import Gallery from "../Pages/gallery/Gallery";

function GeneralRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/general" element={<Outlet />}>
          <Route path="post" element={<Post />} />
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default GeneralRoutes;

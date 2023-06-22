// febaOnlineRoutes.js
import { Outlet, Route, Routes } from "react-router-dom";
import { FebaHome, About, Podcast, Contact, Blog } from "./pages";
import { Header } from "./components/Header";

const FebaOnlineRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/febaradio" element={<FebaHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default FebaOnlineRoutes;

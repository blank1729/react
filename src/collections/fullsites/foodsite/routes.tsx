import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";
import Header from "./components/Header";

const FoodSiteRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.key} location={location}>
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/foodsite" element={<Home />} />
        <Route path="/foodsite/login" element={<Account />} />
        <Route path="/foodsite/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default FoodSiteRoutes;

// shopRoutes.js
import { Outlet, Route, Routes } from "react-router-dom";
import { ShopHeader, Home } from ".";

const ShopRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <ShopHeader />
            <Outlet />
          </>
        }
      >
        <Route path="/shop" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default ShopRoutes;

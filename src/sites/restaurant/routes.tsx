import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import Cart from "./pages/cart";
import Landing from "./pages/landing";

const RestaurantRoutes = () => {
  return (
    <Routes>
      <Route path="/foodplace" element={<App />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="landing" element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default RestaurantRoutes;

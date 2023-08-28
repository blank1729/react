import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";
import Checkout from "./pages/checkout";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";

const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/ecommerce" element={<App />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout/success" element={<Home />} />
        <Route path="product/:product_id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default EcommerceRoutes;

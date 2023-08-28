import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const ChakraUIRoutes = () => {
  return (
    <Routes>
      <Route path="/chakraui" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default ChakraUIRoutes;

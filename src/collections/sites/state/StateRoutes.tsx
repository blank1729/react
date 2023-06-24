import { Route, Routes } from "react-router-dom";
import Index from "./Index";

const StateRoutes = () => {
  return (
    <Routes>
      <Route path="/state" element={<Index />} />
    </Routes>
  );
};

export default StateRoutes;

import { Route, Routes } from "react-router-dom";
import App from "./App";
import TimelineContainer from "./TimelineContainer";

const ViditRoutes = () => {
  return (
    <Routes>
      <Route path="/vidit" element={<App />}>
        <Route index element={<TimelineContainer />} />
      </Route>
    </Routes>
  );
};

export default ViditRoutes;

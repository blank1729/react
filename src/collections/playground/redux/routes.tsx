import { Route, Routes } from "react-router-dom";
import App from "./App";
import Counter from "./counter";

const ReduxRoutes = () => {
  return (
    <Routes>
      <Route path="/redux" element={<App />}>
        <Route path="counter" element={<Counter />} />
      </Route>
    </Routes>
  );
};

export default ReduxRoutes;

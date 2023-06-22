import { Route, Routes } from "react-router-dom";
import App from "./App";

const RedditRoutes = () => {
  return (
    <Routes>
      <Route path="/reddit" element={<App />}>
        {/* <Route path="profile" /> */}
      </Route>
    </Routes>
  );
};

export default RedditRoutes;

import { AnimatePresence } from "framer-motion";
import { Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import Kanban from "../sites/DragDrop/DragDrop";
import Studio from "../sites/studio/Studio";
import Courses from "../sites/Courses/courses";
import Pokimon from "../sites/Pokimon/Pokimon";
import Jokes from "../sites/Jokes/Jokes";
import Random from "../sites/VideoTimeline/Random";
import Weather from "../sites/WeatherApp/Weather";
import HomePage from "../sites/HomePage/HomePage";
import ShopRoutes from "../sites/shop/ShopRoutes";
import StateRoutes from "../sites/state/StateRoutes";
import TryRoutes from "./Try/routes";
import FebaOnlineRoutes from "./febav1/routes";
import Todo from "../playground/redux/todo";
import Timeline from "./VideoTimeline/Timeline";

// [reactjs - Render component on certain paths only react router v6 - Stack Overflow](https://stackoverflow.com/questions/71112957/render-component-on-certain-paths-only-react-router-v6)
// used this for routing and rendering diffrent header for diffrent routes
function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <FebaOnlineRoutes />
      <ShopRoutes />

      <TryRoutes />
      {/* State Management Routes */}
      <StateRoutes />

      <Routes>
        {/* Root Route */}
        <Route path="/" element={<App />} />
        {/* todo route */}
        <Route path="/todo" element={<Todo />} />
        {/* Weather app route */}
        <Route path="/weather" element={<Weather />} />
        {/* Homepage */}
        <Route path="/homepage" element={<HomePage />} />

        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="/dd" element={<Kanban />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pokimon" element={<Pokimon />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/random" element={<Random />} />
          <Route path="/studio" element={<Studio />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

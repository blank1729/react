import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./App";

const VideoEditorRoutes = () => {
  return (
    <Routes>
      <Route path="/video-editor" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default VideoEditorRoutes;

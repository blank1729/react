import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// component imports
import App from "../App";
import TextAnimation from "../collections/playground/text/App";
import TimelineContainer from "../collections/sites/VideoTimeline/TimelineContainer";

// lazy imports
const Counter = lazy(() => import("../collections/playground/redux/counter"));
const Article = lazy(() => import("../collections/singlepage/article/Article"));
const GSAPScrollTrigger = lazy(
  () => import("../collections/playground/gsapscrolltrigger/scrolltrigger")
);

// routes
import InternetRadioRoutes from "../collections/fullsites/internetradio/routes";
import FebaOnlineRoutes from "../collections/sites/febav1/routes";
import TryRoutes from "../collections/sites/Try/routes";
import FoodSiteRoutes from "../collections/fullsites/foodsite/routes";
import FramerMotionPortfolio from "../collections/fullsites/portfolio/routes";
import ParallaxRoutes from "../collections/random/parallax/routes";
import HidingHeader from "../collections/random/hidingheader/App";
import ReduxRoutes from "../collections/playground/redux/routes";
import RedditRoutes from "../collections/fullsites/reddit-clone/routes";
import MizuRoutes from "../collections/fullsites/mizu/routes";
const Moald = lazy(() => import("../collections/fullsites/moald/App"));

const Router = () => {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <InternetRadioRoutes />
      <FebaOnlineRoutes />
      <TryRoutes />
      <FoodSiteRoutes />
      <FramerMotionPortfolio />
      <ParallaxRoutes />
      <ReduxRoutes />
      <RedditRoutes />
      <MizuRoutes />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/text" element={<TextAnimation />} />
        <Route path="/timeline" element={<TimelineContainer />} />
        <Route path="/article" element={<Article />} />
        <Route path="/scrolltrigger" element={<GSAPScrollTrigger />} />
        <Route path="/moald" element={<Moald />} />
        <Route path="/hidingheader" element={<HidingHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

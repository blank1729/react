import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TextAnimation from "../collections/playground/text/App";

// lazy imports
// const Counter = lazy(() => import("../collections/playground/redux/counter"));
const Article = lazy(() => import("../collections/fullsites/article/Article"));
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
import FramerOneRoutes from "../collections/sites/framer_one/routes";
import ReactQueryRoutes from "../collections/playground/react-query/routes";
import AdminUiRoutes from "../collections/fullsites/adminui/routes";
import MaterialUiRoutes from "../collections/playground/materialui/routes";
import HomeTwo from "../HomeTwo";
import ChickenShootRoutes from "../collections/fullsites/chicken-shoot/routes";
import AboutRoutes from "../collections/fullsites/about/routes";
import ViditRoutes from "../collections/fullsites/vidit/routes";
import ReactPlaygroundRoutes from "../collections/playground/react/routes";
import VideoEditorRoutes from "../sites/video-editor/routes";
import GeneralRoutes from "../sites/general/Routes/AnimatedRoutes";
import PaginationRoutes from "../sites/pagination/routes";
import SociopediaRoutes from "../sites/sociopedia/routes";
import PortfolioRoutes from "../sites/portfolio/routes";
import RestaurantRoutes from "../sites/restaurant/routes";
import EcommerceRoutes from "../sites/ecommerce/routes";
import ChakraUIRoutes from "../playground/chakraui/routes";
import AdminUI from "../pages/AdminUI/AdminUI";
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
      <FramerOneRoutes />
      <ReactQueryRoutes />
      <AdminUiRoutes />
      <MaterialUiRoutes />
      <ChickenShootRoutes />
      <AboutRoutes />
      <ViditRoutes />
      <ReactPlaygroundRoutes />
      <VideoEditorRoutes />
      <GeneralRoutes />
      <PaginationRoutes />
      <EcommerceRoutes />
      <ChakraUIRoutes />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/text" element={<TextAnimation />} />
        <Route path="/article" element={<Article />} />
        <Route path="/scrolltrigger" element={<GSAPScrollTrigger />} />
        <Route path="/moald" element={<Moald />} />
        <Route path="/hidingheader" element={<HidingHeader />} />
        <Route path="/adminui" element={<AdminUI />} />
      </Routes>
      <SociopediaRoutes />
      <PortfolioRoutes />
      <RestaurantRoutes />
    </BrowserRouter>
  );
};

export default Router;

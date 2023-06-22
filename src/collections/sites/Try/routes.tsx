import { Route, Routes } from "react-router-dom";
import TryDiv from "./App";
import Modal from "./components/Modal";
import Button from "./components/Buttons/Button";
import Slider from "./components/Slider";
import Test from "./components/Test";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import CCard from "./components/CCard";
import Sorting from "./components/Sorting";
import Svg from "./components/Svg";
import Mysite from "./components/Mysite";

const TryRoutes = () => {
  return (
    <Routes>
      <Route element={<TryDiv />}>
        <Route path="/try/modal" element={<Modal />} />
        <Route path="/try/button" element={<Button />} />
        <Route path="/try/slider" element={<Slider />} />
        <Route path="/try/slider2" element={<Slider2 />} />
        <Route path="/try/test" element={<Test />} />
        <Route path="/try/slider3" element={<Slider3 />} />
        <Route path="/try/slider4" element={<Slider4 />} />
        <Route path="/try/ccard" element={<CCard />} />
        <Route path="/try/sorting" element={<Sorting />} />
        <Route path="/try/svg" element={<Svg />} />
        <Route path="/try/mysite" element={<Mysite />} />
      </Route>
    </Routes>
  );
};

export default TryRoutes;

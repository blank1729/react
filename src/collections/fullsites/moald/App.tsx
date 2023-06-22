import { useRef } from "react";
import Hero from "./components/Hero";
import Carasoul from "./components/Carasoul";
import NewLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import SectionTwo from "./components/SectionTwo";

const Moald = () => {
  const root = useRef(null);

  return (
    <div className="text-white overflow-x-hidden bg-[rgb(23,23,23)]" ref={root}>
      <main>
        <Hero />
        <SectionTwo />
        <Carasoul />
        <NewLetter />
        <Footer />
      </main>
    </div>
  );
};

export default Moald;

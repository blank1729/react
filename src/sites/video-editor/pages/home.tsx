import { useEffect, useRef, useState } from "react";
import Timeline from "../components/Timeline";

const Home = () => {
  let CtrlPressed = false;
  const innerContainer = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(100);

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     e.preventDefault();
  //     if (e.ctrlKey) {
  //       CtrlPressed = true;
  //     }
  //   });
  // });

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    e.preventDefault();
    setWidth((prevWidtch) => prevWidtch * 1.1);
    if (innerContainer.current) {
      console.log("scrolled over");
      // let width = parseInt(innerContainer.current.style.width);
      // let newWidth = 1.1 * width;
      // innerContainer.current.style.width = `${newWidth}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Control") {
      console.log("ctrl pressed");
      CtrlPressed = true;
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Control") {
      console.log("ctrl lifted");
      CtrlPressed = false;
    }
  };

  return (
    <main>
      {/* outer container */}
      <section
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className="w-screen h-[200px] border border-black p-2 overflow-scroll"
        onScroll={handleScroll}
      >
        {/* inner container */}
        <div
          id="innerContainer"
          ref={innerContainer}
          style={{
            width: `${width}%`,
          }}
          className="relative border border-gray-700 h-full p-1
          grid gap-y-1"
        >
          {/* timeline */}
          <div className="h-10 border border-black"></div>

          {/* video timeline */}
          <div className="h-20 border border-black"></div>
        </div>
      </section>
      <h1>React Video Editor</h1>
      <Timeline duration={10} />3
    </main>
  );
};

export default Home;

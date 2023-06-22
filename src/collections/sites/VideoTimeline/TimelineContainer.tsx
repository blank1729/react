import { useState } from "react";
import Timeline from "./Timeline";

const TimelineContainer = () => {
  const [position, setPosition] = useState({ x: 0 });

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: any) => {
    setPosition({
      x: e.clientX,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="w-[200%] max-h-[500px] bg-gray-200 border-2 border-gray-500"
      onMouseDown={handleMouseDown}
      style={{ position: "absolute", left: position.x }}
    >
      <Timeline />
    </div>
  );
};

export default TimelineContainer;

import React, { useState, useEffect } from "react";

interface TimelineProps {
  duration: number;
}

const Timeline: React.FC<TimelineProps> = ({ duration }) => {
  const [timelineScale, setTimelineScale] = useState(1); // Initial scale of the timeline

  useEffect(() => {
    const handleScroll = () => {
      const scaleFactor = 1 - window.scrollY * 0.002; // Calculate the scale factor based on scroll position
      setTimelineScale(scaleFactor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      <div
        className="timeline flex cursor-move pointer-events-none select-none"
        style={{ transform: `scale(${timelineScale})` }}
      >
        {/* Render the markers or indicators at specific time points */}
        {Array.from({ length: duration }, (_, i) => (
          <div
            key={i}
            className="timeline-marker"
            style={{ left: `${i * 10}px` }} // Adjust marker positioning as needed
          >
            <div>|</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

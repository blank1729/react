const TimelineComponent = ({ width }: { width: number }) => {
  return (
    <div
      className="min-h-full border-2 rounded-md flex justify-center items-center border-red-400"
      style={{
        width: `${width}%`,
      }}
      draggable="true"
    >
      something
    </div>
  );
};

export default TimelineComponent;

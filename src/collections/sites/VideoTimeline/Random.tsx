import Navbar from "./Navbar";
import TimelineContainer from "./TimelineContainer";

const Random = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="mt-10 border-2 border-black p-2 overflow-x-scroll min-h-[20vh]">
          <TimelineContainer />
        </div>
      </main>
    </>
  );
};

export default Random;

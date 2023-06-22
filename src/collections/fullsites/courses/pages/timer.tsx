import Navbar from "../components/Navbar";

function timer() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center bg-slate-800">
        <div className="bg-slate-400 p-10">
          <ul className="flex md:text-9xl md:space-x-4">
            <li className="space-x-1<p> flex flex-col text-center">
              <span>0</span>
              <p className="text-lg md:mt-2">Days</p>
            </li>
            <li>:</li>
            <li className="flex flex-col text-center">
              <span>0</span>
              <p className="text-lg md:mt-2">Hours</p>
            </li>
            <li>:</li>
            <li className="flex flex-col text-center">
              <span>0</span>
              <p className="text-lg md:mt-2">Minutes</p>
            </li>
            <li>:</li>
            <li className="flex flex-col text-center">
              <span>0</span>
              <p className="text-lg md:mt-2">Seconds</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default timer;

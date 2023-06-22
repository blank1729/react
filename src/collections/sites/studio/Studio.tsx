import React from "react";

function Studio() {
  return (
    <div className="w-screen grid grid-cols-10 h-[calc(100vh-5rem)] bg-slate-200 text-white">
      {/* sidebar */}
      <div className="col-span-1">
        <ul className="flex flex-col h-[calc(100%-1rem)] m-2 rounded-md bg-white shadow-lg p-2">
          <li className="bg-gray-400 text-xl text-center m-1 p-2 rounded-md duration-200 cursor-pointer hover:font-bold">
            home
          </li>
          <li className="bg-gray-400 text-xl text-center m-1 p-2 rounded-md duration-200 cursor-pointer hover:font-bold">
            Projects
          </li>
        </ul>
      </div>

      {/* main */}
      <main className="h-full col-span-9 p-2 grid grid-flow-row grid-rows-6 gap-y-4">
        {/* Projects */}
        <div className="row-span-4 border-2 border-green-600 overflow-scroll">
          <div  className=" text-black h-full" >
            p something
          </div>
        </div>
        {/* bottom timeline */}
        <div className="grid grid-flow-row w-full row-span-2 border-2 border-green-600 gap-y-2">
          <div className="w-full row-span-1 bg-red-400"></div>
          <div className="w-full row-span-1 bg-red-400"></div>
          <div className="w-full row-span-1 bg-red-400"></div>
        </div>
      </main>
    </div>
  );
}

export default Studio;

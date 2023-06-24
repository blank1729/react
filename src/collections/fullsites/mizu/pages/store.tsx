// import Sidebar from "../components/store/Sidebar";

import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { products } from "../constants/products";

const Store = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <main className="flex flex-col min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-end md:px-6 p-2">
          <div>
            <p>TOP / BAR</p>
            <h3 className="text-2xl font-semibold">Catalogue</h3>
          </div>
          <div className="flex gap-x-2">
            <ListBulletIcon className="w-5" />
            <Squares2X2Icon className="w-5 text-blue-500" />
            <select className="border border-blue-300 outline-none text-sm items-center rounded-md px-2 py-1 flex gap-x-2">
              <option
                defaultChecked
                className="border-blue-200 rounded-sm border p-1 outline-none"
              >
                Popular
                <ChevronDownIcon className="w-4" />
              </option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
        <section className="flex w-full h-full flex-grow md:px-6">
          {/* show filters button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-4
          text-xl border border-blue-300 px-16 py-2 rounded-md bg-opacity-40
          ${showFilters ? "bg-white" : "bg-blue-300"} 
          md:hidden`}
          >
            Filters <AdjustmentsHorizontalIcon className="w-6" />{" "}
          </button>

          {/* filters menu */}
          <div
            className={`fixed bottom-0 z-10
          w-full h-[90vh] flex
          rounded-t-3xl bg-blue-200 bg-opacity-60
          duration-500 transition-transform ease-in-out
          lg:relative md:min-h-full lg:min-w-[240px] lg:max-w-[320px] lg:w-[20%]  lg:rounded-lg lg:p-2
          ${showFilters ? "translate-y-0" : "translate-y-full"}`}
          >
            <div className="flex flex-col items-center gap-y-2 bg-white w-full min-h-full rounded-lg">
              <p className="bg-blue-200 w-full rounded-md py-2 text-center">
                filters bar
              </p>
              <p className="bg-blue-200 w-full rounded-md py-2 text-center">
                filters bar
              </p>
              <p className="bg-blue-200 w-full rounded-md py-2 text-center">
                filters bar
              </p>
              <p className="bg-blue-200 w-full rounded-md py-2 text-center">
                filters bar
              </p>
            </div>
          </div>

          {/* products section */}
          <div className="bg-red-200 p-2 w-full">
            <div
              className="bg-blue-200 rounded-lg
            w-full min-h-full
            flex gap-2"
            >
              {products.map((p) => {
                return (
                  <div
                    key={p.name}
                    className="flex-grow min-w-[300px] bg-orange-400"
                  >
                    <p>{p.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Store;

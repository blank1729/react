import React, { useContext } from "react";
import List from "./List";
import { course } from "./types";
import ThemeProvider, { themecontext } from "../state/context/ThemeContext";
import { list } from "./data/courses";
import Search from "./components/Search";

function Courses() {
  return (
    <div className="mx-[15%] mt-4">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">Courses</h1>
        <Search list={list} />
      </div>
      <hr />
      <List list={list} />
    </div>
  );
}

export default Courses;

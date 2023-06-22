import React, { useState } from "react";
import { course } from "./types";
import Modal from "../other/Modal";

function List({ list }: { list: Array<course> }) {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  return (
    <div className="pt-4">
      {list.map((course) => (
        <div
          key={course.id}
          onClick={() => setId(course.id)}
          className="border-2 group hover:border-blue-600 border-gray-700 rounded-lg p-4 m-4 cursor-pointer inline-block hover:shadow-md hover:scale-105 ease-in-out duration-200"
        >
          <div className="text-xl font-bold group-hover:text-blue-700">
            {course.name}
          </div>
          <div>{course.institute}</div>
          <div>{course.number}</div>
          <div>{course.season}</div>
        </div>
      ))}

    </div>
  );
}

export default List;

import React, { useState } from "react";
import { course } from "../types";

// Other things to add
/*
search icon before search in the input
place holder text
cross icon after search and clear the input function attached to it
properly place the elements 


responsive in mobile


*/

const Search = ({ list }: { list: Array<course> }) => {
  const [input, setInput] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [results, setResults] = useState<Array<course>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const searchResults = list.filter((course) => {
      if (course.name.includes(input) && input !== "") {
        return true;
      }
    });
    if (searchResults.length > 0) {
      setShow(true);
      setResults(searchResults);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="border-2 border-black rounded-md text-2xl mx-2 bg-white text-black"
        value={input}
        onChange={handleChange}
      />
      <div className="absolute grid text-center">
        {show &&
          results?.map((course) => {
            return (
              <div key={course.id} className="bg-white text-black m-1">
                <p>{course.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;

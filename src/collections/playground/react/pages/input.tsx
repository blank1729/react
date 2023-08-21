import { useEffect, useState } from "react";
import { foodItems } from "../data/fooditems";
import Reducer from "./reducer";

const Input = () => {
  const [list, setList] = useState(foodItems);
  const [search, setSearch] = useState<string>("");
  const [filterList, setFilterList] = useState<String[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (search !== "") {
      setFilterList(
        list
          .filter((item) =>
            item.toLocaleLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 10)
      );
    } else {
      setFilterList([]);
    }
  }, [search]);

  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        className="border border-blue-500 text-lg outline-none"
      />

      {/* have to implement click away listner or onfocus listner for the above input */}
      {showResults && (
        <div className="absolute bg-white">
          {filterList.map((item) => {
            return (
              <div className="grid space-y-1">
                <p className="shadow-md inline-block">{item}</p>
              </div>
            );
          })}
        </div>
      )}

      <Reducer />
    </div>
  );
};

export default Input;

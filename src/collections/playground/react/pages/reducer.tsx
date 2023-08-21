import { useReducer, useState } from "react";
import { foodItems } from "../data/fooditems";

interface State {
  foodItems: string[];
}
interface Action {
  type: "create" | "update" | "delete";
  payload?: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "create":
      if (action.payload) {
        return { ...state, foodItems: [...state.foodItems, action.payload] };
      }
      return state;
    default:
      return state;
  }
};

const Reducer = () => {
  let initialState: State = {
    foodItems: foodItems,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [item, setItem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "create",
      payload: item,
    });
    setItem("");
  };

  return (
    <div>
      <h2>add to the food items</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
        />
        <button>add item</button>
      </form>
      <div className="grid grid-cols-6">
        {state.foodItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Reducer;

import React, { useState } from "react";

type todo = {
  name: string;
  state: boolean;
};

const UseState = () => {
  const [state, setState] = useState(0);
  const [todos, setTodos] = useState<Array<todo>>([
    { name: "Clean the room", state: false },
  ]);
  const [input, setInput] = useState<string>();

  //   handle the todo submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === undefined || input === "") {
      return;
    }
    setTodos((prevTodo) => [...prevTodo, { name: input, state: false }]);
    setInput("");
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl text-blue-600">UseState hook</h2>
      <hr />
      <div className="mt-4 ">
        {/* Explanation */}
        <div className="text-xl font-mono">
          <p>
            Here we are using{" "}
            <span className="underline font-bold">useState</span> hook to manage
            the state which is the count
          </p>
        </div>
        {/* Working of code */}
        <div className="border-2 border-blue-400 w-full m-4 p-4 rounded-lg flex gap-x-2">
          <button
            className="border-2 border-blue-300 p-1 text-xl px-2 rounded-md active:scale-95 duration-150"
            onClick={() => setState(state + 1)}
          >
            Count {state}
          </button>
          <button
            className="border-2 border-blue-300 p-1 text-xl px-2 rounded-md active:scale-95 duration-150"
            onClick={() => setState(0)}
          >
            Reset
          </button>
        </div>
      </div>
      <hr />

      {/* rendering and adding to list */}

      <div className="mt-4 ">
        {/* Explanation */}
        <div className="text-xl font-mono">
          <p>
            here we are going to render a list of todos and also add to them
            using the form below
          </p>
        </div>
        {/* list the todos*/}
        <div className="border-2 border-blue-400 w-full m-4 p-4 rounded-lg flex gap-x-2">
          <ul>
            {todos.map((todo) => (
              <div key={todo.name} className="flex gap-2 text-xl">
                <input type="checkbox" />
                <label className="text-">{todo.name}</label>
              </div>
            ))}
          </ul>
        </div>

        {/* Adding to todo */}
        {/* Working of code */}
        <div className="border-2 border-blue-400 w-full m-4 p-4 rounded-lg flex gap-x-2">
          <form onSubmit={handleSubmit} className="flex gap-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="border-2 border-blue-300 text-xl p-1 px-2 rounded-md"
            />
            <button
              className="border-2 border-blue-300 p-1 text-xl px-2 rounded-md active:scale-95 duration-150"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseState;

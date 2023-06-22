import { decrement, increment, selectCounter } from "./features/counterSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import HomeLink from "../../common/components/common/homelink";

const Counter = () => {
  const count = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-xl">
        <div className="grid">
          <p className="text-center text-2xl">{count}</p>
          <div>
            <button
              className="border hover:scale-105 rounded-md px-4 py-2 transition-transform"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="border hover:scale-105 rounded-md px-4 py-2 transition-transform"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
      <HomeLink />
    </>
  );
};

export default Counter;

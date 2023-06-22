import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter.value;
export default counterSlice.reducer;

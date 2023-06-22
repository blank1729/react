import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface todo {
  id?: number;
  task: string;
  status: boolean;
}

const todos: Array<todo> = [];

const todo = createSlice({
  name: "todos",
  initialState: todos,
  reducers: {
    addTodo(state, action: PayloadAction<todo>) {
      state.push(action.payload);
    },
  },
});

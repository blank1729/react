import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { menuItem } from "../../types/types";

interface MenuState {
  menu: menuItem[];
}

const initialState: MenuState = {
  menu: [],
};

const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenuItems(state, action: PayloadAction<menuItem[]>) {
      state.menu = [...action.payload];
    },
  },
});

export const { addMenuItems } = MenuSlice.actions;
export default MenuSlice.reducer;

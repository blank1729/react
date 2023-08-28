import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/Menu/MenuSlice";
import cartReducer from "../features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

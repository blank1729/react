import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { menuItem } from "../../types/types";
import { RootState } from "../../app/store";

interface CartItem extends menuItem {
  count: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<menuItem>) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<menuItem>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.count = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectItemById = (itemId: string) =>
  createSelector(
    (state: RootState) => state.cart.cart,
    (cartItems) => {
      const item = cartItems.find((item) => item.id === itemId);
      return item ? item.count : 0;
    }
  );

export const selectTotalPrice = createSelector(
  (state: RootState) => state.cart.cart,
  (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }
);

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

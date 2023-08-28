import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
}

interface cartState {
  products: Product[];
  isCartOpen: boolean;
}

const initialState: cartState = {
  products: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(state, action);
    },
    DeleteCartItem: (state, action: PayloadAction<Product>) => {
      console.log(state, action);
    },
    clearCart: (state, action: PayloadAction<Product>) => {
      console.log(state, action);
    },
    updateCart: (state, action: PayloadAction<Product>) => {
      console.log(state, action);
    },
  },
});

export const { addToCart, updateCart, clearCart, DeleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;

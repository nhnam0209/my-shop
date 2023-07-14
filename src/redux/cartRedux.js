import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
      // state.total += action.payload.price * action.payload.quantity;
      state.total += action.payload.price;
      console.log(state.products);
    },
    removeProduct: (state, action) => {
      console.log(state);
      console.log(action);
    },
    removeAllProduct: (state, action) => {
      state.quantity = 0;
      state.products = state.products.filter(
        (product) => product.id !== action.payload._id
      );
      localStorage.setItem("cart", []);
      state.total = 0;
    },
  },
});

export const { addProduct, removeAllProduct } = cartSlice.actions;
export default cartSlice.reducer;

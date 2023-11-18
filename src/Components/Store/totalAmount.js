import { createSlice } from "@reduxjs/toolkit";

const initialTotalAmount = { total: 0 };
const total = createSlice({
  name: "total",
  initialState: initialTotalAmount,
  reducers: {
    calculate(state, action) {
      state.total = state.total + action.payload;
    },
  },
});
export const totalAmountActions=total.actions;
export default total.reducer;



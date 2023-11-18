import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
  mode: JSON.stringify(localStorage.getItem("darkmode")) || false,
};

const themeSlice = createSlice({
  name: "darkmode",
  initialState: initialThemeState,
  reducers: {
    toggle(state) {
      state.mode = !state.mode;
      localStorage.setItem("darkmode", JSON.stringify(state.mode));
    },
  },
});
export const themeActions = themeSlice.actions;
export default themeSlice.reducer;

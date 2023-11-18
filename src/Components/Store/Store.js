import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import totalReducer from './totalAmount';
import premium from './premiumButton';
import theme from './themeSlice';

const store = configureStore({
  reducer: { auth: authReducer,total:totalReducer,premium:premium,theme:theme},
});

export default store;
 
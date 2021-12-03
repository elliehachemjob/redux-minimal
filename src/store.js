import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./statusSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

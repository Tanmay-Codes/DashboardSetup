// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./features/auth";
export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});

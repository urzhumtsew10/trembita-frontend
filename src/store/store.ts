import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signIn";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

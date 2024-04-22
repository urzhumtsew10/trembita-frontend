import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Login {
  isAuthForm: boolean;
}

const initialState: Login = {
  isAuthForm: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<boolean>) => {
      state.isAuthForm = action.payload;
    },
  },
});

export const { setForm } = loginSlice.actions;
export default loginSlice.reducer;

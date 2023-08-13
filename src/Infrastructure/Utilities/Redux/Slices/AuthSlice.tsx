// presentation/redux/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthRepository from "../../../Repository/AuthRepositoryImpl";
import { User } from "../../../../Domain/Model/User";

interface JSONAuthState {
  user: User | null;
  isLoggedIn: boolean;
}
const initialState: JSONAuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<JSONAuthState>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  registrationSuccess: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  registrationSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    registerSuccess(state) {
      state.registrationSuccess = true;
    },
    resetRegistrationStatus(state) {
      state.registrationSuccess = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, registerSuccess, resetRegistrationStatus, logout } =
  authSlice.actions;

export default authSlice;

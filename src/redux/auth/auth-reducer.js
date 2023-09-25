import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, userRefresh } from './auth-operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authError: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userRefresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.authError = null;
      })
      .addCase(userRefresh.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;

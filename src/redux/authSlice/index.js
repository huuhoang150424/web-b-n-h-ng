// src/features/auth/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginUser } from '../../data/Api'

// // Tạo async thunk
// export const login = createAsyncThunk(
//   'auth/login',
//   async (userCredentials, thunkAPI) => {
//     try {
//       const response = await loginUser(userCredentials);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.isAuthenticated = true;
  //       state.user = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  // },
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;

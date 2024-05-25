import { createSlice } from '@reduxjs/toolkit'
import { login } from '../action/auth'
import { success } from '../../components/Message'


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: "",
    user: null,
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token=""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.success=true
        state.isAuthenticated = true
        state.user = action.payload
        state.loading = false
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout } = authSlice.actions

export const selectIsAuthenticated=(state)=>state.auth.isAuthenticated
export const selectToken=(state)=>state.auth.token
export const selectUser=(state)=>state.auth.user
export const selectLoading=(state)=>state.auth.loading
export const selectError=(state)=>state.auth.error
export const selectSuccess=(state)=>state.auth.success

export default authSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { login } from '../action/auth'


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: "",
    user: null,
    loading: false,
    error: null,
    success: false,
    userDetail: null
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.userDetail = null
      state.token=""
      state.success=false
    },
    setAuthState: (state, action) => {
      state.user=action.payload.user
      state.token=action.payload.accessToken
    },
    setUserDetailState: (state, action) => {
      console.log(action.payload)
      state.isAuthenticated=true
      state.userDetail=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.success=true
        state.isAuthenticated = true
        state.loading = false
        state.token = action.payload.accessToken
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout ,setAuthState,setUserDetailState} = authSlice.actions
//setTokenState
export const selectIsAuthenticated=(state)=>state.auth.isAuthenticated
export const selectToken=(state)=>state.auth.token
export const selectUser=(state)=>state.auth.user
export const selectUserDetail=(state)=>state.auth.userDetail
export const selectLoading=(state)=>state.auth.loading
export const selectError=(state)=>state.auth.error
export const selectSuccess=(state)=>state.auth.success

export default authSlice.reducer

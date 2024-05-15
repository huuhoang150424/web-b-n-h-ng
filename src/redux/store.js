import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './counterSlice/authSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})
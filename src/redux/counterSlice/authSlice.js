import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
})


export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginUser,getUser } from "../../data/Api"

//rejectWithValue hàm trả về giá trị lỗi
export const login=createAsyncThunk("auth/login",async (payload,{rejectWithValue})=>{
    try {
        const response = await loginUser(payload)
        if (response.status === 200) {
            console.log(response.data)
            return response.data
        } else {
            return rejectWithValue(response.data)
        }
    } catch(err) {
        return rejectWithValue(err.response.data)
    }
})
export const getDetailUser=createAsyncThunk("auth/login",async (id,payload,{rejectWithValue})=>{
    try {
        const response = await getUser(id,payload)
        if (response.status === 200) {
            console.log(response.data)
            return response.data
        } else {
            return rejectWithValue(response.data)
        }
    } catch(err) {
        return rejectWithValue(err.response.data)
    }
})

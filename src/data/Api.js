import {HTTP,HTTP_REFRESHToken} from "./Http"
import { setupAxiosInterceptors } from "../utils"
setupAxiosInterceptors(HTTP)
//login
export const loginUser=(payload)=>HTTP_REFRESHToken.post(`user/login`,payload)
//logout
export const logoutUser=(payload)=>HTTP.post(`user/logout`,payload)
//register
export const register=(payload)=>HTTP.post(`user/register`,payload)
//refresh Token
export const refreshToken=()=>HTTP_REFRESHToken.post(`user/refresh`)

//getAllProducts
export const getProducts=(payload)=>HTTP.get(`product/getAllProducts`,payload)

//get User
export const getUser=(id,payload)=>HTTP.get(`user/getUser/${id}`,payload)

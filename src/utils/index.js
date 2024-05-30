import {jwtDecode} from 'jwt-decode'
import { refreshToken } from "../data/Api"


const getRefreshToken=async ()=>{
    try {
        const res=await refreshToken()
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
//kiểm tra trước khi gửi requests
export const setupAxiosInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
        const user = jwtDecode(accessToken)
        const { exp } = user
        if (exp < (Date.now() / 1000)) {
            const data = await getRefreshToken()
            config.headers["token"] = `Bearer ${data.newAccessToken}`
        } else {
            config.headers["token"] = `Bearer ${accessToken}`
            }
        }
        return config;
    }, (error) => {
        return Promise.reject(error)
    })
}



export const isJSONString = (accessToken) => {
    try {
        JSON.parse(accessToken)
        return true
    } catch (err) {
        return false
    }
}

import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://localhost:3000/v1'
})
export const HTTP_REFRESHToken = axios.create({
    baseURL: 'http://localhost:3000/v1', // Thay đổi URL này theo cấu hình API của bạn
    withCredentials: true
})


import axios from "axios"
import { BASE_URL } from "../constant"
const HTTP=axios.create({
    baseURL: BASE_URL
})
export default HTTP
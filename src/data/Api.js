import HTTP from "./Http"


//login
export const loginUser=(payload)=>HTTP.post(`user/login`,payload)
//register
export const register=(payload)=>HTTP.post(`user/register`,payload)

//getAllProducts
export const getProducts=(payload)=>HTTP.get(`product/getAllProducts`,payload)

//get User
export const getUser=(id,payload)=>HTTP.get(`user/getUser/${id}`,payload)

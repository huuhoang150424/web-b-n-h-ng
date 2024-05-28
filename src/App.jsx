// $$\   $$\                                               $$$$$$$$\ $$$$$$$\  $$$$$$\  $$$$$$\   $$$$$$\  
// $$ |  $$ |                                              $$  _____|$$  __$$\ \_$$  _|$$  __$$\ $$  __$$\ 
// $$ |  $$ | $$$$$$\   $$$$$$\  $$$$$$$\   $$$$$$\        $$ |      $$ |  $$ |  $$ |  $$ /  \__|$$ /  $$ |
// $$$$$$$$ |$$  __$$\  \____$$\ $$  __$$\ $$  __$$\       $$$$$\    $$$$$$$  |  $$ |  $$ |      $$$$$$$$ |
// $$  __$$ |$$ /  $$ | $$$$$$$ |$$ |  $$ |$$ /  $$ |      $$  __|   $$  __$$<   $$ |  $$ |      $$  __$$ |
// $$ |  $$ |$$ |  $$ |$$  __$$ |$$ |  $$ |$$ |  $$ |      $$ |      $$ |  $$ |  $$ |  $$ |  $$\ $$ |  $$ |
// $$ |  $$ |\$$$$$$  |\$$$$$$$ |$$ |  $$ |\$$$$$$$ |      $$$$$$$$\ $$ |  $$ |$$$$$$\ \$$$$$$  |$$ |  $$ |
// \__|  \__| \______/  \_______|\__|  \__| \____$$ |      \________|\__|  \__|\______| \______/ \__|  \__|
//                                         $$\   $$ |                                                      
//                                         \$$$$$$  |                                                      
//                                          \______/                                                       
import Header from './components/Header.jsx'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { routers} from "./router"
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectToken, setAuthState ,setUserDetail} from './redux/authSlice'
import { getUser } from './data/Api.js'
import { jwtDecode } from "jwt-decode";
export default function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      const user=jwtDecode(accessToken)
      const {id,exp}=user
      const tokenExpired = (exp*1000)< Date.now()
      if (tokenExpired) {
        localStorage.removeItem('access_token')
        navigate('/')
      } else {
        getDetailUser(id,accessToken)
        dispatch(setAuthState({accessToken: accessToken,user}))
      }
    } else {
      navigate("/login")
    }
  },[dispatch,navigate])
  const getDetailUser=async (id,accessToken)=>{
    try {
      const res=await getUser(id,{headers: {token :`Bearer ${accessToken}`}})
      dispatch(setUserDetail(res.data.data))
      //console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='bg-background'>
      <Header/>
      <Routes>
        {
          routers.map((router)=>{
            const Page=router.element
            return <Route key={router.path} path={`${router.path}`}  element={Page}/>
          })
        }
      </Routes>
      <Footer/>
    </div>
  )
}
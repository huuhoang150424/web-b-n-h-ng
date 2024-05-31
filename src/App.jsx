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
import { useDispatch } from 'react-redux'
import {setAuthState ,setUserDetailState} from './redux/authSlice'
import {  getUser } from './data/Api.js'
import { jwtDecode } from "jwt-decode"
export default function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  

  const accessToken = localStorage.getItem('access_token')
  const getDetailUser=async (id)=>{
    try {
      const res=await getUser(id,{headers: {token :`Bearer ${accessToken}`}})
      dispatch(setUserDetailState(res.data.data))
      return res.data
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    if(accessToken) {
      const user=jwtDecode(accessToken)
      const {id}=user
      getDetailUser(id)
      dispatch(setAuthState({accessToken: accessToken,user}))
    } else {
      const randomPage = Math.random() < 0.5 ? "/login" : "/register"
      navigate(randomPage)
    }
  },[dispatch,navigate,accessToken])




  
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
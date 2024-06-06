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
import { Routes,Route, useNavigate, useLocation,matchPath } from 'react-router-dom'
import { publicRouters} from "./router"
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectUser, setAuthState ,setUserDetailState} from './redux/authSlice'
import {  getUser } from './data/Api.js'
import { jwtDecode } from "jwt-decode"
export default function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
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
      const randomPage = Math.random()<0.5?"/login":"/register"
      navigate(randomPage)
    }
  },[dispatch,navigate,accessToken])
  useEffect(()=>{
    if (user && (location.pathname === '/login' || location.pathname === '/register')) {
      navigate('/')
    }
  },[user,navigate,location])
  //hàm match kiểm tra có khớp với router không
  const currentRouter=publicRouters.find(router=> matchPath(router.path, location.pathname))
  return (
    <div className='bg-background'>
      {currentRouter?.isShowHeader && <Header/>}
      <Routes>
        {
          publicRouters.map((router)=>{
            const Page=router.element
            if (router.isAdminPage) {
              return user?.isAdmin?<Route key={router.path} path={`${router.path}`}  element={Page}/>:null 
            }
            return <Route key={router.path} path={`${router.path}`}  element={Page}/>
          })
        }
      </Routes>
      {currentRouter?.isShowFooter && <Footer/>}
    </div>
  )
}
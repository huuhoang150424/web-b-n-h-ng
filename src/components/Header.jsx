import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { selectIsAuthenticated ,selectUserDetail,logout,selectToken} from "../redux/authSlice"
import Line from "./Line"
import { useEffect, useRef, useState } from "react"
import { logoutUser } from "../data/Api"
import { success } from "./Message"


const Header = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const token=useSelector(selectToken)
    const isAuthenticated=useSelector(selectIsAuthenticated)
    const [hiddenModelUser,setHiddenModelUser]=useState(false)
    const user=useSelector(selectUserDetail)
    const dropDownRef=useRef()
    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setHiddenModelUser(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    const handleLogout = async () => {
        console.log(token)
        if (token) {
            try {
                const response = await logoutUser()
                success({ messageContent: response.data.message })
                localStorage.removeItem('access_token')
            } catch (err) {
                console.log('Logout failed:', err)
            }
        }
        localStorage.removeItem('access_token')
        dispatch(logout())
        setHiddenModelUser(false)
        navigate("/login")
    }

    return (
        <header className="w-full gap-[50px] h-auto wrapper flex items-center justify-between bg-primaryColor py-[6px] z-30 sticky top-0 shadow-md ">
            <div className="w-[12%]  flex items-center justify-center  mr-[80px]">
                <Link to="/" className="w-full text-[2.2rem]  text-[#fff] font-[600]">
                    Shop Online
                </Link>
            </div>
            <div className="w-[58%]">
                <form className="flex">
                    <input 
                        className="rounded-l-[4px] outline-none px-[18px] text-[1.6rem] w-[81%] text-textColor"
                        placeholder="please enter..."
                    />
                    <div className="w-[19%] py-[8px] px-[12px] border flex items-center gap-[6px] rounded-r-[4px]">
                        <i className="fa-solid fa-magnifying-glass text-[1.6rem] text-[#fff]"></i>
                        <button className="text-[1.6rem] text-[#fff]">
                            Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-[30%] flex items-center gap-[10px] ">
                <div className="flex items-center  gap-[5px] cursor-pointer relative">
                    <i className="fa-solid fa-cart-shopping text-[2.6rem] text-[#fff]"></i>
                    <Link to={"/cart"} className="text-[#fff] text-[1.4rem] font-[500]">Giỏ hàng</Link>
                    <div className="absolute top-[-8px] left-[24px] flex items-center justify-center w-[14px] h-[14px] bg-[#fff] rounded-[50%] border-[0.6px]">
                        <span className=" text-[1rem] font-[700] text-primaryColor">0</span>
                    </div>
                </div>
                <Line
                    className="h-[25px] w-[1px] "
                />
                <div className="flex items-center">
                    <div className=" ml-[5px] mr-[8px] flex items-center justify-center ">
                        {user?(<img src={`${user.avatar}`} className="rounded-[50%] w-[40px] h-[40px] object-cover " alt="user"/>):(<i className="fa-regular fa-user text-[2.4rem] font-[400] text-[#fff]"></i>)}
                    </div>
                    <div className="relative" ref={dropDownRef}>
                        {isAuthenticated && user ? (
                            <div className="flex items-center gap-[5px] text-[#fff] cursor-pointer" onClick={() => setHiddenModelUser(!hiddenModelUser)}>
                                <p className=" text-[1.6rem]">{user?.name}</p>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        ) : (
                            <div className="flex items-center gap-[10px] text-[#fff] ">
                                <Link to={"/login"} className="cursor-pointer text-[1.6rem]">Đăng nhập</Link>
                                <Link to={"/register"} className="cursor-pointer text-[1.6rem]">Đăng ký</Link>
                            </div>
                        )}
                        {hiddenModelUser && (
                            <ul className="bg-white w-[130px] absolute top-[150%] shadow-lg rounded-[4px] ">
                                <li className="py-[10px] cursor-pointer border-b border-lineColor">
                                    <Link onClick={() => setHiddenModelUser(false)} className="flex justify-center text-[1.2rem] font-[400] " to={"/profile"}>Thông tin tài khoản</Link>
                                </li>
                                <li className="py-[10px] cursor-pointer" onClick={handleLogout}>
                                    <p className="text-center text-[1.2rem] font-[400] ">Đăng xuất</p>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
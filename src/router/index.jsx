import Login from "../page/LogIn"
import Register from "../page/Register"
import NotFoundPage from "../page/NotFoundPage"
import HomePage from "../page/homePage"
import ProductsDetail from "../page/productsDetail"
import OrderPage from "../page/orderPage"
import { Profile } from "../page/Profile"
import { CartPage } from "../page/CartPage"

export const routers = [
    {
        path: "/login",
        element: <Login/>,
        name: "Đăng nhập"
    },
    {
        path: "/register",
        element: <Register/>,
        name: "Đăng ký"
    },
    {
        path: "/",
        element: <HomePage/>,
        name: "Trang chủ"
    },
    {
        path: "/productsDetail/:id",
        element: <ProductsDetail/>,
        name: "Trang chi tiết"
    },
    {
        path: "/order",
        element: <OrderPage/>,
        name: "đơn hàng"
    },
    {
        path: "/profile",
        element: <Profile/>,
        name: "Trang cá nhân"
    },
    {
        path: "/cart",
        element: <CartPage/>,
        name: "Giỏ hàng"
    },
    {
        path: "*",
        element: <NotFoundPage/>,
        name: ""
    }
]
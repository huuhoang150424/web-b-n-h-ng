import Login from "../page/LogIn"
import Register from "../page/Register"
import NotFoundPage from "../page/NotFoundPage"
import HomePage from "../page/homePage"
import ProductsDetail from "../page/productsDetail"
import OrderPage from "../page/orderPage"
import { Profile } from "../page/Profile"
import { CartPage } from "../page/CartPage"
import { DashBroad } from "../admin/dashboard"

export const publicRouters = [
    {
        path: "/login",
        element: <Login/>,
        isAdminPage: false,
        isShowHeaderAndFooter: false,
        name: "Đăng nhập"
    },
    {
        path: "/register",
        element: <Register/>,
        isAdminPage: false,
        isShowHeaderAndFooter: false,
        name: "Đăng ký"
    },
    {
        path: "/",
        element: <HomePage/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: "Trang chủ"
    },
    {
        path: "/productsDetail/:id",
        element: <ProductsDetail/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: "Trang chi tiết"
    },
    {
        path: "/order",
        element: <OrderPage/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: "đơn hàng"
    },
    {
        path: "/profile",
        element: <Profile/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: "Trang cá nhân"
    },
    {
        path: "/cart",
        element: <CartPage/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: "Giỏ hàng"
    },
    {
        path: "*",
        element: <NotFoundPage/>,
        isAdminPage: false,
        isShowHeaderAndFooter: true,
        name: ""
    }
    ,   {
        path: "/system/admin",
        element: <DashBroad/>,
        isAdminPage: true,
        isShowHeaderAndFooter: false,
        name: "trang tổng quan"
    }
]

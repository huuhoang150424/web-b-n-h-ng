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
        isShowHeader: false,
        isShowFooter: false,
        name: "Đăng nhập"
    },
    {
        path: "/register",
        element: <Register/>,
        isAdminPage: false,
        isShowHeader: false,
        isShowFooter: false,
        name: "Đăng ký"
    },
    {
        path: "/",
        element: <HomePage/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: "Trang chủ"
    },
    {
        path: "/productsDetail/:id",
        element: <ProductsDetail/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: "Trang chi tiết"
    },
    {
        path: "/order",
        element: <OrderPage/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: "đơn hàng"
    },
    {
        path: "/profile",
        element: <Profile/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: "Trang cá nhân"
    },
    {
        path: "/cart",
        element: <CartPage/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: "Giỏ hàng"
    },
    {
        path: "/system/admin",
        element: <DashBroad/>,
        isAdminPage: true,
        isShowHeader: true,
        isShowFooter: false,
        name: "trang tổng quan"
    },
    {
        path: "*",
        element: <NotFoundPage/>,
        isAdminPage: false,
        isShowHeader: true,
        isShowFooter: true,
        name: ""
    }
]

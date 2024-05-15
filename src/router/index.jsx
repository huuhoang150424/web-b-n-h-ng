import Login from "../page/LogIn"
import Register from "../page/Register"
import NotFoundPage from "../page/NotFoundPage"
import HomePage from "../page/homePage"
import ProductsDetail from "../page/productsDetail"
import OrderPage from "../page/orderPage"

export const routers = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/productsDetail/:id",
        element: <ProductsDetail/>,
    },
    {
        path: "/order",
        element: <OrderPage/>,
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]
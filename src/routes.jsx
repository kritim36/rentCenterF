import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginUser from "./pages/auth/login/LoginUser";
import RegisterUser from "./pages/auth/register/RegisterUser";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/login',
        element : <LoginUser />
    },
    {
        path : '/register',
        element : <RegisterUser />
    },
    {
        path : '/cart',
        element : <Cart />
    }
])

export default router
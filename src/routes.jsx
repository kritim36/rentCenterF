import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/cart',
        element : <Cart />
    }
])

export default router
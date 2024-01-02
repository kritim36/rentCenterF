import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginUser from "./pages/auth/login/LoginUser";
import RegisterUser from "./pages/auth/register/RegisterUser";

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
    }
])

export default router
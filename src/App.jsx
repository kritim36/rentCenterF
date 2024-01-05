
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './globals/components/navbar/Navbar'
import router from './routes'
import Footer from './globals/components/footer/Footer'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import ForgetPassword from './pages/auth/forgetPassword/forgetPassword'
import VerifyOtp from './pages/auth/verifyOtp/VerifyOtp'
import ResestPassword from './pages/auth/resetPassword/ResetPassword'

function App() {
  

  return (
    <>
    <Provider store = {store}>
    {/* <Navbar />
     <RouterProvider router = {router} />
     <Footer /> */}
      
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/register" element={<Register />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/forgetPassword" element={<ForgetPassword />} />
      <Route path = "/verifyOtp" element={<VerifyOtp />} />
      <Route path = "/resetPassword" element={<ResestPassword />} />
      <Route path = "/cart" element={<Cart />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    
    </Provider>

    </>
  )
}

export default App

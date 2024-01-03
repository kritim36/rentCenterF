
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './globals/components/navbar/Navbar'
import router from './routes'
import Footer from './globals/components/footer/Footer'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import LoginUser from './pages/auth/login/LoginUser'

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
      <Route path = "/login" element={<LoginUser />} />
      <Route path = "/cart" element={<Cart />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    
    </Provider>

    </>
  )
}

export default App

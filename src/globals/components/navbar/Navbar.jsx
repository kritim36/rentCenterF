import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProfile, logOut } from "../../../store/authSlice";
import { fetchCartItems } from "../../../store/cartSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {items} = useSelector((state)=>state.cart)
  const {data : user} = useSelector((state)=>state.auth)
  
  const handleLogout = ()=>{
    //empty the data from auth store
    dispatch(logOut())
    
    //localstorage remove/clear
    localStorage.removeItem('token')
    navigate('/login')
  }

  useEffect(()=>{
    dispatch(fetchCartItems())
    dispatch(fetchProfile())
  },[dispatch])

 

  return (
    <div className="pb-3">
      <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center "
                onClick={()=>navigate("/")}
              >
                <span className="text-2xl font-bold dark:text-blue-900">
                  RENT<span className="text-red-600">CENTER</span>
                </span>
              </a>

              <button
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-gray-700 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <a
                      href="#"
                      onClick={()=>navigate("/")}
                      className="block md:px-4 transition hover:text-blue-700 text-blue-800"
                    >
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={()=>navigate('/product')}
                      className="block md:px-4 transition hover:text-blue-700"
                    >
                      <span>Products</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#" 
                      onClick={()=>navigate('/hostproduct')}
                      className="block md:px-4 transition hover:text-blue-700"
                    >
                      <span>Host Your Products</span>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="block md:px-4 transition hover:text-blue-700"
                    >
                      <span>Host Electronic</span>
                    </a>
                  </li> */}
                 {
                  items.length !== 0 && (
                    <li>
                       <a
                    href="#"
                    onClick={()=>navigate("/cart")}
                    className="block md:px-4 transition hover:text-blue-700"
                  >
                    <span>
                      Cart <sup>{items.length}</sup>
                    </span>
                  </a>
                    </li>
                  )
                 }
                 {
                  user.length>0 || localStorage.getItem("token") && 
                  <li>
                    <Link to = "/profile" className="block md:px-4 transition hover:text-blue-700">
                    <span>Profile</span>
                    </Link>
        
                  </li>
                  }
                </ul>
              </div>

              <div className="w-full space-y-2 border-gray-300 lg:space-y-0 md:w-max lg:border-l ">
               {
                user.length == 0 && (localStorage.getItem('token') == '' || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) ?
                (
                  <>
                   <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition active:bg-blue-200 focus:bg-blue-100 sm:w-max"
                >
                  <a href="#"
                  onClick={()=>navigate("/register")}
                   >
                    <span className="block text-gray-700 font-semibold text-sm">
                      Register
                    </span>
                  </a>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-100 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
                >
                  <a href="#"
                  onClick={()=>navigate("/login")}
                   >
                  
                  <span className="block text-gray-800 font-semibold text-sm">
                    Login
                  </span>
                  </a>
                </button>
                  </>
                ):
                <button
                onClick={handleLogout}
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-100 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
              >
                <a href="#"
      
                 >
                
                <span className="block text-gray-800 font-semibold text-sm">
                  LogOut
                </span>
                </a>
                </button>
               }
               
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
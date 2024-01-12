import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data,token,status} = useSelector((state)=>state.auth)
  const [userData,setUserData] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e)=>{
    const{name,value} = e.target 
    setUserData({
      ...userData,
    [name] : value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser(userData))
      //navigate("/")
      // window.location.href = '/'
    
    // if(status == STATUSES.ERROR){
    //   alert("Something went wrong , Try again")
    //   return;
    // }
  }

  return (
    <>
      <div className="max-w-full h-full w-full m-auto py-6 ml-60 px-4 relative group ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              

              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Welcome Back {data.userName}!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="******************"
                    />
                    
                  </div>
                  <div className="mb-4">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="checkbox_id"
                    />
                    <label className="text-sm" htmlFor="checkbox_id">
                      Remember Me
                    </label>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      
                    >
                      Log In
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                      onClick={()=>navigate('/register')}
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                      onClick={()=>navigate('/forgetPassword')}
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
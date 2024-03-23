import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/authSlice";
import { STATUSES } from "../../../globals/components/misc/statuses";


const Register = () => {
    const dispatch = useDispatch()
    const {status}= useSelector((state)=>state.auth)
   
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username : "",
    phoneNumber : "",
    email : "",
    password : ""
    
  })
  const handleChange = (e)=>{
    const {name,value} = e.target 
    setUserData({
      ...userData,
      [name] : value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(registerUser(userData))
    if(status == STATUSES.SUCCESS){
         navigate("/login")
    }
    if(status == STATUSES.ERROR){
        console.log("error")
        return
    }
  }

  return (
    <div>
    <div className="max-w-full h-full w-full m-auto py-5 px-5 ml-44 relative group ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                Create an Account!
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="userName"
                    name="userName"
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Full Name"
                  />
                </div>


                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    type="number"
                    required
                    placeholder="Phone Number"
                  />
                </div>

              
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="******************"
                      required
                    />
                  </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  >
                    Register Account
                  </button>
                </div>

                 <hr className="mb-6 border-t" /> 

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                    onClick={() => navigate("/login")}
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default Register;
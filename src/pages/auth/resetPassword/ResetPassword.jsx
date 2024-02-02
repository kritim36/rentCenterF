import React from "react";
import { useSelector } from "react-redux"
import { APIAuthenticated } from "../../../http"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



export default function ResestPassword() {
  const navigate = useNavigate()
  const {forgotPasswordData} = useSelector((state)=>state.auth)
  const [newPassword,setNewPassword] = useState("")
 const [confirmPassword,setConfirmPassword] = useState("")
 const data = {
    newPassword,
    confirmPassword,
    email : forgotPasswordData.email
 }

  const handleSubmit = async (e)=>{

try {
    e.preventDefault()
     const response = await APIAuthenticated.post("/auth/resetPassword",data)
    
if(response.status ===200){
    navigate("/login")
}
} catch (error) {
   
  console.log(error)
  alert("Something went wrong")
}
}

  return (
    <>
      <div className="max-w-full h-full w-full m-auto py-6 ml-60 px-4 relative group ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              

              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Reset Password</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                  {/* <div className="mb-4">
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
                      
                      type="email"
                      placeholder="Email"
                    />
                  </div> */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="newPassword"
                    >
                      New Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="newPassword"
                      name="newPassword"
                      onChange={((e)=>setNewPassword(e.target.value))}
                      type="password"
                      placeholder="******************"
                    />
                    
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={((e)=>setConfirmPassword(e.target.value))}
                      type="password"
                      placeholder="******************"
                    />
                    
                  </div>
               
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      
                    >
                      Reset Password
                    </button>
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

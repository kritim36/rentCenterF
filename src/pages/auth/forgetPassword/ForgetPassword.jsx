import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { forgetPasswordUser } from '../../../store/authSlice'
import { STATUSES } from '../../../globals/components/misc/statuses'


const ForgetPassword = () => {
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const {data,status} = useSelector((state)=>state.auth)
    // const [userData,setUserData] = useState({
    //   email : ""
      
    // })
  
    // const handleChange = (e)=>{
    //   const{name,value} = e.target 
    //   setUserData({
    //     ...userData,
    //   [name] : value
    //   })
    // }
  
    // const handleSubmit = (e)=>{
    //   e.preventDefault()
    //   dispatch(forgetPasswordUser(userData))
     
    //   if(status == STATUSES.SUCCESS){
    //     return navigate("/verifyOtp")
    //   }
    //   if(status == STATUSES.ERROR){
    //     alert("Something went wrong , Try again")
    //     return;
    //   }
    // }
    const [email,setEmail] = useState({
      email : ""
    })
  
  
    
  return (
    <div>
        <div className="max-w-full h-full w-full m-auto py-6 ml-60 px-4 relative group ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              

              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Froget Password</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
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
                      
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                 
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      
                    >
                      Send Otp
                    </button>
                  </div>  
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
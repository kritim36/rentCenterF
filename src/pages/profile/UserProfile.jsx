import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (

            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                    <div className="mt-2 mb-8 w-full">
                        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                        History
                        </h4>
                        <p className="mt-2 px-2 text-base text-gray-600">
                         Here is the OverView of What you have done so far ....
                        </p>
                    </div> 
                    <div className="grid grid-cols-2 gap-4 px-2 w-full">
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border:'1px solid navy',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        
                        <Link to='/myorders' className="text-base font-medium text-blue-700 dark:text-dark">
                            My Orders
                        </Link>
                        </div>
    
                        {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border:'1px solid navy',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        
                        <Link to='/myorderqrs' className="text-base font-medium text-blue-700 dark:text-dark">
                            My Products
                        </Link>
                        </div> */}
    
                        {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" style={{border:'1px solid navy',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        
                        <Link to='/myorders' className="text-base font-medium text-blue-700 dark:text-dark">
                            My Orders
                        </Link>
                        </div> */}
                    </div>
                </div>  
             
            </div>

  )
}

export default UserProfile
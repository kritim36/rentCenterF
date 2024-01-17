import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { APIAuthenticated } from '../../http'

const OrderDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {orders} = useSelector((state)=>state.checkout)
    const [filteredOrder] = orders.filter((order)=>order._id === id)
    const cancelOrder = async()=>{
      try {
        const response = await APIAuthenticated.patch("/orders/cancel",{id})
        console.log(response.data)
        if(response.status == 200){
            navigate("/myorders")
        }
      } catch (error) {
        console.log(error)      }
    }
    const deleteOrder = async()=>{
      try {
        const response = await APIAuthenticated.delete("/orders/" + id)
      
        if(response.status == 200){
            navigate("/myorders")
        }
      } catch (error) {
        console.log(error)      
      }
    }
  return (
   
<div className="py-20 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
 

  <div className="flex justify-start item-start space-y-5 flex-col">
    <h1 className="text-1xl dark:text-gray lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-600">Order {id}</h1>
    {/* <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p> */}
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">My Order</p>
        {
            filteredOrder && filteredOrder.items.length > 0 && filteredOrder.items.map((item)=>{
                return(
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img className="w-full hidden md:block" src={item.product.productImage} alt="vehicle" />
            <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{item.product.productName}</h3>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">Rs. {item.product.productPrice} </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">Qty : {item.quantity} </p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">Rs. {item.product.productPrice * item.quantity}</p>
            </div>
          </div>
        </div>
                )
            })
        }
        
      </div>
      <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Payment Method</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{filteredOrder?.paymentDetails.status}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Order Status</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{filteredOrder?.orderStatus}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
              <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{filteredOrder?.totalAmount}</p>
            </div>
           
  
          </div>
         
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8">
                <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">Delivery Charge<br /><span className="font-normal">Delivery with 24 Hours</span></p>
              </div>
            </div>
            <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">Rs. 100</p>
          </div>
          
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-2 md:p-1 xl:p-8 flex-col" style={{height:'300px'}}>
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">Address : {filteredOrder?.shippingAddress}</p>
              <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">Phone : {filteredOrder?.phoneNumber}</p>
            </div>
          </div>

          <div className="flex w-full justify-center items-center md:justify-start md:items-start">
              {
                filteredOrder?.orderStatus !== 'cancelled' && (
              <>
                <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" style={{marginTop:'10px'}}>Edit Order</button>
           
           <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-3 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" style={{marginTop:'10px'}} onClick={cancelOrder} >Cancel Order</button>
              </>
                    )
                }
          
              </div>
              {
                filteredOrder?.orderStatus !== 'cancelled' && (
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800" style={{marginTop:'10px',backgroundColor:'red',color:'white'}} onClick={deleteOrder} >Delete Order</button>
    
              </div>
                )}
        </div>
     
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderDetail
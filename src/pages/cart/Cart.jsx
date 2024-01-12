import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItems, updateCartItem } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {items : products} = useSelector((state)=>state.cart)
    const totalItemsInCart = products.reduce((total,item)=>item.quantity + total ,0)
    const totalAmountOfCart = products.reduce((amount,item)=>item.quantity * item.product.productPrice + amount ,0)
    
    const handleQuantityChange = (productId, newQuantity)=>{
      dispatch(updateCartItem(productId, newQuantity))
    }
    const handleDelete = (productId)=>{
      dispatch(deleteCartItems(productId))
    }

    return (
    <div className="h-screen bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {products.map((product)=>{
            return(
                <div key={product.product._id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={product.product.productImage} alt="product-image" className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{product.product.productName}</h2>
              <p className="mt-1 text-xs text-gray-700">{product.product.productPrice}</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>handleQuantityChange(product.product._id, product.quantity - 1)}> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" onChange={(e)=>handleQuantityChange(product.product._id,e.target.value)}/>
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>handleQuantityChange(product.product._id, product.quantity + 1)}> + </span>
              </div>
              <div className="flex items-center space-x-4" onClick={()=>handleDelete(product.product._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
            )
        })}
        
      </div>
     
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Total Items</p>
          <p className="text-gray-700">{totalItemsInCart}</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div> */}
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total Price</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">Rs. {totalAmountOfCart}</p>
            {/* <p className="text-sm text-gray-700">including VAT</p> */}
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
         onClick={()=>navigate('/checkout')}
        >
          Check out</button>
      </div>
    </div>
  </div>
  )
}

export default Cart
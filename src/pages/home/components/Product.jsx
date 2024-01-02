import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../../store/cartSlice'

const Product = () => {
    const[products,setProducts] = useState([])
    const dispatch = useDispatch()

    const fetchProduct = async()=>{
        const response = await axios.get("http://localhost:3000/api/product")
        if(response.status==200){
            setProducts(response.data.data)
        }
    }
    
    useEffect(()=>{
        fetchProduct()
    },[])

    const addToCart = (product)=>{
      dispatch(add(product))
    }


  return (
    <div className="relative w-full">
     
    <div className="relative bg-white-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <h1 className="text-2xl font-bold text-yellow-900 md:text-3xl lg:w-10/12">Our Popular Foods</h1>

      <div className="flex flex-wrap justify-between">
      
        
{
  products.map((product)=>{
    return(
      <div key={product._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img className="h-48 w-full object-cover object-center" src={product.productImage} alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.productName}</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.productDescription}</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs.{product.productPrice}</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <button onClick={()=>addToCart(product)} className="px-6 py-2 transition ease-in duration-200 uppercase mb-2 text-lg font-medium dark:text-white rounded-full hover:bg-red-800 hover:text-white border-2 border-red-900 focus:outline-none">
        Add to cart</button>
    </div>
  </div>
</div>
    )
  })
}
   
</div>
         </div>
     </div>
 </div>
  )
}

export default Product
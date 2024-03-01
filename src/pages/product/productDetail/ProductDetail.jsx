import React from 'react'
import SingleProduct from './component/singleproduct/SingleProduct'
import Review from './component/review/Review'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
   const {id} = useParams()
   
  return (
    <div>
       <SingleProduct id = {id} />
       {/* <Review />  */}
    </div>
  )
}

export default ProductDetail
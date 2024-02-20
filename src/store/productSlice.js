import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/components/misc/statuses";
import { API } from "../http";




const productSlice = createSlice({
    name : "product",
    initialState : {
        data : [],
        status : STATUSES.SUCCESS,
        selectedProduct : {}
    },
    reducers : {
      setProducts(state,action){
        state.data = action.payload
      },
      setStatus(state,action){
        state.status = action.payload
      },
      setSelectedProduct(state,action){
        state.selectedProduct = action.payload
      }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUSES.SUCCESS
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = STATUSES.ERROR
        })
    }
})

export const{setProducts,setStatus,setSelectedProduct} = productSlice.actions
export default productSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetch',async()=>{
    const response = await API.get("/product")
    const data = response.data.data
    return data
})

// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await axios.get("http://localhost:3000/api/product")
//             dispatch(setProducts(response.data.data))
//             dispatch(setStatus(STATUSES.SUCCESS))
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

export function fetchProductDetail(productId){
    return async function fetchProductDetailThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.get(`/product/${productId}`)
            console.log(response)
            dispatch(setSelectedProduct(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


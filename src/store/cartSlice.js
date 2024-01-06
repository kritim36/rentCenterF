import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/components/misc/statuses";
import { APIAuthenticated } from "../http";

const cartSlice = createSlice({
    name : "cart",
    initialState : 
        {
            items : [],
            status : STATUSES.SUCCESS
        },
    reducers : {
        setItems(state,action){
            state.items = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        updateItems(state,action){
            const index = state.items.findIndex(item=>item.product._id === action.payload.productId)
            if(index !== -1){
                state.items[index].quantity = action.payload.quantity
            }
        },
        // remove(state,action){
        //     return state.filter((item)=>item._id !== action.payload)
        // }
    }
})

export const{setItems,setStatus,updateItems} = cartSlice.actions
export default cartSlice.reducer

export function addToCart(productId){
    return async function addToCartThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.post(`/cart/${productId}`)
            dispatch(setItems(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchCartItems(){
    return async function fetchCartItemsThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.get(`/cart/`)
            dispatch(setItems(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function updateCartItem(productId, quantity){
    return async function updateCartItemThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.patch(`/cart/${productId}`,{quantity})
            dispatch(updateItems({productId, quantity}))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
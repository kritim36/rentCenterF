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
        deleteItems(state,action){
            const index = state.items.findIndex(item=>item.product._id === action.payload.productId)
            state.items.splice(index,1)
        },
        emptyCart(state,action){
            state.items = []
        }
    }
})

export const{setItems,setStatus,updateItems,deleteItems,emptyCart} = cartSlice.actions
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
    return async function fetchCartItemsThunk(dispatch){
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

export function deleteCartItems(productId){
    return async function deleteItemThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.delete(`/cart/${productId}`)
            dispatch(deleteItems({productId}))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
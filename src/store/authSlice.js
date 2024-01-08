import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/components/misc/statuses";
import { API } from "../http";




const authSlice = createSlice({
    name : "auth",
    initialState : {
        data : [],
        status : STATUSES.SUCCESS,
        token : ""
    },
    reducers : {
      setUser(state,action){
        state.data = action.payload
      },
      setStatus(state,action){
        state.status = action.payload
      },
      setToken(state,action){
        state.token = action.payload
      },
      logOut(state,action){
        state.date = [],
        state.token = null,
        state.status = STATUSES.SUCCESS
      }
    },
})

export const{setUser,setStatus,setToken,logOut} = authSlice.actions
export default authSlice.reducer


export function registerUser(data){
    return async function registerUserThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.post("/auth/register",data)
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function loginUser(data){
    return async function loginUserThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.post("/auth/login",data)
            dispatch(setToken(response.data.token))
            dispatch(setUser(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
            if(response.status === 200 && response.data.token){
                localStorage.setItem('token',response.data.token)
            }
            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function forgetPasswordUser(email){
    return async function forgetPasswordUserThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.post("/auth/forgetPassword",email)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}




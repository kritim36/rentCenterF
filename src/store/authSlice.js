import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/components/misc/statuses";
import { API, APIAuthenticated } from "../http";




const authSlice = createSlice({
    name : "auth",
    initialState : {
        data : [],
        status : STATUSES.SUCCESS,
        token : "",
        forgotPasswordData : {
            email : null, 
            status : STATUSES.LOADING
           }
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
      },
      setEmail(state,action){
        state.forgotPasswordData.email = action.payload
       },
       setForgotPasswordDataStatus(state,action){
        state.forgotPasswordData.status = action.payload
       }
    },
})

export const{setUser,setStatus,setToken,logOut,setEmail,setForgotPasswordDataStatus} = authSlice.actions
export default authSlice.reducer


export function registerUser(data){
    return async function registerUserThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.post("/auth/register",data)
            window.location.href = "http://localhost:5173/login"
                dispatch(setStatus(STATUSES.SUCCESS))
            
        } catch (error) {
            alert("Email is already registered")
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
                window.location.href = "/"
            }
            
        } catch (error) {
            alert("Email or password wrong")
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}



export function fetchProfile(){
    return async function fetchProfileThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.get("profile/")
            dispatch(setUser(response.data.data))
         
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function forgotPassword(data){
    console.log(data)
    return async function forgotPasswordThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
      
            const response = await APIAuthenticated.post("/auth/forgetPassword",data)
            dispatch(setEmail(response.data.data))
         
            dispatch(setStatus(STATUSES.SUCCESS))
       
    }
}

export function verifyotp(data){
    return async function verifyotpThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.post("auth/verifyOtp/",data)
            // dispatch(setUser(response.data.data))
            dispatch(setEmail(data.email))
            dispatch(setForgotPasswordDataStatus(STATUSES.SUCCESS))
        } catch (error) {
            alert("Something went wrong")
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}




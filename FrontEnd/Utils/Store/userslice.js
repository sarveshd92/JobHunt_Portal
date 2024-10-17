import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:'userslice',
    initialState:{
        userdata_global:JSON.parse(localStorage.getItem('userdata'))||{},
    },
    reducers:{
        setuserdata_global:(state,action)=>{
            state.userdata_global=action.payload;
            localStorage.setItem('userdata',JSON.stringify(action.payload))
        },
        clearuserdata_global: (state) => {
            state.userdata_global = {};
            localStorage.removeItem('userdata'); // Clear localStorage
        }
    }
    }
)
export const{setuserdata_global, clearuserdata_global }=userslice.actions;
export default  userslice.reducer;
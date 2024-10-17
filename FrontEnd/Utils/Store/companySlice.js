import {createSlice }from "@reduxjs/toolkit"

const companySlice=createSlice({
    name:"companySlice",
    initialState:{
        company:{},
    },
    reducers:{
        setcompany:(state,actions)=>{
        state.company=actions.payload;
    }
    }
})
export const {setcompany}=companySlice.actions
export default companySlice.reducer;
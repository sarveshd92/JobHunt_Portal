import {createSlice} from "@reduxjs/toolkit"
const jobSlice=createSlice({
    name:'jobSlice',
    initialState:{
        getalljobs:[],
        search:"",
    },
    reducers:{
        setgetalljobs:(state,action)=>{
                state.getalljobs=action.payload;
        }
        ,
        setsearch:(state,actions)=>{
            state.search=actions.payload;
        }
    }
})

export const {setgetalljobs,setsearch}=jobSlice.actions
export default jobSlice.reducer
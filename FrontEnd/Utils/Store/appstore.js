import { configureStore } from "@reduxjs/toolkit";

import userslice from "./userslice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import authslice from "./authslice";
import applicationSlice from "./applicationSlice";
const appstore=configureStore({
    reducer:{
        auth:authslice,
        userslice:userslice,
        jobSlice:jobSlice,
        companySlice:companySlice,
        applicationSlice:applicationSlice,
    }
})
export default appstore;
// import { createSlice } from "@reduxjs/toolkit";

// const applicationSlice = createSlice({
//     name: "applicationSlice",
//     initialState: {
//         applications:JSON.parse(localStorage.getItem("applications"))||[],
//     },
//     reducers: {
//         addapplication: (state, action) => {
//             state.applications.push(action.payload);
//             localStorage.setItem("applications",JSON.stringfy(action.payload))
//         },
//         removeapplication: (state, action) => {
//             const idToRemove = action.payload;
//             state.applications = state.applications.filter(
//                 (application) => application._id !== idToRemove
//             );
//         }
//     }
// });

// export const{addapplication,removeapplication}=applicationSlice.actions;
// export default applicationSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "applicationSlice",
  initialState: {
    applications:  [],
  },
  reducers: {
    addapplication: (state, action) => {
      // Add the new application to the state
      state.applications=action.payload;
      // Update localStorage with the entire applications array
      localStorage.setItem("applications", JSON.stringify(state.applications));
    },
    removeapplication: (state, action) => {
      const idToRemove = action.payload;
      // Remove the application with the specified ID
      state.applications = state.applications.filter(
        (application) => application._id !== idToRemove
      );
      // Update localStorage with the updated applications array
      localStorage.setItem("applications", JSON.stringify(state.applications));
    },
    removeall:(state,action)=>{
      localStorage.removeItem("applications");
    }
  }
});

export const { addapplication, removeapplication ,removeall} = applicationSlice.actions;
export default applicationSlice.reducer;

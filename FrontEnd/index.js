import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
// React.createElement("div","id:parent","hi iam h1")
import Home from "./Components/Home.component.js";
import Contact from "./Components/Contact.componenet.js";

import NavBar from "./Components/NavBar.component.js";
import Login from "./Components/Login.component.js";
import SignUp from "./Components/SignUp.component.js";
import use_user_info from "./Utils/use_user_info.utils.js";
import { ToastContainer,Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logout from "./Components/Logout.component.js";
import { Provider } from "react-redux";
import appstore from "./Utils/Store/appstore.js";
import Jobs from "./Components/Jobs.component.js";
import Profile from "./Components/Profile.componenet.js";
import Job_jobcard_details from "./Components/Job_jobcard_details.component.js";
import Companies from "./Components/Admin_components/Companies.admin.component.js";
import AdminJobs from "./Components/job_components/AdminJobs.admin.component.js";
import Createcompany from "./Components/Admin_components/Createcompany.admin.component.js";
import CreateCompanyDetails from "./Components/Admin_components/CreateCompanyDetails.admin.component.js";
import Createjobpage from "./Components/job_components/Createjobpage.componenet.js";
import AppliedJobs_navbar from "./Components/AppliedJobs_navbar.component.js";
import Job_user_applications from "./Components/job_components/Job_user_applications.admin.components.js";
import SearchResults from "./Components/SearchResults.home.components.js";

const MainContainer=()=>{


// const{user,bio,userdata1}=useContext(use_user_info);
          return(
           
          <div className="box-border m-0 p-0">
                <NavBar/>
                <Outlet/>
              
        </div>
            
          )
}
const AppLayout=
createBrowserRouter([{
    path:"/",
    element:<MainContainer/>,
    children:[
        {
            path:"/home",
            element:<Home/>,
        },
        {
            path:"/jobs",
            element:<Jobs/>,
        },
      
        {
            path:"/Contact-us",
            element:<Contact/>,
        },{
            path:"/AppliedJobs",
            element:<AppliedJobs_navbar/>
        },
        {
            path:'/Login',
            element:<Login/>
        }, {
            path:"/SignUp",
            element:<SignUp/>
        },
        {
            path:"/logout",
            element:<Logout/>
        },
        {
            path:"/profile",
            element:<Profile/>,

        },
        {
            path:"/Details/:jobid",
            element:<Job_jobcard_details/>
        },
        {

                path:"/SearchResults",
                element:<SearchResults/>
        },
        ///// for admin components  it starts from here




        {
            path:"/admin/companies",
            element:<Companies/>
        },
        {
            path:"/admin/adminjobs",
            element:<AdminJobs/>
        },
        {
            path:"/admin/create/company",
            element:<Createcompany/>
        },
        {
            path:"/admin/create/companydetails/:compid",
            element:<CreateCompanyDetails/>
        },
        {    path:"/admin/create/newjob",
            element:<Createjobpage/>
        },
        {
            path:'/admin/applicants/:jobid',
            element:<Job_user_applications/>
        
        
        }
       
    ]
}, 

])


const root=ReactDom.createRoot(document.querySelector(".root"));


const App=()=>{

    const [user,setuser]=useState("Guest");
    const[bio,setbio]=useState(" An enthusiastic learner eager to explore and innovate.");
    const[userdata,setuserdata]=useState("")

    return (
        <Provider store={appstore}>
        <div className="h-full w-full m-0 p-0 box-border">
            
 {/* <use_user_info.Provider value={{user,setuser,bio,setbio,userdata,setuserdata}} > */}

<RouterProvider router={AppLayout}/>
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
{/* </use_user_info.Provider> */}
        </div>
        </Provider>
    )
}

root.render(<App/>)
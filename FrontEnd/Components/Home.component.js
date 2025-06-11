import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Home_info from "./Home_info.component.js";
import Home_Category_carousel from "./Home_Category_carousel.component.js";
import Home_Latest_jobs from "./Home_Latest_jobs.component.js";
import Home_Footer from "./Home_Footer.component.js";
import {setgetalljobs} from "../Utils/Store/jobSlice.js"
import { addapplication } from "../Utils/Store/applicationSlice.js";
import { useNavigate } from "react-router-dom";
import { localhost } from "../Utils/constant.js";



const Home = () => {
 
  const dispatch = useDispatch();
  const {getalljobs} = useSelector((store) => store.jobSlice);
  const{userdata_global}=useSelector((store)=>store.userslice);
  const{applications}=useSelector((store)=>store.applicationSlice)

    const [jobs,setjobs]=useState([]);
    const navigate=useNavigate()
    // console.log("home->>",applications)
  const fetchData = async () => {
    try {
      const result = await axios.get(  localhost +"/api/v1/job//getalljobs", { withCredentials: true });
      
      if (result) {
              dispatch(setgetalljobs(result?.data));
              setjobs(result?.data);
              console.log("jobs",getalljobs)
      }

    } catch (error) {
      console.error("Error fetching jobs:", error);
    }

  };

  useEffect(() => {
    fetchData();
   if(userdata_global?.data?.role==='Recruiter'){
    navigate("/admin/companies")
   }
  }, [setjobs]);
                                                              
  return (
    <>
      <Home_info />
      <Home_Category_carousel />
      <Home_Latest_jobs  />
      <Home_Footer />
    </>
  );
};

export default Home;

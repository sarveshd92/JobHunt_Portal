import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import use_user_info from "../Utils/use_user_info.utils.js";
import { toast } from "react-toastify";
import axios from "axios";
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import {setuserdata_global,clearuserdata_global} from "../Utils/Store/userslice"
import applicationSlice, {removeall, addapplication } from "../Utils/Store/applicationSlice";

// import { removeall } from "../Utils/Store/applicationSlice"

const Logout = () => {
  // const { userdata, setuserdata, setuser, setbio } = useContext(use_user_info);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [logoutMessage, setLogoutMessage] = useState("");
  const {userdata_global}=useSelector((store)=>store.userslice);
  const dispatch=useDispatch()

  const performLogout = async () => {
    try {
    
     

      const result = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("result->", result);
      if (result.data.success) {
        dispatch(clearuserdata_global());
     
        toast.success(result.data.message);
        dispatch(removeall())
        setLogoutMessage("Logout is successful!");
       // setuserdata(null); // Using null for clarity
        //setuser(null);
        //setbio(null);
        navigate("/"); // Navigate immediately after success
      } else {
        toast.error(result.data.message);
        setLogoutMessage("Logout failed. Please try again.");
        navigate("/login"); // Navigate immediately after failure
      }
    } catch (error) {
      toast.error(error.message || "Logout failed");
      setLogoutMessage("Logout failed. Please try again.");
      navigate("/login"); // Navigate immediately after error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    performLogout();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="lightblue"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <h1 className="text-2xl font-bold">{logoutMessage}</h1>
      )}
    </div>
  );
};

export default Logout;

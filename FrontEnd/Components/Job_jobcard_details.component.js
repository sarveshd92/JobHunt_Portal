import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import applicationSlice, { addapplication } from "../Utils/Store/applicationSlice";
import { localhost } from "../Utils/constant";

const JobJobcardDetails = () => {


  const dispatch=useDispatch()
  const { jobid } = useParams();  // Ensure jobid matches your backend route
  // console.log("Job ID:", jobid);
// const{applications}=useSelector((store)=>store.applicationSlice)
  const [jobDetails, setJobDetails] = useState(null);
  const [status, setStatus] = useState(false);

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `${localhost}/api/v1/job/getjobbyidbyuser/${jobid}`,
        { withCredentials: true }
      );
console.log(data)
      const data1 = await axios.post(
        `${localhost}/api/v1/job/appliedjobstatus`,
        { jobid },
        { withCredentials: true }
      );
      // console.log("data1->", data1?.data?.result?.application);
      if (data1?.data?.result?.application.length>0) {
        setStatus(true);
        const application = await axios.get(localhost+"/api/v1/application/appliedjobs", { withCredentials: true });
        dispatch(addapplication(application.data.result));
      } else {
        setStatus(false);
      }
     
      if (data?.data?.success) {
        setJobDetails(data?.data?.result); // Store the job details
        toast.success(data?.data?.message);
      } else {
        toast.error(data?.data?.message);
      }
    } catch (error) {
      toast.error("Session expired. Please log in again.");
    }
  };
console.log("details of job ",jobDetails)
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("Applying for job...");
      const result = await axios.post(
        `${localhost}/api/v1/application/applyjob/${jobid}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, // Important for sending cookies
        }
      );
  
      if (result.data.success) {

           
        setStatus(true); // Update the status after successful application
        toast.success(result.data.message);
      }else {
        toast.error("Something Went Wrong please login again");
      }
    } catch (error) {
      toast.error("Something Went Wrong please login again" );
    }
  };

  useEffect(() => {
    fetchdata();
  }, [status]); // Empty dependency array to ensure this runs only once
console.log(jobDetails?.company)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {jobDetails ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{jobDetails.title}</h1>
          <div className="flex items-center mb-4">
          <div>
          <img className="w-8 h-8 rounded-md border-2 border-gray-200 object-contain " src= { `${jobDetails?.company?.logo}` }alt="Company Logo" />
        </div>
            <div>
              <h2 className="ml-2 text-xl font-semibold">{jobDetails?.company?.name}</h2>
              <h3 className="ml-2 text-gray-600">{jobDetails.location}</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{jobDetails.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold">Requirements:</h3>
            <ul className="list-disc list-inside ml-4">
              {jobDetails.requirement.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Job Type:</h3>
            <p>{jobDetails.jobType}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Experience Required:</h3>
            <p>{jobDetails.experience} years</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Salary:</h3>
            <p>{jobDetails.salary} LPA</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Number of Positions:</h3>
            <p>{jobDetails.noofposition}</p>
          </div>
          {!status ? (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleClick}>
              Apply Now
            </button>
          ) : (
            <button className="bg-green-600 text-white px-4 py-2 rounded-md"  disabled>
              Applied
            </button>
          )}
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobJobcardDetails;

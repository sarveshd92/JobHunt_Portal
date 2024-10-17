// import Job_jobcard from "./Job_jobcard.component.js";

// import { useSelector } from "react-redux";
import Job_jobcard from "./Job_jobcard.component.js";
// import{getalljobs} from "../Utils/Store/jobSlice"
import { useEffect, useState } from "react";


import axios from "axios";

const Jobs = () => {
  const jobcard=[1,2,3,4,5,6,7,8];
  const metroCities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata", "Hyderabad"];
  const industries = ["Backend Engineer", "Frontend Engineer", "Full Stack Developer", "Data Scientist", "DevOps Engineer"];
  const salaryRanges = ["0-5 LPA", "5-10 LPA", "10-15 LPA", "15-20 LPA", "20+ LPA"];
  const [getalljob,setgetalljob]=useState([])


  const fetchdata = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/v1/job/getalljobs", { withCredentials: true });
        // Correctly setting the result array
      // console.log(result.data.result);
      setgetalljob(result?.data?.result||[]);
    } catch (error) {
      console.log(error);
    }
  }
  


// console.log(getalljob);
useEffect(()=>{fetchdata()},[setgetalljob]);
  return (
    <div className="flex w-full h-[80%] border-black mt-4 box-border p-0">
      <div className="w-1/6 h-full ml-6 p-4">
        <h2 className="font-bold border-b-2 border-gray-300">Filter Data</h2>
        <div className="mt-4">
          <h3 className="font-bold">Cities</h3>
          {metroCities.map((mt, idx) => (
            <div key={idx} className="border-black pb-2">
              <input
                type="radio"
                name="city"
                id={`city-${idx}`}
                value={mt}
                onClick={() => {
                  console.log("city->", mt);
                }}
              />
              <label className="font-semibold" htmlFor={`city-${idx}`}>{mt}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Industries</h3>
          {industries.map((industry, idx) => (
            <div key={idx} className="border-black pb-2">
              <input
                type="radio"
                name="industry"
                id={`industry-${idx}`}
                value={industry}
                onClick={() => {
                  console.log("industry->", industry);
                }}
              />
              <label className="font-semibold" htmlFor={`industry-${idx}`}>{industry}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Salary Range</h3>
          {salaryRanges.map((salary, idx) => (
            <div key={idx} className="border-black pb-2">
              <input
                type="radio"
                name="salary"
                id={`salary-${idx}`}
                value={salary}
                onClick={() => {
                  console.log("salary->", salary);
                }}
              />
              <label className="font-semibold" htmlFor={`salary-${idx}`}>{salary}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-5/6 h-full  flex flex-wrap justify-between">
             { 
             !getalljob?(
              jobcard.map((jb,idx)=>(
                <Job_jobcard key={idx}/>
              ))
            ):( getalljob?.map((jb,idx)=>(
              <Job_jobcard key={jb._id} data={jb}/>
            ))
          )
              }      </div>
    </div>
  );
};

export default Jobs;

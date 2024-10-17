import { useSelector } from "react-redux";
import Home_Latest_Job_Card from "./Home_Latest_Job_Card.component.js";

const Home_Latest_jobs=()=>{
    const jobs=[1,2,3,4,5,6,7,8];
    const{getalljobs}=useSelector((store)=>store.jobSlice);
    // console.log("from component",getalljobs)
    
    return (
    <div className="w-full m-0 mt-2 p-0  flex flex-col">

        <div className="ml-6 ">
            <h1 className="text-4xl font-bold"><span className="text-[#6a38c2]">Latest & Top </span>Job Openings</h1>
        </div>
        <div className="flex flex-wrap mt-3 w-full justify-evenly ">
           { !getalljobs? (
                     jobs.slice(0,6).map((jb,idx)=>(
               <Home_Latest_Job_Card key={idx}/>
        )))
        : (
            getalljobs?.result?.map((jb,idx)=>(
                <Home_Latest_Job_Card key={idx} data={jb}/>
         ))
        )
    }
    </div>
    </div>
    )
}

export default Home_Latest_jobs;
import { useSelector } from "react-redux";
import Home_Latest_Job_Card from "./Home_Latest_Job_Card.component.js";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

const SearchResults = () => {
    const { getalljobs } = useSelector((store) => store.jobSlice);
    const{search}=useSelector(store=>store.jobSlice)
// console.log(search)
const[searchdata,setsearchdata]=useState([])
const fetchdata=async()=>{
            try {
                const data=await axios.get(`http://localhost:8000/api/v1/job/getsearchjobs/?keyword=${search}`)
                console.log(data?.data?.result)
                setsearchdata(data?.data?.result)
            } catch (error) {
            
                 console.log(error.message)
            }
}
useEffect(()=>{fetchdata()},[])
console.log(searchdata)
    return (
<>
        <h1 className=" p-4 text-left font-bold text-3xl">Search Results-:{searchdata.length}</h1>
        <div className="flex flex-wrap justify-center p-4">
            {
            
            searchdata.length==0?getalljobs?.result?.map((jb, idx) => (
                <Home_Latest_Job_Card key={idx} data={jb} />
                                                        ) )
            
        
            
            
            
            :(searchdata.map((jb, idx) => (
                <Home_Latest_Job_Card key={idx} data={jb} />
            )))}
        </div>
        </>
    );
};

export default SearchResults;

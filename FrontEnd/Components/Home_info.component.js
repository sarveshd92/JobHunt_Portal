import { useDispatch } from "react-redux"
import { setsearch } from "../Utils/Store/jobSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home_info=()=>{
const[value,setvalue]=useState("")

const dispatch =useDispatch()
const navigate=useNavigate()
const handleclick=()=>{
  dispatch(setsearch(value))
  navigate('/SearchResults')

}
const handlechange=(e)=>{

 setvalue(e.target.value)
}


    return (
        <div className="text-center my-4 px-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className="font-medium text-l rounded-full border-black text-[#f83002] bg-gray-100 py-2 px-4">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold">
          Search, Apply &<br /> Get your <span className="text-[#6a38c2]">Dream Job</span>
        </h1>
        <p className="text-gray-400 max-w-xl  mx-auto">
        Find and apply to your dream job effortlessly. <br />
          Start your journey towards success with us.
        </p>
        <div className="flex w-full sm:w-[40%] items-center mx-auto rounded-full shadow-lg border-2 border-gray-200 ">
          <input
            placeholder="Find Your Dream Jobs"
            name="Job"
            className="pl-3 outline-none w-full rounded-full font-mono "
            onChange={handlechange}
          />
          <button className="rounded-r-full px-2 py-2 bg-[#6A38C2]" onClick={()=>{handleclick()}}    >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="#FFFFFF">
              <path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    )
}

export default Home_info;
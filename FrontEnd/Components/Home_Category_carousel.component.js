import React from "react";
import { useDispatch } from "react-redux";
import { setsearch } from "../Utils/Store/jobSlice";
import { useNavigate } from "react-router-dom";

const Home_CategoryCarousel = () => {
  const categories = [
    "Fullstack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Graphic Designer",
    "Data Scientist",
  ];
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleclick=(ct)=>{
    console.log("from function",ct)
    dispatch(setsearch(ct))
    navigate('/SearchResults')
  }

  return (
    <div className="w-full flex justify-center">
    <div className="flex h-1/6 w-[50%] rounded-full overflow-x-auto px-2 py-1 space-x-4 scrollbar-hide">
      {categories.map((ct, idx) => (
        <div key={idx} className="text-xl  font-medium whitespace-nowrap">
          <button className="w-full text-lg font-normal border-2 rounded-full px-2 border-gray-100" onClick={()=>{
            console.log("button clicked",ct)
            handleclick(ct)
          }}>{ct}</button>
        </div>

      ))}
    </div>
</div>
  );
};

export default Home_CategoryCarousel;

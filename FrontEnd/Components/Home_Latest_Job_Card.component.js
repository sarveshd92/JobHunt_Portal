import { Navigate, useNavigate } from "react-router-dom"

const Home_Latest_Job_Card = ({ data }) => {
    const navigate=useNavigate()
   const handleclick=()=>{
    navigate(`/Details/${data?._id}`)
   }
    return (
        <div className="h-56 w-80 shadow-lg border border-gray-200 rounded-lg p-4 m-4 flex flex-col justify-between transition-transform transform hover:scale-105" onClick={handleclick}>
            <div className="text-xl font-semibold text-gray-800">{data?.company?.name}</div>
            <div className="text-sm text-gray-500 mb-2">India</div>
            <div className="text-lg font-bold text-gray-700 mb-4">{data?.title}</div>
            <div className="text-sm text-gray-600 overflow-hidden overflow-ellipsis" style={{ maxHeight: '3rem' }}>
                {data?.description.length > 70 ? `${data?.description.substr(0, 70)}...` : data?.description}
            </div>
            <div className="flex justify-between mt-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">{data.noofposition} Positions</span>
                <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">{data.jobType}</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">{data.salary} LPA</span>
            </div>
        </div>
    );
};

export default Home_Latest_Job_Card;

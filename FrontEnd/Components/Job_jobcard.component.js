import { Link } from "react-router-dom";

const Job_jobcard = ({ data }) => {
  const daysago = (mongodbtime) => {
    return Math.floor((new Date() - new Date(mongodbtime)) / (24 * 60 * 60 * 1000));
  };

  return (
    <div className="h-[auto] w-[300px] border-2 border-gray-200 shadow-md rounded-md p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-600 text-xs font-medium">
          {daysago(data?.createdAt) === 0 ? "Today" : `${daysago(data?.createdAt)} Days ago`}
        </div>
        <div className="text-gray-600">
          <img 
            className="h-4 w-4 fill-current" 
            src="https://path/to/your/image.png" 
            alt="Icon" 
          />
        </div>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <div>
          <img className="w-8 h-8 rounded-md border-2 border-gray-200 object-contain" src= { `${data?.company?.logo}` }alt="Company Logo" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold">{data?.company?.name}</h1>
          <h2 className="text-gray-400 text-sm">India</h2>
        </div>
      </div>
      <h3 className="mt-1 font-bold text-sm">{data?.title}</h3>
      <p className="mt-1 text-gray-500 text-sm">
        Design and maintain server-side logic and database management systems.
      </p>
      <div className="flex justify-between my-2 text-xs">
        <span className="text-blue-800 font-bold px-1 py-0.5 rounded">{data?.noofposition}</span>
        <span className="text-red-600 font-bold px-1 py-0.5 rounded">{data?.jobType}</span>
        <span className="text-[#683ac2] font-bold px-1 py-0.5 rounded">{data?.salary} LPA</span>
      </div>
      <div className="flex justify-evenly mt-2">
        <Link to={`/Details/${data?._id}`}>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-xs px-4 py-1 font-semibold">
            Details
          </button>
        </Link>
        <button type="button" className="bg-[#683ac2] border border-gray-300 hover:bg-[#683ac2] focus:ring-4 focus:ring-gray-100 rounded-lg text-xs px-4 py-1 font-semibold text-white">
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default Job_jobcard;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {io} from "socket.io-client"
const AppliedJobsNavbar = ({ applications }) => {
  const navigate =useNavigate()
console.log("APPLICATIONS",applications)
   
const handleClick=(recruiter,status,userid,jobapplicationid)=>{

  navigate(`/chat/${recruiter}/${status}/${userid}/${jobapplicationid}`)
}
      
  return (
    <div className="w-full flex justify-center items-center p-4 bg-gray-50 mt-8">
      <div className="w-11/12 md:w-7/12 lg:w-6/12 max-h-[50vh] border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="h-full">
          <table className="w-full table-fixed">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-1/4 border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Applicant ID
                </th>
                <th className="w-1/4 border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Job
                </th>
                <th className="w-1/4 border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="w-1/4 border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="w-1/6 border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
  Chat
</th>
              </tr>
            </thead>
            <tbody>
              {applications && applications.length > 0 ? (
                applications.map((application) => (
                  <tr key={application._id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                    <td className="border-t border-gray-300 px-2 py-3 text-gray-600 text-sm truncate">
                      {application?._id || ""}
                    </td>
                    <td className="border-t border-gray-300 px-2 py-3 text-gray-600 text-sm truncate">
                      {application?.job?.company?.name || ""}
                    </td>
                    <td
                      className={`border-t border-gray-300 px-2 py-3 text-sm font-semibold truncate ${
                        application?.status === "Selected"
                          ? "text-green-600 bg-green-100"
                          : application?.status === "Rejected"
                          ? "text-red-600 bg-red-100"
                          : "text-gray-600"
                      }`}
                    >
                      {application?.status || "Pending"}
                    </td>
                    <td className="border-t border-gray-300 px-2 py-3 text-gray-600 text-sm truncate">
                      {application?.job?.title || ""}
                    </td>
                   <td className="border-t border-gray-300 px-2 py-3 text-sm text-center">
  {application?.status === "Selected" ? (
    <button
      onClick={() => handleClick(application?.job?.createdby,   application?.status   , application?.applicant?._id , application?._id)}
      className="flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 transition"
      title="Start Chat"
    >
      <span className="text-lg">💬</span>
      {/* Online/Offline Dot (optional)
      {isRecruiterOnline(application?.job?.recruiter?._id) ? (
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
      ) : (
        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
      )}*/}
    </button>
  ) : (
    <span className="text-gray-400">–</span>
  )} 
</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="border-t border-gray-300 px-4 py-3 text-center text-gray-600 text-sm">
                    No jobs applied
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsNavbar;

import React from 'react';

const AppliedJobsNavbar = ({ applications }) => {
  console.log("applied jobs page -> ", applications);

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

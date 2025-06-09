import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Companies = () => {
    const [orgCompanies, setOrgCompanies] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [editVisible, setEditVisible] = useState(null);
    const navigate = useNavigate();

    const filterData = (searchtext) => {
        if (!searchtext) {
            setCompanies(orgCompanies);
        } else {
            const result = orgCompanies.filter((company) =>
                company.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setCompanies(result);
        }
    };

    const handleClick = () => {
        navigate("/admin/create/company");
    };

    const handleChange = (e) => {
        const textvalue = e.target.value;
        filterData(textvalue);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/company/usercomp", {
                withCredentials: true,
            });
            setOrgCompanies(response?.data?.result || []);
            setCompanies(response?.data?.result || []);
        } catch (error) {
            console.log("Error fetching companies:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-3/4 p-2 flex items-center">
                    <form className="flex items-center w-full">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search"
                                className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Company"
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className="mt-2 md:mt-0">
                    <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        onClick={handleClick}
                    >
                        New Company
                    </button>
                </div>
            </div>

            <div className="mt-4 table-container">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {companies.map((company, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <img src={`${company.logo}`} alt={`${company.name} logo`} className="h-10 w-auto" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                    <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company?.createdAt?.substr(0, 10)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                    <div 
                                        onMouseEnter={() => setEditVisible(index)} 
                                        onMouseLeave={() => setEditVisible(null)}
                                        className="relative h-10 w-10"
                                    >
                                        <span className="cursor-pointer"><b>...</b></span>
                                        {editVisible === index && (
                                            <div className="absolute h-10 w-10 border-2 bg-white  border-gray-300 shadow-lg rounded-lg p-2">
                                                <span className="text-sm text-gray-700 cursor-pointer"><Link to={`/admin/create/companydetails/${company?._id}`}>Edit</Link></span>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Companies;



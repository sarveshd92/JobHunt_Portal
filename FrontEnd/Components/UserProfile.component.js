import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ name, description,role }) => {
  // console.log("userprofile->",name)
 
  return (
    <li className="relative cursor-pointer group font-sans">
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/office/80/circled-user-male-skin-type-3.png"
        alt="User"
        className="rounded-full"
      />
      <div className="absolute top-full right-0 border bg-white border-gray-300 rounded-lg text-gray-800 text-sm py-4 px-5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        <p className="mb-2 text-lg font-semibold">{`Hi ${name} ! `}</p>
        {/* <p className="text-xs text-gray-600">{description.length > 26 ? description.substring(0, 26) + '...' : description}</p> */}
      

        <div className="flex flex-col gap-2 mt-2">
        {
              role==='Student'?
          <div className="flex items-center  gap-2">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/60/test-account.png"
              alt="View Profile"
            />
          
            <Link to="/profile" className="text-blue-500 hover:underline text-sm  pr-2">
              View Profile
            </Link>
          
          </div>
        :<></>
}
          <div className="flex items-center gap-2">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/logout-rounded--v1.png"
              alt="Logout"
            />
            <Link to="/logout" className="text-blue-500 hover:underline text-sm">
              Logout
            </Link>
          </div>
        </div>
          
      </div>
    </li>
  );
};

export default UserProfile;

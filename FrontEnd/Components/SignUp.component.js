import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setloading } from '../Utils/Store/AuthSlice';


const SignUp = () => {
    const[fullname,setfullname]=useState("")    
    const[username,setusername]=useState("")
    const[email,setemail]=useState("")
    const[phoneno,setphoneno]=useState("")
    const[password,setpassword]=useState("")
    const [file, setFile] = useState(null); // Changed from "" to null

    const[role,setrole]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch(setloading)
    const{loading}=useSelector(store=>store.auth)
    const HandleSubmit = async (e) => {
      e.preventDefault();
  
      // Create form data
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phoneno", phoneno);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("resume", file); // Appending file
  
      try {
          dispatch(setloading(true))
          const result = await axios.post("http://localhost:8000/api/v1/user/register", formData, {
              headers: {
                  "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
          });
  
          console.log("result->>>>", result);
          if (result.data.success) {
            toast.success(result?.data?.message)
              navigate("/Login");
              console.log(result.data);
          } else {
              console.log("error one ->",result?.data);
          
          }
      } catch (error) {
          navigate("/SignUp");
    
          toast.error(error?.response?.data?.message || error?.message);
        
          // console.log("message",error.message);
      }
      finally{
        dispatch(setloading(false))

      }
  };
  
 
  return (
    <div className="w-full max-w-md mx-auto my-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h1 className="font-mono font-bold text-2xl mb-6 text-center text-gray-800">Sign Up</h1>
      <form className="flex flex-col space-y-5 " onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            id="fullname" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
            placeholder="Sarvesh Deshpande" 
            required 
            onChange={(e)=>(
                setfullname(e.target.value)
              
            )}
          />
        </div>
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">UserName</label>
          <input 
            type="text" 
            id="username" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
            placeholder="Sxdeshp2" 
            required 
            onChange={(e)=>(
                setusername(e.target.value)
              
            )}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
            placeholder="Sarvesh@gmail.com" 
            required 
            onChange={(e)=>(
                setemail(e.target.value)
              
            )}
          />
        </div>
        <div>
          <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="text" 
            id="phonenumber" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
            placeholder="123456789" 
            required 
            onChange={(e)=>(
                setphoneno(e.target.value)
              
            )}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            id="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
            placeholder="********" 
            required 
            onChange={(e)=>(
                setpassword(e.target.value)
              
            )}
          />
        </div>
        <div className='flex  justify-between gap-2'>
        <div>
          <span className="block mb-2 text-sm font-medium text-gray-700">Select an Option</span>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input 
                id="radio-1" 
                type="radio" 
                value="Student" 
                name="options" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
                onChange={(e)=>(
                    setrole(e.target.value)
                  
                )}
              />
              <label htmlFor="radio-1" className="ml-2 text-sm font-medium text-gray-700">Student</label>
            </div>
            <div className="flex items-center">
              <input 
                id="radio-2" 
                type="radio" 
                value="Recruiter" 
                name="options" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
                onChange={(e)=>(
                    setrole(e.target.value)
                  
                )}
              
              />
              <label htmlFor="radio-2" className="ml-2 text-sm font-medium text-gray-700">Recruiter</label>
            </div>
            </div>
          </div>
          <div>

          <label class=" mb-2 text-sm font-medium text-gray-700 dark:text-white" for="small_size"> Resume </label>
          <input class="block w-full p-1  text-xs text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size"   required name="resume" type="file" onChange={
            (e)=>(
              
setFile(e.target.files[0])
            )
          }/>
          </div>
        </div>
        { loading ? 
    <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center">
      <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
      Loading...
    </button>
    : 
    <button 
      type="submit" 
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
    >
      Log In
    </button>
  }

        <p className='font-mono text-gray-700 font-normal'>Already have an account? <span className='text-blue-400'><Link to="/Login">Login</Link></span></p>
      </form>
    </div>
  );
};

export default SignUp;

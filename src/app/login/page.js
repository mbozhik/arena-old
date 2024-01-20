"use client";
// import { Input, Option, Select,SelectOptionProps, select} from "@material-tailwind/react";
import Image from "next/image";
import Logo from '@/app/admission/Logo.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
const page = () => {
    const [eye,setEye]=useState(false)
  return (
    <div className="px-20 mt-5">
      <div className="flex h-[80vh] gap-2 ">
        <div className="relative w-[50%] ">
        <article className="admissionSideber w-[100%] h-[100%]">
         
         </article>
         <div className="absolute top-0 left-0 h-[100%] w-[100%] px-5">
            <div className="flex justify-center mt-4"><Image src={Logo} alt="Logo" className="w-44"/></div>
            <div className="flex  items-center h-full ">
                <div>
            <h1 className="text-4xl font-bold   text-white pl-20 ">Welcome back!</h1>
            <p className="text-1xl font-medium   text-white pl-20 mt-4">We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
            </div>
            </div>
        
   
           
         </div>
        </div>
             {/* Addmission Form */}
             {/* <Apply/> */}
             <div className=" w-[50%]">
                <form className="mt-36 pl-40">
                    <h1 className="text-3xl font-bold">Log in</h1>
                    <div class="relative z-0 w-2/3 mb-5 group mt-10">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
                    <div class="relative z-0 w-2/3 mb-5 group mt-10 ">
                        {
                            eye? <input type='text' name="floating_email" id="floating_email" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />:      <input type='password' name="floating_email" id="floating_email" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                        }
     

      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      {
        eye?<FaEye onClick={()=>setEye(!eye)} className="absolute right-2 top-3"/>: 
        <FaEyeSlash onClick={()=>setEye(!eye)} className="absolute right-2 top-3"/>
      }
    
  </div>
  <p className="w-2/3 float-right" >Don't have an ID? <Link href='admission' className="text-blue-400 font-semibold">Apply Now!</Link></p>
  <button className="w-2/3 bg-purple-700 text-white py-3 rounded-md mt-5">Log In</button>

                </form>


             </div>
      </div>
    </div>
  );
};

export default page;

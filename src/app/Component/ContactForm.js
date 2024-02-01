"use client";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import StudentLogin from "../AllDataFatchingFunction/Login";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [eye, setEye] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const UserLogin = async (e) => {
    let formdata = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    e.preventDefault();
    try {
      const result = await StudentLogin(formdata, e.target.email.value);
      console.log(result);
      setPending(true);
      if (
        (result?.status === 200 && result?.login === 0) ||
        result?.login === 2
      ) {
        setPending(false);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: result.msg,
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: `ok`,
          timer: 2000,
        });
      } else if (result?.login === 1) {
        setPending(false);
        // For Bkash payment
        localStorage.setItem("u_id", result.u_id);
        sessionStorage.setItem("u_id", result.u_id);
        localStorage.setItem("Type", 1);
        localStorage.setItem("Course_title", result.Course_title);
        localStorage.setItem("UserEmail", e.target.email.value);
        router.push("/profile");
      } else {
        setPending(false);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title:
            "Server-side developer is currently working. Please try again later if you encounter an error",
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: `ok`,
          timer: 2000,
        });
      }
    } catch (error) {
      setPending(false);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title:
          "Server-side developer is currently working. Please try again later if you encounter an error",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `ok`,
        timer: 2000,
      });
    }
  };
  return (
    <div className=" w-[100%]">
      <form className="mt-36 border p-3" onSubmit={(e) => UserLogin(e)}>
      
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="relative z-0 w-2/3 mb-5 group mt-10 ">
          <input
            type="text"
            name="name"
            id="floating_email"
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-2/3 mb-5 group mt-10">
          <input
            type="text"
            name="email"
            id="floating_email"
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           Enter Your Email
          </label>
        </div>
        <div class="w-2/3">
  <div class="relative w-full min-w-[200px]">
    <textarea
      class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "></textarea>
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Message
    </label>
  </div>
</div>
     
        {/* <button className="w-2/3 bg-purple-700 text-white py-3 rounded-md mt-5 cursor-pointer" type="submit">
          
        </button> */}
        <button
          className={`w-2/3  mt-4 py-2 ${
            pending ? "bg-[#90bde0]" : "bg-deep-purple-600"
          } text-white rounded-lg`}
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

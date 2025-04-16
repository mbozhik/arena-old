"use client";
import { useState } from "react";
import Contact from "../AllDataFatchingFunction/Contact";
import { IoVolumeHigh } from "react-icons/io5";
import axios from "axios";
import ApiUrl from "../AllDataFatchingFunction/ApiUrl";
const ContactForm = () => {
  const [pending, setPending] = useState(false);
  const [reset, setReset] = useState(false);
  const UserLogin = (e) => {
    e.preventDefault();

    const newFormData = new FormData(e.target);
    let object = Object.fromEntries(newFormData);
    Contact(newFormData);
    axios
      .post(ApiUrl.Contact, newFormData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Mail sent successfully.  We will contact  soon  ",
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonText: `ok`,
            timer: 2000,
          }).then(() => {
            e.target.reset();
          });
        }
      })
      .catch((error) => console.log(error));

  };
  return (
    <div className=" w-[100%] h-auto">
      <form className=" border p-3" onSubmit={(e) => UserLogin(e)}>
        <h1 className="text-[20px] font-normal text-[#6FC0E7] text-center">
        Contact With Us
        </h1>
        <p className="text-sm font-normal  text-center text-[#494C50]">
        Write your name, mobile number and message and send
        </p>
        <div className=" ">
          {/* <div className="relative z-0 md:w-4/5 w-4/5 mb-5 group mt-5 mx-auto  ">
            <input
              type="text"
              name="name"
              id="floating_email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div> */}
          <div className="relative z-0 md:w-4/5 w-4/5 mb-5 group mt-5 mx-auto">
  <input
    type="text"
    name="name"
    id="floating_email"
    className="block py-2.5 px-2 w-full text-sm font-normal text-[#778899] font-[Poppins]  
    bg-[#F5F5F5] appearance-none focus:outline-none focus:ring-0 peer"
    placeholder="Name "
    required
  />
</div>

          {/* <div className="relative z-0 md:w-4/5 w-4/5  mb-5 group mt-5  mx-auto">
            <input
              type="text"
              name="email"
              id="floating_email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="  mx-auto peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
          </div> */}
          <div className="relative z-0 md:w-4/5 w-4/5 mb-5 group mt-5 mx-auto">
  <input
    type="text"
    name="email"
    id="floating_email"
    className="block py-2.5 px-2 w-full text-sm font-normal text-[#778899] font-[Poppins] bg-[#F5F5F5] appearance-none focus:outline-none focus:ring-0 peer"
    placeholder="Enter Your Email"
    required
  />
</div>

          {/* <div class="md:w-4/5 w-4/5  mx-auto">
            <div class="relative w-full min-w-[200px] ">
              <textarea
                class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-700 focus:border-t-transparent border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 "
                placeholder=" "
                name="message"
              ></textarea>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
          </div> */}
<div className="md:w-4/5 w-4/5 mx-auto mt-5">
  <textarea
    name="message"
    className="w-full min-h-[100px] px-3 py-2.5 text-sm font-normal text-[#778899] font-[Poppins] bg-[#F5F5F5] resize-none rounded-[7px] focus:outline-none focus:ring-0 placeholder:text-[#778899]"
    placeholder="Message"
    required
  ></textarea>
</div>

          {/* <button className="w-2/3 bg-purple-700 text-white py-3 rounded-md mt-5 cursor-pointer" type="submit">
          
        </button> */}
          <div className="flex justify-center">
            <button
              className={`w-4/5  mt-4 py-2 ${
                pending ? "bg-[#90bde0]" : "bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-1 mb-5 mt-5"
              } text-white rounded-lg`}
              type="submit"
            >
              Send Email
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

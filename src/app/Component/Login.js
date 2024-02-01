"use client";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import StudentLogin from "../AllDataFatchingFunction/Login";
import { useRouter } from "next/navigation";

const Login = () => {
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
    <div className=" w-[50%]">
      <form className="mt-36 pl-40" onSubmit={(e) => UserLogin(e)}>
        <h1 className="text-3xl font-bold">Log in</h1>
        <div className="relative z-0 w-2/3 mb-5 group mt-10">
          <input
            type="email"
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
            Email address
          </label>
        </div>
        <div className="relative z-0 w-2/3 mb-5 group mt-10 ">
          {eye ? (
            <input
              type="text"
              name="password"
              id="floating_email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
              placeholder=" "
              required
            />
          ) : (
            <input
              type="password"
              name="password"
              id="floating_email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-700 peer"
              placeholder=" "
              required
            />
          )}

          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {eye ? (
            <FaEye
              onClick={() => setEye(!eye)}
              className="absolute right-2 top-3"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setEye(!eye)}
              className="absolute right-2 top-3"
            />
          )}
        </div>
        <p className="w-2/3 text-right ">
          Don't have an ID?{" "}
          <Link href="admission" className="text-blue-400 font-semibold">
            Apply Now!
          </Link>
        </p>
        {/* <button className="w-2/3 bg-purple-700 text-white py-3 rounded-md mt-5 cursor-pointer" type="submit">
          
        </button> */}
        <button
          className={`w-2/3  mt-4 py-2 ${
            pending ? "bg-[#90bde0]" : "bg-deep-purple-600"
          } text-white rounded-lg`}
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

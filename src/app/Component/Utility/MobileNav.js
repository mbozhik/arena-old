"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import LogOut from "./Logout";
import Link from "next/link";
import Logo from "@/app/Images/Banner/Logo.png";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { usePathname } from 'next/navigation'

const MobileNav = ({ uid }) => {
  const [nav, setNave] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  console.log(pathname,nav);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? '#333' : 'transparent',
    transition: 'background-color 0.3s ease',
    padding: '10px 0', // Add any other styles you need
  };

  return (
    <div className={`md:flex ${!scrolling && pathname==='/' ?'navber2 ':'navber2'} lg:px-10 md:px-5 relative font-bold `}>
      <div className="container mx-auto flex justify-between font-bold ">
      {/* <article className=" flex items-center">
        <Image
          src={Logo}
          alt="Arena-Logo"
          className="w-20 h-8 md:w-auto md:h-auto "
        />
      </article> */}
      <div
        className={`${
          nav ? "h-full w-full blur fixed top-0 left-0" : ""
        } md:hidden z-10`}
        onClick={() => setNave(false)}>
          
        </div>
      <nav className="flex justify-center items-center font-bold  ">
        <ul
          className={`md:flex block peer z-50  text-white font-bold ${
            nav
              ? "translate-x-0 md:translate-x-0"
              : "translate-x-96 md:translate-x-0 "
          } transition-all duration-350 ease-in-out  gap-x-4 bg-[#331E6D] md:bg-transparent fixed md:relative lg:relative top-0 right-0 h-screen md:h-auto    w-2/3 md:w-auto pt-10 pl-5 md:pt-0 md:pl-0 `}
        >
          <div className="block md:hidden text-white absolute right-5 top-3 text-3xl">
            <IoIosCloseCircle onClick={() => setNave(false)}></IoIosCloseCircle>
          </div>
          <li
            className="hover:text-black mt-5 md:mt-0"
            onClick={() => setNave(false)}
          >
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li
            className="hover:text-black mt-2 md:mt-0"
            onClick={() => setNave(false)}
          >
            <Link href="/about-us">About</Link>
          </li>
          <li
            className="hover:text-black mt-2 md:mt-0"
            onClick={() => setNave(false)}
          >
            <Link href="/all-courses"> Courses</Link>
          </li>
          {/* <div className="  group mt-2 md:mt-0 "> */}
            {/* <span className="hover:text-black  ">
              <p className="hidden md:inline-flex relative"> Courses</p> */}
              {/* <span className="flex md:hidden lg:hidden items-center gap-3">
                Courses
                <AiOutlineDown className="text-white block md:hidden" />
              </span>
            </span> */}
            {/* <div className="  w-full group-hover:h-48 block md:hidden  group-hover:opacity-100 h-0 overflow-hidden z-0    duration-500 ease-in-out transition-all text-[12px] ml-5">
              <div className="md:py-5 md:px-10">
                <li
                  className="hover:text-black cursor-pointer "
                  onClick={() => setNave(false)}
                >
                  <Link href="/cyber-security">
                    Cyber Security & Ethical Hacking
                  </Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1 "
                  onClick={() => setNave(false)}
                >
                  <Link href="/python">Advanced Python With Freelancing</Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                  <Link href="/combo">
                    Cyber Security and Advance Python (Combo)
                  </Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                  <Link href="/cehf">CEHF Masterclass</Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                  <Link href="/cosint">
                    Certified in Open Source Intelligence (C|OSINT)
                  </Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                  <Link href="/linux">Linux</Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                  <Link href="/network">Networking Security</Link>
                </li>
                <li
                  className="hover:text-black cursor-pointer my-1"
                  onClick={() => setNave(false)}
                >
                     <Link
              href="/all-courses "
              className="hover:text-black absolute pr-6 opacity-0 hidden md:block cursor-pointer  "
            >
              Courses
            </Link>
                </li>
              </div>
            </div> */}
            {/* <br
              className="hidden md:block mt-2 md:mt-0"
              onClick={() => setNave(false)}
            /> */}
            {/* <Link
              href="/all-courses "
              className="hover:text-black absolute pr-6 opacity-0 hidden md:block cursor-pointer  "
            >
              Courses
            </Link> */}
            {/* <div className="absolute hidden md:block  mt-5 w-96 group-hover:h-72  group-hover:opacity-100 h-0 overflow-hidden z-0 bg-[#678cc9]   duration-500 ease-in-out transition-all">
              <div className="md:py-5 md:px-10">
                <li className="hover:text-black cursor-pointer ">
                  <Link href="/cyber-security">
                    Cyber Security & Ethical Hacking
                  </Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1 ">
                  <Link href="/python">Advanced Python With Freelancing</Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1">
                  <Link href="/combo">
                    Cyber Security and Advance Python (Combo)
                  </Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1">
                  <Link href="/cehf">CEHF Masterclass</Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1">
                  <Link href="/cosint">
                    Certified in Open Source Intelligence (C|OSINT)
                  </Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1">
                  <Link href="/linux">Linux</Link>
                </li>
                <li className="hover:text-black cursor-pointer my-1">
                  <Link href="/network">Networking Security</Link>
                </li>
              </div>
            </div> */}
          {/* </div> */}
          <li className="hover:text-black  md:mt-0">
            <Link href="/all-services" onClick={() => setNave(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-black mt-2 md:mt-0">
            <Link
              href="https://www.hackers.institute/"
              onClick={() => setNave(false)}
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-black mt-2 md:mt-0">
            <Link href="/arena-gallery" onClick={() => setNave(false)}>
              Gallery
            </Link>
          </li>{" "}
          <li className="hover:text-black mt-2 md:mt-0">
            <Link href="/contact" onClick={() => setNave(false)}>
            Contact
            </Link>
          </li>{" "}
          {uid && (
            <li className="hover:text-black">
              <Link href="/profile" onClick={() => setNave(false)}>
                Profile
              </Link>
            </li>
          )}
          {uid ? (
            <li className="mt-5 md:hidden  " onClick={() => setNave(false)}>
              {" "}
              {/* <span className="navBtn " >Log Out</span> */}
              <LogOut />
            </li>
          ) : (
            <li className="mt-5 block md:hidden" onClick={() => setNave(false)}>
              <Link href="/admission" className="">
                {" "}
                <span className="navBtn ">Apply Now</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <article className=" justify-center items-center hidden md:flex ">
        <ul className="flex text-white font-semibold gap-x-4">
          {uid ? (
            <li>
              {" "}
              <LogOut />
            </li>
          ) : (
            <li>
              <Link href="/admission" className="">
                {" "}
                <span className={`${!scrolling && pathname==='/'?'hover:text-yellow-600  bg-[#1a1a1a8e] px-3 py-1 rounded-3xl':'navBtn'} `}>Apply Now</span>
              </Link>
            </li>
          )}
        </ul>
      </article>
      <div
        className="  justify-center   relative flex items-center md:hidden"
        onClick={() => setNave(true)}
      >
        <AiOutlineMenu className="text-white text-2xl menu-bar" />
      </div>
      </div>
    </div>
  );
};

export default MobileNav;

"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import LogOut from "./Logout";
import Link from "next/link";
import Logo from "@/app/Images/Banner/Logo.png";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { usePathname } from "next/navigation";

const MobileNav = ({ uid }) => {
  const [nav, setNave] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  console.log(pathname, nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? "#333" : "transparent",
    transition: "background-color 0.3s ease",
    padding: "10px 0", // Add any other styles you need
  };
  // Prevent body scroll when the menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
    
  }, [nav]);
  return (
    // <div
    //   className={`md:flex ${
    //     !scrolling && pathname === "/" ? "navber2 " : "navber2"
    //   } lg:px-10 md:px-5 relative font-bold `}
    // >
    //   <div className="container mx-auto flex justify-between font-bold ">
    //     <div
    //       className="  justify-center   relative flex items-center md:hidden shadow-2xl"
    //       onClick={() => setNave(true)}
    //     >
    //       <AiOutlineMenu className="text-white text-2xl  shadow-xl" />
    //     </div>
    //     <div
    //       className={`${
    //         nav ? "h-full w-full blur fixed top-0 left-0" : ""
    //       } md:hidden z-10`}
    //       onClick={() => setNave(false)}
    //     ></div>
    //     <nav className="flex justify-center items-center font-bold  ">
    //       <ul
    //         className={`md:flex block peer z-50  text-white font-bold ${
    //           nav
    //             ? "-translate-x-0 md:translate-x-0"
    //             : "-translate-x-96 md:translate-x-0 "
    //         } transition-all duration-350 ease-in-out  gap-x-4   bg-gradient-to-t
    //         from-[#56b5e3] to-[#7d58a5]   md:bg-transparent fixed md:relative lg:relative top-0 left-0 h-screen md:h-auto    w-2/3 md:w-auto pt-10 pl-5 md:pt-0 md:pl-0 xl:bg-none `}
    //       >
    //         <div className="block md:hidden text-white absolute right-5 top-3 text-3xl">
    //           <IoIosCloseCircle
    //             onClick={() => setNave(false)}
    //           ></IoIosCloseCircle>
    //         </div>
    //         <li
    //           className="hover:text-black mt-5 md:mt-0"
    //           onClick={() => setNave(false)}
    //         >
    //           {" "}
    //           <Link href="/">Home</Link>
    //         </li>
    //         <li
    //           className="hover:text-black mt-2 md:mt-0"
    //           onClick={() => setNave(false)}
    //         >
    //           <Link href="/about-us">About</Link>
    //         </li>
    //         <li
    //           className="hover:text-black mt-2 md:mt-0"
    //           onClick={() => setNave(false)}
    //         >
    //           <Link href="/all-courses"> Courses</Link>
    //         </li>
    //         <li className="hover:text-black mt-2 md:mt-0">
    //           <Link href="/all-services" onClick={() => setNave(false)}>
    //             Services
    //           </Link>
    //         </li>
    //         <li className="hover:text-black mt-2 md:mt-0">
    //           <Link
    //             href="https://www.hackers.institute/"
    //             onClick={() => setNave(false)}
    //           >
    //             Blog
    //           </Link>
    //         </li>
    //         <li className="hover:text-black mt-2 md:mt-0">
    //           <Link href="/arena-gallery" onClick={() => setNave(false)}>
    //             Gallery
    //           </Link>
    //         </li>{" "}
    //         <li className="hover:text-black mt-2 md:mt-0">
    //           <Link href="/contact" onClick={() => setNave(false)}>
    //             Contact
    //           </Link>
    //         </li>{" "}
    //         {uid && (
    //           <li className="hover:text-black">
    //             <Link href="/profile" onClick={() => setNave(false)}>
    //               Profile
    //             </Link>
    //           </li>
    //         )}
    //         {uid ? (
    //           <li className="mt-5 md:hidden  " onClick={() => setNave(false)}>
    //             {" "}
    //             {/* <span className="navBtn " >Log Out</span> */}
    //             <LogOut />
    //           </li>
    //         ) : (
    //           <li
    //             className="mt-5 block md:hidden"
    //             onClick={() => setNave(false)}
    //           >
    //             <Link href="/admission" className="">
    //               {" "}
    //               <span className="navBtn ">Apply Now</span>
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //     <article className=" justify-center items-center hidden md:flex  ">
    //       <ul className="flex text-white font-semibold gap-x-4 ">
    //         {uid ? (
    //           <li className=" mt-2 md:mt-0   ">
    //             {" "}
    //             <LogOut />
    //           </li>
    //         ) : (
    //           <li>
    //             <Link href="/admission" className="">
    //               {" "}
    //               <span
    //                 className={`${
    //                   !scrolling && pathname === "/" ? " navBtn" : "navBtn"
    //                 } `}
    //               >
    //                 Apply Now
    //               </span>
    //             </Link>
    //           </li>
    //         )}
    //         <li className="hover:text-black mt-2 md:mt-0  flex items-center ">
    //           <Link
    //             href="https://admission.arenawebsecurity.net/"
    //             onClick={() => setNave(false)}
    //           >
    //             Verify Certificate
    //           </Link>
    //         </li>
    //         {pathname === "/profile" && (
    //           <li className="navBtn" onClick={() => setNave(false)}>
    //             {/* <Link href="/arena-gallery" > */}
    //             <a href="#paymentId">Pay Now</a>
    //             {/* </Link> */}
    //           </li>
    //         )}
    //       </ul>
    //     </article>
    //   </div>
    // </div>
    <div
  className={`lg:flex ${
    !scrolling && pathname === "/" ? "navber2" : "navber2"
  } lg:px-10 md:px-5 relative font-bold`}
>
  <div className="container mx-auto flex justify-between font-bold">
    {/* Hamburger Menu - now shows on md and below */}
 
    <div
      className="justify-center relative flex items-center lg:hidden    p-2"
      onClick={() => setNave(true)}
    >
      <div className="h-8 p-1  shadow-lg rounded-md border border-white">
  <AiOutlineMenu className="text-white text-2xl" />
</div>

    </div>

    {/* Overlay when mobile nav is open */}
    <div
      className={`${
        nav ? "h-full w-full blur fixed top-0 left-0" : ""
      } lg:hidden z-10`}
      onClick={() => setNave(false)}
    ></div>

    {/* Main Nav */}
    <nav className="flex justify-center items-center font-bold">
      <ul
        className={`lg:flex block peer z-50 text-white font-bold ${
          nav
            ? "-translate-x-0 lg:translate-x-0"
            : "-translate-x-[800px] lg:translate-x-0"
        } transition-all duration-350 ease-in-out gap-x-4 bg-gradient-to-t
        from-[#56b5e3] to-[#7d58a5] lg:bg-transparent fixed lg:relative top-0 left-0 h-screen lg:h-auto w-2/3 lg:w-auto pt-10 pl-5 lg:pt-0 lg:pl-0 lg:bg-none`}
      >
        <div className="block lg:hidden text-white absolute right-5 top-3 text-3xl">
          <IoIosCloseCircle onClick={() => setNave(false)} />
        </div>

        {/* Nav Items */}
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Courses", href: "/all-courses" },
          { label: "Services", href: "/all-services" },
          { label: "Blog", href: "https://www.hackers.institute/" },
          { label: "Gallery", href: "/arena-gallery" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <li
            key={label}
            className="hover:text-black mt-2 lg:mt-0"
            onClick={() => setNave(false)}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}

        {uid && (
          <li className="hover:text-black">
            <Link href="/profile" onClick={() => setNave(false)}>
              Profile
            </Link>
          </li>
        )}

        {uid ? (
          <li className="mt-5 lg:hidden" onClick={() => setNave(false)}>
            <LogOut />
          </li>
        ) : (
          <li className="mt-5 block lg:hidden" onClick={() => setNave(false)}>
            <Link href="/admission">
              <span className="navBtn">Apply Now</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>

    {/* Right-side buttons (visible on lg only) */}
    <article className="justify-center items-center hidden lg:flex">
      <ul className="flex text-white items-center font-semibold gap-x-4 ">
        {uid ? (
          <li className="mt-2">
            <LogOut />
          </li>
        ) : (
          <li>
            <Link href="/admission">
              <span
                className={`${
                  !scrolling && pathname === "/" ? " navBtn" : "navBtn"
                }`}
              >
                Apply Now
              </span>
            </Link>
          </li>
        )}
        <li className="hover:text-black  flex items-center">
          <Link
            href="https://admission.arenawebsecurity.net/"
            onClick={() => setNave(false)}
          >
            Verify Certificate
          </Link>
        </li>
        {pathname === "/profile" && (
          <li className="navBtn" onClick={() => setNave(false)}>
            <a href="#paymentId">Pay Now</a>
          </li>
        )}
      </ul>
    </article>
  </div>
</div>

  );
};

export default MobileNav;

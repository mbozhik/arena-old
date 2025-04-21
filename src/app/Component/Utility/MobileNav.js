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
              // { label: "Verify Certificate", href: "https://admission.arenawebsecurity.net/" },
            ].map(({ label, href }) => (
              <li
                key={label}
                className="hover:text-black mt-2 lg:mt-0"
                onClick={() => setNave(false)}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li className="hover:text-black  flex items-center mt-4 lg:hidden">
              <Link
                href="https://admission.arenawebsecurity.net/"
                onClick={() => setNave(false)}
              >
                Verify Certificate
              </Link>
            </li>
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
              <li
                className="mt-5 block lg:hidden"
                onClick={() => setNave(false)}
              >
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

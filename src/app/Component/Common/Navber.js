import Image from "next/image";
import "@/app/globals.css";
import Logo from "@/app/Images/Banner/Logo.png";
import Link from "next/link";
const Navber = () => {
  return (
    <div className="lg:flex navber px-10 sticky top-0">
      <article>
        <Image src={Logo} alt="Arena-Logo" />
      </article>
      <nav className="flex justify-center items-center ">
        <ul className="flex text-white  font-semibold gap-x-4 relative">
          <li className="hover:text-[#ffd321]">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#ffd321]">
            <Link href="/about">About</Link>
          </li>
          <div className=" relative group  ">
            <Link href="/courses " className="hover:text-[#ffd321] ">
              Courses
            </Link><br/>
            <Link href="/courses " className="hover:text-[#ffd321] absolute pr-6 opacity-0 ">
              Courses
            </Link>
            <div  className="absolute mt-5 w-96 opacity-150 z-0 bg-[#678cc9cc] py-5 px-10 -translate-y-80 group-hover:translate-y-0 duration-500 ease-in-out transition-all">
              <li className="hover:text-[#ffd321] cursor-pointer "><Link href='/cyberSecurity'>Cyber Security & Ethical Hacking</Link></li>
              <li className="hover:text-[#ffd321] cursor-pointer my-1 ">Advanced Python With Freelancing</li>
              <li className="hover:text-[#ffd321] cursor-pointer my-1">Cyber Security and Advance Python (Combo)</li>
              <li className="hover:text-[#ffd321] cursor-pointer my-1">Certified in Open Source Intelligence (C|OSINT)</li>
              <li className="hover:text-[#ffd321] cursor-pointer my-1">Linux</li>
              <li className="hover:text-[#ffd321] cursor-pointer my-1">Networking Security</li>
            </div>
            {/* <ul className=" bg-red-700">
                       
                    </ul> */}
          </div>
          <li className="hover:text-[#ffd321]">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-[#ffd321]">
            <Link href="https://www.hackers.institute/">Blog</Link>
          </li>
          <li className="hover:text-[#ffd321]">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <article className="flex justify-center items-center">
        <ul className="flex text-white font-semibold gap-x-4">
          <li>
            <Link href="#" className="">
              {" "}
              <span className="navBtn ">Apply Now</span>
            </Link>
          </li>
          {/* <li><Link href='#'>Verify Student</Link></li> */}
        </ul>
      </article>
    </div>
  );
};
export default Navber;

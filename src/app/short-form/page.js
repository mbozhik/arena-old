
import Image from "next/image";
import Logo from '@/app/admission/Logo.png'
import right from "@/app/admission/right.svg"
import Apply from "../Component/Apply";
import ShortFrom from "../Component/ShortFrom";
const page = () => {
  
  return (
    <div className="lg:px-20 md:px-5 px-3 mt-5">
      <div className="flex md:h-[80vh] gap-2 ">
        <div className="relative w-[50%] hidden md:block ">
        <article className="admissionSideber w-[100%] h-[100%]">
         
         </article>
         <div className="absolute top-0 left-0 h-[100%] w-[100%] px-5">
            <div className="flex justify-center mt-4"><Image src={Logo} alt="Logo" className="w-44"/></div>
            <h1 className="text-3xl  font-bold py-2   text-[#FFD321] mt-5">Admission going on 2024</h1>
            <hr/>
            <h3 className="mt-3 text-2xl text-white">Master the art of Ethical  <span className="font-semibold"><span className="text-yellow-700">H</span>ac<span className="text-yellow-700">K</span>ing</span></h3>
            <div>
            <h1 className="text-3xl font-bold py-2   text-[#FFD321] mt-5">Our Courses</h1>
            {/* <hr/> */}
            <ul className="mt-5">
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Cyber Security & Ethical Hacking</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Advanced Python With Freelancing</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Cyber Security and Advance Python (Combo)</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>CEHF Masterclass</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Certified in Open Source Intelligence (C|OSINT)</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Linux</li>
              <li className="flex items-center gap-x-2 text-white"><span><Image alt="cyber security" src={right} className="h-5 w-5"/></span>Networking Security</li>
            </ul>
            <h1 className="text-3xl font-bold py-2   text-[#FFD321] mt-5">Duration </h1>
            <p className="text-white">4 months of Hands-on training</p>
              </div>  
         </div>
        </div>
             {/* Addmission Form */}
             <ShortFrom/>
      </div>
    </div>
  );
};

export default page;

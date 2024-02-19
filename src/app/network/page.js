import Image from "next/image";
import React, { Fragment } from "react";
import Combo from "@/app/Courses/combo.svg";
import Search from "@/app/Courses/search.svg";
import Safety from "@/app/Courses/safety.svg";
import network from "@/app/Courses/networking.svg";
import doller from "@/app/Courses/doller.svg";
import intelligence from "@/app/Courses/intelligence.svg";
import Python from "@/app/Courses/python.svg";
import Django from "@/app/Courses/django.svg";
import Banner from "@/app/Courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import web from "@/app/Courses/web.svg";
import Review from "@/app/Courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "../Component/Common/Payment";

export const metadata = {
  title: 'Network Security Essentials & Safeguarding Your Digital Assets!',
  description: 'Arm yourself with essential skills in our network security course. Learn to protect digital assets effectively!',
}; 
const page = () => {
    const images=[
        {
          original:"/python1.png",
          thumbnail:"/python1.png",
        },
        {
          original:"/python2.png",
          thumbnail:"/python2.png",
        },
        {
          original:"/python3.png",
          thumbnail:"/python3.png",
        },
        {
          original:"/python4.png",
          thumbnail:"/python4.png",
        },
        {
          original:"/python5.png",
          thumbnail:"/python5.png",
        },
     
    ]
       
  return (
    <Fragment>
    <div className="bg-[#EBE7F8] lg:h-[45vh] group">
        <div className="container mx-auto ">
        <article className="flex py-10 justify-center items-center">
          <div className="md:w-[80%] w-full px-6 md:px-0">
              <CyberSecurityH1 title={'Networking Security'} />

              <p className="text-1xl leading-5 pt-8">
              In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and vulnerability scanning. You will be able to design & construct your network for maximum security and prevent local and remote attacks. Browser security - We cover one of the largest risks online, the browser. The doorway into your system. How to best reduce the attack surface of the browser and harden it for maximum security and privacy. A critical consideration for reducing your risk.
              </p>
            </div>

            <div className="md:flex justify-center items-center hidden">
              <Image
                alt="Network"
                src={web}
                className="h-60 w-60 group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </article>
        </div>
      </div>
      {/* Course Module */}
      <div className="flex lg:px-20 md:px-5 px-6 pt-10">
        <div className="grid  grid-cols-8 w-full">
         <div className=" col-span-2 hidden lg:block">
 
            <Image alt="Advance Python And Ethical Hacking" src={Banner} />
          </div>

          <div className=" lg:col-span-4 col-span-8 lg:px-3">
            {/*KEY FEATURES  */}
            <div className="relative">
              <h3 className="text-[20px] font-semibold mt-5">KEY FEATURES</h3>
              <p className="lg:w-44 bg-[#ffd321] h-[3px] "></p>
            </div>

        
            <article className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-5 ">
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={network}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Network Management</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={intelligence}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Firewall
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Search}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Search Engine Privacy</p>
              </div>

              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Safety}
                  alt="Advance Python and Django"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Network Safety
                </p>
              </div>
            
            </article>

            {/* Moudele Start */}
            <article className="pt-4">
              <div className="relative">
                <h3 className="text-[20px] font-semibold mt-5">MODULE</h3>
                <p className="lg:w-24 bg-[#ffd321] h-[3px] "></p>
              </div>
              <div className="md:flex justify-between">
              <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>Configure and architect a small network for maximum physical and wireless security.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>Understand how we are tracked online by corporations, nation-states your ISP and others.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>The very latest up-to-date information and methods.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>Able to configure firewalls on all platforms including Windows, MacOS, and Linux for all types of attack scenarios.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>Perform network monitoring to discover and identify potential hackers and malware using tools like Wireshark, Tcpdump, and Syslog.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                       <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>Will look at search engine privacy - understand how to mitigate the tracking and privacy issues of search engines and their associated services.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <p><FaHandPointRight className="text-[#44107A] text-2xl  " /></p>
                      <span>What are the best password managers to use and why. How passwords are cracked, and how to mitigate the password attacks.</span>
                    </div>
                  </li>
               
                </ul>

              </div>
            </article>
           
          
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>24 Hours Course</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 85,000/-</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold"> Course Type :</p>
                  <span>
                  Professional Corporate Certified Course. (Only for corporate deal)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 hidden lg:block">
          {/* <div className=" col-span-2">
            <Image
              alt="Advance Python And Ethical Hacking"
              src={Banner}
              className=""
            />
          </div> */}
            <Image alt="Advance Python And Ethical Hacking" src={Banner} />
          </div>
        </div>
      </div>
      <div className="bg-[#EBE7F8]  flex justify-center items-center mt-10 px-6 md:px-0 ">
        <div className='my-10 hidden md:block'>
          <EnrollComponent data={['Become','AN_Network_Security','SPECIALIST']} />
         
        </div>
        <div className='my-10 block md:hidden'>
          <EnrollComponent data={['Become','AN_Network','SPECIALIST']} />
         
        </div>
        </div>
      {/* Teacher Slider */}
      <div className="bg-[#F3F6FA] mt-10 relative">
        <div>
          <Image
            src={Review}
            alt="teachers"
            className="absolute -top-14 w-40 left-1/2 transform -translate-x-1/2"
          />
          
        </div>

        <h2 className="title lg:text-4xl text-[#44107a] font-bold drop-shadow-lg py-2 text-center pt-20">
          <span className="title-word-1"> TEAM Learn </span>
          <span className=" title-word-2"> from the </span>
          <span className=" title-word-4">techers</span>
        </h2>{" "}
      
        <div className="pb-10">
          <MentorSlides/>
        </div>
      </div>

      {/* Inforfation About Advance Python */}

    
      
        {/* <div className="px-20 my-10 ">
        <Outline data={images}/>
        </div> */}
        <div className=" my-10 ">
        <PaymentModal/>
    
        </div>
      
    </Fragment>
  );
};

export default page;

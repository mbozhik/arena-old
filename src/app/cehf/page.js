import Image from "next/image";
import React, { Fragment } from "react";
import Python from "@/app/all-courses/python.svg";
import Combo from "@/app/all-courses/combo.svg";
import Malware from "@/app/all-courses/malware (1).svg";
import Malware1 from "@/app/all-courses/malware (2).svg";
import Malware2 from "@/app/all-courses/malware (3).svg";
import Master from "@/app/all-courses/master.svg";
import Django from "@/app/all-courses/django.svg";
import Banner from "@/app/all-courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import web from "@/app/all-courses/web.svg";
import doller from "@/app/all-courses/doller.svg";
import intelligence from "@/app/all-courses/intelligence.svg";
import Review from "@/app/all-courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "../Component/Common/Payment";

export const metadata = {
  title: 'Dive into Digital Sleuthing & Earn Your C|OSINT Certification',
  description: 'Uncover hidden insights and enhance your investigative prowess with our C|OSINT certification course. Dive into the world of digital sleuthing today!',
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
              <CyberSecurityH1 title={'CEHF Masterclass'} />

              <p className="text-1xl leading-5 pt-8">
              Advanced Cyber Security & Ethical Hacking is a pioneer in endpoint security, with proactive security solutions that stop advanced persistent threats in their initial stages and prevent advancement. Advanced Cyber Security & Ethical Hacking products provide the first.
              </p>
            </div>

            <div className="md:flex justify-center items-center hidden">
              <Image
                alt="Cyber Security"
                src={Master}
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
            <Image
              alt="Advance Python And Ethical Hacking"
              src={Banner}
              className=""
            />
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
                  src={Malware}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Mobile Malware, PC Malware</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Combo}
                  alt="Advance Python and Django"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Programming Knowledge
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Malware1}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Server Exploitation</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Malware2}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Game Hacking
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
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> OSINT</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Mobile Malware, PC Malware</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Malware Manual Binding with Real File</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Advance SQL Injection with SQLmap and other tools</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Advance Remote Code Execution</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Recon by CVE and exploation</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Programming Knowledge</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Programming with Web Server</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Risk Management</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Hack A Game (Binary analysis and Dll injection)</span>
                    </div>
                  </li>
                 
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Freelancing</span>
                    </div>
                  </li>
                </ul>
                <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Recon Script development by Python</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Crawler by Python</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Spidaring with Python</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Complete CRUD Operation</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Cyber Defense</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Server Configurations and Monitoring</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Server Audit</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Server Create, Web Application Deploy</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Software Penetration Testing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Server Exploitation</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Professional Pentesting Report with Nessus</span>
                    </div>
                  </li>
                 
                </ul>
              </div>
            </article>
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                {/* <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>12 weeks (2 Days per week)</span>
                </div> */}
              </div>
              <div>
                {/* <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 20,000/-</span>
                </div> */}
              </div>
              <div>
              <div className="flex gap-3  py-1">
                  <p className="font-semibold ">Course Type :</p>
                  <span>
                    Professional certified course <br className="block md:hidden"/> that  everyone can avail.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 hidden lg:block">
            <Image alt="Advance Python And Ethical Hacking" src={Banner} />
          </div>
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

   
      <div className="bg-[#EBE7F8]  flex justify-center items-center mt-10">
        <div className='my-10'>
          <EnrollComponent data={['BECOME','a_Python','Specialist']} />
         
        </div>
        </div>
        <div className="px-20 my-10 container mx-auto ">
        {/* <Outline data={images}/> */}
        <img src='./python/AdvancedCourseOutline.svg' alt="outline" className=" shadow-md mx-auto"/>
        </div>
        <div className=" my-10 ">
        <PaymentModal/>
    
        </div>
      
    </Fragment>
  );
};

export default page;

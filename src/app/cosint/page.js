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
import MentorSlides from "../Component/Common/slider/Slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "../Component/Common/Payment";


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
      <div className="bg-[#EBE7F8] lg:h-[40vh] group">
        <div className="container mx-auto ">
          <article className="flex pt-20 justify-center items-center">
            <div className="w-[80%]">
              <CyberSecurityH1 title={'Certified in Open Source Intelligence (C|OSINT)'} />

              <p className="text-1xl leading-5 pt-8">
              Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image
                alt="Python"
                src={intelligence}
                className="h-60 w-60 group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </article>
        </div>
      </div>
      {/* Course Module */}
      <div className="flex px-20 pt-10">
        <div className="grid  grid-cols-8 w-full">
          <div className=" col-span-2 flex justify-start">
 
            <Image alt="Advance Python And Ethical Hacking" src={Banner} />
          </div>

          <div className=" col-span-4">
            {/*KEY FEATURES  */}
            <div className="relative">
              <h3 className="text-[20px] font-semibold mt-5">KEY FEATURES</h3>
              <p className="lg:w-44 bg-[#ffd321] h-[3px] "></p>
            </div>

            {/* <article className="grid grid-cols-5 gap-4 mt-5 "> */}
            <article className="grid grid-cols-5 gap-4 mt-5 ">
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
              <div className="flex justify-between">
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
                      <span> Online privacy / anonymity</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Counterintelligence techniques used by the criminal elements</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> On line database systems</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Archiving methodologies and tools and methods for obtaining archived pages & hidden information</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Advance search methods for blogs and social networks</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Geolocation methods</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Image recognition technology</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Best ways to use SS capabilities</span>
                    </div>
                  </li>
                </ul>
                {/* <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Input-Output</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Exception Handling</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Packages</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> File Handling,OOPS</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Introduction to Django Introduction <br/> to Back-End Web Development using Django</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Advanced Django for Web and Automation</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Building Web APIs using Django REST</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Deploying Web APIs</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Scrapping with BeautifulSoup</span>
                    </div>
                  </li>
                </ul> */}
              </div>
            </article>
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>18 weeks (2 Days per week)</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 20,000/-</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold"> Course Type :</p>
                  <span>
                    Professional certified course that everyone can avail.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex justify-end">
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
      <div className="bg-[#EBE7F8]  flex justify-center items-center mt-10">
        <div className='my-10'>
          <EnrollComponent data={['Become','a_complete_web','expert']} />
         
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

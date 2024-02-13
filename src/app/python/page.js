import Image from "next/image";
import React, { Fragment } from "react";
import Python from "@/app/Courses/python.svg";
import Django from "@/app/Courses/django.svg";
import Banner from "@/app/Courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import web from "@/app/Courses/web.svg";
import doller from "@/app/Courses/doller.svg";
import intelligence from "@/app/Courses/intelligence.svg";
import Review from "@/app/Courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/Slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "../Component/Common/Payment";

export const metadata = {
  title: 'Advanced Python Programming Training - Arena Web Security',
  description: 'Learn advanced Python programming with industry experts. Our immersive courses help you master advanced Python concepts and techniques. Enroll now !',
};   
const page = () => {
    const images=[
        {
          original:"./python/python1.png",
          thumbnail:"./python/python1.png",
        },
        {
          original:"./python/python2.png",
          thumbnail:"./python/python2.png",
        },
        {
          original:"./python/python3.png",
          thumbnail:"./python/python3.png",
        },
        {
          original:"./python/python4.png",
          thumbnail:"./python/python4.png",
        },
        {
          original:"./python/python5.png",
          thumbnail:"./python/python5.png",
        },
     
    ]

  return (
    <Fragment>
 <div className="bg-[#EBE7F8] lg:h-[45vh] group">
        <div className="container mx-auto ">
          <article className="flex py-10 justify-center items-center">
            <div className="md:w-[80%] w-full px-6 md:px-0">
              <CyberSecurityH1 title={'Advanced Python With Freelancing'} />

              <p className="text-1xl leading-5 pt-8">
              Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.
              </p>
            </div>

            <div className="md:flex justify-center items-center hidden">
              <Image
                alt="Python"
                src={Python}
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
                  src={Python}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center"> Core Python</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Django}
                  alt="Advance Python and Django"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Django and REST Framework
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={web}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Web Scraping</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={doller}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Freelancing
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={intelligence}
                  alt="Advance Python"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                Intelligence
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
                      <span> Conditional Statements</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Looping</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Control Statements</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Lists,Tuple</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Dictionaries</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  Functions</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Lambda Operator, Filter, Reduce and Map</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>  List Comprehension</span>
                    </div>
                  </li>
                </ul>
                <ul className="mt-5">
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
                </ul>
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

          <div className="col-span-2 hidden lg:block">
            <div>
            <Image alt="Advance Python And Ethical Hacking" src={Banner} />
            </div>
           
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

   
      <div className="bg-[#EBE7F8]  flex justify-center items-center mt-10 px-6 md:px-0">
        <div className='my-10'>
          <EnrollComponent data={['BECOME','a_Python','Specialist']} />
         
        </div>
        </div>
        <div className="lg:px-20 md:px-5 px-6 my-10  ">
        <Outline data={images}/>
        </div>
        <div className="my-10 ">
        <PaymentModal/>
    
        </div>
      
    </Fragment>
  );
};

export default page;

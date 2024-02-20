import Image from "next/image";
import React, { Fragment } from "react";
import Combo from "@/app/Courses/combo.svg";
import Search from "@/app/Courses/search.svg";
import Safety from "@/app/Courses/safety.svg";
import Linux from "@/app/Courses/linux.svg";
import network from "@/app/Courses/networking.svg";
import intelligence from "@/app/Courses/intelligence.svg";
import Banner from "@/app/Courses/banner.jpg";
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
  title: 'Linux Essentials & Master the Basics!',
  description: 'Unlock the power of Linux with our comprehensive essentials course. Master key basics and elevate your skills today!',
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
              <CyberSecurityH1 title={'Linux'} />

              <p className="text-1xl leading-5 pt-8">
              The industry-leading Penetration Testing with Kali Linux KLIN-ACS course just got even better. This online ethical hacking course is self-paced. It introduces penetration testing tools and techniques via hands-on experience. Students who complete the course and pass the exam earn the coveted Arena Web Certified Professional AWCP certification.
              </p>
            </div>

            <div className="md:flex justify-center items-center hidden">
              <Image
                alt="Linux"
                src={Linux}
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
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Access to recently retired OSCP exam machines - new!</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Introduction into the latest hacking tools and techniques</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Training from the experts behind Kali Linux</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Learn the Try Harder method and mindset</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Earn the industry-leading OSCP certification</span>
                    </div>
                  </li>
               
                </ul>

              </div>
            </article>
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Who is the course for ?</h2>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Infosec professionals transitioning into penetration testing</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Pentesters seeking an industry-leading certification</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Other technology professionals</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Network administrators</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <span>
                  Security professionals
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Course Requirements</h2>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>All students are required to have:</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Solid understanding of TCP/IP networking</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Reasonable Windows and Linux administration experience</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center ">
                  <span>Familiarity with basic Bash and/or Python scripting</span>
                </div>
              </div>
        
            </div>
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>28 Hours Course</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 79,000/-</span>
                </div>
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
          <EnrollComponent data={['Become','AN_Linux','SPECIALIST']} />
         
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

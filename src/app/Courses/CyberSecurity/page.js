import Image from "next/image";
import React, { Fragment } from "react";
import Cyber from "@/app/Courses/cyber.svg";
import Banner from "@/app/Courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import Linux from "@/app/Courses/linux.svg";
import network from "@/app/Courses/networking.svg";
import doller from "@/app/Courses/doller.svg";
import intelligence from "@/app/Courses/intelligence.svg";
import Review from "@/app/Courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import MentorSlides from "./slider/slider";

const page = () => {
  return (
    <Fragment>
      <div className="bg-[#EBE7F8] lg:h-[40vh] group">
        <div className="container mx-auto ">
          <article className="flex pt-20 justify-center items-center">
            <div className="w-[80%]">
              <CyberSecurityH1 />

              <p className="text-1xl leading-5 pt-8">
                Whether you’re interested in landing your first IT security job,
                becoming a full-time white hat hacker, or preparing to test the
                security of your own home network, Arena Web Security offers
                approachable, hands-on ethical hacking courses to help you keep
                your networks safe from cyber criminals & make your career at
                professional marketplace.{" "}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image
                alt="Cyber Security"
                src={Cyber}
                className="h-60 w-60 group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </article>
        </div>
      </div>
      {/* Course Module */}
      <div className="flex px-20 pt-10">
        <div className="grid  grid-cols-8 w-full">
          <div className=" col-span-2">
            <Image
              alt="Cyber Security And Ethical Hacking"
              src={Banner}
              className=""
            />
          </div>

          <div className=" col-span-4">
            {/*KEY FEATURES  */}
            <div className="relative">
              <h3 className="text-[20px] font-semibold mt-5">KEY FEATURES</h3>
              <p className="lg:w-44 bg-[#ffd321] h-[3px] "></p>
            </div>

            <article className="grid grid-cols-5 gap-4 mt-5 ">
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Cyber}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Cyber Security</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={network}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                  Digital Forensic
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={doller}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Freelancing</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={intelligence}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                  Open Source Intelligence
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Linux}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Linux</p>
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
                      <span> Footprinting</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> PHP & MySQL Basic:</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Penetration Testing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> System Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> keylogger Spyware</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Malware Threats [Virus]</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Development</span>
                    </div>
                  </li>
                </ul>
                <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Social Engineering</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Denial-of-Service</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>SQL Injection All method</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Evading IDS, Firewalls</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Scanning Networks web server</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Linux OS</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Cross-Site Request Forgery</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Outsourcing in Fiverr/Upwork</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Outsourcing in Hackerone</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-span-2 flex justify-end">
            <Image alt="Cyber Security And Ethical Hacking" src={Banner} />
          </div>
        </div>
      </div>
      {/* Teacher Slider */}
      <div className="bg-[#F3F6FA] mt-10 relative">
        {/* <h1>TEAM Learn from the best techers</h1> */}
        <div>
          <Image src={Review} alt="teachers" className='absolute -top-14 w-40 left-1/2 transform -translate-x-1/2'/>
        </div>
        <h2 className="title lg:text-4xl font-bold drop-shadow-lg py-2 text-center pt-20">
    <span className="title-word title-word-1"> TEAM Learn </span>
    <span className="title-word title-word-2"> from the </span>
    {/* <span className="title-word title-word-3">my</span> */}
    <span className="title-word title-word-4">techers</span>
  </h2> <div className="pb-10">
        <MentorSlides />
        </div>
      </div>
    </Fragment>
  );
};

export default page;

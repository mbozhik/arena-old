"use client";
import React from "react";
import Banner from "@/app/all-courses/banner.webp";
import Image from "next/image";
import { FaCheck, FaHandPointRight } from "react-icons/fa";
import Fahim from "@/app/all-courses/TeacherSliderImages/Fahim.svg";
import Sakib from "@/app/all-courses/TeacherSliderImages/sakib.jpg";
import Mubin from "@/app/all-courses/TeacherSliderImages/mubin.jpg";
import Ashif from "@/app/all-courses/TeacherSliderImages/ashif.jpg";
import Bijoy from "@/app/all-courses/TeacherSliderImages/bijoy.jpg";
import Roman from "@/app/all-courses/TeacherSliderImages/roman.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";
import { PaymentModal } from "../../../Common/Payment";
import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
import Outline from "./Outline";
import { Slide } from "react-awesome-reveal";
const Python = () => {
  const Tanjim = BannerImage();
  const features = [
    "Core Python",
    " Django and REST Framework.",
    "Web Scraping.",
    "Freelancing",
  ];

  const info = [
    {
      id: 1,
      type: "Date & Time",
      description: "Duration: 18 weeks (2 Days per week)",
    },
    {
      id: 2,
      type: "Course Fee",
      description: "BDT 20,000/-",
    },
    {
      id: 3,
      type: "Course Type",
      description: "Professional certified course that everyone can avail.",
    },
  ];
  const trainers = [
    {
      name: "Tanjim Al Fahim",
      designation: "CEO of Arena Web Security",
      expertise:
        "Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.",
      image: Fahim,
    },
    {
      name: "Md Ashif Islam",
      designation: "Senior Trainer",
      expertise:
        "Cyber Security, VAPT, Bug Bounty, Networking.",
      image: Ashif, // Make sure you import or define `Ashif`
    },
    {
      name: "Bijoy Mondal",
      designation: "Trainer",
      expertise:
        "Cyber Security, Freelancing, Ethical Hacking, Linux.",
      image: Bijoy,
    },
    {
      name: "Syed Sakib Alam Mubin",
      designation: "Trainer",
      expertise:
        "Cyber Security, Ethical Hacking, Linux RedHat.",
      image: Mubin, // Confirm this is the correct image for "Syed Sakib Alam Mubin"
    },
    {
      name: "Sakib Ahmed",
      designation: "Trainer",
      expertise:
        "Cyber Security, Ethical Hacking, Linux.",
      image: Sakib, // Define or import `SakibAhmed`
    },
    {
      name: "Roman Moonshi",
      designation: "Auditor",
      expertise:
        "Cyber Security, Ethical Hacking, Linux.",
      image: Roman, // Define or import `Roman`
    },
  ];

  return (
    <div>
      <div className="md:text-center mt-14 px-3 md:px-0">
        <div className="lg:xl:text-[24px] lg:text-[22px] text-[20px] md:text-[20px]   font-semibold leading-9 text-[#424242]">
          Advanced Python With Freelancing
        </div>
      </div>

      {/* Course Module */}
      <div className="flex px-3">
        <div className="grid  grid-cols-12 gap-x-2 w-full  lg:mt-16 mt-8">
          <div className=" lg:col-span-8 col-span-12 lg:px-3">
            

            {/*KEY FEATURES  */}
            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-6">
                Overview
              </h3>
              <p className="text-[#424242] font-[300] lg:text-[16px]  text-sm leading-[19px] text-justify mt-5">
                Python is a high-level, interpreted, interactive and
                object-oriented scripting language. Python is designed to be
                highly readable. It uses English keywords frequently where as
                other languages use punctuation, and it has fewer syntactical
                constructions than other languages.
              </p>
            </div>
            {/* Moudele Start */}
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  

                  Advance Python with Django and Scrapping (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <Slide direction="down" cascade triggerOnce>
                <div className="grid  grid-cols-1 md:grid-cols-2 justify-between gap-x-5">
                  <ul className="mt-3 lg:text-[16px] text-sm leading-5 font-[300] text-[#424242] ">
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Introduction</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Conditional Statements</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Looping</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Control Statements</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Tuple</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Lists</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Dictionaries</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Functions</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Lambda Operator, Filter, Reduce and Map</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> List Comprehension</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Modules</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="mt-3 lg:text-[16px] text-sm leading-5 font-[300] text-[#424242] ">
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Input-Output</span> 
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Exception Handling</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Packages</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>File Handling</span>
                      </div>
                    </li>

                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>OOPS</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2  items-start  py-1">
                        {/* <FaHandPointRight className="text-[#715296]  text-xl" /> */}
                        <FaHandPointRight className="text-[#715296] text-xl min-w-[16px] mt-1" />

                        <span>
                          

                          introduction to Django Introduction to Back-End Web
                          Development <br />
                          using Django
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Advanced Django for Web and Automation</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Building Web APIs using Django REST</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Deploying Web APIs</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Scrapping with BeautifulSoup</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Slide>
            </article>
            <div>
              <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                Key Features
              </h3>
              <div className="bg-white shadow rounded-md p-4 mb-6">
                <ul className="space-y-2 lg:text-[16px] text-sm leading-5 font-[300] text-[#424242] ">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center ">
                      <FaCheck className="text-[#715296]  mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className="lg:text-[16px] text-sm">
                      <th className="border px-4 py-2 text-left font-medium">
                        #
                      </th>
                      <th className="border px-4 py-2 text-left font-medium">
                        Information Type
                      </th>
                      <th className="border px-4 py-2 text-left font-medium">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white lg:text-[16px] text-sm leading-6 font-[300] text-[#424242] "
                      >
                        <td className="border px-4 py-2 font-semibold">
                          {item.id}
                        </td>
                        <td className="border px-4 py-2">{item.type}</td>
                        <td className="border px-4 py-2">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12 lg:block mt-4 lg:mt-0">
            

            <Swiper spaceBetween={20} slidesPerView={1} loop={true}></Swiper>
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={2}
              autoplay={true}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  //   width: 300,
                  slidesPerView: 1,
                },
                520: {
                  //   width: 300,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                950: {
                  //   width: 768,
                  slidesPerView: 1,
                },
              }}
              pagination={{ clickable: true }}
              // className={`${style.slider_container} mySwipe py-5 mb-5 `}
            >
              {trainers.map((trainer, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-md p-4  shadow-md relative overflow-hidden svg-background">
                    <div className="relative  flex flex-col items-center text-center space-y-3">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        className="rounded-full object-cover border border-gray-200"
                        width={120}
                        height={120}
                      />
                      <h6 className="text-lg font-normal text-[#0b6481]">
                        {trainer.name}
                      </h6>
                      <p className="text-sm font-[300] leading-[17px]">
                        {trainer.designation}
                      </p>
                      <div className=" rounded p-3 mt-2  px-5 bg-white">
                        <p className="text-sm font-[300] leading-[17px]">
                          Areas of expertise : {trainer.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
         <Image
  alt="Cyber Security And Ethical Hacking"
  src={Banner}
  className="w-full lg:w-auto"
/>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">
        

        <p className="xl:text-[24px] lg:text-[22px] text-[20px] leading-9 font-semibold mt-5">
          Become a Python Specialist
        </p>
        <div className="my-5">
          <Link href="/admission" className="animated-button1  gap-x-2 ">
            <p className="flex gap-x-1 items-center ">
              

              <MdPersonAddAlt1 className="text-2xl" />
              ENROLL NOW
            </p>
          </Link>
        </div>
      </div>
      <div className=" my-10 ">
        <Outline />
      </div>
      <div className=" my-10 ">
        {/* <PaymentModal /> */}
      </div>
    </div>
  );
};

export default Python;

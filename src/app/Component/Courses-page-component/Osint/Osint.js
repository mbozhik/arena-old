"use client";
import React from "react";
import Banner from "@/app/all-courses/banner.webp";
import Image from "next/image";
import { FaCheck, FaHandPointRight } from "react-icons/fa";
import Fahim from "@/app/all-courses/TeacherSliderImages/Fahim.svg";
import Sakib from "@/app/all-courses/TeacherSliderImages/SA_MUBIN.jpg";
import Noman from "@/app/all-courses/TeacherSliderImages/roman.jpg";
import ashif from "@/app/all-courses/TeacherSliderImages/ashif.jpeg";
import Bijoy from "@/app/all-courses/TeacherSliderImages/bijoy.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";
import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
// import  AdvancedCourseOutline  from "../../../../../public/statitic/AdvancedCourseOutline.svg"
const Osint = () => {
  const features = [
    "Hands-on training using latest tools & techniques.",
    "Specialization & creating portfolio in the area of interest.",
    "Industry-relevant curriculum.",
  ];

  const info = [
    {
      id: 1,
      type: "Date & Time",
      description: "Duration: 12 weeks (2 Days per week)",
    },
    {
      id: 2,
      type: "Course Fee",
      description: "BDT 18,000/-",
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
      name: "Syed Sakib Alam Mubin",
      designation: "Trainer",
      expertise: "Cyber Security",
      image: Sakib,
    },
    // {
    //   name: 'Anika Tabassum Nira',
    //   designation: 'Faculty Member',
    //   expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
    //   image: anika,
    // },
    // {
    //   name: 'Sarwar Alam',
    //   designation: 'Faculty Member',
    //   expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
    //   image: Ifty,
    // },

    // {
    //   name: 'Salman Hafizur Rahman',
    //   designation: 'Faculty Member',
    //   expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
    //   image: Salman,
    // },
    {
      name: "Bijoy Mondal",
      designation: "Admin Support",
      expertise: "Cyber Security, Freelancing, Ethical Hacking, Linux.",
      image: Bijoy,
    },
  ];

  return (
    <div>
      <div className="md:text-center mt-14 px-3 md:px-0">
        <div className="lg:xl:text-[24px] lg:text-[22px] text-[20px] md:text-[20px]   font-semibold leading-9 text-[#424242]">
          Certified in Open Source Intelligence (C|OSINT)
        </div>
      </div>
      {/* Course Module */}
      <div className="flex px-3 shadow-md mb-10 pb-5">
        <div className="grid  grid-cols-12 gap-x-2 w-full  lg:mt-16 mt-8">
          <div className=" lg:col-span-8 col-span-12 lg:px-3">
            

            {/*KEY FEATURES  */}
            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-6">
                Overview
              </h3>
              <p className="text-[#424242] font-[300] lg:lg:text-[16px] text-sm leading-[19px] text-justify mt-5">
                Open Source Intelligence Training™ - Syllabus and Featured
                Topics This course will provide an education and information you
                will not be able to acquire anywhere else. The class is
                completely interactive keeping you busy every moment and
                enjoying the activities. Learn to direct your searches to obtain
                results quickly!
              </p>
            </div>
            {/* Moudele Start */}
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  

                  Certified in Open Source Intelligence (C|OSINT) (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <div className="grid grid-cols-1 justify-between gap-x-5">
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Online privacy / anonymity</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>
                        

                        Counterintelligence techniques used by the criminal
                        elements
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>
                        

                        Archiving methodologies and tools and methods for
                        obtaining archived pages & hidden information
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>
                        

                        Advance search methods for blogs and social networks
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Geolocation methods</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Image recognition technology</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Best ways to use SS capabilities</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <div>
              <h3 className="text-[22px] font-medium leading-[33px] mt-5 text-[#424242] ">
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
    </div>
  );
};

export default Osint;

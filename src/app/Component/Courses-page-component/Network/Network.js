"use client";
import React from "react";
import Banner from "@/app/all-courses/banner.svg";

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
import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
// import  AdvancedCourseOutline  from "../../../../../public/statitic/AdvancedCourseOutline.svg"
const Network = () => {
  const features = [
    "Network Management",
    "Firewall",
    "Search Engine Privacy",
    "Network Safety",
  ];

  const info = [
    {
      id: 1,
      type: "Date & Time",
      description: "Duration: 24 hours",
    },
    {
      id: 2,
      type: "Course Fee",
      description: "BDT 86,000/-",
    },
    {
      id: 3,
      type: "Course Type",
      description:
        "Professional Corporate Certified Course. (Only for corporate deal)",
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
          Networking Security
        </div>
      </div>
      {/* Course Module */}
      <div className="flex px-3 shadow-md mb-10 pb-5">
        <div className="grid  grid-cols-12 gap-x-2 w-full  lg:mt-16 mt-8">
          <div className="lg:col-span-8 col-span-12 lg:px-3">
            

            {/*KEY FEATURES  */}
            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-6">
                Overview
              </h3>
              <p className="text-[#424242] font-[300] lg:lg:text-[16px] text-sm text-sm leading-[19px] text-justify mt-5">
                In this course, you will be able to discover security
                vulnerabilities across an entire network, by using network
                hacking techniques and vulnerability scanning. You will be able
                to design & construct your network for maximum security and
                prevent local and remote attacks. Browser security - We cover
                one of the largest risks online, the browser. The doorway into
                your system. How to best reduce the attack surface of the
                browser and harden it for maximum security and privacy. A
                critical consideration for reducing your risk.
              </p>
            </div>
            {/* Moudele Start */}
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  

                  Networking Security (Module)
                </h3>
                <hr className="mt-2" />
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Introduction
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Configure and architect a small network for maximum physical
                  and wireless security.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Understand how we are tracked online by corporations,
                  nation-states your ISP and others.
                </p>

                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Understand how we are tracked online by corporations,
                  nation-states your ISP and others.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  The very latest up-to-date information and methods.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Able to configure firewalls on all platforms including
                  Windows, MacOS, and Linux for all types of attack scenarios.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Perform network monitoring to discover and identify potential
                  hackers and malware using tools like Wireshark, Tcpdump, and
                  Syslog.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  Will look at search engine privacy - understand how to
                  mitigate the tracking and privacy issues of search engines and
                  their associated services.
                </p>
                <p className="mt-2  lg:text-[16px] text-sm leading-5 font-[300] text-[#424242]">
                  What are the best password managers to use and why. How
                  passwords are cracked, and how to mitigate the password
                  attacks.
                </p>
              </div>
            </article>
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
              className="w-full "
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;

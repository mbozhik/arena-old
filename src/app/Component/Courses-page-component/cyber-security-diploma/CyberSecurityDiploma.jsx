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

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BannerComponent from "../../Utility/ImageAd";
const CyberSecurityDiploma = () => {
  const features = [
    "Trained by Top Cybersecurity Experts",
    "Practical Lab Environment & Live Projects",
    "Roadmap for Freelancing & International Jobs",
    "Certificate with Career Support & Job Guidance",
    "Structured for Beginners to Advanced Learners",
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
      description: "BDT 14,000/-",
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
      expertise: "Cyber Security, VAPT, Bug Bounty, Networking.",
      image: Ashif, // Make sure you import or define `Ashif`
    },
    {
      name: "Bijoy Mondal",
      designation: "Trainer",
      expertise: "Cyber Security, Freelancing, Ethical Hacking, Linux.",
      image: Bijoy,
    },
    {
      name: "Syed Sakib Alam Mubin",
      designation: "Trainer",
      expertise: "Cyber Security, Ethical Hacking, Linux RedHat.",
      image: Mubin, // Confirm this is the correct image for "Syed Sakib Alam Mubin"
    },
    {
      name: "Sakib Ahmed",
      designation: "Trainer",
      expertise: "Cyber Security, Ethical Hacking, Linux.",
      image: Sakib, // Define or import `SakibAhmed`
    },
    {
      name: "Roman Moonshi",
      designation: "Auditor",
      expertise: "Cyber Security, Ethical Hacking, Linux.",
      image: Roman, // Define or import `Roman`
    },
  ];

  return (
    <div>
      <div className="md:text-center mt-14 px-3 md:px-0">
        {/* <Slide direction="down" triggerOnce> */}
        <div className="lg:text-[24px] md:text-[20px]  text-[16px] font-semibold leading-9 text-[#424242]">
          {/* Apply Fade and Damping Simultaneously */}
          <Fade
            fraction={1}
            direction="up"
            delay={500} // Optional delay before fade starts
            cascade={true} // Apply cascading fade effect
            damping={0.1} // Smooth transition with damping
          >
            Professional Diploma in Cyber Security (1 Year)
          </Fade>
        </div>
        {/* </Slide> */}
      </div>

      {/* Course Module */}
      <div className="flex px-3">
        <div className="grid  grid-cols-12 gap-x-2 w-full  lg:mt-16 mt-8">
          <div className=" lg:col-span-8 col-span-12 lg:px-3">
            {/*KEY FEATURES  */}
            <Slide direction="down" cascade triggerOnce>
              <div className="relative animate-fadeInDown">
                <h3 className="  text-[#424242] lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-6">
                  Build a Global Cybersecurity Career — From Fundamentals to
                  Freelancing
                </h3>
                <p className="text-[#424242] font-[300] lg:text-[16px] text-sm leading-[19px] text-justify mt-5">
                  Step into the frontline of digital defense with Bangladesh is
                  most trusted 1-year Professional Diploma in Cyber Security,
                  powered by Arena Web Security. This career-focused program is
                  meticulously designed to equip you with hands-on skills in
                  ethical hacking, digital forensics, OSINT, Linux server
                  security, and more — so you are not just learning, you are
                  preparing to lead.
                </p>
              </div>
            </Slide>

            {/* Moudele Start */}
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  Cyber Security & Ethical Hacking (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <Slide direction="down" damping={1} cascade triggerOnce>
                <div className="grid  grid-cols-1 md:grid-cols-2 justify-between gap-x-5">
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
                        <span> Footprinting</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> PHP & MySQL Basic:</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Website Penetration Testing</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Website Hacking</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> System Hacking</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> keylogger Spyware</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Malware Threats [Virus]</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Website Development</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Social Engineering</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Denial-of-Service</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>SQL Injection All method</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Evading IDS, Firewalls</span>
                      </div>
                    </li>

                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Scanning Networks web server</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Linux OS</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Cross-Site Request Forgery</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span> Outsourcing in Fiverr/Upwork</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center py-1">
                        <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                        <span>Outsourcing in Hackerone</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Slide>
            </article>
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  Advance Python with Django and Scrapping (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-x-5">
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
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
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
            </article>
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                  Advance Python with Django and Scrapping (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-x-5">
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
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
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
            </article>
            <article className="p-1">
              <div className="relative">
                <Fade
                  fraction={1}
                  direction="up" // Text will fade up
                  delay={500} // Optional delay before fade starts
                  cascade={true} // Apply cascading fade effect
                  damping={0.1} // Smooth transition with damping
                >
                  <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                    What You will Master:
                  </h3>
                </Fade>

                <hr className="mt-2" />
              </div>
              <div className="">
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Cyber Security & Network Defense</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Linux Administration & Server Hardening</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Open Source Intelligence (OSINT)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Digital Forensics & Threat Response</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Real-World Freelancing Strategies</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Career Grooming & Global Job Readiness</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <div>
              <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">
                Why This Diploma?
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

              <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242]">
                Why This Diploma?
              </h3>

              <div className="bg-white shadow rounded-md p-4 mb-6">
                <ul className="space-y-1 lg:text-[16px] text-sm leading-6 font-[300] text-[#424242]">
                  <li className="flex items-start">
                    <FaCheck className="text-[#715296] mr-2 " />
                    <div className="flex flex-col">
                      <span>
                        <span className="">Ideal for:</span> HSC
                        Pass, University Students, IT Professionals,
                        Freelancers, and Career Switchers
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#715296] mr-2 " />
                    <div className="flex flex-wrap gap-x-4">
                      <span>
                        <span className="">Duration:</span> 1 Year
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#715296] mr-2 " />
                    <div className="flex flex-wrap gap-x-4">
                      <span>
                        <span className="">Mode:</span> Hybrid
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#715296] mr-2 " />
                    <div className="flex flex-wrap gap-x-4">
                      <span>
                        <span className="">Language:</span> Bangla
                        & English Supported
                      </span>
                    </div>
                  </li>
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
            <Zoom cascade triggerOnce>
              <Swiper spaceBetween={20} slidesPerView={1} loop={true}></Swiper>
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={2}
                autoplay={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  520: {
                    slidesPerView: 1,
                  },

                  950: {
                    slidesPerView: 1,
                  },
                }}
                pagination={{ clickable: true }}
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
            </Zoom>

            <Image
              alt="Cyber Security And Ethical Hacking"
              src={Banner}
              className="w-full "
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">
        <p className="lg:text-[24px] md:text-[20px] text-[20px] leading-9 font-semibold mt-5">
          Be a Freelancer on Cyber Security
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
      <div className="lg:px-3 md:px-5 px-3 pt-10">
        <div className="lg:flex gap-5">
          <article className="lg:w-[50%] w-full">
            <details className="details " open>
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি পরিচিতি
              </summary>
              <p className="text-justify mt-2">
                <b className="!my-4">সাইবার সিকিউরিটি কি ?</b>
                <br />
                সাইবার সিকিউরিটি হল এমন একটি প্রযুক্তি ও প্রক্রিয়ার সমন্বয়, যা
                আমাদের ডিজিটাল ডিভাইস, ওয়েবসাইট, সার্ভার, নেটওয়ার্ক বা
                অ্যাপ্লিকেশনকে হ্যাকিং, ম্যালওয়্যার, ফিশিং বা অন্য যেকোনো সাইবার
                আক্রমণ থেকে সুরক্ষা দেয়। বর্তমানে বিশ্বের প্রায় সকল গুরুত্বপূর্ণ
                প্রতিষ্ঠানই তাদের কাজ অনলাইনের মাধ্যমে সম্পন্ন করে। ফলে সাইবার
                সিকিউরিটি এখন সব চেয়ে গুরুত্বপূর্ণ বিষয়। শুধুমাত্র নিরাপত্তার
                সুবিধাই নয় - এটি এখন একটি গ্লোবাল ক্যারিয়ার ট্র্যাক, যার চাহিদা
                দিন দিন দ্রুত বাড়বেই। দক্ষ সাইবার নিরাপত্তা বিশেষজ্ঞরা ব্যক্তি,
                প্রতিষ্ঠান এবং দেশের নিরাপত্তায় ভূমিকা রাখতে পারে - যা একাধারে
                সম্মানজনক, মূল্যবান এবং উচ্চ আয়ের একটি সুযোগ।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কিভাবে শিখবেন সাইবার সিকিউরিটি ?
              </summary>
              <p className="text-justify mt-2">
                <b className="!my-4">কিভাবে শিখবেন সাইবার সিকিউরিটি ?</b>
                <br />
                বর্তমানে দেশের বিশ্ববিদ্যালয়ে এই বিষয়ে পূর্ণাঙ্গ কোনো বিভাগ না
                থাকলেও, আপনি দেশের সর্ব প্রথম সাইবার নিরাপত্তা বিষয়ক প্রতিষ্ঠান
                এরিনা ওয়েব সিকিউরিটিতে কোর্স করে দক্ষতা অর্জন করতে পারেন। সাইবার
                সিকিউরিটি এমন একটি স্কিল যা শুধুমাত্র জ্ঞান ও অনুশীলনের মাধ্যমে
                আয়ত্ত করা যায় – ডিগ্রি থাকা বাধ্যতামূলক নয়। বিশেষ করে বাংলায়
                সাজানো কোর্স ও প্র্যাকটিক্যাল ল্যাব পেতে আপনি আমাদের অনলাইন
                কোর্সে অংশ নিতে পারেন।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি জানা কেন জরুরি?
              </summary>
              <p className="text-justify mt-2">
                <b className="!my-4">. সাইবার সিকিউরিটি জানা কেন জরুরি ?</b>
                <br />
                প্রতিদিন লাখ লাখ মানুষ সাইবার প্রতারণার শিকার হচ্ছেন। ব্যাংকিং,
                ইমেইল, সোশ্যাল মিডিয়া – সবকিছু এখন অনলাইনে, ফলে নিজেদের ও
                পরিবারের নিরাপত্তার জন্য সাইবার জ্ঞান সবারই থাকা প্রয়োজন।
                এছাড়াও, সাইবার সিকিউরিটি বর্তমানে একটি হাই-ডিমান্ড ক্যারিয়ার।
                বিভিন্ন সরকারি ও বেসরকারি প্রতিষ্ঠানে, এমনকি আন্তর্জাতিক
                মার্কেটেও এই স্কিলের চাহিদা দ্রুত বাড়ছে।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কেন Arena Web Security-র কোর্স করবেন ?
              </summary>
              <div>
                <ul className="text-justify mt-2 list-disc pl-5">
                  <b className="!my-4">
                    কেন Arena Web Security-র কোর্স করবেন ?
                  </b>
                  <br />
                  <li>
                    সম্পূর্ণ ল্যাবভিত্তিক, অনলাইন কোর্স – আপনি যেকোনো স্থান থেকে
                    অংশ নিতে পারবেন।
                  </li>
                  <li>
                    দেশের শীর্ষ সাইবার সিকিউরিটি এক্সপার্টদের দ্বারা কোর্স
                    পরিচালিত।
                  </li>
                  <li>
                    যাদের প্রোগ্রামিং ব্যাকগ্রাউন্ড নেই, তাদের জন্য ফ্রি বেসিক
                    কোর্স সংযুক্ত।
                  </li>
                  <li>
                    কোর্স শেষে ইন্টার্নশিপ এবং মার্কেটপ্লেস ভিত্তিক রিয়েল
                    প্রজেক্টে কাজের সুযোগ।
                  </li>
                  <li>
                    আন্তর্জাতিক মানের সার্টিফিকেশন এবং অনলাইনে ভেরিফিকেশন সুবিধা
                    প্রদান।
                  </li>
                </ul>
              </div>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কোর্স শেষে কেমন ক্যারিয়ার হতে পারে ?
              </summary>
              <p className="text-justify mt-2">
                <b className="!my-4"> কোর্স শেষে কেমন ক্যারিয়ার হতে পারে ?</b>
                <br />
                <div className="mt-4">
                  <p className="font-semibold mb-2">
                    কোর্স শেষে কেমন ক্যারিয়ার হতে পারে?
                  </p>
                  <div className="mb-1">✅ Career Opportunities:</div>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Cyber Security Specialist</li>
                    <li>Ethical Hacker</li>
                    <li>IT Analyst / Security Engineer</li>
                    <li>Digital Forensics Expert</li>
                    <li>Freelance Cybersecurity Consultant</li>
                  </ul>

                  <div className="mb-1">✅ Course Benefits:</div>
                  <ul className="list-disc pl-5">
                    <li>কোর্স শেষে ১ মাসের ইন্টার্নশিপ প্রজেক্টে অংশগ্রহণ।</li>
                    <li>
                      মার্কেটপ্লেসে রিয়েল ক্লায়েন্টদের সাথে কাজের অভিজ্ঞতা।
                    </li>
                    <li>
                      আন্তর্জাতিক প্রতিষ্ঠানগুলোতে সার্টিফিকেট ব্যবহারযোগ্য।
                    </li>
                  </ul>
                </div>
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কোর্স ফি কত এবং কিভাবে পরিশোধ করবেন?
              </summary>
              <div className="text-justify mt-2">
                <b className="!my-4">Course Fee:</b> ১৪,০০০ টাকা
                <br />
                <b className="!my-4">Payment Method:</b>
                <ul className="list-disc pl-5 mt-2">
                  <li>1st Installment: ৭,০০০ টাকা (ভর্তি সময়)</li>
                  <li>
                    2nd Installment: ৭,০০০ টাকা (ক্লাস শুরুর ১৫–২১ দিনের মধ্যে)
                  </li>
                </ul>
              </div>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কোর্সে ভর্তি হওয়ার নিয়ম
              </summary>
              <div className="text-justify mt-2">
                <b className="!my-4">
                  ভর্তি প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং স্বয়ংক্রিয়। নিচের
                  ধাপগুলো অনুসরণ করুন:
                </b>
                <ul className="list-disc pl-5 mt-2">
                  <li>Enroll Now বাটনে ক্লিক করে এডমিশন ফর্ম পূরণ করুন।</li>
                  <li>
                    ফর্ম সাবমিট করার পর, আপনার ইমেইলে একটি Student ID ও Password
                    পাঠিয়ে দেওয়া হবে স্বয়ংক্রিয়ভাবে।
                  </li>
                  <li>
                    এরপর আপনি Student Panel-এ লগইন করে আপনার পছন্দের পেমেন্ট
                    অপশন সিলেক্ট করে ভর্তি নিশ্চিত করতে পারবেন।
                  </li>
                  <li>
                    পেমেন্ট সফল হলে, আপনাকে পরবর্তী সহায়তার জন্য আমাদের এডমিশন
                    অফিসার দ্রুততম সময়েই আপনার সাথে যোগাযোগ করে নিবে।
                  </li>
                </ul>
              </div>
            </details>
          </article>
          {/* <article className="lg:w-[50%] w-full h-full mt-3 md:mt-0">
            <Image
              alt="Tanjim Al Fahim"
              src={Tanjim}
              height={1000}
              width={1000}
              className=""
            />
          </article> */}
          <BannerComponent />
        </div>
      </div>
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">
        <p className="lg:text-[24px] md:text-[20px] text-[20px] leading-9 font-semibold mt-5">
          Be a Freelancer on Cyber Security
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
      <div className=" my-10 ">{/* <Outline /> */}</div>
      <div className=" my-10 ">{/* <PaymentModal /> */}</div>
    </div>
  );
};

export default CyberSecurityDiploma;

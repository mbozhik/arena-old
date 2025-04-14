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
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";
// import { PaymentModal } from "../../../Common/Payment";
import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
// import Outline from "./Outline";
import { PaymentModal } from "../../Common/Payment";
import { Slide } from "react-awesome-reveal";
const Combo= () => {
  const Tanjim= BannerImage()
  const features = [
    "Core Python",
    " Django and REST Framework.",
    "Web Scraping.",
    "Freelancing",
  ];
  const features1 = [
    "Cyber Security",
    "Linux",
    "Digital Forensic",
    "Open Source Intelligence",
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
      description: "BDT 30,000/-",
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
      <div className="text-[24px] font-semibold leading-9 mt-14 text-[#424242] text-center ">
      Cyber Security and Advance Python (Combo)
      </div>
      {/* Course Module */}
      <div className="flex px-3">
        <div className="grid  grid-cols-12 gap-x-2 w-full  mt-16">
          <div className=" lg:col-span-8 col-span-8 lg:px-3">
            {/*KEY FEATURES  */}

            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] text-[22px] font-medium leading-6">
                Overview
              </h3>
              <p className="text-[#424242] font-[300] text-[16px] leading-[19px] text-justify mt-5">
              Cybersecurity needs a programming language and today Python is very popular because of its flexibility and lightweight features. This course can help to build skills across the cyberattack world for both cyber attackers and defenders. Near future Python is and will be the most demanding programming and scripting language for cybersecurity. So, by completing this course you can land your first IT job or you can start your career in freelancing. This course could open the door become a complete web expert. Arena Web Security offers approachable, hands-on ethical hacking and python programming courses to help you keep your networks safe from cyber criminals & make your career at the professional marketplace in the field of both ethical hacking and python programming.
              </p>
            </div>

            {/* Moudele Start */}
             <article className="p-1">
                          <div className="relative">
                            <h3 className="text-[22px] font-medium leading-[33px] mt-5 text-[#424242] ">
                              Cyber Security & Ethical Hacking (Module)
                            </h3>
                            <hr className="mt-2" />
                          </div>
                          <Slide direction="down"damping={1} cascade triggerOnce>
                          <div className="grid grid-cols-2 justify-between gap-x-5">
                            <ul className="mt-3 text-[[16px] leading-5 font-[300] text-[#424242] ">
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
                <h3 className="text-[22px] font-medium leading-[33px] mt-5 text-[#424242] ">
                Advance Python with Django and Scrapping (Module)
                </h3>
                <hr className="mt-2" />
              </div>
              <div className="grid grid-cols-2 justify-between gap-x-5">
                <ul className="mt-3 text-[[16px] leading-5 font-[300] text-[#424242] ">
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
                      <span>  Looping</span>
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
                      <span>  Dictionaries</span>
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
                      <span>  List Comprehension</span>
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
                      <span>  Exception Handling</span>
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

                      <span> introduction to Django Introduction to Back-End Web Development <br/>using Django</span>
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
            <div>
                <h3 className="text-[22px] font-medium leading-[33px] mt-5 text-[#424242] ">
                                Key Features  (Cyber Security)
                              </h3>
                              <div className="bg-white shadow rounded-md p-4 mb-6">
                                <ul className="space-y-2 text-[16px] leading-5 font-[300] text-[#424242] ">
                                  {features1.map((item, index) => (
                                    <li key={index} className="flex items-center ">
                                      <FaCheck className="text-[#715296]  mr-2" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
              <h3 className="text-[22px] font-medium leading-[33px] mt-5 text-[#424242] ">
                Key Features (Advance Python)
              </h3>
              <div className="bg-white shadow rounded-md p-4 mb-6">
                <ul className="space-y-2 text-[16px] leading-5 font-[300] text-[#424242] ">
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
                    <tr className="text-[16px]">
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
                        className="bg-white text-[16px] leading-6 font-[300] text-[#424242] "
                      >
                        <td className="border px-4 py-2 font-semibold">
                          {item.id}
                        </td>
                        <td className="border px-4 py-2">{item.type}</td>
                        <td className="border px-4 py-2">{item.description==='BDT 30,000/-' && <del>{item.description}</del>}<br/>
                            {item.description}</td>
                        {/* <td className="border px-4 py-2"></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-span-4 hidden lg:block">
            <Swiper
              // modules={[Pagination]}
              // pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
            ></Swiper>
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={2}
              //    slidesPerView={1}
              //    navigation
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
                    {/* <div
                className=" "
                // style={{
                //   backgroundImage: "url('/file/liquid-cheese.svg')",
                // }}
              /> */}
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
                          Areas of expertise :{" "}
                          {trainer.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Image alt="Cyber Security And Ethical Hacking " src={Banner} />
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">         <p className="text-[24px] leading-9 font-semibold mt-5">
      Become a Python Specialist
        </p>
        <div className='my-5'>
          <Link href="/admission" className="animated-button1  gap-x-2 ">
          <p className="flex gap-x-1 items-center ">   <MdPersonAddAlt1  className="text-2xl"/>ENROLL NOW</p>
          </Link>
        </div>
        </div>
        <div className=" my-10 ">
        {/* <Outline/> */}
        </div>
        <div className=" my-10 ">
        <PaymentModal/>
        </div>
    </div>
  );
};

export default Combo;

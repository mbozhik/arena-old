"use client";
import React from "react";
import Banner from "@/app/all-courses/banner.webp";
import Image from "next/image";
import { FaCheck,  FaHandPointRight } from "react-icons/fa";
import Fahim from '@/app/all-courses/TeacherSliderImages/Fahim.svg'
import Sakib from '@/app/all-courses/TeacherSliderImages/SA_MUBIN.jpg'
import Noman from '@/app/all-courses/TeacherSliderImages/roman.jpg'
import ashif from '@/app/all-courses/TeacherSliderImages/ashif.jpeg'
import Bijoy from '@/app/all-courses/TeacherSliderImages/bijoy.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// import image6 from '@/app/all-courses/TeacherSliderImages/zawad.png'
const CyberSecurity = () => {
  const features = [
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
      name: 'Tanjim Al Fahim',
      designation: 'CEO of Arena Web Security',
      expertise:
        'Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.',
      image: Fahim,
    },
    {
      name: 'Syed Sakib Alam Mubin',
      designation: 'Faculty Member',
      expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
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
    {
      name: 'Roman Moonshi',
      designation: 'Faculty Member',
      expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
      image: Noman,
    },
    // {
    //   name: 'Salman Hafizur Rahman',
    //   designation: 'Faculty Member',
    //   expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
    //   image: Salman,
    // },
    {
      name: 'Bijoy Mondal',
      designation: 'Faculty Member',
      expertise: 'Cyber Security, Freelancing, Ethical Hacking, Linux.',
      image: Bijoy,
    },
    {
      name: 'Md Ashif Islam',
      designation: 'Faculty Member',
      expertise: 'Cyber Security.',
      image: ashif,
    },
  ];
  return (
    <div>
      <div className="text-[24px] font-semibold leading-9 mt-14 text-[#424242] text-center ">
        Cyber Security & Ethical Hacking
      </div>
      {/* Course Module */}
      <div className="flex px-10">
        <div className="grid  grid-cols-12 gap-x-2 w-full  mt-16">
          {/* <div className=" col-span-2 hidden lg:block">
            <Image
              alt="Cyber Security And Ethical Hacking"
              src={Banner}
              className=""
            />
          </div> */}

          <div className=" lg:col-span-9 col-span-8 lg:px-3">
            {/*KEY FEATURES  */}

            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] text-[22px] font-medium leading-6">
                Overview
              </h3>
              <p className="text-[#424242] font-[300] text-[16px] leading-6 text-justify mt-5">
                Embark on a journey into the realm of cybersecurity with Arena
                Web Security. Whether you're aiming for your first role in IT
                security, envisioning a full-time career as a white hat hacker,
                or preparing to strengthen the defenses of your home network,
                our courses are customized to align with your aspirations.
                Through an accessible and hands-on approach to ethical hacking,
                we empower you to protect your networks efficiently. Elevate
                your skills with us and pave the way to a successful career in
                the professional marketplace. Your path to cybersecurity
                excellence starts right here.
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
              <div className="md:flex justify-between">
                <ul className="mt-3 text-[[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Footprinting</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> PHP & MySQL Basic:</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Website Penetration Testing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Website Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> System Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> keylogger Spyware</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Malware Threats [Virus]</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Website Development</span>
                    </div>
                  </li>
                </ul>
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Social Engineering</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Denial-of-Service</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span>SQL Injection All method</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span>Evading IDS, Firewalls</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span>Scanning Networks web server</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Linux OS</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span>Cross-Site Request Forgery</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span> Outsourcing in Fiverr/Upwork</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center py-1">
                      <FaHandPointRight className="text-[#715296]  text-1xl" />
                      <span>Outsourcing in Hackerone</span>
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
                        <td className="border px-4 py-2">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-span-3 hidden lg:block">
          <Swiper
        // modules={[Pagination]}
        // pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
       
      </Swiper>
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
            <div className="rounded-md p-4 bg-white shadow-md relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat opacity-10 z-0"
                style={{
                  backgroundImage: `url('/file/liquid-cheese.svg')`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  className="rounded-full object-cover border border-gray-200"
                  width={120}
                  height={120}
                />
                <h6 className="text-lg font-semibold">{trainer.name}</h6>
                <p className="text-sm font-medium text-gray-500">{trainer.designation}</p>
                <div className="bg-white rounded p-3 mt-2 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>Areas of expertise:</strong> {trainer.expertise}
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
    </div>
  );
};

export default CyberSecurity;

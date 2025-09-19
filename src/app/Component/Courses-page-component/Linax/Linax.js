'use client'
import React from 'react'
import Banner from '@/app/all-courses/banner.svg'

import Image from 'next/image'
import {FaCheck, FaHandPointRight} from 'react-icons/fa'
import Fahim from '@/app/all-courses/TeacherSliderImages/fahim.webp'

import Sakib from '@/app/all-courses/TeacherSliderImages/sakib.jpg'
import Mubin from '@/app/all-courses/TeacherSliderImages/mubin.jpg'
import Ashif from '@/app/all-courses/TeacherSliderImages/ashif.webp'
import Bijoy from '@/app/all-courses/TeacherSliderImages/bijoy.jpg'
import Roman from '@/app/all-courses/TeacherSliderImages/roman.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules'
// import Link from "next/link";
// import { MdPersonAddAlt1 } from "react-icons/md";
// import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
// // import  AdvancedCourseOutline  from "../../../../../public/statitic/AdvancedCourseOutline.svg"
const Linax = () => {
  const features = ['Hands-on training using latest tools & techniques.', 'Specialization & creating portfolio in the area of interest.', 'Industry-relevant curriculum.']

  const info = [
    {
      id: 1,
      type: 'Date & Time',
      description: '28 Hours Course',
    },
    {
      id: 2,
      type: 'Course Fee',
      description: 'BDT 79,000/-',
    },
    {
      id: 3,
      type: 'Course Type',
      description: 'Professional Corporate Certified Course. (Only for corporate deal)',
    },
  ]
  const trainers = [
    {
      name: 'Tanjim Al Fahim',
      designation: 'CEO of Arena Web Security',
      expertise: 'Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.',
      image: Fahim,
      years: '14+',
    },
    {
      name: 'Md Ashif Islam',
      designation: 'Senior Faculty',
      expertise: 'Cyber Security, VAPT, Bug Bounty, Networking.',
      image: Ashif, // Make sure you import or define `Ashif`
      years: '8+',
    },
    {
      name: 'Bijoy Mondal',
      designation: 'Faculty member',
      expertise: 'Cyber Security, Freelancing, Ethical Hacking, Linux.',
      image: Bijoy,
      years: '8+',
    },
    {
      name: 'Syed Sakib Alam Mubin',
      designation: 'Faculty member',
      expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
      image: Mubin, // Confirm this is the correct image for "Syed Sakib Alam Mubin"
      years: '5+',
    },
    {
      name: 'Sakib Ahmed',
      designation: 'Faculty member',
      expertise: 'Cyber Security, Ethical Hacking, Linux.',
      image: Sakib, // Define or import `SakibAhmed`
      years: '3+',
    },
    {
      name: 'Roman Moonshi',
      designation: 'Lead Auditor',
      expertise: 'Cyber Security, Ethical Hacking, Linux.',
      image: Roman, // Define or import `Roman`years: "14+",
      years: '5+',
    },
  ]

  return (
    <div>
      <div className="px-3 md:text-center mt-14 md:px-0">
        <div className="lg:xl:text-[24px] lg:text-[22px] text-[20px] md:text-[20px]   font-semibold leading-9 text-[#424242]">Linax</div>
      </div>

      {/* Course Module */}
      <div className="flex px-3 pb-5 mb-10 shadow-md">
        <div className="grid w-full grid-cols-12 mt-8 gap-x-2 lg:mt-16">
          <div className="col-span-12  lg:col-span-8 lg:px-3">
            {/*KEY FEATURES  */}
            <div className="relative animate-fadeInDown">
              <h3 className="  text-[#424242] lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-6">Overview</h3>
              <p className="text-[#424242] font-[300] lg:text-[16px] text-sm leading-[19px] text-justify mt-5">The industry-leading Penetration Testing with Kali Linux (KLIN-ACS) course just got even better. This online ethical hacking course is self-paced. It introduces penetration testing tools and techniques via hands-on experience. Students who complete the course and pass the exam earn the coveted Arena Web Certified Professional (AWCP) certification.</p>
            </div>
            {/* Moudele Start */}
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">Kali Linux-Penetration Testing (Module)</h3>
                <hr className="mt-2" />
              </div>
              <div className="grid justify-between grid-cols-1 gap-x-5">
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Access to recently retired OSCP exam machines - new!</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Introduction into the latest hacking tools and techniques</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Training from the experts behind Kali Linux</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Learn the Try Harder method and mindset</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">Who is the course for?</h3>
                {/* <hr className="mt-2" /> */}
              </div>
              <div className="grid justify-between grid-cols-1 gap-x-5">
                <ul className="mt-3 text-[16px] leading-5 font-[300] text-[#424242] ">
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Infosec professionals transitioning into penetration testing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span>Pentesters seeking an industry-leading certification</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Security professionals</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Network administrators</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 py-1">
                      <FaHandPointRight className="text-[#715296]  min-w-[16px] " />
                      <span> Other technology professionals</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">About The Exam</h3>
                <p className="mt-2  text-[16px] leading-5 font-[300] text-[#424242]">The KLIN-ACS course and online lab prepares you for the AWCP certification 24-hour exam Proctored.</p>
              </div>
            </article>
            <article className="p-1">
              <div className="relative">
                <h3 className="lg:text-[22px] md:text-[20px] text-[18px] font-medium leading-[33px] mt-5 text-[#424242] ">Course Requirements</h3>
                <p className="mt-2  text-[16px] leading-5 font-[300] text-[#424242]">All students are required to have</p>
                <p className="mt-2  text-[16px] leading-5 font-[300] text-[#424242]">Solid understanding of TCP/IP networking</p>
                <p className="mt-2  text-[16px] leading-5 font-[300] text-[#424242]">Reasonable Windows and Linux administration experience</p>
                <p className="mt-2  text-[16px] leading-5 font-[300] text-[#424242]">Familiarity with basic Bash and/or Python scripting</p>
              </div>
            </article>
            <div>
              <div className="mt-20 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className="text-[16px]">
                      <th className="px-4 py-2 font-medium text-left border">#</th>
                      <th className="px-4 py-2 font-medium text-left border">Information Type</th>
                      <th className="px-4 py-2 font-medium text-left border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((item) => (
                      <tr key={item.id} className="bg-white text-[16px] leading-6 font-[300] text-[#424242] ">
                        <td className="px-4 py-2 font-semibold border">{item.id}</td>
                        <td className="px-4 py-2 border">{item.type}</td>
                        <td className="px-4 py-2 border">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4 lg:col-span-4 lg:block lg:mt-0">
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
              pagination={{clickable: true}}
              // className={`${style.slider_container} mySwipe py-5 mb-5 `}
            >
              {trainers.map((trainer, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative p-4 overflow-hidden rounded-md shadow-md svg-background">
                    <div className="relative flex flex-col items-center space-y-3 text-center">
                      <Image src={trainer.image} alt={trainer.name} className="object-cover border border-gray-200 rounded-full" width={120} height={120} />
                      <h6 className="text-lg font-normal text-[#0b6481]">{trainer.name}</h6>
                      <p className="text-sm font-[300] leading-[17px]">{trainer.designation}</p>
                      <div className="p-3 px-5 mt-2 bg-white rounded ">
                        <p className="text-sm font-[300] leading-[17px]">Areas of expertise : {trainer.expertise}</p>
                        <br></br>
                        <p className="text-sm font-[300] leading-[17px]">Years in Cyber Security : {trainer.years}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Image alt="Cyber Security And Ethical Hacking" src={Banner} className="w-full " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Linax

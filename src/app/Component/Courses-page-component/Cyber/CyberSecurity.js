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
import "react-image-gallery/styles/css/image-gallery.css";

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
import Outline from "../../Common/Outline";
import { PaymentModal } from "../../Common/Payment";
import BannerImage from "@/app/AllDataFatchingFunction/BannerImage";
// import image6 from '@/app/all-courses/TeacherSliderImages/zawad.png'
const CyberSecurity = () => {
  const Tanjim= BannerImage()
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
      name: "Tanjim Al Fahim",
      designation: "CEO of Arena Web Security",
      expertise:
        "Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.",
      image: Fahim,
    },
    {
      name: "Syed Sakib Alam Mubin",
      designation: "Faculty Member",
      expertise: "Cyber Security, Ethical Hacking, Linux RedHat.",
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
      name: "Roman Moonshi",
      designation: "Faculty Member",
      expertise: "Cyber Security, Ethical Hacking, Linux RedHat.",
      image: Noman,
    },
    // {
    //   name: 'Salman Hafizur Rahman',
    //   designation: 'Faculty Member',
    //   expertise: 'Cyber Security, Ethical Hacking, Linux RedHat.',
    //   image: Salman,
    // },
    {
      name: "Bijoy Mondal",
      designation: "Faculty Member",
      expertise: "Cyber Security, Freelancing, Ethical Hacking, Linux.",
      image: Bijoy,
    },
    {
      name: "Md Ashif Islam",
      designation: "Faculty Member",
      expertise: "Cyber Security.",
      image: ashif,
    },
  ];
  const images=[
    {
      original:"./cyber-security-course-outline/cyber-security1.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security1.svg",
    },
    {
      original:"./cyber-security-course-outline/cyber-security2.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security2.svg",
    },
    {
      original:"./cyber-security-course-outline/cyber-security3.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security3.svg",
    },
    {
      original:"./cyber-security-course-outline/cyber-security4.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security4.svg",
    },
    {
      original:"./cyber-security-course-outline/cyber-security5.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security5.svg",
    },
    {
      original:"./cyber-security-course-outline/cyber-security6.svg",
      thumbnail:"./cyber-security-course-outline/cyber-security6.svg",
    },
   
  ]
  return (
    <div>
      <div className="text-[24px] font-semibold leading-9 mt-14 text-[#424242] text-center ">
        Cyber Security & Ethical Hacking
      </div>
      {/* Course Module */}
      <div className="flex px-3">
        <div className="grid  grid-cols-12 gap-x-2 w-full  mt-16">
          {/* <div className=" col-span-2 hidden lg:block">
            <Image
              alt="Cyber Security And Ethical Hacking"
              src={Banner}
              className=""
            />
          </div> */}

          <div className=" lg:col-span-8 col-span-8 lg:px-3">
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
                          <strong>Areas of expertise:</strong>{" "}
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
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">         <p className="text-[24px] leading-9 font-semibold mt-5">Be a Freelancer on Cyber Security</p>
        <div className='my-5'>
          <Link href="/admission" className="animated-button1  gap-x-2 ">
          <p className="flex gap-x-1 items-center ">   <MdPersonAddAlt1  className="text-2xl"/>ENROLL NOW</p>
          </Link>
        </div>
        </div>
      <div className="lg:px-3 md:px-5 px-3 pt-10">
        <div className="md:flex gap-5">
          <article className="md:w-[50%] w-full">
            <details className="details " open>
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি পরিচিতি{" "}
              </summary>
              <p className="text-justify mt-2">
                {" "}
                <b className="!my-4">সাইবার সিকিউরিটি কি ?</b>
                <br />
                ইন্টারনেটে হ্যাকিং বা ম্যালওয়ার অ্যাটাক থেকে নিজে কিংবা নিজের
                সিস্টেম বাচতে যেসব ব্যাবস্থা গ্রহণ করা হয় এবং ওয়েবসাইট,
                নেটওয়ার্ক, এপ্লিকেশন ছাড়াও নিজেদের ব্যাবহৃত ইলেক্ট্রিক ডিভাইস
                গুলোতে সাইবার আক্রমন প্রতিহত করার পদ্ধতি সবই সাইবার সিকিউরিটির
                অন্তর্ভুক্ত। হ্যাকিং শব্দটি যেহেতু এসেই পড়লো এ নিয়ে কিছু কথা হয়ে
                যাক , যারা হ্যাকিং করে তাদের বলা হয় হ্যাকার । অনেকেরই ধারনা
                হ্যাকাররা মেধাবী বা কম্পিউটার পরিচালনায় দক্ষ কিন্তু তারা অসৎ।
                কিন্তু আমাদের সচরাচর এই ধারণাটা সম্পূর্ণ ভূল। কারণ সাইবার
                সিকিউরিটি নিয়ে যারা কাজ করে তারাও কিন্তু হ্যাকার, অন্যান্য
                হ্যাকার থেকে তাদের প্রধান পার্থক্যই হচ্ছে সাইবার সিকিউরিটি
                বিশেষজ্ঞরা তাদের মেধা ও কম্পিউটার পরিচালনার দক্ষতা ভাল এবং
                প্রফেশনাল কাজে ব্যয় করে। যার ফলে স্বপ্নীল এই হ্যাকিং জগতে তারা
                ক্যারিয়ার গঠনের পাশাপাশি তাদের জ্ঞানকে সকলের উপকারে ব্যাবহার
                করতে পারে।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                কিভাবে শিখবেন সাইবার সিকিউরিটি ?{" "}
              </summary>
              <p className="text-justify mt-2">
                {" "}
                <b className="!my-4">কিভাবে শিখবেন সাইবার সিকিউরিটি ?</b>
                <br />
                সরাসরি সাইবার সিকিউরিটি বিষয়টি আমাদের দেশের বিশ্ববিদ্যালয়ে না
                থাকায় ,আপনি বেসরকারী কোন প্রতিষ্ঠান থেকে সাইবার সিকিউরিটির কোর্স
                করতে পারেন। আন্তর্জাতিক সংবাদমাধ্যম ফোর্বসের একটি আর্টিকেলে ১৩টি
                উচ্চ বেতনের চাকরির কথা বলা হয়েছে, যেগুলোতে কোনো ধরনের ডিগ্রির
                প্রয়োজন নেই। এর মধ্যে সাইবার সিকিউরিটি অন্যতম। শুধুমাত্র দক্ষতা
                দিয়েই এই পথে ক্যারিয়ার গড়া সম্ভব। আপনি নিজেই এই সম্পর্কে ধারনা
                পেতে গুগল এবং ইউটিউবের সাহায্য নিতে পারেন,ইংরেজি সহ বিভিন্ন
                ভাষায় সেখানে অসংখ্য রিসোর্স পাওয়া যাবে। প্রয়োজন শুধু ধৈর্য্য ও
                অনুশীলন। আপনি বাংলায় সাজানো রিসোর্স পেতে চাইলে সাইবার ৭১ এর
                Learn with Cyber 71{" "}
                <addr className="text-blue-400">
                  <a href="https://www.youtube.com/c/LearnwithCyber71">
                    ( লিঙ্কঃ https://www.youtube.com/c/LearnwithCyber71 )
                  </a>
                </addr>{" "}
                এই ইউটিউব চ্যানেলটি সাবস্ক্রাইব করে রাখতে পারেন। বাংলাতে এখানে
                সাইবার সিকিউরিটি, ইথিক্যাল হ্যাকিং শীর্ষক কয়েকটি ডেমো ক্লাস
                রয়েছে। বিদেশি কিছু প্রতিষ্ঠান পরীক্ষার মাধ্যমে সাইবার সিকিউরিটি
                এক্সপার্ট হিসেবে সনদ প্রদান করে। আপনি CEH, CISM, CISSP, CISA
                সার্টিফিকেশন গুলোকে আপনার পছন্দের তালিকায় রাখতে পারেন। তবে এসব
                প্রতিষ্ঠানের পরীক্ষা দেয়ার আগে আপনাকে অবশ্যই প্রফেশনালই সাইবার
                সিকিউরিটি শিখতে হবে । দেশের প্রথম প্রাতিষ্ঠানিক সাইবার নিরাপত্তা
                প্রশিক্ষণ সেন্টার এরিনা ওয়েব সিকিউরিটি হতে পারে আপনার প্রধান
                পছন্দ। আন্তর্জাতিক মানদণ্ডের সাথে ফ্রিল্যান্সিং সেক্টর যোগ করে
                কোর্সটিকে সাজানো হয়েছে যার ফলে আপনি ইথিক্যাল হ্যাকিং এর উপর
                অনলাইন মার্কেটপ্লেস গুলোতে কাজ করে নিতে পারেন। ক্যারিয়ার
                ডেভেলপমেন্টের জন্য এরিনা ওয়েব সিকিউরিটির কোর্স করাটি হতে পারে
                আপনার জন্য একটি সুন্দর এবং সময়োপযোগী সিদ্ধান্ত।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি পরিচিতি{" "}
              </summary>
              <p className="text-justify mt-2">
                {" "}
                <b className="!my-4">সাইবার সিকিউরিটি কি ?</b>
                <br />
                ইন্টারনেটে হ্যাকিং বা ম্যালওয়ার অ্যাটাক থেকে নিজে কিংবা নিজের
                সিস্টেম বাচতে যেসব ব্যাবস্থা গ্রহণ করা হয় এবং ওয়েবসাইট,
                নেটওয়ার্ক, এপ্লিকেশন ছাড়াও নিজেদের ব্যাবহৃত ইলেক্ট্রিক ডিভাইস
                গুলোতে সাইবার আক্রমন প্রতিহত করার পদ্ধতি সবই সাইবার সিকিউরিটির
                অন্তর্ভুক্ত। হ্যাকিং শব্দটি যেহেতু এসেই পড়লো এ নিয়ে কিছু কথা হয়ে
                যাক , যারা হ্যাকিং করে তাদের বলা হয় হ্যাকার । অনেকেরই ধারনা
                হ্যাকাররা মেধাবী বা কম্পিউটার পরিচালনায় দক্ষ কিন্তু তারা অসৎ।
                কিন্তু আমাদের সচরাচর এই ধারণাটা সম্পূর্ণ ভূল। কারণ সাইবার
                সিকিউরিটি নিয়ে যারা কাজ করে তারাও কিন্তু হ্যাকার, অন্যান্য
                হ্যাকার থেকে তাদের প্রধান পার্থক্যই হচ্ছে সাইবার সিকিউরিটি
                বিশেষজ্ঞরা তাদের মেধা ও কম্পিউটার পরিচালনার দক্ষতা ভাল এবং
                প্রফেশনাল কাজে ব্যয় করে। যার ফলে স্বপ্নীল এই হ্যাকিং জগতে তারা
                ক্যারিয়ার গঠনের পাশাপাশি তাদের জ্ঞানকে সকলের উপকারে ব্যাবহার
                করতে পারে।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি পরিচিতি{" "}
              </summary>
              <p className="text-justify mt-2">
                {" "}
                <b className="!my-4">সাইবার সিকিউরিটি কি ?</b>
                <br />
                ইন্টারনেটে হ্যাকিং বা ম্যালওয়ার অ্যাটাক থেকে নিজে কিংবা নিজের
                সিস্টেম বাচতে যেসব ব্যাবস্থা গ্রহণ করা হয় এবং ওয়েবসাইট,
                নেটওয়ার্ক, এপ্লিকেশন ছাড়াও নিজেদের ব্যাবহৃত ইলেক্ট্রিক ডিভাইস
                গুলোতে সাইবার আক্রমন প্রতিহত করার পদ্ধতি সবই সাইবার সিকিউরিটির
                অন্তর্ভুক্ত। হ্যাকিং শব্দটি যেহেতু এসেই পড়লো এ নিয়ে কিছু কথা হয়ে
                যাক , যারা হ্যাকিং করে তাদের বলা হয় হ্যাকার । অনেকেরই ধারনা
                হ্যাকাররা মেধাবী বা কম্পিউটার পরিচালনায় দক্ষ কিন্তু তারা অসৎ।
                কিন্তু আমাদের সচরাচর এই ধারণাটা সম্পূর্ণ ভূল। কারণ সাইবার
                সিকিউরিটি নিয়ে যারা কাজ করে তারাও কিন্তু হ্যাকার, অন্যান্য
                হ্যাকার থেকে তাদের প্রধান পার্থক্যই হচ্ছে সাইবার সিকিউরিটি
                বিশেষজ্ঞরা তাদের মেধা ও কম্পিউটার পরিচালনার দক্ষতা ভাল এবং
                প্রফেশনাল কাজে ব্যয় করে। যার ফলে স্বপ্নীল এই হ্যাকিং জগতে তারা
                ক্যারিয়ার গঠনের পাশাপাশি তাদের জ্ঞানকে সকলের উপকারে ব্যাবহার
                করতে পারে।
              </p>
            </details>
            <details className="details mt-4">
              <summary className="summary py-5 text-white font-semibold px-7">
                সাইবার সিকিউরিটি পরিচিতি{" "}
              </summary>
              <p className="text-justify mt-2">
                {" "}
                <b className="!my-4">সাইবার সিকিউরিটি কি ?</b>
                <br />
                ইন্টারনেটে হ্যাকিং বা ম্যালওয়ার অ্যাটাক থেকে নিজে কিংবা নিজের
                সিস্টেম বাচতে যেসব ব্যাবস্থা গ্রহণ করা হয় এবং ওয়েবসাইট,
                নেটওয়ার্ক, এপ্লিকেশন ছাড়াও নিজেদের ব্যাবহৃত ইলেক্ট্রিক ডিভাইস
                গুলোতে সাইবার আক্রমন প্রতিহত করার পদ্ধতি সবই সাইবার সিকিউরিটির
                অন্তর্ভুক্ত। হ্যাকিং শব্দটি যেহেতু এসেই পড়লো এ নিয়ে কিছু কথা হয়ে
                যাক , যারা হ্যাকিং করে তাদের বলা হয় হ্যাকার । অনেকেরই ধারনা
                হ্যাকাররা মেধাবী বা কম্পিউটার পরিচালনায় দক্ষ কিন্তু তারা অসৎ।
                কিন্তু আমাদের সচরাচর এই ধারণাটা সম্পূর্ণ ভূল। কারণ সাইবার
                সিকিউরিটি নিয়ে যারা কাজ করে তারাও কিন্তু হ্যাকার, অন্যান্য
                হ্যাকার থেকে তাদের প্রধান পার্থক্যই হচ্ছে সাইবার সিকিউরিটি
                বিশেষজ্ঞরা তাদের মেধা ও কম্পিউটার পরিচালনার দক্ষতা ভাল এবং
                প্রফেশনাল কাজে ব্যয় করে। যার ফলে স্বপ্নীল এই হ্যাকিং জগতে তারা
                ক্যারিয়ার গঠনের পাশাপাশি তাদের জ্ঞানকে সকলের উপকারে ব্যাবহার
                করতে পারে।
              </p>
            </details>
          </article>
          <article className="md:w-[50%] w-full h-full mt-3 md:mt-0">
            <Image alt="Tanjim Al Fahim" src={Tanjim} height={1000} width={1000}  className="" />
          </article>
        </div>
        
      </div>
      <div className="bg-[#F8F9FA] shadow-md flex justify-center flex-col items-center mt-10 px-3 md:px-0">         <p className="text-[24px] leading-9 font-semibold mt-5">
      Be a Freelancer on Cyber Security
        </p>
        <div className='my-5'>
          {/* <EnrollComponent data={['BECOME','An_ETHICAL','HACKER']} /> */}
 
          <Link href="/admission" className="animated-button1  gap-x-2 ">
          <p className="flex gap-x-1 items-center ">   <MdPersonAddAlt1  className="text-2xl"/>ENROLL NOW</p>
       
          </Link>
         
        </div>
        </div>
        <div className=" my-10 ">
        <Outline />
        </div>
        <div className=" my-10 ">
        <PaymentModal/>
        </div>
    </div>
  );
};

export default CyberSecurity;

import Image from "next/image";
import React, { Fragment } from "react";
import Banner from "@/app/Courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import Cyber from "@/app/Courses/cyber.svg";
import Linux from "@/app/Courses/linux.svg";
import network from "@/app/Courses/networking.svg";
import doller from "@/app/Courses/doller.svg";
import intelligence from "@/app/Courses/intelligence.svg";
import Review from "@/app/Courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "./Payment";



const page = () => {
  const images=[
    {
      original:"/cyber-security1.svg",
      thumbnail:"/cyber-security1.svg",
    },
    {
      original:"/cyber-security2.svg",
      thumbnail:"/cyber-security2.svg",
    },
    {
      original:"/cyber-security3.svg",
      thumbnail:"/cyber-security3.svg",
    },
    {
      original:"/cyber-security4.svg",
      thumbnail:"/cyber-security4.svg",
    },
    {
      original:"/cyber-security5.svg",
      thumbnail:"/cyber-security5.svg",
    },
    {
      original:"/cyber-security6.svg",
      thumbnail:"/cyber-security6.svg",
    },
   
  ]
  return (
    <Fragment>
      <div className="bg-[#EBE7F8] lg:h-[40vh] group">
        <div className="container mx-auto ">
          <article className="flex pt-20 justify-center items-center">
            <div className="w-[80%]">
              <CyberSecurityH1 title={'Cyber Security & Ethical Hacking'}/>

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
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>18 weeks (2 Days per week)</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 14,000/-</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold"> Course Type :</p>
                  <span>
                    Professional certified course that everyone can avail.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex justify-end">
            <Image alt="Cyber Security And Ethical Hacking" src={Banner} />
          </div>
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
          <MentorSlides />
        </div>
      </div>

      {/* Inforfation About Cyber Security */}

      <div className="px-20 pt-10">
        <div className="flex gap-5">
          <article className="w-[50%]">
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
          <article className="w-[50%]">
            <Image alt="Tanjim Al Fahim" src={Tanjim} className="" />
          </article>
        </div>
        
      </div>
      <div className="bg-[#EBE7F8]  flex justify-center items-center mt-10">
        <div className='my-10'>
          <EnrollComponent data={['BECOME','An_ETHICAL','HACKER']} />
         
        </div>
        </div>
        <div className="px-20 my-10 ">
        <Outline data={images}/>
        </div>
        <div className=" my-10 ">
        <PaymentModal/>
        </div>
    </Fragment>
  );
};

export default page;

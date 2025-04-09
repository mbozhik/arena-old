"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import cyberSecurity from "./../../../../public/cyber-security-course-outline/cyberSecurity.svg";
import network from "./../../../../public/cyber-security-course-outline/network.svg";
import linux from "./../../../../public/cyber-security-course-outline/linux.svg";
import AdvancedCourse from "./../../../../public/cyber-security-course-outline/networking.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const courses = [
  {
    image: cyberSecurity,
    title: "Cyber Security & Ethical Hacking",
    link: "/cyber-security-ethical-hacking",
    description:
      "Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own home network, Arena Web Security offers approachable, hands-on ethical hacking courses to help you keep your networks safe from cyber criminals & make your career at professional marketplace.",
  },
  {
    image: cyberSecurity,
    title: "Advance Python With Freelancing",
    link: "/advance-python-with-django",
    description:
      "Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.",
  },
  {
    image: AdvancedCourse,
    title: "CEHF Masterclass",
    link: "/advanced-cyber-security-course",
    description:
      "Advanced Cyber Security & Ethical Hacking is a pioneer in endpoint security, with proactive security solutions that stop advanced persistent threats in their initial stages and prevent advancement. Advanced Cyber Security & Ethical Hacking products provide the first.",
  },
  {
    image: network,
    title: "C|OSINT (Certified Open Source Intelligence)",
    link: "/cosint-course",
    description:
      "Open Source Intelligence Training™ - Syllabus and Featured Topics This course will provide an education and information you will not be able to acquire anywhere else. The class is completely interactive keeping you busy every moment and enjoying the activities. Learn to direct your searches to obtain results quickly!",
  },
  {
    image: linux,
    title: "Linux",
    link: "/linux-course",
    description:
      "The industry-leading Penetration Testing with Kali Linux (KLIN-ACS) course just got even better. This online ethical hacking course is self-paced. It introduces penetration testing tools and techniques via hands-on experience. Students who complete the course and pass the exam earn the coveted Arena Web Certified Professional certification.",
  },
  {
    image: network,
    title: "Networking Security",
    link: "/networking-course",
    description:
      "In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and vulnerability scanning. You will be able to design & construct your network for maximum security and prevent local and remote attacks. We cover one of the largest risks online, the browser. The doorway into your system.",
  },
];

const OurCourses = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="container  mx-auto px-4  pt-20">
      <h5 className="text-center text-[26px] font-bold text-[#0b6481]  mb-2">
        Our Courses
      </h5>
      <h6 className="text-center text-gray-600 text-sm mb-8">
        Arena Web Security is the best place to do Cyber Security & Ethical
        Hacking, OSINT, Linux and Freelancing Course. To become a cyber hero it
        is your first step. We design the entire course from basic to advance.
        We focus hardly on our learners.
      </h6>

      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
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
            slidesPerView: 2,
          },
          // when window width is >= 768px
          950: {
            //   width: 768,
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        // className={`${style.slider_container} mySwipe py-5 mb-5 `}
      >
        {courses?.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 ">
              <div className="inline-block text-center font-[Poppins]">
                {/* Outer Skewed Container */}
                <div className="inline-block  overflow-hidden h-[230px] w-[250px] rounded-b-[20px]  ">
                  <div className="inline-block skew-y-[13deg] h-[250px] w-[200px] rounded-[20px]  bg-[#c8c2c2] transition-all duration-300 mt-[30px] overflow-hidden ">
                    <div className="relative  h-[250px] -ml-[30px] -mt-[30px]">
                      <Image
                        src={course.image}
                        alt="Course Image"
                        fill
                        className="-skew-y-[13deg] object-cover hover:skew-y-[-12deg]"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Container */}
                <div className="px-5 pt-20 pb-10 shadow-md hover:shadow-xl rounded-[10px] bg-white mt-[-60px] h-full ">
                  <Link
                    href={course.link}
                    className="text-[#0b6481] text-lg font-normal hover:text-black hover:font-medium pt-10"
                  >
                    {course.title}
                  </Link>
                  <p className="sectionSubTitle text-sm font-light mt-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurCourses;

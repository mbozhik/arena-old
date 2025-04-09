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
    title: "Cyber Security Consultancy",
    link: "/advance-python-with-django",
    description:
      "The threats of cyber-attacks are a fact of life and a fact of business. Wipro’s Cyber security and Risk Service can help you stay ahead of the threats and put your customer’s minds at ease. We take an integrated approach to protection that prioritizes not only prevention, but also minimizing risk and controlling loss.",
  },
  {
    image: AdvancedCourse,
    title: "Software Testing",
    link: "/advanced-cyber-security-course",
    description:
      "Web Application & Website Testing Services, Manual Testing, Test Automation, Mobile Testing, Web Testing, Desktop Testing, Security and Penetration Testing, Game Testing, Documentation, QA and Testing, DevOps. Full-cycle Independent QA and Managed testing Services for web, desktop, mobile apps, server-side systems, and devices.",
  },
  {
    image: network,
    title: "VAPT",
    link: "/cosint-course",
    description:
      "Vulnerability Assessment & Penetration Testing describes a broad range of security assessment services designed to identify & help address cyber security exposures across an organisation’s IT estate. To ensure that you choose the right type of assessment for your company’s needs, it’s important to understand the other types of VAPT services.",
  },
  {
    image: linux,
    title: "Software Maintenance",
    link: "/linux-course",
    description:
      "The Arena Web Security is your one stop solution for complete software and maintenance services. We ami to provided trusted source to maintain and improve your existing application. When you hire web application maintenance services, you will be assigned a cluster of professional with the vast expertise of application maintenance services.",
  },
  {
    image: network,
    title: "Software Development",
    link: "/networking-course",
    description:
      "Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types. We are develops quality software services – software consulting, cloud migration, app integration, and more. We serve mid and large enterprises and software product companies across multiple industries.",
  },
  {
    image: network,
    title: "Networking Security Service (NSS)",
    link: "/networking-course",
    description:
      "Network Security Services (NSS) is a set of libraries designed to support cross-platform development of security-enabled client and server applications. Applications built with NSS can support SSL v3, TLS, PKCS #5, PKCS #7, PKCS #11, PKCS #12, S/MIME, X. 509 v3 certificates, and other security standards.",
  },
  {
    image: network,
    title: "Mobile App Development",
    link: "/networking-course",
    description:
      "We have leading mobile app developers who always stay up-to-date with the latest technology trends to serving firms across the globe. While our analysts make qualitative and quantitative market study and well-researched forecasts for mobile app market fluctuations, our developers and designers craft stunning for our clients.",
  },
  {
    image: network,
    title: "Ecommerce Solution",
    link: "/networking-course",
    description:
      "Our Ecommerce development services cater to multi-disciplinary requirements of performance, security, scalability and usability. Our SEO experts optimize the top selling products of your store with an on-page and off-page Ecommerce SEO strategy that drives loads of organic traffic to your website.",
  },
  {
    image: network,
    title: "SEO",
    link: "/networking-course",
    description:
      "SEO is not magic. Google doesn't randomly decide which website's go to the top of the search results. The algorithm adjusts rankings based on several factors. Our SEO campaigns optimize for each of those factors to show Google your website has what it's looking for.",
  },
  {
    image: network,
    title: "UI/UX & Graphics Design",
    link: "/networking-course",
    description:
      "We design user friendly and intuitive interfaces expected by today’s consumer using the latest UX and UI best practices. Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers. Turn to Arena Web Security’s UI and UX services.",
  },
];

const Services = () => {
 

  return (
    <div className="container  mx-auto  pt-20">
      <h5 className="text-center text-[26px] font-bold text-[#0b6481]  mb-2">
      Our Services
      </h5>
      <h6 className="text-center text-gray-600 text-sm mb-16">
      Get motivation from leaders and see your success from the window!
      </h6>

      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
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
              <div className="inline-block text-center ">
                {/* Outer Skewed Container */}
                <div className="inline-block  overflow-hidden h-[230px] w-[200px] rounded-b-[20px]  ">
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
                <div className="px-5 pt-40 pb-10     shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.3)] rounded-[10px] bg-white mt-[-120px] h-full ">
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

export default Services;

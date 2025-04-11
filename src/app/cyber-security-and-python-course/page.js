// import Image from "next/image";
// import React, { Fragment } from "react";
// import Combo from "@/app/all-courses/combo.svg";
// import Cyber from "@/app/all-courses/cyber.svg";
// import Linux from "@/app/all-courses/linux.svg";
// import network from "@/app/all-courses/networking.svg";
// import doller from "@/app/all-courses/doller.svg";
// import intelligence from "@/app/all-courses/intelligence.svg";
// // import Python from "@/app/all-courses/python.svg";
// import Django from "@/app/all-courses/django.svg";
// import Banner from "@/app/all-courses/banner.jpg";
// import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
// import web from "@/app/all-courses/web.svg";
// import Review from "@/app/all-courses/TeacherSliderImages/review.png";
// import { FaHandPointRight } from "react-icons/fa";
// import Tanjim from "@/app/Images/TanjimVai.png";
// import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Combo from "../Component/Courses-page-component/combo/Combo";
import Python from "../Component/Courses-page-component/Python/python/Python";
// import Outline from "../Component/Common/Outline";
// import { PaymentModal } from "../Component/Common/Payment";

export const metadata = {
  title: 'Ethical Hacking & Advanced Python Course Combo Offer!',
  description: 'Level up your skills in Python and Ethical Hacking! Our expert-led courses empower you to excel in IT security. Enroll now for a brighter future!',
}; 
const page = () => {
  return (
    <div className="container mx-auto  ">
      <div className="">
       <Combo></Combo>
      </div>
    </div>
  );
};

export default page;

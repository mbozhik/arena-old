// import Image from "next/image";
import React, { Fragment } from "react";
// import Python from "@/app/all-courses/python.svg";
// import Django from "@/app/all-courses/django.svg";
// import Banner from "@/app/all-courses/banner.svg";

// import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
// import web from "@/app/all-courses/web.svg";
// import doller from "@/app/all-courses/doller.svg";
// import intelligence from "@/app/all-courses/intelligence.svg";
// import Review from "@/app/all-courses/TeacherSliderImages/review.png";
// import { FaHandPointRight } from "react-icons/fa";
// import Tanjim from "@/app/Images/TanjimVai.png";
// import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
// import Outline from "../Component/Common/Outline";
// import { PaymentModal } from "../Component/Common/Payment";
import Python from "../Component/Courses-page-component/Python/python/Python";
// import CEHF from "../Component/Courses-page-component/cehf/CEHF";
export const metadata = {
  title: 'Advanced Python Programming Training - Arena Web Security',
  description: 'Learn advanced Python programming with industry experts. Our immersive courses help you master advanced Python concepts and techniques. Enroll now !',
};   
const page = () => {
  return (
    <div className="container mx-auto  ">
      <div className="">
      <Python></Python>
      </div>
    </div>

  );
};

export default page;

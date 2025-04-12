import Image from "next/image";
import React, { Fragment } from "react";
import Combo from "@/app/all-courses/combo.svg";
import Search from "@/app/all-courses/search.svg";
import Safety from "@/app/all-courses/safety.svg";
import network from "@/app/all-courses/networking.svg";
import doller from "@/app/all-courses/doller.svg";
import intelligence from "@/app/all-courses/intelligence.svg";
import Python from "@/app/all-courses/python.svg";
import Django from "@/app/all-courses/django.svg";
import Banner from "@/app/all-courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import web from "@/app/all-courses/web.svg";
import Review from "@/app/all-courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Outline from "../Component/Common/Outline";
import { PaymentModal } from "../Component/Common/Payment";
import Network from "../Component/Courses-page-component/Network/Network";

export const metadata = {
  title: 'Network Security Essentials & Safeguarding Your Digital Assets!',
  description: 'Arm yourself with essential skills in our network security course. Learn to protect digital assets effectively!',
}; 
const page = () => {    
  return (
    <div className="container mx-auto  ">
    <div className="">
    <Network/>
    </div>
  </div>
  );
};

export default page;

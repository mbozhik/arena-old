import Image from "next/image";
import React, { Fragment } from "react";
import Banner from "@/app/all-courses/banner.webp";
import CyberSecurityH1 from "@/app/Component/Utility/CyberSecurityH1";
import Cyber from "@/app/all-courses/cyber.svg";
import Linux from "@/app/all-courses/linux.svg";
import network from "@/app/all-courses/networking.svg";
import doller from "@/app/all-courses/doller.svg";
import intelligence from "@/app/all-courses/intelligence.svg";
import Review from "@/app/all-courses/TeacherSliderImages/review.png";
import { FaHandPointRight } from "react-icons/fa";
// import Tanjim from "@/app/Images/TanjimVai.png";
import EnrollComponent from "@/app/Component/Utility/CyberSecurityEnroll";
import MentorSlides from "../Component/Common/slider/slider";
import Outline from "../Component/Common/Outline";
// import { PaymentModal } from "./Payment";
import { PaymentModal } from "../Component/Common/Payment";
import BannerImage from "../AllDataFatchingFunction/BannerImage";
import CyberSecurity from "../Component/Courses-page-component/Cyber/CyberSecurity";
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";

export const metadata = {
  title: "Cyber Security Training Course - Ethical Hacking",
  description:
    "Learn ethical hacking  with industry experts. Our immersive courses help you land dream IT security jobs or become a freelance white hat hacker. Enroll now!",
};

const page = async () => {
  return (
    <Fragment>
      <div className="container mx-auto  ">
        <div className=" ">
          <CyberSecurity></CyberSecurity>
        </div>
      </div>
    </Fragment>
  );
};

export default page;

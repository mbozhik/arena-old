import Image from 'next/image'
import React, {Fragment} from 'react'
import Python from '@/app/all-courses/python.svg'
// import Combo from "@/app/all-courses/combo.svg";
import Malware from '@/app/all-courses/malware (1).svg'
import Malware1 from '@/app/all-courses/malware (2).svg'
import Malware2 from '@/app/all-courses/malware (3).svg'
import Master from '@/app/all-courses/master.svg'
import Django from '@/app/all-courses/django.svg'
import Banner from '@/app/all-courses/banner.svg'

import CyberSecurityH1 from '@/app/Component/Utility/CyberSecurityH1'
import web from '@/app/all-courses/web.svg'
import doller from '@/app/all-courses/doller.svg'
import intelligence from '@/app/all-courses/intelligence.svg'
import Review from '@/app/all-courses/TeacherSliderImages/review.png'
import {FaHandPointRight} from 'react-icons/fa'
import Tanjim from '@/app/Images/TanjimVai.png'
import EnrollComponent from '@/app/Component/Utility/CyberSecurityEnroll'
import MentorSlides from '../Component/Common/slider/slider'
import Outline from '../Component/Common/Outline'
import {PaymentModal} from '../Component/Common/Payment'
import Combo from '../Component/Courses-page-component/combo/Combo'
import CEHF from '../Component/Courses-page-component/cehf/CEHF'

export const metadata = {
  title: 'Dive into Digital Sleuthing & Earn Your C|OSINT Certification',
  description: 'Uncover hidden insights and enhance your investigative prowess with our C|OSINT certification course. Dive into the world of digital sleuthing today!',
}
const page = () => {
  return (
    <div className="container mx-auto ">
      <div className="">
        <CEHF />
      </div>
    </div>
  )
}

export default page

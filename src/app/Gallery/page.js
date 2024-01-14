'use client'

import img from "@/app/Images/Gallery/aws1.webp"
import img1 from "@/app/Images/Gallery/aws2.webp"
import img2 from "@/app/Images/Gallery/aws3.webp"
import img3 from "@/app/Images/Gallery/aws4.webp"
import img4 from "@/app/Images/Gallery/aws5.webp"
import img5 from "@/app/Images/Gallery/aws6.webp"
import img6 from "@/app/Images/Gallery/aws7.webp"
import img7 from "@/app/Images/Gallery/aws8.webp"
import img8 from "@/app/Images/Gallery/aws9.webp"
import img9 from "@/app/Images/Gallery/aws10.webp"
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image"
import { useState } from "react"
import Gallery from "../Component/Gallery"

const page = () => {
    const data=[img,img1,img2,img3,img4,img5,img6,img7,img8,img9]
    const [model,setModel]=useState(false);
    const [tem,setTem]=useState('');
    const getImgProps=(img)=>{
        setTem(img)
        setModel(true)
        topFunction()
    }
    function topFunction() {
        document.documentElement.scrollTop = 0;
      }

    return (
       <div>
        <Gallery/>
       </div>
    );
};

export default page;
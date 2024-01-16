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

const Gallery = () => {
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
        <div className="px-20 lg:mt-16 ">
            {/* <h1>Gallery</h1> */}
            <div className={model?'modalOpen relative ':'modal'}>
            <Image src={tem} alt="Cyber-hero" className="w-2/3 h-2/3"/>
            <IoIosCloseCircleOutline onClick={()=>setModel(prev=>!prev)}  className="absolute top-10 right-10 text-white text-5xl font-bold cursor-pointer"/>

            </div>
           
            <div className={` ${!model?'block gallery':'hidden'}`}>
                {
                    data.map((img,index)=>{
                      return(
                        <div className="pics" key={index}n onClick={()=>getImgProps(img)}><Image src={img} alt="Cyber-hero"/></div>
                      )
                    })
                }

            </div>

            
        </div>
    );
};

export default Gallery;
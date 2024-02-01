// 'use client'
// import img from "@/app/Images/Gallery/aws1.webp"
// import img1 from "@/app/Images/Gallery/aws2.webp"
// import img2 from "@/app/Images/Gallery/aws3.webp"
// import img3 from "@/app/Images/Gallery/aws4.webp"
// import img4 from "@/app/Images/Gallery/aws5.webp"
// import img5 from "@/app/Images/Gallery/aws6.webp"
// import img6 from "@/app/Images/Gallery/aws7.webp"
// import img7 from "@/app/Images/Gallery/aws8.webp"
// import img8 from "@/app/Images/Gallery/aws9.webp"
// import img9 from "@/app/Images/Gallery/aws10.webp"
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import Image from "next/image"
// import { useState } from "react"

// const Gallery = () => {
//     const data=[img,img1,img2,img3,img4,img5,img6,img7,img8,img9]
//     const [model,setModel]=useState(false);
//     const [tem,setTem]=useState('');
//     const getImgProps=(img)=>{
//         setTem(img)
//         setModel(true)
//         topFunction()
//     }
//     function topFunction() {
//         document.documentElement.scrollTop = 0;
//       }
//     return (
//         <div className="px-20 lg:mt-16 ">
//             <div className={model?'modalOpen relative ':'modal'}>
//             <Image src={tem} alt="Cyber-hero" className="w-2/3 h-2/3"/>
//             <IoIosCloseCircleOutline onClick={()=>setModel(prev=>!prev)}  className="absolute top-10 right-10 text-white text-5xl font-bold cursor-pointer"/>

//             </div>
           
//             <div className={` ${!model?'block gallery':'hidden'}`}>
//                 {
//                     data.map((img,index)=>{
//                       return(
//                         <div className="pics" key={index}n onClick={()=>getImgProps(img)}><Image src={img} alt="Cyber-hero"/></div>
//                       )
//                     })
//                 }

//             </div>

            
//         </div>
//     );
// };

// export default Gallery;
'use client'
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import '../../app/Component/TicketAssets/Module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Gallery = () => {
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    },[])
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
        './Gallery/aws1.webp',
        './Gallery/aws2.webp',
        './Gallery/aws3.webp',
        './Gallery/aws4.webp',
        './Gallery/aws5.webp',
        './Gallery/aws5.webp',
        './Gallery/aws6.webp',
        './Gallery/aws7.webp',
        './Gallery/aws8.webp',
        './Gallery/aws9.webp',
        './Gallery/aws10.webp',
      
      ];
    const newLocal = <div className='modules'>
        <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2 cursor-pointer'>
            <img className='LightImgPreview' src='./Gallery/aws1.webp' alt="module_img_1" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws2.webp' alt="module_img_2" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws3.webp' alt="module_img_3" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws4.webp' alt="module_img_4" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws5.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws6.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws7.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws8.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws9.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./Gallery/aws10.webp' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
    </div>;
    return (
        <div className='module-container bg-circle px-20'>
            <div className='container-cstm'>
            <img src='./Shapes/down2.png' alt="" className='down-arrow cursor-pointer'/>
            <h1 className='text-center lg:text-3xl lg:font-bold font-semibold text-2xl'>Gallery</h1>
            {newLocal}

            {open && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % images.length
                        )
                    }
                />
            )}
            <div className='module-btn'><Link href="/admission" className='flex justify-center'><button type="" className="btn btn-animate">Interested? <br /> Join The Course</button></Link></div>
            </div>
        </div>
    );
};

export default Gallery;

'use client'
import React, { useEffect, useState } from 'react';
import '../../app/Component/TicketAssets/Module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; 

const Gallery = () => {
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    },[])
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [

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
        './Gallery/aws1.webp',
      
      ];
    const newLocal = <div className='modules'>
        
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
        <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2 cursor-pointer'>
            <img className='LightImgPreview' src='./Gallery/aws1.webp' alt="module_img_1" onClick={() => setOpen(true)} />
        </div>
    </div>;
    return (
        <div className='container bg-circle md:px-5 px-6 pb-10 pt-5'>
            <div className='container-cstm'>
            {/* <img src='./Shapes/down2.png' alt="" className='down-arrow cursor-pointer'/> */}
            <div className="shadow-sm bg-gradient-to-r from-[#56b5e3] to-[#7d58a5] rounded-sm py-3 mb-5 mt-5">
          <h4 className="text-[28px] font-medium text-white text-center my-4 font-poppins">
          Gallery
          </h4>
        </div>
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
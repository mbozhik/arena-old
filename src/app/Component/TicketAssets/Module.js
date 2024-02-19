'use client'
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import './Module.css'
import Link from 'next/link';

const Module = () => {
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
        'https://arenawebsecurity.net/static/media/cyber-security1.svg',
        'https://arenawebsecurity.net/static/media/cyber-security2.svg',
        'https://arenawebsecurity.net/static/media/cyber-security3.svg',
        'https://arenawebsecurity.net/static/media/cyber-security4.svg',
        'https://arenawebsecurity.net/static/media/cyber-security5.svg',
        'https://arenawebsecurity.net/static/media/cyber-security6.svg'
      ];
    const newLocal = <div className='modules'>
        <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security1.svg' alt="module_img_1" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security2.svg' alt="module_img_2" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security3.svg' alt="module_img_3" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security4.svg' alt="module_img_4" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security5.svg' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
        <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className='w-1/3 p-2'>
            <img className='LightImgPreview' src='./cyber-security-course-outline/cyber-security2.svg' alt="module_img_5" onClick={() => setOpen(true)} />
        </div>
    </div>;
    return (
        <div className='module-container bg-circle'>
            <div className='container-cstm'>
            <img src='./Shapes/down2.png' alt="" className='down-arrow cursor-pointer'/>
            <h1 className='text-center lg:text-3xl lg:font-bold font-semibold text-2xl'>Modules List</h1>
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

export default Module;
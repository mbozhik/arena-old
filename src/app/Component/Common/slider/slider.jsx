'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './MentorSlides.module.css'

import image from '@/app/Courses/TeacherSliderImages/Fahim.svg'
import image2 from '@/app/Courses/TeacherSliderImages/SA_MUBIN.jpg'
import image3 from '@/app/Courses/TeacherSliderImages/jewele.svg'
import image4 from '@/app/Courses/TeacherSliderImages/ashif.jpeg'
import image5 from '@/app/Courses/TeacherSliderImages/bijoy.jpeg'
import image6 from '@/app/Courses/TeacherSliderImages/zawad.png'
import star from '@/app/Courses/TeacherSliderImages/star.png'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import Image from 'next/image';
const MentorSlides = () => {
    return (
        <div className={`${style.custom_slider_container} container !mx-auto `}>
            <Swiper
               
               modules={[Navigation, Scrollbar, A11y,Autoplay]}
               spaceBetween={50}
            //    slidesPerView={1}
            //    navigation
               autoplay={true}

                 
        breakpoints={{
            // when window width is >= 640px
            0: {
            //   width: 300,
              slidesPerView: 1,
            },
            520: {
            //   width: 300,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            950: {
            //   width: 768,
              slidesPerView: 3,
            },
       
          }}
               pagination={{ clickable: true }}
            //    scrollbar={{ draggable: true }}
            //    onSwiper={(swiper) => console.log(swiper)}
            //    onSlideChange={() => console.log('slide change')}
                className={`${style.slider_container} mySwipe py-5 mb-5 `}
            >
                <SwiperSlide>
                    <div className={`${style.slider_wrapper}  mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Tanjim Al Fahim</h2>
                            <h6>CEO of Arena Web Security</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p> Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper} mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image5} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Bijoy Mondal</h2>
                            <h6>Admin Support</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security, Freelancing, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper} mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image3} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Md Jewele Islam</h2>
                            <h6>Software Engineer & Senior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Ethical Hacking, Freelancing, Python, PHP.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper} mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image4} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Md Ashif Islam</h2>
                            <h6>Junior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper} mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image2} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Syed Sakib Alam Mubin</h2>
                            <h6>Junior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Cyber Security, Ethical Hacking, Linux RedHat</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${style.slider_wrapper} mt-6 md:mt-0`}>
                        <div className={`${style.slider_avatar}`}>
                        <Image src={image6} alt=""/>
                        </div>
                        <div className='text-center px-5'>
                            <h2>Zawad Bin Hafiz</h2>
                            <h6>Senior Trainer</h6>
                            <div className={`${style.divider}`}>
                                <div></div>
                                <Image src={star} alt=""/>
                                <div></div>
                            </div>
                            <strong>Areas of expertise</strong>
                            <p>Python, Django, Cyber Security</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MentorSlides;


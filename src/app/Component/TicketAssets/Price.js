

import React from 'react';
import './Price.css'
import { FaArrowRight } from "react-icons/fa";
const Price = () => {
    return (
        <section className="price-container">
            <div className='container price-parent'>
                <div className=' pl-2'>
                    <h1 className='text-4xl mb-3'>Pricing Plan</h1>
                    <p className='text-2xl mb-5 font-serif'>Course Fee: 14,000&#2547;</p>
                    <ul className='price-list'>
                        <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />3 Months of Course Plan</li>
                        <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />1 Month of internships</li>
                        <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Interest free double instalment facility</li>
                    </ul>
                </div>
                <div>
                    <div className='tools-card'>
                        <h1 className="course-title">Cyber Security & Ethical Hacking</h1>{/* bg-[linear-gradient_87deg_#00CC99_#6600ff87] */}
                        <img src='./Shapes.hacker2.png' alt=""/>
                        <h1 className="text-center tools-title">Free Bundle <span className='text-sm'>(For limited time)</span></h1>
                        <ul className='tools-list'>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Tools that worth of 442&#36;</li>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Mid & final exam</li>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />12+ Projects</li>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Viva</li>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Internship</li>
                            <li className='flex items-center gap-3'><FaArrowRight icon="material-symbols:arrow-circle-right-outline" className='text-green-500' />Certification</li>
                        </ul>
                        <a href="https://arenawebsecurity.net/admission"><button type="" className='card-btn'>ENROLL NOW! <FaArrowRight icon="svg-spinners:pulse" /></button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
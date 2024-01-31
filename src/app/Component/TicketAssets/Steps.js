'use client'
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Steps.css'
const Steps = () => {
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    },[])
    return (
        <section className='step-parent bg-circle'>
            <h1 className='text-center'>What We Provide</h1>
            <div className='container-cstm step-container'>
                <div className='single-steps'>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='steps-content-right'>
                    <img src='./icons/black-hat.png' alt="" className='my-3'/>
                        <h5 className="text-lg font-bold font-['Libre-Baskerville']">Complete Hacking Guide</h5>
                        <p className="font-['Abhaya-Libre']">We provide complete guide from scratch to professional level.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='single-steps'>
                    <div className='down_arrow'><div></div></div>
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" className='steps-content-left'>
                    <img src='./icons/online-meeting.png'  alt="" className='my-3'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">Live Class</h5> 
                        <p className="font-['Abhaya-Libre']">We organize live virtual class where students and teachers meet together to communicate with video and whiteboard.</p>
                    </div>
                </div>
                <div className='single-steps'>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='steps-content-right'>
                    <img src='./icons/exam.png'  alt="" className='my-3'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">Exam & Intern</h5>
                        <p className="font-['Abhaya-Libre']">In the exam centers, verification of the candidates is done by the exam center authorities.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
                <div className='single-steps'>
                    <div className='down_arrow'><div></div></div>
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" className='steps-content-left'>
                    <img src='./icons/fiverr.png'  alt="" className='my-3'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">Project & Freelancing</h5>
                        <p className="font-['Abhaya-Libre']">Project guidelines and freelancing support from scratch to professional level.</p>
                    </div>
                </div>
                <div className='single-steps'>
                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" className='steps-content-right'>
                <img src='./icons/open-book.png' alt="" className='my-3'/>
                        <h5 className="text-2xl font-bold font-['Libre-Baskerville']">121 Modules</h5>
                        <p className="font-['Abhaya-Libre'] text-lg">We provide training in smart outline based on international standard.</p>
                    </div>
                    <div className='down_arrow'><div></div></div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
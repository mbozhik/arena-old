
import './About.css'
import BannerImage from '@/app/AllDataFatchingFunction/BannerImage';
import Image from 'next/image';
import Link from 'next/link';


const About = async() => {
    const Tanjim=await BannerImage()
    return (
        <section className='about-container bg-circle'>
            <div className='container-cstm'>
                <h1 className='text-center lg:text-3xl lg-font-bold text-2xl font-semibold'>About Us</h1>
                <div className='about-parent'>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="2000">
                    <Image alt="Tanjim Al Fahim" src={Tanjim} height={1000} width={1000}  className="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000" className="text-justify text-lg font-['Libre-Baskerville']">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.

                            Involved with Government entities in 2012 like ICT Ministry, Academy for Rural Development, University of Engineering and Technology. Experienced with cyber security support in corporate area linked with outsourcing market. Already 46 batchs received this training and have started to earn through online and corporate job.</p>
                        <div className='about-btn'><Link href="/admission"><button type="" className="btn btn-warning btn-animate">What are you waiting for? <br /> Enroll Now! </button></Link></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { FaArrowRight } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { TbUserDollar } from "react-icons/tb";
import './Statistics.css'

const Statistics = () => {
    return (
        <section className='state-parent'>
            <h1 className='text-center text-6xl'>Statistics</h1>
            <p className="text-center text-3xl font-['Libre-Baskerville']">Statistics shows our demand on this field...</p>
            <div className='mt-3'>
                <div className='container-cstm stat-container '>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className=''>
                        <IoMdPeople className='icons mx-auto text-purple-400' icon="fluent:people-team-28-filled"/>
                        <p >5000+ Students</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className=''>
                        <FaBookReader className='icons mx-auto text-purple-400' icon="material-symbols:interactive-space-outline-rounded" />
                        <p >46 Completed Batches</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className=''>
                        <MdCalendarMonth className='icons mx-auto text-purple-400' icon="fluent-mdl2:reading-mode" />
                        <p >121 Modules</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className=' '>
                        <TbUserDollar className='icons mx-auto text-purple-400' icon="jam:fiverr" />
                        <p >1300+ Freelancers</p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" className=''>
                        <FaArrowRight className='icons mx-auto text-purple-400' icon="ph:office-chair-fill" />
                        <p >1065+ Corporate Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
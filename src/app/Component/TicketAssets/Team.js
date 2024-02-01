

import './Team.css'
const Team = () => {
    return (
        <section className='team-container'>
            <div className='container-cstm'>
                <h1 className='text-center trainer-title'>Trainer's Portfolio</h1>
                <p className='hands-on'>Hands-on training from country top rated hackers</p>
                <div className='team-parent'>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='team-card'>
                        <div className='my-4'><img width="50%" src='./Team/fahim.png'  alt="Tanjim Al Fahim" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Tanjim Al Fahim</h1>
                            <p className='desig'>Founder & CEO Arena Web Security</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Vulnerability Assessment & Penetration Testing, Ethical Hacking, Cloud Security, OSINT, Cyber Forensics.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='team-card '>
                    <div className='my-4'><img width="50%" src='./Team/asif.png'  alt="Asif Islam" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Asif Islam</h1>
                            <p className='desig mt-1 mb-3'>Trainer</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Cyber Security, VAPT, Bug Bounty, Networking.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='team-card '>
                    <div className='my-4'><img width="50%" src='./Team/SA_MUBIN.jpg' alt="Syed Sakib Alam Mubin" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Syed Sakib Alam Mubin</h1>
                            <p className='desig mt-1 mb-3'>Trainer</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Cyber Security, Ethical Hacking, Linux RedHat.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className='team-card '>
                    <div className='my-4'><img width="50%" src='./Team/bijoy.jpeg' alt="Bijoy Mondal" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Bijoy Mondal</h1>
                            <p className='desig mt-1 mb-3'>Admin Support</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Cyber Security, Freelancing, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='team-card '>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                    <div className='my-4'><img width="50%" src='./Team/Salman.jpg' alt="Salman Hafizur Rahman" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Salman Hafizur Rahman</h1>
                            <p className='desig mt-1 mb-3'>Admin Support</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Cyber Security, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" className='team-card '>{/* shadow-[-20px_-20px_20px_17px_green;] */}
                    <div className='my-4'><img width="50%" src='./Team/roman.jpg' alt="Roman Moonshi" className='rounded-full'/></div>
                        <div className='cont'>
                            <h1 className='name'>Roman Moonshi</h1>
                            <p className='desig mt-1 mb-3'>Auditor</p>
                            <p className='descrip'><span className='expertise'>Areas of expertise:</span> Cyber Security, Ethical Hacking, Linux.</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    );
};

export default Team;

import VideoContent from "./VideoContent";
import './Video.css'
import 'aos/dist/aos.css';
import Link from "next/link";
const Video = () => {
  return (
    <section className="vid-section">
      <div className='container-cstm vid-container'>
      <div className="" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" left duration={1000}>
      <VideoContent props={false}/>
      </div>
            <div className='all-keys'>
              <div><h1 className="text-white">Cyber Security & Ethical Hacking <sub className='text-md'>(Bundle Course)</sub></h1>
                <h3 className="text-yellow-400 font-bold text-2xl">Key Topics</h3></div>
              <ul>
                <li className='key text-white'><p>Cyber Security</p></li>
                <li className='key text-white'><p>Ethical Hacking</p></li>
                <li className='key text-white'><p>Freelancing</p></li>
                <li className='key text-white'><p>Linux</p></li>
                <li className='key text-white'><p>Digital Forensic</p></li>
              </ul>
            </div>
            <div className='enroll-btn '><Link href="/admission" className=''><button type="" className="btn btn-animate text-white flex justify-center items-center">Enroll Now <span className="pl-2"><img src='./icons/next.png'alt="" /></span></button></Link></div>
            <div className='li text-white'><p>Open Source Intelligence</p></div>
        </div>
    </section>
  );
};

export default Video;
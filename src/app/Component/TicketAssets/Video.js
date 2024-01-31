
import VideoContent from "./VideoContent";
import './Video.css'
import 'aos/dist/aos.css';
const Video = () => {
  return (
    <section className="vid-section">
      <div className='container-cstm vid-container'>
      <div className="" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000" left duration={1000}>
      <VideoContent/>
      </div>
            <div className='all-keys'>
              <div><h1 className="text-white">Cyber Security & Ethical Hacking <sub className='text-md'>(Bundle Course)</sub></h1>
                <h3 className="">Key Topics</h3></div>
              <ul>
                <li className='key'><p>Cyber Security</p></li>
                <li className='key'><p>Ethical Hacking</p></li>
                <li className='key'><p>Freelancing</p></li>
                <li className='key'><p>Linux</p></li>
                <li className='key'><p>Digital Forensic</p></li>
              </ul>
            </div>
            <div className='enroll-btn '><a href="https://arenawebsecurity.net/admission" className=''><button type="" className="btn btn-animate text-white flex justify-center items-center">Enroll Now <span className="pl-2"><img src='./icons/next.png'alt="" /></span></button></a></div>
            <div className='li'><p>Open Source Intelligence</p></div>
        </div>
    </section>
  );
};

export default Video;
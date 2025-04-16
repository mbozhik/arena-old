
// import style from "@/app/Component/Common/Footer.module.css"
// import social1 from "@/app/Images/footer/facebook.png";
// import social2 from "@/app/Images/footer/youtube.png";
// import social3 from "@/app/Images/footer/linkedin.png";
// import icon1 from "@/app/Images/footer/address.png";
// import icon3 from "@/app/Images/footer/at.png";
// import favIcon from "@/app/Images/footer/favicon.ico";
// import icon2 from "@/app/Images/footer/telephone.png";
// import Link from "next/link";
// import Image from "next/image";
// const Footer = () => {
//   return (
//     <section className={style.parent_container} id="main">
//       <div className={` ${style.footerCard} container mx-auto `}>
//         <Link href='/contact' className="cursor-pointer">
//         <div className={style.footer_wrapper}>
//           <div className={`${style.footer_wrapper_img} mx-auto flex justify-center`}>
//             <Image className={style.icon} src={icon1} alt="" />
//           </div>
//           <div>
//             <h5 className="text-center">Address</h5>
//             <p>
//               House No-1, BLOCK-B Banasree, <br /> Main Road Rampura, Dhaka -
//               1219
//             </p>
//           </div>
//         </div>
//         </Link>
//         <div className={`${style.phone} ${style.footer_wrapper}`}>
//           <div className={`${style.footer_wrapper_img}  mx-auto flex justify-center`}>
//             <Image className={style.icon} src={icon2} alt="" />
//           </div>

//           <div>
//             <h5 className="text-center">Phone</h5>
//             <div>
//               <p><a href="tel:+8801310333444" className="text-blue-400">+880 1310333444</a></p>
//               <p><a href="tel:+8801885841489" className="text-blue-400">+880 1885841489</a></p>
//               {/* <p>+880 1885841489</p> */}
//             </div>
//           </div>
//         </div>
//         <div className={style.footer_wrapper}>
//           <div className={`${style.footer_wrapper_img} mx-auto flex justify-center`}>
//             <Image className={style.icon} src={icon3} alt="" />
//           </div>
//           <div>
//             <h5 className="text-center">Email</h5>
//            <p><a href="mailto:info@arenawebsecurity.net" className="text-blue-400">info@arenawebsecurity.net</a></p> 
//             {/* <p></p> */}
//           </div>
//         </div>
//       </div>
//       <footer className={`${style.footer} `}>
//         <div>
//           <div className={`position-relative ${style.contactWrapper} `}>
//             <Image src={favIcon} alt="arena" />
//           </div>
//           <div className={`${style.footerContainer} container  mx-auto `}>
//             <div>
//               <h5>Information</h5>
//               <ul className={style.list_wrapper}>
//                 <Link href="/about-us" className="text-decoration-none">
//                   {" "}
//                   <li>About Us</li>
//                 </Link>
//                 <Link href="/contact" className="text-decoration-none">
//                   {" "}
//                   <li>Contact</li>
//                 </Link>
//                 <Link href="/faq" className="text-decoration-none">
//                   {" "}
//                   <li>FAQ</li>
//                 </Link>
         
//                 <a
//                   href="https://www.hackers.institute/"
//                   className="text-decoration-none"
//                 >
//                   {" "}
//                   <li>Blog</li>
//                 </a>
//                 <Link href="/all-services" className="text-decoration-none">
//                   {" "}
//                   <li>Service</li>
//                 </Link>
//                 <Link href="/arena-gallery" className="text-decoration-none">
//                   {" "}
//                   <li>Gallery</li>
//                 </Link>
//                 <Link href="/privacy" className="text-decoration-none">
//                   {" "}
//                   <li>Privacy Policy</li>
//                 </Link>
//               </ul>
//             </div>
//             <div>
//               <h5>Courses</h5>
//               <ul className={style.list_wrapper}>
//                 <Link
//                   href="/cyber-security"
//                   className="text-decoration-none"
//                 >
//                   {" "}
//                   <li>Cyber Security & Ethical Hacking</li>
//                 </Link>
//                 <Link
//                   href="/python"
//                   className="text-decoration-none"
//                 >
//                   {" "}
//                   <li>Advanced Python & Freelancing</li>
//                 </Link>
//                 <Link
//                   href="/combo"
//                   className="text-decoration-none"
//                 >
//                   {" "}
//                   <li>Cyber Security & Python (Combo)</li>
//                 </Link>
//                 <Link href="/cosint" className="text-decoration-none">
//                   {" "}
//                   <li>C|OSINT</li>
//                 </Link>
//                 <Link href="/linux" className="text-decoration-none">
//                   {" "}
//                   <li>Linux</li>
//                 </Link>
//                 <Link href="/network" className="text-decoration-none">
//                   {" "}
//                   <li>Networking Security</li>
//                 </Link>
//                 <Link
//                   href="/cehf"
//                   className="text-decoration-none"
//                 >
//                   {" "}
//                   <li>CEHF Masterclass</li>
//                 </Link>
//               </ul>
//             </div>
//             <div>
//               <h5>Technologies</h5>
//               <ul className={style.list_wrapper}>
//                 <li>React</li>
//                 <li> Vue Js</li>
//                 <li> jQuery</li>
//                 <li>Python</li>
//                 <li> Node.js</li>
//                 <li>SQL</li>
//                 <li> MySQL</li>
//                 <li> FireBase</li>
//                 <li> SQLite</li>
//                 <li>Java, Dart, Flutter</li>
//                 <li>UI/UX</li>
//               </ul>
//             </div>
//           </div>

//           <div className={`  ${style.social} container mx-auto `}>
//             <div className={style.socialContainer}>
//               <a
//                 href="https://www.facebook.com/ArenaBangladesh/"
//                 className="text-decoration-none"
//               >
//                 <div className={style.socialWrapper}>
//                   <Image src={social1} alt="facebook icon" />
//                   <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>Facebook</span>
//                 </div>
//               </a>
//               <a
//                 href="https://www.youtube.com/channel/UCABV9wzGHQcgyIMP-Vr57tw"
//                 className="text-decoration-none"
//               >
//                 <div className={style.socialWrapper}>
//                   <Image src={social2} alt="youtube icon" />
//                   <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>Youtube</span>
//                 </div>
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/arena-web-security"
//                 className="text-decoration-none"
//               >
//                 <div className={style.socialWrapper}>
//                   <Image src={social3} alt="linkedin icon" />
//                   <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>Linkedin</span>
//                 </div>
//               </a>
//             </div>
//           </div>
         
//         </div>
//         <p className="text-center !text-white relative m-0 py-5">
//             Copyright © 2024 All Rights Reserved by Arena Web Security.
//           </p>
//       </footer>
//     </section>
//   );
// };

// export default Footer;
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaAngleRight, FaMobileAlt, FaArrowRight, } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline, IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#26272b] text-[#8d8d8d]   pt-12 pb-8 text-sm leading-6 ">
      <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 border-b border-gray-500/50 pb-8">
        {/* Address */}
        <div>
          <h3 className="text-white text-[24px] font-normal mb-4">Address</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaLocationDot  className="mt-1 text-[#715296] text-[16px]"  />
              <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>House No-1, BLOCK-B<br />Banasree, Main Road Rampura,<br />Dhaka - 1219</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMobileAlt className="mt-1 text-[#715296] text-[16px]" />
              <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>+880 1310 333 444,<br />+880 1885 841 489</span>
            </li>
            <li className="flex items-center gap-2 ">
             <IoMail className='text-[#715296] text-[16px] mt-1'/>
              <p className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>info@arenawebsecurity.net</p>
            </li>
           
            <li className="flex items-center gap-2">
              <FaGlobe className="mt-1 text-[#715296] text-[16px]" />
              <span className='text-[16px] leading-[22px] font-[300] text-[#8d8d8d]'>www.arenawebsecurity.net</span>
            </li>
          </ul>
          <h3 className="text-white text-lg font-medium mb-4 mt-16 md:block xl:hidden">Technologies</h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d] md:block xl:hidden">
            {[
              'React, Vue Js, jQuery',
              'Python, Node.js, Php',
              'SQL, MySQL, FireBase, SQLite',
              'Java, Dart, Flutter',
              'UI/UX',
            ].map(tech => (
              <li key={tech} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                 <FaArrowRight className=" text-[#715296] text-[16px]" />
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className='md:hidden xl:block'>
          <h3 className="text-white text-lg font-medium mb-4">Information</h3>
           <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {['About Us', 'Contact', 'FAQ', 'Career', 'Blog', 'Service', 'Gallery', 'Privacy Policy'].map(item => (
              <li key={item} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                 <FaArrowRight className=" text-[#715296] text-[16px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Courses */}
        <div>
        <div className='md:block xl:hidden'>
          <h3 className="text-white text-lg font-medium mb-4">Information</h3>
           <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {['About Us', 'Contact', 'FAQ', 'Career', 'Blog', 'Service', 'Gallery', 'Privacy Policy'].map(item => (
              <li key={item} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                 <FaArrowRight className=" text-[#715296] text-[16px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
          <h3 className="text-white text-lg font-medium mb-4 md:mt-6 xl:mt-0">Our Courses</h3>
           <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {['Cyber Security', 'Advanced Cyber Security', 'Advanced Python', 'C|OSINT', 'Linux', 'Networking Security'].map(course => (
              <li key={course} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                 <FaArrowRight className=" text-[#715296] text-[16px]" />
                {course}
              </li>
            ))}
          </ul>
          <h3 className="text-white text-lg font-medium mb-4 mt-10 md:hidden xl:block">Technologies</h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d] md:hidden xl:block">
            {[
              'React, Vue Js, jQuery',
              'Python, Node.js, Php',
              'SQL, MySQL, FireBase, SQLite',
              'Java, Dart, Flutter',
              'UI/UX',
            ].map(tech => (
              <li key={tech} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                 <FaArrowRight className=" text-[#715296] text-[16px]" />
                {tech}
              </li>
            ))}
          </ul>
        </div>

        

        {/* Developers */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Developers</h3>
          <ul className="space-y-2 text-[16px] leading-[22px] font-[300] text-[#8d8d8d]">
            {[
              'Front-End Developers',
              'Full-Stack Developers',
              'Backend Developers',
              'Java Developers',
              'IOS Developers',
              'Android Developers',
              'E-Commerce Developers',
              'SQL Developers',
              'QA Engineers',
              'UI/UX Designers',
              'DevOps Engineer',
              'WordPress Developers',
              'Security Specialist',
            ].map(dev => (
              <li key={dev} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                <FaArrowRight className=" text-[#715296] text-[16px]" />
                {dev}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 container">
        <p className="text-[15px] text-center md:text-left">Copyright © 2021 All Rights Reserved by <span className="text-[#29aafe]">Arena Web Security</span>.</p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#3b5998] transition">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6] transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6]  transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import Image from "next/image";
// import Type from "../Utility/Type";
// import { IoPlayOutline } from "react-icons/io5";
// import bannerImg from '@/app/Images/Banner/BannerBg.png'
// import bannerPic from '@/app/Images/Banner/girl_i.png'
// import { IoMdStar } from "react-icons/io";
// import Link from "next/link";
// import BannerVaideo from "../Utility/BannerVaideo";

// const Banner = () => {
//   return (

//     <div className=" lg:h-[90vh] md:h-[60vh] h-[70vh] relative overflow-hidden ">
//       <div className="BannerImg"></div>
//       <div className="absolute  left-0 bottom-0 h-[70vh] w-full lg:h-[80vh] md:h-[60vh]">
//     <div className="    md:flex  px-3 md:px-3  lg:h-[80vh] md:h-[60vh] h-[70vh] mt-24 ">
//       <article className=" md:w-full flex md:justify-center justify-start items-center flex-col 2xl:px-10 lg:px-10 px-0 2xl:text-center ">
//         <h1 className="2xl:text-6xl   lg:text-5xl text-3xl  font-bold drop-shadow-lg text-white mt-20 md:mt-0  w-full pl-2 lg:pl-0 ">Arena Web Security</h1>
//         {/* <h1 className="2xl:text-6xl   lg:text-5xl text-3xl  font-bold drop-shadow-lg text-white mt-20 md:mt-0  w-full pl-2 lg:pl-0 ">Arena Web Security</h1> */}
//       <h3 className="uppercase text-[#00ffca] 2xl:text-3xl  lg:text-[26px] md:text:2xl  drop-shadow-md font-bold md:my-4 w-full pl-2 lg:pl-0 my-1">
//     {<Type/>}
//       </h3>
//         <p className="text-justify text-white leading-5 px-2 font-sans">
//           Arena Web Security is a renowned & first level IT security company in
//           Bangladesh since its establishment in 2012. During these years,<br/> Arena
//           has provided Cyber Security Services and Trainings to many around the
//           world.
//         </p>
//         <div className="md:mt-10 mt-5 flex  justify-start 2xl:justify-center  items-center gap-x-10  w-full pl-2 lg:pl-0">
//           <Link href='/admission'>
//           <button className="lg:text-2px font-semibold bg-[#00ffca]   md:px-8 md:py-3 px-4 py-2 rounded-md hover:text-white">Apply Now</button></Link>
//           <div className="h-10 w-10">
//           <BannerVaideo/>
//           </div>
        
//         </div>
//       </article>
//       <article className="relative md:w-1/2  w-full h-[50vh] md:h-auto mt-5 md:mt-0 hidden">
//          {/* <div className="absolute md:right-[-100px] lg:top-0 md:top-20  lg:h-[100%] md:h-[80%] h-[50vh]  ">
//          <Image src={bannerImg} alt="Banner" className="h-[100%]"/>
//          </div> */}
//          {/* <div className="absolute right-[-100px] bottom-0  md:h-[80%]  h-[50vh] "> */}
//          <div className="absolute md:right-[100px] lg:top-0 md:top-20  lg:h-[100%] md:h-[80%] h-[50vh]  ">
//          <Image src={bannerPic} alt="Banner" className=" h-full" />
//          </div>
       
//          <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2    lg:w-2/3 md:w-1/3 w-1/3  ">
//             <div className="bg-white px-5 md:py-5 py-2 rounded-md lg:w-52 w- review_animation ">
//             <div className="flex justify-center items-center ">
//             <IoMdStar className="text-[#FFA121] lg:text-2xl" />
//             <p className="lg:text-1xl md:font-semibold">Student (20k)</p>
//             </div>
//             <p className="lg:text-2xl md:font-semibold">Congratulations</p>

//             </div>
           
//             </div>

//       </article>
//     </div>
//     </div>
//     </div>

//   );
// };

// export default Banner;
'use client'
import { useState, useEffect } from "react";
// import banner1 from "";
// import banner2 from ";

const banners = [
  {
    src: '/banner/aws-banner1.png',
    title: "Arena Web Security",
    subtitle: "New window of World Wide Web",
    description:
      "Arena Web Security is a renowned & first level IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.",
  },
  {
    src: '/banner/aws-banner2.webp',
    title: "Arena Web Security",
    subtitle: "Hacking was passion, Security is our profession",
    description:
      "Arena Web Security is a renowned & first level IT security company in Bangladesh since its establishment in 2012. During these years, Arena has provided Cyber Security Services and Trainings to many around the world.",
  },
];

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[100vh] ">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={banner.src} alt="slide" className="w-full object-cover TopBanner" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 container mx-auto">
            <h4 className="text-[44px] leading-[53px] font-bold">{banner.title}</h4>
            <p className="text-[20px] leading-7 mt-1">{banner.subtitle}</p>
            <p className="text-[14px] text-gray-800 mt-4">{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import Type from "../Utility/Type";
import { IoPlayOutline } from "react-icons/io5";
import bannerImg from '@/app/Images/Banner/BannerBg.png'
import bannerPic from '@/app/Images/Banner/BannerPic.png'
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import BannerVaideo from "../Utility/BannerVaideo";

const Banner = () => {
  return (
    <div className=" h-auto lg:h-[90vh] md:h-[60vh]    bg-[#EBE7F8] md:flex  px-3 md:px-3 ">
    {/* <div className=" h-auto lg:h-[90vh] md:h-[60vh]    bg-white md:flex  "> */}
      <article className=" md:w-1/2 flex md:justify-center justify-start items-center flex-col 2xl:px-10 lg:px-10 px-0 2xl:text-center">
        <h1 className="2xl:text-6xl   lg:text-5xl text-3xl  font-bold drop-shadow-lg text-[#44107a] mt-20 md:mt-0  w-full pl-2 lg:pl-0 ">Arena Web Security</h1>
      <h3 className="uppercase text-[#ff1361]  2xl:text-3xl  lg:text-[26px] md:text:2xl  drop-shadow-md font-bold md:my-4 w-full pl-2 lg:pl-0 my-1">
    {<Type/>}
      </h3>
        <p className="text-justify text-black leading-5 px-2 font-sans">
          Arena Web Security is a renowned & first level IT security company in
          Bangladesh since its establishment in 2012. During these years, Arena
          has provided Cyber Security Services and Trainings to many around the
          world.
        </p>
        <div className="md:mt-10 mt-5 flex  justify-start 2xl:justify-center  items-center gap-x-10  w-full pl-2 lg:pl-0">
          <Link href='/admission'>
          <button className="lg:text-2px font-semibold bg-[#76599E] text-white md:px-8 md:py-3 px-4 py-2 rounded-md hover:bg-[#76599E] hover:text-white">Apply Now</button></Link>
          <div className="h-10 w-10">
          <BannerVaideo/>
          </div>
        
        </div>
      </article>
      <article className="relative md:w-1/2  w-full h-[50vh] md:h-auto mt-5 md:mt-0">
         <div className="absolute md:right-[-100px] lg:top-0 md:top-20  lg:h-[100%] md:h-[80%] h-[50vh]  ">
         <Image src={bannerImg} alt="Banner" className="h-[100%]"/>
         </div>
         {/* <div className="absolute right-[-100px] bottom-0  md:h-[80%]  h-[50vh] "> */}
         <div className="absolute md:right-[-100px] lg:top-0 md:top-20  lg:h-[100%] md:h-[80%] h-[50vh]  ">
         <Image src={bannerPic} alt="Banner" className=" h-full" />
         </div>
       
         <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2    lg:w-2/3 md:w-1/3 w-1/3  ">
            <div className="bg-white px-5 md:py-5 py-2 rounded-md lg:w-52 w- review_animation ">
            <div className="flex justify-center items-center ">
            <IoMdStar className="text-[#FFA121] lg:text-2xl" />
            <p className="lg:text-1xl md:font-semibold">Student (20k)</p>
            </div>
            <p className="lg:text-2xl md:font-semibold">Congratulations</p>

            </div>
           
            </div>

      </article>
    </div>
  );
};

export default Banner;

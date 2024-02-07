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
    <div className="lg:h-[90vh] md:h-[60vh] bg-[#EBE7F8] flex ">
      <article className="md:w-1/2 flex justify-center items-center flex-col 2xl:px-20 lg:px-12">
        <h1 className="2xl:text-6xl  lg:text-5xl md:text-3xl  font-bold drop-shadow-lg text-[#44107a] ">Arena Web Security</h1>
      <h3 className="uppercase text-[#ff1361] 2xl:text-3xl  lg:text-[26px] md:text:2xl  drop-shadow-md font-bold my-4">
    {<Type/>}
      </h3>
        <p className="text-justify text-black leading-5 md:px-2">
          Arena Web Security is a renowned & first level IT security company in
          Bangladesh since its establishment in 2012. During these years, Arena
          has provided Cyber Security Services and Trainings to many around the
          world.
        </p>
        <div className="mt-10 flex justify-center items-center gap-x-10">
          <Link href='/admission'>
          <button className="lg:text-2px font-semibold bg-white text-[#76599E] px-8 py-3 rounded-md hover:bg-[#76599E] hover:text-white">Apply Now</button></Link>
          <div className="h-10 w-10">
          <BannerVaideo/>
          </div>
        
        </div>
      </article>
      <article className="relative md:w-1/2 md:block hidden">
         <div className="absolute right-[-100px] lg:top-0 md:top-20  lg:h-[100%] md:h-[80%] ">
         <Image src={bannerImg} alt="Banner" className="h-[100%]"/>
         </div>
         <div className="absolute right-[-100px] bottom-0 h-[90%] md:h-[80%] z-0  ">
         <Image src={bannerPic} alt="Banner" className=" h-full" />
         </div>
       
         <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2    lg:w-2/3 md:w-1/3">
            <div className="bg-white px-5 py-5 rounded-md lg:w-52 review_animation ">
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

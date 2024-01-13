import Image from "next/image";
import Type from "../Utility/Type";
import { IoPlayOutline } from "react-icons/io5";
import bannerImg from '@/app/Images/Banner/BannerBg.png'
import bannerPic from '@/app/Images/Banner/BannerPic.png'
import { IoMdStar } from "react-icons/io";

const Banner = () => {
  return (
    <div className="lg:h-[90vh] bg-[#EBE7F8] flex">
      <article className="lg:w-1/2 flex justify-center items-center flex-col lg:px-28">
        <h1 className="lg:text-6xl font-bold drop-shadow-lg">Arena Web Security</h1>
      <h3 className="uppercase text-[#4aabff] lg:text-3xl drop-shadow-md font-bold my-4">
    {<Type/>}
      </h3>
        <p className="text-justify text-black leading-5">
          Arena Web Security is a renowned & first level IT security company in
          Bangladesh since its establishment in 2012. During these years, Arena
          has provided Cyber Security Services and Trainings to many around the
          world.
        </p>
        <div className="mt-10 flex justify-center items-center gap-x-10">
          <button className="lg:text-2px font-semibold bg-white text-[#76599E] px-8 py-3 rounded-md hover:bg-[#76599E] hover:text-white">Apply Now</button>
          <button className="lg:text-2px font-semibold bg-[#76599E] rounded-full h-10 w-10 flex justify-center video items-center"><IoPlayOutline className="text-white" /></button>
        </div>
      </article>
      <article className="relative lg:w-[50%]">
         <div className="absolute right-[-100px] top-0  h-[100%] ">
         <Image src={bannerImg} alt="Banner" className="h-[100%]"/>
         </div>
         <div className="absolute right-[-100px] bottom-0 h-[90%] z-0  ">
         <Image src={bannerPic} alt="Banner" className=" h-full"/>
         </div>
       
         <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-red-500 w-2/3">
            <div className="bg-white px-5 py-5 rounded-md w-52 review_animation ">
            <div className="flex justify-center items-center ">
            <IoMdStar className="text-[#FFA121] lg:text-2xl" />
            <p className="lg:text-1xl lg:font-semibold">Student (20k)</p>
            </div>
            <p className="lg:text-2xl lg:font-semibold">Congratulations</p>

            </div>
           
            </div>

      </article>
    </div>
  );
};

export default Banner;

// import Image from "next/image";
// import event from "@/app/Images/Reviews/Event.jpg";
import Review from "../Utility/Reviews";

const Preview = () => {
  return (
    <div className=" container mx-auto px-3 lg:mt-16 md:mt-8    ">
      <div className="">
        {/* <div className="md:col-span-2 h-full relative  hidden md:block">
          <Image src={event} alt="Events" className="" fill={true} sizes="1000vh" />
        </div> */}
        <div className=" ">
          <article className="pl-5 py-2">
           
       <h5 className="text-center md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2">            Preview of Your Future
      </h5>
      <h6 className="text-center text-gray-600 text-sm mb-16">
      Our dream is to make Cyber heros.Beside this we decided to reduce the security of unemployment rate in our country. Different marketplaces has so many demands on IT security related work. We focus on our learners, we make a path for them to earn money and built their own career.
      </h6>
           
          </article>
          <div className="h-5/6  ">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

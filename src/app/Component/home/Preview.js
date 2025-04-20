// import Image from "next/image";
// import event from "@/app/Images/Reviews/Event.jpg";
import Review from "../Utility/Reviews";
import OrderImage from '../../../../public/statitic/reveiw.jpg'; 
import Image from "next/image";
const Preview = () => {
  return (
    <div className=" container mx-auto px-3 lg:mt-10 mt-10    ">
      <div className="">
        {/* <div className="md:col-span-2 h-full relative  hidden md:block">
          <Image src={event} alt="Events" className="" fill={true} sizes="1000vh" />
        </div> */}
        <div className=" ">
          <article className="pl-5 py-2">
           
       <h5 className="text-center md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2">            Preview of Your Future
      </h5>
      <p className="text-center text-gray-500 text-[10px] md:text-sm md:mb-3 mb-2">Your Skill. Your Career. Your Global Path.</p>
      <h6 className="text-center text-gray-600 text-[10px] md:text-sm mb-4">
      Arena Web Security is not just about learning—it is about transforming your skill into real income,<br/>     global opportunities, and a future-proof career.
      </h6>
      <h6 className="text-center text-gray-600 text-[10px] md:text-sm md:mb-8 mb-6">
      From Upwork to Fiverr, from international cybersecurity firms to freelance consultancy—our <br/>   students are earning, growing, and succeeding across the world.
      </h6>
           
          </article>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5  ">
            <Review />
            <div >
              <div className="h-[220px] ">
              <Review />

              </div>
                {/* <Image src={OrderImage } alt="review" className="w-full" /> */}
            <div className="pt-2">
        <h3 className="text-base font-semibold mb-2">Impact in Numbers – By Our Learners</h3>
        <div className="space-y-1 text-sm">
          <p>💡 <strong>Total learners earning online:</strong> 4.000+</p>
          <p>💵 <strong>Highest single project earning:</strong> $10.200</p>
          <p>📈 <strong>Highest monthly earning:</strong> $13,780</p>
          <p>🌍 <strong>Countries served:</strong> 21+</p>
        </div>
      </div>
            </div>
            {/* <Review /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

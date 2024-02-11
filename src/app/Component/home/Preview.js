import Image from "next/image";
import event from "@/app/Images/Reviews/Event.jpg";
import Review from "../Utility/Reviews";

const Preview = () => {
  return (
    <div className="md:px-20 px-3 lg:mt-16 md:mt-8 lg:h-[80vh] md:h-[50vh]   ">
      <div className="md:grid md:grid-cols-6 h-full ">
        <div className="md:col-span-2 h-full relative  hidden md:block">
          <Image src={event} alt="Events" className="" fill={true} sizes="1000vh" />
        </div>
        <div className="md:col-span-4 h-full  ">
          <article className="pl-5 py-2">
            <div className="relative">
              <h3 className="md:text-3xl text-2xl font-bold  pb-2  ">
                Preview of Your Future
              </h3>
              <p className="w-80 bg-[#ffd321] h-[3px]"></p>
            </div>

            <p className="pb-2 mt-2">
              Our dream is to make Cyber heros.Beside this we decided to reduce
              the security of unemployment rate in our country. Different
              marketplaces has so many demands on IT security related work. We
              focus on our learners, we make a path for them to earn money and
              built their own career.
            </p>
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

import Image from "next/image";
import eventemg from "@/app/Images/Event/eventsimg.png";
import NavberData from "@/app/AllDataFatchingFunction/Topber";
import Link from "next/link";

const Events = async () => {
  const data = await NavberData();
  // console.log(data);
  return (
    <div className="container  mx-auto px-4  pt-20">
      <h5 className="text-center text-[26px] font-bold text-[#0b6481]  mb-2">
        Upcoming Events
      </h5>
      <h6 className="text-center text-gray-600 text-sm mb-8">
        Get motivation from leaders and see your success from the window!
      </h6>

      <div className="">
        <div className="flex gap-x-4 w-full">
          <div className=" md:flex gap-x-5 relative mb-5 border  rounded-xl shadow-2xl">
            <div className="w-5/12 overflow-hidden ">
              <Image
                src={eventemg}
                alt="Cyber"
                className="scale-125 w-full h-full"
              />
            </div>
            <div className="img-avatar"></div>
            <article className="Events w-full  xl:px-3 lg:px-1   lg:h-auto bg-white group p-3 rounded-md ">
              <div className="flex justify-between lg:py-3 md:py-3 sectionSubTitle text-sm font-light mt-2 leading-relaxed">
                <p className="text-[14px] ml-20">
                  <addr className="font-semibold ">Date :</addr>
                  {data && data[0]?.deadline_date_s}
                </p>
                <p className="text-[14px]">
                  <addr className="font-semibold">Time :</addr>
                  {data && (
                    <span>
                      {data && data[0]?.time_from}- {data && data[0]?.time_to}
                      <br /> {data && data[0]?.day_from}-{data[0]?.day_to}
                    </span>
                  )}
                </p>
              </div>

              <Link href="cyber-security">
                <h4 className="lg:font-semibold text-[#0b6481] text-[20px] pt-2 pb-2 group-hover:text-blue-400">
                  {data && data[0]?.batch_schedule_name}
                </h4>
              </Link>
              <p className="pt-0 sectionSubTitle lg:pb-2 md:pb-2">
                Admission going on for Cyber Security course by Arena Web
                Academy. The class will start on 21-01-2024. For admission:
                01310333444
              </p>
            </article>
          </div>
          <div className=" md:flex gap-x-5 relative mb-5 border rounded-xl  shadow-2xl">
            <div className="w-5/12 overflow-hidden ">
              <Image
                src={eventemg}
                alt="Cyber"
                className="scale-125 w-full h-full"
              />
            </div>

            <div className="img-avatar"></div>

            <article className="Events w-full   xl:px-3 lg:px-1   lg:h-auto bg-white group p-3 rounded-md  mt-4 md:mt-0">
              <div className="flex justify-between lg:py-3 md:py-3 sectionSubTitle">
                <p className="text-[14px] ml-20">
                  <addr className="font-semibold">Date :</addr>
                  {data && data[1]?.deadline_date_s}
                </p>
                <p className="text-[14px] ">
                  <addr className="font-semibold">Time :</addr>
                  {data && (
                    <span>
                      {" "}
                      {data && data[1]?.time_from}- {data[1]?.time_to}
                      <br /> {data && data[1]?.day_from}-{data[1]?.day_to}
                    </span>
                  )}
                </p>
              </div>

              <Link href="python">
                <h4 className="lg:font-semibold text-[#0b6481] text-[20px] pt-5 pb-2 hover:text-blue-400">
                  {data && data[1]?.batch_schedule_name}
                </h4>
              </Link>
              <p className="pt-0 sectionSubTitle lg:pb-2 md:pb-2">
                Admission going on for Cyber Security course by Arena Web
                Academy. The class will start on 21-01-2024. For admission:
                01310333444
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

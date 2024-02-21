import Image from "next/image";
import event from '@/app/Images/Event/Event.jpg'
import eventemg from '@/app/Images/Event/eventsimg.png'
import NavberData from "@/app/AllDataFatchingFunction/Topber";
import Link from "next/link";

const Events = async() => {
    const data = await NavberData();
    // console.log(data);
    return (
        <div className="lg:px-20 md:px-5 px-5 lg:mt-16 md:mt-8 lg:h-[100vh] md:h-h[60vh] bg-[#EBE7F8] py-5 ">
            <div className="md:grid grid-cols-6 h-full">
                <div className="md:col-span-2 h-full relative hidden md:block ">
                  <Image src={event} alt="Events" className="h-auto w-auto" fill={true} sizes="1000vh" />
                </div>
                <div className="md:col-span-4  px-3 md:px-0">
                    <article className="py-4 relative pl-5">
                        <div className="relative">
                        <h3 className="md:text-3xl text-2xl font-bold  pb-2  ">Upcoming Events</h3>
                        <p className="w-60 bg-[#ffd321] h-[3px]"></p>
                        </div>
                       
                    </article>
                    <div className="md:-ml-10 md:flex gap-x-5 relative mb-5">
                        <article className="Events w-full lg:w-5/12 md:w-6/12 xl:px-3 lg:px-1   lg:h-auto bg-white group p-3 rounded-md hover:scale-105 transition duration-500 ease-in-out">
                            <div className="flex justify-between lg:py-6 md:py-3">
                            <p className="text-[14px]"><addr className='font-semibold '>Date :</addr >{data &&  data[0]?.deadline_date_s}</p>
                            <p className="text-[14px]"><addr className='font-semibold'>Time :</addr>
                             {
                                data && <span>{data && data[0]?.time_from}- {data && data[0]?.time_to}<br/> {data && data[0]?.day_from}-{data[0]?.day_to}</span>
                             }
                            
                            
                            </p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <Link href='cyber-security'><h4 className="lg:font-semibold text-[#4aabff] text-[20px] pt-5 pb-2 group-hover:text-purple-400">{data &&  data[0]?.batch_schedule_name}</h4></Link>
                            <p className="pt-5 lg:pb-10 md:pb-5">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                        <article className="Events w-full  lg:w-5/12 md:w-6/12 xl:px-3 lg:px-1   lg:h-auto bg-white group p-3 rounded-md hover:scale-105 transition duration-500 ease-in-out mt-4 md:mt-0">
                            <div className="flex justify-between lg:py-6 md:py-3">
                            <p className="text-[14px]"><addr className='font-semibold'>Date :</addr>{data &&  data[1]?.deadline_date_s}</p>
                            <p className="text-[14px]"><addr className='font-semibold'>Time :</addr>
                            {data && <span> {data &&  data[1]?.time_from}- {data[1]?.time_to}<br/> {data &&  data[1]?.day_from}-{data[1]?.day_to}</span>}
                           
                            </p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <Link href='python'><h4 className="lg:font-semibold text-[#4aabff] text-[20px] pt-5 pb-2 group-hover:text-purple-400">{data &&  data[1]?.batch_schedule_name}</h4></Link>
                            <p className="pt-5 lg:pb-10 md:pb-5">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                      
                    </div>


                </div>
                  
            </div>
            
        </div>
    );
};

export default Events;
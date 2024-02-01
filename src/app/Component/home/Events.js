import Image from "next/image";
import event from '@/app/Images/Event/Event.jpg'
import eventemg from '@/app/Images/Event/eventsimg.png'
import NavberData from "@/app/AllDataFatchingFunction/Topber";
import Link from "next/link";

const Events = async() => {
    const data = await NavberData();
    return (
        <div className="px-20 lg:mt-16 h-[80vh] bg-[#EBE7F8]  ">
            <div className="grid grid-cols-6 h-full">
                <div className="lg:col-span-2 h-full relative ">
                  <Image src={event} alt="Events" className="h-auto w-auto" fill={true} sizes="1000vh" />
                </div>
                <div className="lg:col-span-4 ">
                    <article className="py-4 relative pl-5">
                        <div className="relative">
                        <h3 className="lg:text-3xl font-bold  pb-2  ">Upcoming Events</h3>
                        <p className="w-60 bg-[#ffd321] h-[3px]"></p>
                        </div>
                       
                    </article>
                    <div className="lg:-ml-10 flex gap-x-5 relative">
                        <article className="Events w-2/6 lg:h-auto bg-white group p-3 rounded-md hover:scale-105 transition duration-500 ease-in-out">
                            <div className="flex justify-between py-6">
                            <p><addr className='font-semibold'>Date :</addr>{data[0]?.deadline_date_s}</p>
                            <p><addr className='font-semibold'>Time :</addr>{data[0]?.time_from}- {data[0]?.time_to}<br/> {data[0]?.day_from}-{data[0]?.day_to}</p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <Link href='cybersecurity'><h4 className="lg:font-semibold text-[#4aabff] text-[20px] pt-5 pb-2 group-hover:text-[#cbcb50]">{data[0]?.batch_schedule_name}</h4></Link>
                            <p className="pt-5 pb-10">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                        <article className="Events w-2/6 lg:h-auto bg-white group p-3 rounded-md hover:scale-105 transition duration-500 ease-in-out">
                            <div className="flex justify-between py-6">
                            <p><addr className='font-semibold'>Date :</addr>{data[1]?.deadline_date_s}</p>
                            <p><addr className='font-semibold'>Time :</addr>{data[1]?.time_from}- {data[1]?.time_to}<br/> {data[1]?.day_from}-{data[1]?.day_to}</p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <Link href='python'><h4 className="lg:font-semibold text-[#4aabff] text-[20px] pt-5 pb-2 group-hover:text-[#cbcb50]">{data[1]?.batch_schedule_name}</h4></Link>
                            <p className="pt-5 pb-10">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                      
                    </div>


                </div>
                  
            </div>
            
        </div>
    );
};

export default Events;
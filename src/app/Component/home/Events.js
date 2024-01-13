import Image from "next/image";
import event from '@/app/Images/Event/Event.jpg'
import eventemg from '@/app/Images/Event/eventsimg.png'
const Events = () => {
    return (
        <div className="px-20 lg:mt-16 h-[80vh] bg-[#EBE7F8]  ">
            <div className="grid grid-cols-6 h-full">
                <div className="lg:col-span-2 h-full relative ">
                  <Image src={event} alt="Events" className="" fill={true}  />
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
                            <p><addr className='font-semibold'>Date :</addr>21-01-22</p>
                            <p><addr className='font-semibold'>Time :</addr>10pm (fri-sun)</p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <h4 className="lg:font-semibold text-[#4aabff] text-[20px] pt-5 pb-2 group-hover:text-[#cbcb50]">Cyber Security and Ethical Hacking</h4>
                            <p className="pt-5 pb-10">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                        <article className="Events w-2/6 lg:h-auto group bg-white p-3 rounded-md hover:scale-105 transition duration-500 ease-in-out">
                            <div className="flex justify-between py-6">
                            <p><addr className='font-semibold'>Date :</addr>21-01-22</p>
                            <p><addr className='font-semibold'>Time :</addr>10pm (fri-sun)</p>
                            </div>
                            <Image src={eventemg} alt="Cyber"/>
                               
                            <h4 className="lg:font-semibold text-[#4aabff] group-hover:text-[#cbcb50] text-[20px] pt-5 pb-2">Cyber Security and Ethical Hacking</h4>
                            <p className="pt-5 pb-10">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
                        </article>
                    </div>


                </div>
                  
            </div>
            
        </div>
    );
};

export default Events;
import Image from 'next/image'
import eventemg from '@/app/Images/Event/eventsimg.png'
import NavberData from '@/app/AllDataFatchingFunction/Topber'
import Link from 'next/link'

const Events = async () => {
  const data = await NavberData()
  // console.log(data);
  return (
    <div className="container pt-10 xl:pt-20">
      <h5 className="text-center md:text-[24px] xl:text-[26px] font-bold text-[#0b6481]  mb-2"> Upcoming Events</h5>
      <h6 className="text-center text-gray-600 md:text-sm mb-16 text-[10px]">Get motivation from leaders and see your success from the window!</h6>

      <div className="">
        <div className="w-full lg:flex gap-x-4">
          <div className=" flex gap-x-5 relative py-3 mb-5 border  rounded-xlshadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.3)]">
            <div className="w-5/12 overflow-hidden h-[150px] md:h-auto">
              <Image src={eventemg} alt="Cyber" className="w-full h-full scale-125" />
            </div>
            <div className="img-avatar"></div>
            <article className="w-full px-3 bg-white rounded-md Events xl:px-3 lg:px-1 lg:h-auto group ">
              <div className="flex justify-end mt-2 text-sm font-light leading-relaxed sectionSubTitle">
                <div>
                  <p className="md:text-[14px] text-[12px]  ">
                    <addr className="">Date :</addr>
                    {data && data[0]?.deadline_date_s}
                  </p>
                  <p className="md:text-[14px] text-[12px] ">
                    <addr className="">Time :</addr>
                    {data && (
                      <span>
                        {data && data[0]?.time_from}- {data && data[0]?.time_to}
                        <br /> {data && data[0]?.day_from}-{data[0]?.day_to}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <Link href="cyber-security-ethical-hacking">
                <h4 className="xl:font-semibold md:font-medium text-[#0b6481] md:text-[16px] xl:text-[20px] pt-2 pb-2 group-hover:text-blue-400">{data && data[0]?.batch_schedule_name}</h4>
              </Link>
              <p className="pt-0  font-[300]  text-[10px] md:text-sm leading-[17px] lg:pb-2 md:pb-2">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
            </article>
          </div>

          <div className="flex gap-x-5 relative mb-5 border rounded-xl py-3 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.3)]">
            <div className="w-5/12 overflow-hidden h-[150px] md:h-auto">
              <Image src={eventemg} alt="Cyber" className="w-full h-full scale-125" />
            </div>

            <div className="img-avatar"></div>

            <article className="w-full px-3 mt-4 rounded-md Events xl:px-3 lg:px-1 lg:h-auto group md:mt-0">
              <div className="flex justify-end sectionSubTitle">
                <div>
                  {' '}
                  <p className="md:text-[14px] text-[12px]  ">
                    <addr className="">Date :</addr>
                    {data && data[1]?.deadline_date_s}
                  </p>
                  <p className="md:text-[14px] text-[12px]  ">
                    <addr className="">Time :</addr>
                    {data && (
                      <span>
                        {data && data[1]?.time_from}- {data[1]?.time_to}
                        <br /> {data && data[1]?.day_from}-{data[1]?.day_to}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <Link href="advance-python-with-django">
                <h4 className="xl:font-semibold md:font-medium text-[#0b6481]  md:text-[16px] xl:text-[20px] pt-5 pb-2 hover:text-blue-400">{data && data[1]?.batch_schedule_name}</h4>
              </Link>
              <p className="pt-0 sectionSubTitle text-[10px] md:text-sm leading-[17px] font-[300] lg:pb-2 md:pb-2">Admission going on for Cyber Security course by Arena Web Academy. The class will start on 21-01-2024. For admission: 01310333444</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events

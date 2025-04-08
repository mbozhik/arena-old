'use client'


import Marque from "../Utility/Marque";
import MobileNav from "../Utility/MobileNav";
import { usePathname } from 'next/navigation'
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Navparents = ({data,uid}) => {
    const pathname = usePathname()
    // console.log(data);
    return (
  
        <div className={`${pathname==='/'?'':''} w-full !top-0 z-50 bg-white` }>
              {/* <MessengerCustomerChat  pageId="1422013914563781"
                    appId="308111384934899"  /> */}
      <Marque data={data}/>
      <div class=" mx-auto px-4 py-2">
  <div class="flex flex-wrap mt-2 mb-2">
    <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full px-4 flex justify-center">
    </div>
    <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full px-4  flex justify-end flex-col items-center ">
      <img class="w-52 mx-auto " 
      // src="https://arenawebsecurity.net/static/media/main-log-new.png"
      src='/nav/main-log-new.webp'
       alt="image" />
      <h3 class="text-center text-[22px] font-bold text-[#0B6481]">The Hackers Arena</h3>
    </div>
    <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full w-full flex justify-end items-center  pr-20">
  <a
    target="_blank"
    href="https://www.facebook.com/ArenaBangladesh/"
    className="float-right border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2  transition duration-300 rounded-lg h-10"
  >
    Join Our Facebook
  </a>
</div>

  </div>
</div>
      <MobileNav uid={uid}/>
    </div>
  
    );
};

export default Navparents;
'use client'

import Link from 'next/link'
import Marque from '../Utility/Marque'
import MobileNav from '../Utility/MobileNav'
import {usePathname} from 'next/navigation'
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Navparents = ({data, uid}) => {
  const pathname = usePathname()
  // console.log(data);
  return (
    <div className={`${pathname === '/' ? '' : ''} w-full !top-0 z-50 bg-white`}>
      {/* <MessengerCustomerChat  pageId="1422013914563781"
                    appId="308111384934899"  /> */}
      <Marque data={data} />
      <div className="px-4 py-2 mx-auto ">
        <div className="flex flex-wrap mt-2 mb-2">
          <div className="flex justify-center w-full px-4 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full"></div>
          <div className="flex flex-col items-center justify-center w-full px-4 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full md:justify-end ">
            <Link href="/" className="">
              {' '}
              <img
                className="mx-auto w-52 "
                // src="https://arenawebsecurity.net/static/media/main-log-new.png"
                src="/nav/main-log-new.webp"
                alt="image"
              />
            </Link>

            <h3 className="text-center text-[22px] font-bold text-[#0B6481]">The Hackers Arena</h3>
          </div>
          <div className="flex items-center justify-center w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full md:justify-end md:pr-20 ">
            <a
              target="_blank"
              href="https://www.facebook.com/ArenaBangladesh/"
              className="float-right flex justify-center items-center text-center border border-red-600 text-red-600  hover:bg-red-600 hover:text-white 
    xl:px-4 md:py-2 mt-1 md:mt-0 transition duration-300 rounded-lg md:h-10 h-8 xl:text-sm md:text-[12px] text-[12px] px-2"
            >
              Join Our Facebook
            </a>
          </div>
        </div>
      </div>
      <MobileNav uid={uid} />
    </div>
  )
}

export default Navparents

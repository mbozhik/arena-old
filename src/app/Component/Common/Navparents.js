'use client'


import Marque from "../Utility/Marque";
import MobileNav from "../Utility/MobileNav";
import { usePathname } from 'next/navigation'
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Navparents = ({data,uid}) => {
    const pathname = usePathname()
    // console.log(data);
    return (
  
        <div className={`${pathname==='/'?'fixed':'sticky'} w-full !top-0 z-50` }>
              {/* <MessengerCustomerChat  pageId="1422013914563781"
                    appId="308111384934899"  /> */}
      <Marque data={data}/>
      <MobileNav uid={uid}/>
    </div>
  
    );
};

export default Navparents;
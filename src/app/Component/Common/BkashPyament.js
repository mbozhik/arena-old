'use client'
import React, {useEffect, useRef} from 'react'
// import BKash from 'bkash';
// import BkashPayment from '@/components/Bkash';
import BkashLogo from '../Common/payment/bkash.png'
import Image from 'next/image'
const BkashPayment = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    // script.src = 'https://arenawebsecurity.net/static/cdn/bkash.js';
    script.src = 'https://arenawebsecurity.net/admission-api/static/admin/js/bkash.js'
    // script.src = 'http://192.168.0.121:8000/static/admin/js/bkash.js';
    divRef.current.appendChild(script)
  }, [])

  return (
    <div className="container mx-auto mt-5" ref={divRef}>
      <div className="mt-5 mb-5 row justify-content-center">
        <div className="col-md-3"></div>

        <div className="w-full md:w-2/4 mx-auto flex justify-center items-center flex-col bg-[#FFC0CB] rounded-lg shadow-md p-5">
          <h6 className="my-5 font-semibold text-center text-gray-800">Student pay through bKash</h6>

          <div className="w-full px-4">
            <input className="w-full px-3 py-4 text-gray-800 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md form-control focus:outline-none" type="number" id="tk" placeholder="Enter Your Amount" name="tk" />
          </div>

          <button className="flex items-center justify-center mt-4 overflow-hidden bg-white border rounded-md shadow-md h-14" id="bKash_button">
            <Image className="bKashImg h-[50px]" src={BkashLogo} alt="bKash" />
          </button>
        </div>

        <div className="col-md-3"></div>
      </div>

      {/* <BkashPayment></BkashPayment> */}
    </div>
  )
}

export default BkashPayment

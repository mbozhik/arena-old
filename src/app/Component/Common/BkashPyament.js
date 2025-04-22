'use client'
import React, { useEffect, useRef } from 'react';
// import BKash from 'bkash';
// import BkashPayment from '@/components/Bkash';
import BkashLogo from '../Common/payment/bkash.png'
import Image from 'next/image';
const BkashPayment = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    // script.src = 'https://arenawebsecurity.net/static/cdn/bkash.js';
    script.src = 'https://arenawebsecurity.net/admission-api/static/admin/js/bkash.js';
    // script.src = 'http://192.168.0.121:8000/static/admin/js/bkash.js';
    divRef.current.appendChild(script);
  }, []);

  return (
    <div className="container mt-5 mx-auto" ref={divRef}>
     
      <div className="row justify-content-center mt-5 mb-5">
  <div className="col-md-3"></div>

  <div className="w-full md:w-2/4 mx-auto flex justify-center items-center flex-col bg-[#FFC0CB] rounded-lg shadow-md p-5">
    <h6 className="my-5 text-center font-semibold text-gray-800">
      Student pay through bKash
    </h6>

    <div className="w-full px-4">
      <input
        className="form-control w-full py-4 px-3 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none"
        type="number"
        id="tk"
        placeholder="Enter Your Amount"
        name="tk"
      />
    </div>

    <button
      className="mt-4 bg-white  h-14 flex justify-center items-center overflow-hidden rounded-md shadow-md border"
      id="bKash_button"
    >
      <Image
        className="bKashImg  h-[50px]"
        src={BkashLogo}
        alt="bKash"
      />
    </button>
  </div>

  <div className="col-md-3"></div>
</div>

      {/* <BkashPayment></BkashPayment> */}
    </div>
  );
};

export default BkashPayment;

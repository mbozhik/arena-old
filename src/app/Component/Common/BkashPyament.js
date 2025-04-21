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
        <div className=" w-full md:w-2/3 mx-auto flex justify-center items-center flex-col bKashBackCard card shadow-sm border-0 p-lg-5 pt-3 pb-3">
          <h6 className="my-5 text-center white-text">Student pay through bKash</h6>
          <div>
          <input className="form-control placeholderAmount amountField py-4 px-2" type="number" id="tk" placeholder=" Enter Your Amount" name="tk" />
          </div>
          <button className="bKashBtn justify-content-center mt-2" id="bKash_button">
            <Image className="bKashImg bg-white float-center justify-content-center border-1 shadow-md" src={BkashLogo} alt="" />
          </button>
          {/* Any additional content */}
        </div>
        <div className="col-md-3"></div>
      </div>
      {/* <BkashPayment></BkashPayment> */}
    </div>
  );
};

export default BkashPayment;

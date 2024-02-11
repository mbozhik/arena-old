'use client'
// import { useRouter } from "next/navigation";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PaymentSuccess = () => {
  const searchParams = useSearchParams();
//   console.log(router);
 
  const [trxID, setTrxID] = useState('');
  const [amount, setAmount] = useState('');
  const [emailID, setEmailID] = useState(localStorage.getItem('UserEmail'));

  useEffect(() => {
    const query = searchParams.get('trxID');
    const amount = searchParams.get('amount');
    setTrxID(query)
    setAmount(amount)
  }, []);

  const handleCopyClick = () => {
    const textToCopy = `Transaction ID: ${trxID}\nAmount: ${amount}\nEmail: ${emailID}`;

    // Create a textarea element, set its value, and copy the value to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    toast('Copied to clipboard!')
  };

  const ContentTop = {
    marginTop: "50px"
  };

  return (
    <div>
      <div className="p-2" style={ContentTop}>
        <div className="flex items-center justify-center">
          <div className="p-5 card SuccessCard shadow-sm border-0 justify-center align-center lg:w-[500px]">
            <h6 className="CongratulationText text-center mb-3 text-3xl text-green-500 font-bold">Congratulations!</h6>
     
            <div className='border-left border-bottom border-right pl-5 pt-4 pb-1 pr-5'>
            <h6 className="SuccessMsgText text-center">Your Payment has been completed successfully.</h6>
              <p className='text-center'>Transaction ID: <span className="text-success"> {trxID}</span> </p>
              <p className='text-center'>Amount:  <span className="text-success">{amount}</span></p>
              <p className='text-center'>Email:  <span className="text-success">{emailID}</span></p>
              <p className='text-center text-success pt-2'>(Copy Your Transaction Id,Amount & Email for Future Reference)</p>
               <div className='flex justify-center align-center'>
                 <button className='px-10 py-2 bg-green-600 text-white mt-2 rounded-lg' onClick={handleCopyClick}>Copy</button>
               </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" ></ToastContainer>
    </div>
  );
};

export default PaymentSuccess;


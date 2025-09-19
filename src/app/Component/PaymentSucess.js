'use client'
// import { useRouter } from "next/navigation";

import {useSearchParams} from 'next/navigation'
import {useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const PaymentSuccess = () => {
  const searchParams = useSearchParams()
  //   console.log(router);

  const [trxID, setTrxID] = useState('')
  const [amount, setAmount] = useState('')
  const [emailID, setEmailID] = useState(localStorage.getItem('UserEmail'))

  useEffect(() => {
    const query = searchParams.get('trxID')
    const amount = searchParams.get('amount')
    setTrxID(query)
    setAmount(amount)
  }, [])

  const handleCopyClick = () => {
    const textToCopy = `Transaction ID: ${trxID}\nAmount: ${amount}\nEmail: ${emailID}`

    // Create a textarea element, set its value, and copy the value to the clipboard
    const textarea = document.createElement('textarea')
    textarea.value = textToCopy
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)

    toast('Copied to clipboard!')
  }

  const ContentTop = {
    marginTop: '50px',
  }

  return (
    <div>
      <div className="p-2 " style={ContentTop}>
        <div className="flex items-center justify-center shadow-xl">
          <div className="p-5 card SuccessCard shadow-xl border-0 justify-center align-center lg:w-[500px]">
            <h6 className="mb-3 text-3xl font-bold text-center text-green-500 CongratulationText">Congratulations!</h6>

            <div className="pt-4 pb-1 pl-5 pr-5 border-left border-bottom border-right">
              <h6 className="text-sm text-center bg-[#B6FFCD] py-8 px-4">Your Payment has been completed successfully.</h6>
              <p className="mt-4 text-center">
                Transaction ID: <span className="text-[#28A745]"> {trxID}</span>{' '}
              </p>
              <p className="mt-1 text-center">
                Amount: <span className="text-[#28A745]">{amount}</span>
              </p>
              <p className="mt-1 text-center">
                Email: <span className="text-[#28A745]">{emailID}</span>
              </p>
              <p className="text-center text-[#28A745] pt-2">(Copy Your Transaction Id, Amount & Email for Future Reference)</p>
              <div className="flex justify-center mt-1 align-center">
                <button className="px-5 py-2 bg-[#23272B] text-white mt-2 rounded-lg" onClick={handleCopyClick}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right"></ToastContainer>
    </div>
  )
}

export default PaymentSuccess

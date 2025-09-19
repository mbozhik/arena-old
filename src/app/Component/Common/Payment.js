'use client'
import React, {useState} from 'react'
import {Button, Dialog, DialogFooter} from '@material-tailwind/react'
import Image from 'next/image'
import bkash from '../Common/payment/bkash.png'
import nagad from '../Common/payment/nagad.png'
import rocket from '../Common/payment/dbbl.jpg'
import evl from '../Common/payment/ebl.png'
import west from '../Common/payment/wester-union-logo.png'
import bkashpayment from '../Common/payment/BkashPayment.jpg'
import nagadpayment from '../Common/payment/NagadPayment.jpg'
import roketpayment from '../Common/payment/RocketPayment.jpg'
import eblpayment from '../Common/payment/eblPayment.jpg'
import wespayment from '../Common/payment/westernPayment.jpg'
export function PaymentModal() {
  const [img, setImage] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = (data) => {
    setImage(data)
    setOpen(!open)
  }

  return (
    <div className="container ">
      <p className="text-[16px] font-[300] pt-10 pb-5 leading-[19px] text-center">We accept both online and offline payments. Online options include bKash, Nagad, Rocket, bank transfer, Western Union, and RIA.</p>
      <div className="container flex flex-wrap justify-center gap-2 mx-auto lg:w-2/3 ">
        <artical onClick={() => handleOpen(bkashpayment)}>
          <Image src={bkash} alt="bkash" className="bg-[#F6F6F6] p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg cursor-pointer" />
        </artical>
        <artical onClick={() => handleOpen(nagadpayment)}>
          <Image src={nagad} alt="bkash" className="bg-[#F6F6F6] cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
        </artical>
        <artical onClick={() => handleOpen(roketpayment)}>
          <Image src={rocket} alt="bkash" className="bg-[#F6F6F6] cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
        </artical>
        <artical onClick={() => handleOpen(eblpayment)}>
          <Image src={evl} alt="bkash" className="bg-[#F6F6F6] cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
        </artical>
        <artical onClick={() => handleOpen(wespayment)}>
          <Image src={west} alt="bkash" className="bg-[#F6F6F6] cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
        </artical>
      </div>
      <p className="text-[12px] font-[400] pt-5 pb-4 leading-[18px] text-center">Click the Payment icon to see the payment Process.</p>
      <Dialog open={open} handler={handleOpen} size="lg">
        <Image src={img} alt="bkash" className="h-[80%]" />

        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

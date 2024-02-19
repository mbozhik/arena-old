'use client'
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import bkash from '@/app/courses/payment/bkash.png'
import nagad from '@/app/courses/payment/nagad.png'
import rocket from '@/app/courses/payment/dbbl.jpg'
import evl from '@/app/courses/payment/ebl.png'
import west from '@/app/courses/payment/wester-union-logo.png'
import bkashpayment from '@/app/courses/payment/BkashPayment.jpg'
import nagadpayment from '@/app/courses/payment/NagadPayment.jpg'
import roketpayment from '@/app/courses/payment/RocketPayment.jpg'
import eblpayment from '@/app/courses/payment/eblPayment.jpg'
import wespayment from '@/app/courses/payment/westernPayment.jpg'

// import west from '@/app/courses/payment/wester-union-logo.png'
// import west from '@/app/courses/payment/wester-union-logo.png'
// import west from '@/app/courses/payment/wester-union-logo.png'
// import west from '@/app/courses/payment/wester-union-logo.png'


 
export function PaymentModal() {
  const [img,setImage]=useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = (data)=>{
    setImage(data)
    setOpen(!open);
  }

  return (
    <div className="bg-[#EBE7F8] lg:px-20 md:px-5 px-3 py-20">
    <h2 className="text-2xl font-bold text-center pt-8 pb-4">Payment Methods</h2>
    <div className="flex flex-wrap  lg:w-2/3 justify-center gap-2 container mx-auto ">
      <artical onClick={()=>handleOpen(bkashpayment)}>
           <Image src={bkash} alt="bkash" className="bg-white p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg cursor-pointer" />
      </artical>
      <artical onClick={()=>handleOpen(nagadpayment)}>
           <Image src={nagad} alt="bkash" className="bg-white cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
      </artical>
      <artical onClick={()=>handleOpen(roketpayment)}>
           <Image src={rocket} alt="bkash" className="bg-white cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
      </artical>
      <artical onClick={()=>handleOpen(eblpayment)}>
           <Image src={evl} alt="bkash" className="bg-white cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
      </artical>
      <artical onClick={()=>handleOpen(wespayment)}>
           <Image src={west} alt="bkash" className="bg-white cursor-pointer p-6 md:h-32 md:w-52 h-20 w-28 rounded-lg" />
      </artical>
    
    </div>
    
      <Dialog open={open} handler={handleOpen} size="lg">
        <Image src={img} alt="bkash" className="h-[80%]"/>

        <DialogFooter>
  
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
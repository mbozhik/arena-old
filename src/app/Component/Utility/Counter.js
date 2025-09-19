'use client'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import {useState} from 'react'
import month from './../../../../public/statitic/year_in_service.svg'
import TotalStudent from './../../../../public/statitic//TotalStudent.svg'
import outline from './../../../../public/statitic/handsake.svg'
import freelancer from './../../../../public/statitic/project.svg'
import Image from 'next/image'
const Counter = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="container grid grid-cols-2 gap-8 mx-auto  md:grid-cols-4">
      <article className="flex flex-col justify-center md:border-r-2">
        <div className="flex justify-center">
          <Image src={TotalStudent} alt="Course Image" width={50} height={60} />
        </div>
        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            {visible && <CountUp start={8000} end={10000} duration={10}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="mt-3 text-sm text-center">Total Students</p>
      </article>
      <article className="flex flex-col justify-center md:border-r-2">
        <div className="flex justify-center">
          <Image src={month} alt="Course Image" width={60} height={60} />
        </div>

        <div className="text-[20px] mt-3 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            {visible && <CountUp start={0} end={13} duration={5}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="mt-1 text-sm text-center">Years In Service</p>
      </article>
      <article className="flex flex-col justify-center md:border-r-2">
        <div className="flex justify-center">
          <Image src={outline} alt="Course Image" width={80} height={80} />
        </div>

        <div className="text-[20px] mt-3 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            {visible && <CountUp start={0} end={750} duration={5}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="mt-3 text-sm text-center">Successful Clients</p>
      </article>
      <article className="flex flex-col justify-center ">
        <div className="flex justify-center">
          <Image src={freelancer} alt="Course Image" width={60} height={60} />
        </div>
        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            {visible && <CountUp start={0} end={4000} duration={10}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="text-sm text-center "> Project Completed </p>
      </article>
    </div>
  )
}

export default Counter

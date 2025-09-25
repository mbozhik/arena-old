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

  const stats = [
    {
      icon: TotalStudent,
      number: 10000,
      label: 'Students Trained',
      start: 8000,
      duration: 10,
    },
    {
      icon: month,
      number: 13,
      label: 'Years in Service',
      start: 0,
      duration: 5,
    },
    {
      icon: outline,
      number: 750,
      label: 'Successful Clients',
      start: 0,
      duration: 5,
    },
    {
      icon: freelancer,
      number: 4000,
      label: 'Projects Completed',
      start: 0,
      duration: 10,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 text-center xl:gap-4">
          {/* Gradient Icon Background */}
          <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-br from-[#A2D6F0] to-[#AC94C5] flex items-center justify-center">
            <Image src={stat.icon} alt={stat.label} width={27} height={27} className="text-white" />
          </div>

          <div className="flex flex-col items-start justify-start">
            {/* Number */}
            <div className="flex items-center text-[28px] leading-none font-bold text-[#7BAADA]">
              <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
                {visible && <CountUp start={stat.start} end={stat.number} duration={stat.duration} />}
              </ScrollTrigger>
              <span className="ml-1">+</span>
            </div>

            {/* Label */}
            <p className="text-[14px] text-[#757575] font-normal">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Counter

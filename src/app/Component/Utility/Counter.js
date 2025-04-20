"use client";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import month from "./../../../../public/statitic/13.jpg";
import TotalStudent from "./../../../../public/statitic//TotalStudent.svg";
import outline from "./../../../../public/statitic/handsake.jpg";
import freelancer from "./../../../../public/statitic/light.jpg";
import Image from "next/image";
const Counter = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" container mx-auto grid md:grid-cols-4 grid-cols-2 gap-8">
      <article className="flex justify-center flex-col md:border-r-2">
        <div className="flex justify-center">
          <Image src={TotalStudent} alt="Course Image" width={70} height={70} />
        </div>
        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger
            onEnter={() => setVisible(true)}
            onExit={() => setVisible(false)}
          >
            {visible && <CountUp start={8000} end={10000} duration={10}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="text-center text-sm mt-3">Total Students</p>
      </article>
      <article className="flex justify-center flex-col md:border-r-2">
        <div className="flex justify-center">
        <Image src={month} alt="Course Image" width={70} height={70} />

        </div>

        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger
            onEnter={() => setVisible(true)}
            onExit={() => setVisible(false)}
          >
            {visible && <CountUp start={0} end={13} duration={5}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="text-center text-sm mt-3">Years In Service</p>
      </article>
      <article className="flex justify-center flex-col md:border-r-2">
        <div className="flex justify-center">
        <Image src={outline} alt="Course Image" width={80} height={80} />

         </div>

        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger
            onEnter={() => setVisible(true)}
            onExit={() => setVisible(false)}
          >
            {visible && <CountUp start={0} end={400} duration={5}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="text-center text-sm mt-3">Successful Clients</p>
      </article>
      <article className="flex justify-center flex-col ">
        <div className="flex justify-center">
          <Image src={freelancer} alt="Course Image" width={70} height={70} />
        </div>
        <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
          <ScrollTrigger
            onEnter={() => setVisible(true)}
            onExit={() => setVisible(false)}
          >
            {visible && <CountUp start={0} end={4000} duration={10}></CountUp>}
          </ScrollTrigger>
          <span>+</span>
        </div>
        <p className="text-center text-sm mt-3">Project Complited</p>
      </article>
    </div>
  );
};

export default Counter;

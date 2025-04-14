"use client";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import month from "./../../../../public/statitic/Month.svg";
import TotalStudent from "./../../../../public/statitic//TotalStudent.svg"
import outline from "./../../../../public/statitic//outline.svg"
import freelancer from "./../../../../public/statitic//freelancer.svg"
import Image from "next/image";
const Counter = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className=" container mx-auto grid grid-cols-4">
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
            <Image
                                  src={TotalStudent}
                                  alt="Course Image"
                                  width={70}
                                  height={70}
  
                                />
          </div>
          <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
            <ScrollTrigger
              onEnter={() => setVisible(true)}
              onExit={() => setVisible(false)}
            >
              {visible && (
                <CountUp start={0} end={10000} duration={10}></CountUp>
              )}
            </ScrollTrigger>
            <span>+</span>
          </div>
          <p className="text-center text-sm mt-3">
            Total Students
          </p>
        </article>
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
          <Image
                                  src={outline}
                                  alt="Course Image"
                                  width={70}
                                  height={70}

                                />
          </div>
      
           <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
            <ScrollTrigger
              onEnter={() => setVisible(true)}
              onExit={() => setVisible(false)}
            >
              {visible && (
                <CountUp start={0} end={200} duration={5}></CountUp>
              )}
            </ScrollTrigger>
            <span>+</span>
          </div>
          <p className="text-center text-sm mt-3">
            Course Outline
          </p>
        </article>
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
          <Image
                                  src={month}
                                  alt="Course Image"
                                  width={70}
                                  height={70}
                                />
          </div>
      
           <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
            <ScrollTrigger
              onEnter={() => setVisible(true)}
              onExit={() => setVisible(false)}
            >
              {visible && (
                <CountUp start={0} end={3} duration={3}></CountUp>
              )}
            </ScrollTrigger>
            <span>Month</span>
          </div>
          <p className="text-center text-sm mt-3">
            Course duration
          </p>
        </article>
        <article className="flex justify-center flex-col ">
          <div className="flex justify-center">
          <Image
                                  src={freelancer}
                                  alt="Course Image"
                                  width={70}
                                  height={70}
                                />
          </div>
          <div className="text-[20px] mt-4 text-[#7D58A5FF] font-semibold text-center flex justify-center gap-2">
            <ScrollTrigger
              onEnter={() => setVisible(true)}
              onExit={() => setVisible(false)}
            >
              {visible && (
                <CountUp start={0} end={4000} duration={10}></CountUp>
              )}
            </ScrollTrigger>
            <span>+</span>
          </div>
          <p className="text-center text-sm mt-3">
            Successful Freelancer
          </p>
        </article>
      </div>
    );
};

export default Counter;
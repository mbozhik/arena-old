"use client";
import { IoMdPeople } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { TbUserDollar } from "react-icons/tb";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
const Counter = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className=" container mx-auto grid grid-cols-4">
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
            <IoMdPeople className=" md:text-6xl text-4xl  text-white font-semibold text-center" />
          </div>
          <div className="md:text-4xl text-white font-semibold text-center flex justify-center gap-2">
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
          <p className="text-center text-[#ffd321] font-semibold">
            Total Students
          </p>
        </article>
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
            <FaBookReader className="  md:text-6xl text-4xl text-white font-semibold text-center" />
          </div>
      
           <div className="md:text-4xl text-white font-semibold text-center flex justify-center gap-2">
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
          <p className="text-center text-[#ffd321] font-semibold">
            Course Outline
          </p>
        </article>
        <article className="flex justify-center flex-col border-r-2">
          <div className="flex justify-center">
            <MdCalendarMonth className="  md:text-6xl text-4xl text-white font-semibold text-center" />
          </div>
      
           <div className="md:text-4xl text-white font-semibold text-center flex justify-center gap-2">
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
          <p className="text-center text-[#ffd321] font-semibold">
            Course duration
          </p>
        </article>
        <article className="flex justify-center flex-col ">
          <div className="flex justify-center">
            <TbUserDollar className="  md:text-6xl text-4xl text-white font-semibold text-center" />
          </div>
          <div className="md:text-4xl text-white font-semibold text-center flex justify-center gap-2">
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
          <p className="text-center text-[#ffd321] font-semibold">
            Successful Freelancer
          </p>
        </article>
      </div>
    );
};

export default Counter;
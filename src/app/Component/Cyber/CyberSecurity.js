'use client'
import React from 'react'

import Banner from "@/app/all-courses/banner.webp";
import Image from 'next/image';



const CyberSecurity = () => {
  return (
    <div>
        <div className='text-[24px] font-semibold leading-9 mt-14 text-[#424242] text-center'>
     
                        Cyber Security & Ethical Hacking
                   
        </div>
           {/* Course Module */}
      <div className="flex ">
        <div className="grid  grid-cols-12 gap-x-2 w-full  mt-16">
          {/* <div className=" col-span-2 hidden lg:block">
            <Image
              alt="Cyber Security And Ethical Hacking"
              src={Banner}
              className=""
            />
          </div> */}

          <div className=" lg:col-span-9 col-span-8 lg:px-3">
            {/*KEY FEATURES  */}
          
                                           <div className="relative">
              <h3 className="  text-[#424242] text-[22px] font-medium leading-6">Overview</h3>
              <p className="text-[#424242] font-[300] text-[16px] leading-6 text-justify mt-5">Embark on a journey into the realm of cybersecurity with Arena Web Security. Whether you're aiming for your first role in IT security, envisioning a full-time career as a white hat hacker, or preparing to strengthen the defenses of your home network, our courses are customized to align with your aspirations. Through an accessible and hands-on approach to ethical hacking, we empower you to protect your networks efficiently. Elevate your skills with us and pave the way to a successful career in the professional marketplace. Your path to cybersecurity excellence starts right here.</p>
              
            </div>
                                      
                                     
                                <h4 className="serviceDetailsHeadline mt-2">Overview</h4>
                                <h6 className="text-justify serviceDetailsDes">
                                Embark on a journey into the realm of cybersecurity with Arena Web Security. Whether you're aiming for your first role in IT security, envisioning a full-time career as a white hat hacker, or preparing to strengthen the defenses of your home network, our courses are customized to align with your aspirations. Through an accessible and hands-on approach to ethical hacking, we empower you to protect your networks efficiently. Elevate your skills with us and pave the way to a successful career in the professional marketplace. Your path to cybersecurity excellence starts right here.
                                    </h6>
                    

            {/* <article className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-5 ">
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Cyber}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Cyber Security</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={network}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                  Digital Forensic
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={doller}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Freelancing</p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={intelligence}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">
                  Open Source Intelligence
                </p>
              </div>
              <div className="bg-[#EBE7F8] justify-center flex flex-col py-2 rounded-md">
                <Image
                  src={Linux}
                  alt="cyber Security"
                  className="h-20 w-20 mx-auto"
                />
                <p className="font-semibold p-2 text-center">Linux</p>
              </div>
            </article> */}

            {/* Moudele Start */}
            {/* <article className="pt-4">
              <div className="relative">
                <h3 className="text-[20px] font-semibold mt-5">MODULE</h3>
                <p className="lg:w-24 bg-[#ffd321] h-[3px] "></p>
              </div>
              <div className="md:flex justify-between">
                <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Introduction</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Footprinting</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> PHP & MySQL Basic:</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Penetration Testing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> System Hacking</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> keylogger Spyware</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Malware Threats [Virus]</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Website Development</span>
                    </div>
                  </li>
                </ul>
                <ul className="mt-5">
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Social Engineering</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Denial-of-Service</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>SQL Injection All method</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Evading IDS, Firewalls</span>
                    </div>
                  </li>

                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Scanning Networks web server</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Linux OS</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Cross-Site Request Forgery</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span> Outsourcing in Fiverr/Upwork</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-3 items-center py-1">
                      <FaHandPointRight className="text-[#44107A] text-2xl" />
                      <span>Outsourcing in Hackerone</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article> */}
            <div>
              <h2 className="font-semibold text-[25px] mt-4">Information</h2>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Duration :</p>
                  <span>18 weeks (2 Days per week)</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center py-1">
                  <p className="font-semibold">Course Fee :</p>
                  <span>BDT 14,000/-</span>
                </div>
              </div>
              <div>
                <div className="flex gap-3  py-1">
                  <p className="font-semibold ">Course Type :</p>
                  <span>
                    Professional certified course <br className="block md:hidden"/> that  everyone can avail.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 hidden lg:block">
            <Image alt="Cyber Security And Ethical Hacking " src={Banner} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity
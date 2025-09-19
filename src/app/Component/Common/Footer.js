import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaYoutube, FaGlobe, FaMobileAlt, FaArrowRight} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {IoMail} from 'react-icons/io5'

const Footer = () => {
  const courses = [
    {name: 'Cyber Security', href: '/cyber-security-ethical-hacking'},
    {
      name: 'Professional Diploma in Cyber Security',
      href: '/diploma-in-cyber-security',
    },
    {
      name: 'Advanced Cyber Security',
      href: '/diploma-in-cyber-security',
    },
    {name: 'Advanced Python', href: '/advance-python-with-django'},
    {name: 'C|OSINT', href: '/cosint-course'},
    {name: 'Linux', href: '/linux-course'},
    {name: 'Networking Security', href: '/networking-course'},
  ]
  const links = [
    {name: 'About Us', href: '/about-us'},
    {name: 'Contact', href: '/contact'},
    {name: 'FAQ', href: '/faq'},
    // { name: "Career", href: "/career" }, // Add route if needed
    {name: 'Blog', href: 'https://www.hackers.institute/'}, // External link
    {name: 'Service', href: '/all-services'},
    {name: 'Gallery', href: '/arena-gallery'},
    {name: 'Privacy Policy', href: '/privacy'},
  ]
  return (
    <footer className="bg-[#26272b] text-[#8d8d8d]   pt-12 pb-8 text-sm leading-6 ">
      <div className="container grid grid-cols-1 gap-8 pb-8 leading-4 border-b  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-gray-500/50 lg:leading-normal">
        {/* Address */}
        <div>
          <h3 className="text-white md:text-[24px] text-[18px] font-normal mb-4">Address</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaLocationDot className="mt-1 text-[#715296] md:text-[16px] text-sm" />
              <span className="md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">
                House No: 1, Block: B
                <br />
                Banasree, Main Road, Rampura,
                <br />
                Dhaka - 1219
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaMobileAlt className="mt-1 text-[#715296] md:text-[16px] text-sm" />
              <span className="md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">
                +880 1310 333 444,
                <br />
                +880 1885 841 489
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <IoMail className="text-[#715296] md:text-[16px] text-sm mt-1" />
              <p className="md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">info@arenawebsecurity.net</p>
            </li>

            <li className="flex items-center gap-2">
              <FaGlobe className="mt-1 text-[#715296] md:text-[16px] text-sm" />
              <span className="md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">www.arenawebsecurity.net</span>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="">
          <h3 className="mb-4 text-lg font-medium text-white">Information</h3>
          <ul className="space-y-2 md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">
            {links.map(({name, href}) => (
              <li key={name} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                <FaArrowRight className="text-[#715296] md:text-[16px] text-sm" />
                <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Courses */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-white md:mt-6 xl:mt-0">Our Courses</h3>

          <ul className="space-y-2 md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">
            {courses.map(({name, href}) => (
              <li key={name} className="flex items-start gap-2 hover:text-[#29aafe] transition">
                <FaArrowRight className="text-[#715296] md:text-[16px] text-sm mt-[5px] shrink-0" />
                <a href={href} className="text-[#8d8d8d] leading-[22px] block">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-white">Our Services</h3>
          <ul className="space-y-2 md:text-[16px] text-sm leading-[22px] font-[300] text-[#8d8d8d]">
            {['Vulnerability Assessment and Penetration Testing', 'Web Application Security Testing', 'Mobile Application Security Testing', 'Network Security Assessment', 'Cloud Security Assessment'].map((dev) => (
              <li key={dev} className="flex items-center gap-2 hover:text-[#29aafe] transition">
                <FaArrowRight className=" text-[#715296] md:text-[16px] text-sm" />
                <a href="/all-services">{dev}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container flex flex-col items-center justify-between mt-4 md:flex-row">
        <p className="md:text-[15px] text-[13px] text-center md:text-left">
          Copyright © 2025 All Rights Reserved by
          <span className="text-[#29aafe] text-[13px] md:text-[15px]"> Arena Web Security</span>.
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="https://www.facebook.com/ArenaBangladesh" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#3b5998] transition">
            <FaFacebookF />
          </a>
          <a href="https://bd.linkedin.com/company/arena-web-security" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6] transition">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/c/LearnwithCyber71" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#33353d] text-[#885cbe] hover:bg-[#007bb6]  transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
